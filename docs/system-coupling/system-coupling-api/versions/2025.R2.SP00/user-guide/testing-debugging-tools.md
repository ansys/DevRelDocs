# Testing and debugging tools

The participant library includes the following tools to help with testing and debugging:

- [Code tracing](#code-tracing)
- [Standalone Mode (for co-simulation only)](#standalone-mode-for-co-simulation-only)
- [Mesh Validity Check](#mesh-validity-check)
- [Record and Playback Capability (for co-simulation only)](#record-and-playback-capabilities)

## Code tracing

Code tracing allows to log function calls into a text file, that can be
used to identify source of a given problem. To enable code tracing,
set `SYSC_PARTLIB_DEBUG` environment variable to 1, 2, 3, 4, or 5.
The higher the value, the more details will be printed to the text files.
When running in parallel, each parallel process will print its own text file.
The files will be named `SyC_Log_CNode*.txt`.

## Standalone mode (for co-simulation only)

Once the SCP library interfaces are implemented, you can use the **standalone** mode to run the
participant solver without connecting to System Coupling.
When running in standalone mode, the participant solver will run for a few coupling
coupling time steps (if transient) and coupling iterations.

If `SYSC_PARTLIB_DEBUG` environment variable to set to `5` then
at each iteration in standalone mode, all registered data access functions will be called
and the contents of heavyweight data will be printed into a text file `sysc_*.debug`.

The standalone mode allows you to check for run-time issues more quickly
and can help to provide a measure of confidence that the APIs
are implemented correctly. Before running a solver as part of
an overall coupled analysis, you should first confirm that the
participant solver can run successfully in standalone mode.

To run in standalone mode, provide either an empty host name or a `#` instead of the host name
when the connection to
System Coupling would be typically established. Additionally, if using the
playback option (see [Record and playback capabilities](#record-and-playback-capabilities)),
the participant name used to record the playback must be supplied. No other
changes are required to run in standalone mode. For a demonstration of how to
run a participant solver in standalone mode, see Tutorial: Heat Transfer in
Square Channel Air Flow.

### C++

```cpp
std::string scHost;
unsigned short int scPort;
std::string partName;
std::string buildInfo;
...
scHost = "";
sysc::System Coupling sc(scHost, scPort, partName, buildInfo);
```

### C

```c
char scHost[256];
unsigned short scPort;
char partName[256];
char buildInfo[256];
...
scHost[0] = '\0';
SyscError ret = syscConnect(scHost, scPort, partName, buildInfo);
```

### Fortran

```fortran
character(len=256) :: scHost
integer :: scPort = 0
character(len=256) :: partName
character(len256) :: buildInfo
...
scHost = ""
ret = syscConnectF(scHost, scPort, partName, buildInfo)
```

### Python

```python
from pyExt import SystemCouplingParticipant as sysc
scHost = ""
scPort = 0
partName = ""
buildInfo = ""
...
sc = sysc.SystemCouplingParticipant(scHost, scPort, scName, buildInfo)
```

## Mesh validity check

A ***mesh validity check*** is available as a debugging tool.
This is a function that can be called to detect problems
in the mesh that is provided to the participant library.
It returns the mesh validity status and a message
containing information about a problem that was detected.

For example, it will check whether the array sizes are
consistent &mdash; that the element node ids array contains
only ids that are found in the node ids array, etc.

> **Note:**
>
> - *This is not an exhaustive validity check &mdash; the mesh can
> still have problems even if all checks pass.
> However, it can provide a measure of confidence that
> the mesh being provided to System Coupling is correct.*
> - *To ensure optimal performance, this function should not be called
> in production workflows.*

### C++

```cpp
sysc::SurfaceMesh surfaceMesh(...);
... 
sysc::MeshValidityStatus meshStatus = surfaceMesh.checkMeshValidity();
if (meshStatus.isInvalid) {
  std::cout << meshStatus.message;
}
```

### C

```c
SyscSurfaceMesh surfaceMesh = syscGetSurfaceMesh...;
...
SyscError ret = syscCheckSurfaceMeshValidity(surfaceMesh);
if (ret.retcode != 0) {
  printf(ret.message);
}
```

### Fortran

```fortran
type(SyscSurfaceMeshF) :: surfaceMesh
type(SyscErrorF) :: ret
...
ret = syscCheckSurfaceMeshValidityF(surfaceMesh)
if (ret%retcode .NE. SyscStatusOk) then
  print *, trim(ret%message)
endif
```

### Python

```python
from pyExt import SystemCouplingParticipant as sysc

surfaceMesh = sysc.SurfaceMesh(...)
...
meshStatus = surfaceMesh.checkMeshValidity()
if meshStatus.isInvalid:
    print(meshStatus.message)
```

## Record and playback capabilities

This feature allows you to reproduce the interactions with
System Coupling without actually connecting to System Coupling. This can be used
to debug issues found inside participant solvers without using System Coupling,
and it can also be used for integration testing of the SCP library inside the participant solver.

This feature relies on two sets of files with the following naming patterns:

- `<participant name>.scp` (for example `DEFAULT-1.scp`)
  - This file contains the coupling participant setup information in XML format
    - for example regions, variables, parameters, analysis type, etc.
- `<participant name>_rank<MPI rank number>.scpid` (for example `DEFAULT-1_rank0.scpid`)
  - This file contains the coupled analysis loop information and input data
    - for example number of time steps, iterations, input values for all input variables and parameters

The "record" capability refers to the option in System Coupling that allows to generate
the .scp and .scpid files during co-simulation.

The "playback" capability refers to the option to read the .scp and .scpid
files in standalone mode ([see above](#standalone-mode-for-co-simulation-only)) to emulate the interactions with System Coupling
without using System Coupling.

### The record capability

The "record" aspect of the capability describes an option
in System Coupling setup to generate files containing the information about
the interactions of System Coupling and the SCP library during co-simulation.

To turn this on in System Coupling, activate beta features (see the system
coupling documentation for a full description of how to enable beta features)
and set the following flag:

`DatamodelRoot().CouplingParticipant[<participant name>].RecordInteractions.RecordSetup = True`

If this option is enabled, the SCP library will write out the `<participant name>.scp` file, which
contains the setup information in XML format.

`DatamodelRoot().CouplingParticipant[<participant name>].RecordInteractions.RecordSolution = True`

If this option is enabled, the SCP library will write out the `<participant name>_rank<MPI rank number>.scpid`
file, which contains the coupled analysis loop information and input data required to reproduce the
analysis in standalone mode.

Additionally, how many significant digits to record for the input data in the
.scpid files may be controlled with the following option (default is 8
significant digits, min and max are 1 and 16, respectively):

`DatamodelRoot().CouplingParticipant[<participant name>].RecordInteractions.Precision = 10`

### The playback capability

The "playback" aspect involves running in standalone mode. If the .scp and .scpid files described above
exist in the working directory, and the standalone mode ([see above](#standalone-mode-for-co-simulation-only)) is used, then the SCP library will
read these files and use them to provide the information to the participant solver as-if the full
co-simulation analysis was being executed.

### SCP file format

The SCP file is the same file that the SCP library can generate as described in
[Completing the System Coupling Participant Setup](participant-setup.md) section.

More information about the SCP file format can be found in the System Coupling User's Guide.

### SCPID file format

SCP library input solution file is used to help debug and locate issues in the participant solver without connecting to SystemCoupling
and running in the standalone mode. This file is called `<ParticipantName>.scpid` and `scpid` extension stands for `System Coupling Participant Interaction Data`.

#### Format

- A list of value can be used for a input variable. For vector and complex input variables, compact complex and complex vector form is used and compact complex comes first if it is a complex vector variable.
- If a single scalar, vector,complex, or complex vector is specified in the list, then spread this value for all nodes or elements.
- Indention is optional.
- Both parameter and field data are supported.
- To add restart point, add `CreateRestartPoint` under `CouplingIteration-#` block.

    ```text
    #indention is optional
    Version:1
    #for transient case
    Initialization
      # make sure the order of parameters and variables here is consistent with the order in the scp file
      Parameter:<ParameterName1>:<value>
      Parameter:<ParameterName1>:<value>
      #when reading data, ignore tensor type information
      #when exporting tensor type for readability
      #ignore extra values beyond variable size
      ScalarData:<RegionName>:<VariableName>:[1,2,3,4] #normal a list values
      ScalarData:<RegionName>:<variableWithSingleScalarValue>:[3] #single value for all nodes/elements
      VectorData:<RegionName>:<variableWithSingleVectorValue>:[1,2,3] #single vector value for all nodes/elements, third element is only valid for 3D vector
      MinIterations:<value>, MaxIterations:<value> (optional)

    TimeStep:<value>, StartTime: <value> , TimeStepSize: <value>
      CouplingIteration (#): ((#) is optional)
        Parameter:<ParameterName1>:<value>
        Parameter:<ParameterName1>:<value>
        ScalarData:<RegionName>:<VariableName>: [1,2,3,4] 
        ScalarData:<RegionName>:<variableWithSingleScalarValue>:[3] 
        VectorData:<RegionName>:<variableWithSingleVectorValue>:[1,2,3]
        CreateRestartPoint (optional)
        MinIterations:<value>, MaxIterations:<value> (optional)

    #for steady case
    CouplingIteration (#): ( (#) is optional)
      Parameter:<ParameterName1>:<value>
      Parameter:<ParameterName1>:<value>
      ScalarData:<RegionName>:<VariableName>:[1,2,3,4] 
      ScalarData:<RegionName>:<variableWithSingleScalarValue>:[3] 
      VectorData:<RegionName>:<variableWithSingleVectorValue>:[1,2,3]
      CreateRestartPoint (optional)
    ```

##### Example

It's an FSI case, and this is CFD/Fluent. One region called wall_deforming consists of a single quad element. It receives nodal displacements from System Coupling. 1 time step, 2 iterations, create a restart point at the end of the 2nd iteration.

```text
Version:1
Initialization
  VectorData:wall_deforming:node_displacement: [0.0,0.0,0.0] # A single vector value for 4 nodes
  MinIterations:1, MaxIterations:5
TimeStep:1, StartTime:0.0 , TimeStepSize:0.1
  CouplingIteration (1):
    VectorData:wall_deforming:node_displacement:[1.0,2.0,3.0,1.1,2.1,3.1,1.2,2.2,3.2,1.3,2.3,3.3] # 4 vector values for 4 nodes
    MinIterations:1, MaxIterations:5
  CouplingIteration (2):
    VectorData:wall_deforming:node_displacement:[2.0,3.0,4.0,2.1,3.1,4.1,2.2,3.2,4.2,2.3,3.3,4.3] # 4 vector values for 4 nodes
    CreateRestartPoint
    MinIterations:1, MaxIterations:5
```
