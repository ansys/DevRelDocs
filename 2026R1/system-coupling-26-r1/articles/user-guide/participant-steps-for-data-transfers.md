# Data transfers

## Steps to perform data transfers

This section describes how to transfer data between applications using SCP library.
It also provides simple APIs implementation examples, so it can be used to familiarize
with the basic participant library concepts.

### Step 1: Start

Start by initializing the participant library in standalone mode.

If using C++ or Python languages, this step involves instantiating
the `SystemCoupling` class (there can only be a single instance
of this class at a time) after providing the `ParticipantInfo`
structure with appropriate value set correctly.

If using C or Fortran languages, in
most cases nothing needs to be done for this step.
However, if distributed parallel capabilities of the SCP are required,
then `syscStartStandaloneParallel` function
in C or `syscStartStandaloneF` function in Fortran must be called
and appropriate arguments (for example, the MPI communicator) should be provided to those functions.

See [Execution in a parallel environment](parallel-execution.md) for more details.

#### Data transfers across multiple applications

SCP library provides the ability to perform data transfers between multiple
(possibly distributed parallel) applications. If such functionality
is required, additional steps should be performed first.

The initial handshaking between the applications must be first established to allow for the
exchange of data between multiple processes. This is done by designating
one of the processes as the global root process. The global root process
must create a remote server using `sysc::createRootServer()` function.
The remaining processes would need to connect to the global root server
using host and port information returned from that function. On non-root processes,
this information is set in the `sysc::ParticipantInfo` structure (`scHost` and `scPort`
members). On the root process, the total number of applications must be set
in the `sysc::ParticipantInfo` structure (`numApps` member).
Once the values in the ParticipantInfo structure are assigned, the
structure should be passed into the constructor of the `sysc::SystemCoupling` class.
The connections will be established automatically during the constructor.
Once this is done, Step 1 is complete.

### Step 2: Transfer the data using the data shipper

Data-shipping is a form of data distribution architecture where data
objects are cached, operated on, and transferred between _server space_
and _client space_. This architecture reduces network latency 
and increases resource utilization. Conceptually, it
can also be thought of as a parallel sorting algorithm.

The fundamental data shipper concepts are as follows:

**Server space** is where the data is ordered. This data is 
roughly evenly distributed among processes.

**Client space** is where the data is arbitrarily distributed between 
processes.

**Collection** is the operation that transfers data from client 
space to server space.

**Distribution** is the operation that transfer data from server
space to client space.

**Index map** is an array that maps indices between client and server space.
It can be seen as a sorting criterion for the parallel sort. The indices 
of the index map array correspond to the indices in the client space, and 
the values in the array correspond to the global indices in the server space.

**Rearranging** is a derivative concept, which represents
a combination of collection from one client space into the
server space, followed by distribution from that server space
into another client space. This operation can be helpful, for example,
to transfer the data from one set of processes to another, but without
changing the relative ordering of data.

Data shipper operates on heavyweight data via one of the supported 
heavyweight data structures, which are described in the following sections:

- [Access to heavyweight data](user-guide/heavyweight-data-access.md)
- [Mesh and point cloud data access](user-guide/mesh-data-access.md)

## Data transfer examples

Sample code is provided, demonstrating the use of the participant
library APIs to perform data transfers.

For information on how to compile the code in this example,
see [Compiling, linking, and executing applications that use the Participant library](compiling-linking-executing.md).

### Example: rearrange the data between two parallel applications

In this example, a distributed parallel array of integers is transferred
from an MPI application running on 2 processes to an MPI application running on 3 processes.
Figure 1 illustrates the problem setup.

![Figure 1: Simple data transfer example](./../images/SimpleDataTransferExample.png)  
_Figure 1: Simple data transfer example_

#### C++

```cpp
#include "SystemCouplingParticipant/SystemCoupling.hpp"
#include "mpi.h"
#include <vector>
#include <iostream>

// Main function.
int main(int argc, char* argv[])
{
  // Hard-code host and port
  std::string host = "localhost";
  unsigned short port = 55201;

  // Initialize mpi
  int myMpiRank = 0;
  int numMpiRanks = 1;
  MPI_Init(&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &myMpiRank);
  MPI_Comm_size(MPI_COMM_WORLD, &numMpiRanks);

  // assume numMpiRanks is 2 for sender and 3 for receiver
  bool iAmSender = numMpiRanks == 2;

  // create server on root rank of the sender and print host and port
  if (iAmSender && myMpiRank == 0) {
    const auto createdHostAndPort = sysc::createRootServer(host, port);
    std::cout << "Host: " << createdHostAndPort.host << std::endl;
    std::cout << "Port: " << createdHostAndPort.port << std::endl;
  }

  // Start.
  sysc::ParticipantInfo participantInfo;
  if (iAmSender) {
    participantInfo.numApps = 2;
  }
  else {
    participantInfo.scPort = port;
    participantInfo.scHost = host;
  }

  // This will establish connection between the two apps.
  const sysc::SystemCoupling sc(participantInfo, MPI_COMM_WORLD);

  const int myScpRank = sysc::getMyRank();
  if (iAmSender) {
    std::cout << "Sender. MPI rank " << myMpiRank << ", SCP rank " << myScpRank << std::endl;
  }
  else {
    std::cout << "Receiver. MPI rank " << myMpiRank << ", SCP rank " << myScpRank << std::endl;
  }

  std::vector<int> sourceArray;
  std::vector<int> targetArray;
  if (iAmSender && myMpiRank == 0) {
    sourceArray = {1, 2, 3, 4};
  }
  else if (iAmSender && myMpiRank == 1) {
    sourceArray = {5, 6, 7};
  }
  else if (!iAmSender && myMpiRank == 0) {
    targetArray.resize(2);
  }
  else if (!iAmSender && myMpiRank == 1) {
    targetArray.resize(3);
  }
  else if (!iAmSender && myMpiRank == 2) {
    targetArray.resize(2);
  }

  // Transfer the data using rearrange function
  sysc::rearrange(
    sysc::OutputIntegerData(sourceArray),
    sysc::InputIntegerData(targetArray));

  if (!iAmSender) {
    std::cout << "Target values on rank " << myMpiRank << ": ";
    for (const auto value : targetArray) {
      std::cout << value << ", ";
    }
    std::cout << std::endl;
  }

  MPI_Finalize();

  return EXIT_SUCCESS;
}
```

#### Python

In this Python example, we use 5 serial Python apps.
We use SCP ranks to determine which process is the sender (ranks 0, 1),
and which one is the receiver (ranks 2, 3, and 4).
We also need a special command line argument to mark the root rank.

```python
import ansys.systemcoupling.partlib as scp
import argparse
import numpy as np

# Hard-code host and port
host = "localhost"
port = 55201

# Root app only should have `--numapps 5` argument passed in.
parser = argparse.ArgumentParser()
parser.add_argument("--numapps", type=int, default=-1)
args = parser.parse_args()

if args.numapps == 5:
    createdHostAndPort = scp.createRootServer(host, port)
    print(f"Host: {createdHostAndPort.host}")
    print(f"Port: {createdHostAndPort.port}")

# Start.
participantInfo = scp.ParticipantInfo()
if args.numapps == 5:
    participantInfo.numApps = 5
else:
    participantInfo.scPort = port
    participantInfo.scHost = host

# This will establish connection between the two apps.
sc = scp.SystemCoupling(participantInfo)

myScpRank = scp.getMyRank()
iAmSender = myScpRank in {0, 1}
if iAmSender:
    print(f"Sender. SCP rank {myScpRank}")
else:
    print(f"Receiver. SCP rank {myScpRank}")

sourceArray = np.array([], dtype=np.int32)
targetArray = np.array([], dtype=np.int32)
if myScpRank == 0: sourceArray = np.array([1,2,3,4], dtype=np.int32)
elif myScpRank == 1: sourceArray = np.array([5,6,7], dtype=np.int32)
elif myScpRank == 2: targetArray = np.array([0,0], dtype=np.int32)
elif myScpRank == 3: targetArray = np.array([0,0,0], dtype=np.int32)
elif myScpRank == 4: targetArray = np.array([0,0], dtype=np.int32)

# Transfer the data using rearrange function.
scp.rearrange(scp.OutputIntegerData(sourceArray), scp.InputIntegerData(targetArray))

if not iAmSender:
    print(f"Target values on rank {myScpRank}: {targetArray}")

```

### Example: using data shipper for mesh transfers

In this example, a slightly more complex data transfer is shown.

Here, a distributed parallel mesh (only mesh face elements) is transferred
from an MPI application running on 2 processes to an MPI application running on 3 processes.

To illustrate the usage of more advanced data shipper concepts, the relative
ordering of the mesh elements is also changed. In the distributed parallel sense,
the ordering changes from `[0,1,2,3,4]` to `[0,4,1,3,2]`, as illustrated
in Figure 2.

![Figure 2: Mesh transfer example](../images/MeshTransferExample.png)  
_Figure 2: Mesh transfer example_

Note that in this example, two data shippers are used. The first one
collects the data from original source distribution, and the second one
distributes the data into the desired target distribution. The collected
(server space) data is required as an intermediate stage.
The server space data distribution is even - every rank holds equal
amount of data (rounded up to allow for cases where data size is not divisible
by the number of ranks). In this example, there are 5 mesh elements and
5 ranks, so each rank holds one mesh element in the server space.

#### C++

```cpp
#include "SystemCouplingParticipant/SystemCoupling.hpp"

#include "mpi.h"
#include <vector>
#include <iostream>

// Main function.
int main(int argc, char* argv[])
{
  // Hard-code host and port
  std::string host = "localhost";
  unsigned short port = 55201;

  // Initialize mpi
  int myMpiRank = 0;
  int numMpiRanks = 1;
  MPI_Init(&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &myMpiRank);
  MPI_Comm_size(MPI_COMM_WORLD, &numMpiRanks);

  // assume numMpiRanks is 2 for sender and 3 for receiver
  const bool iAmSender = numMpiRanks == 2;

  // create server on root rank of the sender and print host and port
  if (iAmSender && myMpiRank == 0) {
    const auto createdHostAndPort = sysc::createRootServer(host, port);
    std::cout << "Host: " << createdHostAndPort.host << std::endl;
    std::cout << "Port: " << createdHostAndPort.port << std::endl;
  }

  // Start.
  sysc::ParticipantInfo participantInfo;
  if (iAmSender) {
    participantInfo.numApps = 2;
  }
  else {
    participantInfo.scPort = port;
    participantInfo.scHost = host;
  }

  // This will establish connection between the two apps.
  const sysc::SystemCoupling sc(participantInfo, MPI_COMM_WORLD);

  const int myScpRank = sysc::getMyRank();
  if (iAmSender) {
    std::cout << "Sender. MPI rank " << myMpiRank << ", SCP rank " << myScpRank << std::endl;
  }
  else {
    std::cout << "Receiver. MPI rank " << myMpiRank << ", SCP rank " << myScpRank << std::endl;
  }

  std::vector<int> faceIds;
  std::vector<int> faceNodeCounts;
  std::vector<int> faceNodeIds;

  std::vector<int> indexMapSource;
  std::vector<int> indexMapTarget;

  const std::size_t globalFaceCount{5};
  const std::size_t maxNodesPerFace{4};

  const std::size_t collectedSize = 1;  // ceil(globalFaceCount / numScpRanks) = 5/5 = 1
  std::vector<int> faceIdsCollected(collectedSize);
  std::vector<int> faceNodeCountsCollected(collectedSize);
  std::vector<int> faceNodeIdsCollected(collectedSize * maxNodesPerFace);

  if (iAmSender && myMpiRank == 0) {
    faceIds = {0, 1, 2};
    faceNodeCounts = {4, 4, 4};
    faceNodeIds = {7, 8, 2, 1, 8, 9, 3, 2, 9, 10, 4, 3};
    indexMapSource = {0, 1, 2};
  }
  else if (iAmSender && myMpiRank == 1) {
    faceIds = {3, 4};
    faceNodeCounts = {4, 4};
    faceNodeIds = {10, 11, 5, 4, 11, 12, 6, 5};
    indexMapSource = {3, 4};
  }
  else if (!iAmSender && myMpiRank == 0) {
    faceIds.resize(2);
    faceNodeCounts.resize(2);
    faceNodeIds.resize(2*maxNodesPerFace);
    indexMapTarget = {0, 4};
  }
  else if (!iAmSender && myMpiRank == 1) {
    faceIds.resize(2);
    faceNodeCounts.resize(2);
    faceNodeIds.resize(2*maxNodesPerFace);
    indexMapTarget = {1, 3};
  }
  else if (!iAmSender && myMpiRank == 2) {
    faceIds.resize(1);
    faceNodeCounts.resize(1);
    faceNodeIds.resize(1*maxNodesPerFace);
    indexMapTarget = {2};
  }

  sysc::Datashipper datashipper1(globalFaceCount, sysc::IntegerData(indexMapSource));
  datashipper1.collect(sysc::IntegerData(faceIds), sysc::IntegerData(faceIdsCollected));
  datashipper1.collect(sysc::IntegerData(faceNodeCounts), sysc::IntegerData(faceNodeCountsCollected));
  datashipper1.collect(sysc::IntegerData(faceNodeIds), sysc::IntegerData(faceNodeIdsCollected), maxNodesPerFace);

  sysc::Datashipper datashipper2(globalFaceCount, sysc::IntegerData(indexMapTarget));
  datashipper2.distribute(sysc::IntegerData(faceIdsCollected), sysc::IntegerData(faceIds));
  datashipper2.distribute(sysc::IntegerData(faceNodeCountsCollected), sysc::IntegerData(faceNodeCounts));
  datashipper2.distribute(sysc::IntegerData(faceNodeIdsCollected), sysc::IntegerData(faceNodeIds), maxNodesPerFace);

  // Print mesh faces in the receiver app.
  if (!iAmSender) {
    for (int r = 0; r < numMpiRanks; ++r) {
      if (r == myMpiRank) {
        std::size_t nodeIndex{0};
        std::cout << "Faces on rank " << myMpiRank << std::endl;
        for (std::size_t f = 0; f < faceIds.size(); ++f) {
          std::cout << "    face " << faceIds[f] << " => nodes [";
          for (std::size_t n = 0; n < faceNodeCounts[f]; ++n) {
            std::cout << faceNodeIds[nodeIndex] << ",";
            ++nodeIndex;
          }
          std::cout << "]" << std::endl;
        }
      }
      MPI_Barrier(MPI_COMM_WORLD);
    }
  }

  MPI_Finalize();

  return EXIT_SUCCESS;
}
```

Sample output on the receiver side:

```
Receiver. MPI rank 0, SCP rank 2
Receiver. MPI rank 1, SCP rank 3
Receiver. MPI rank 2, SCP rank 4
Faces on rank 0
    face 0 => nodes [7,8,2,1,]
    face 4 => nodes [11,12,6,5,]
Faces on rank 1
    face 1 => nodes [8,9,3,2,]
    face 3 => nodes [10,11,5,4,]
Faces on rank 2
    face 2 => nodes [9,10,4,3,]
```

#### Python

In this Python example, we use 5 serial Python apps.
We use SCP ranks to determine which process is the sender (ranks 0, 1),
and which one is the receiver (ranks 2, 3, and 4).
We also need a special command line argument to mark the root rank.

```python
import ansys.systemcoupling.partlib as scp
import argparse
import numpy as np

# Hard-code host and port
host = "localhost"
port = 55201

# Root app only should have `--numapps 5` argument passed in.
parser = argparse.ArgumentParser()
parser.add_argument("--numapps", type=int, default=-1)
args = parser.parse_args()

if args.numapps == 5:
    createdHostAndPort = scp.createRootServer(host, port)
    print(f"Host: {createdHostAndPort.host}")
    print(f"Port: {createdHostAndPort.port}")

# Start.
participantInfo = scp.ParticipantInfo()
if args.numapps == 5:
    participantInfo.numApps = 5
else:
    participantInfo.scPort = port
    participantInfo.scHost = host

# This will establish connection between the two apps.
sc = scp.SystemCoupling(participantInfo)

myScpRank = scp.getMyRank()
iAmSender = myScpRank in {0, 1}
if iAmSender:
    print(f"Sender. SCP rank {myScpRank}")
else:
    print(f"Receiver. SCP rank {myScpRank}")

faceIds = np.array([], dtype=np.int32)
faceNodeCounts = np.array([], dtype=np.int32)
faceNodeIds = np.array([], dtype=np.int32)

indexMapSource = np.array([], dtype=np.int32)
indexMapTarget = np.array([], dtype=np.int32)

globalFaceCount = 5
maxNodesPerFace = 4

numScpRanks = scp.getNumRanks()
collectedSize = 1 # ceil(globalFaceCount/numScpRanks) = 5/5 = 1
faceIdsCollected = np.array([0]*collectedSize, dtype=np.int32)
faceNodeCountsCollected = np.array([0]*collectedSize, dtype=np.int32)
faceNodeIdsCollected = np.array([0]*collectedSize * maxNodesPerFace, dtype=np.int32)

if myScpRank == 0:
    faceIds = np.array([0,1,2], dtype=np.int32)
    faceNodeCounts = np.array([4,4,4], dtype=np.int32)
    faceNodeIds = np.array([7, 8, 2, 1, 8, 9, 3, 2, 9, 10, 4, 3], dtype=np.int32)
    indexMapSource = np.array([0,1,2], dtype=np.int32)
elif myScpRank == 1:
    faceIds = np.array([3,4], dtype=np.int32)
    faceNodeCounts = np.array([4,4], dtype=np.int32)
    faceNodeIds = np.array([10, 11, 5, 4, 11, 12, 6, 5], dtype=np.int32)    
    indexMapSource = np.array([3,4], dtype=np.int32)
elif myScpRank == 2:
    faceIds = np.array([0]*2, dtype=np.int32)
    faceNodeCounts = np.array([0]*2, dtype=np.int32)
    faceNodeIds = np.array([0]*2*maxNodesPerFace, dtype=np.int32)    
    indexMapTarget = np.array([0,4], dtype=np.int32)
elif myScpRank == 3:
    faceIds = np.array([0]*2, dtype=np.int32)
    faceNodeCounts = np.array([0]*2, dtype=np.int32)
    faceNodeIds = np.array([0]*2*maxNodesPerFace, dtype=np.int32)    
    indexMapTarget = np.array([1,3], dtype=np.int32)    
elif myScpRank == 4:
    faceIds = np.array([0]*1, dtype=np.int32)
    faceNodeCounts = np.array([0]*1, dtype=np.int32)
    faceNodeIds = np.array([0]*1*maxNodesPerFace, dtype=np.int32)    
    indexMapTarget = np.array([2], dtype=np.int32)

datashipper1 = scp.Datashipper(globalFaceCount, scp.IntegerData(indexMapSource))
datashipper1.collect(scp.IntegerData(faceIds), scp.IntegerData(faceIdsCollected))
datashipper1.collect(scp.IntegerData(faceNodeCounts), scp.IntegerData(faceNodeCountsCollected))
datashipper1.collect(scp.IntegerData(faceNodeIds), scp.IntegerData(faceNodeIdsCollected), maxNodesPerFace)

datashipper2 = scp.Datashipper(globalFaceCount, scp.IntegerData(indexMapTarget))
datashipper2.distribute(scp.IntegerData(faceIdsCollected), scp.IntegerData(faceIds))
datashipper2.distribute(scp.IntegerData(faceNodeCountsCollected), scp.IntegerData(faceNodeCounts))
datashipper2.distribute(scp.IntegerData(faceNodeIdsCollected), scp.IntegerData(faceNodeIds), maxNodesPerFace)

if not iAmSender:
    for r in range(2, 5):
        if r == myScpRank:
            nodeIndex = 0
            print(f"Faces on rank {r}")
            for f in range(len(faceIds)):
                print(f"    face {faceIds[f]} => nodes [", end="")
                for n in range(faceNodeCounts[f]):
                    print(f"{faceNodeIds[nodeIndex]},", end="")
                    nodeIndex += 1
                print(f"]\n")
```
