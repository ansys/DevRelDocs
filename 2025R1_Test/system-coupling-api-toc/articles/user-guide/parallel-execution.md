# Execution in a parallel environment

System Coupling participant library supports execution of the participant
solver in a parallel Message Passing Interface (MPI) environment.

The participant library uses the Fluent's MPI wrapper library for run-time
switching between the compatible MPI distributions.
See Fluent documentation for a full list of
available MPIs for Windows and Linux platforms.
The participant library is expected to be compatible with those MPIs.

The second part of the
[Heat transfer in square channel air flow](channel-flow-tutorial.md)
tutorial demonstrates the usage of the parallel APIs.

## Using a supported MPI distribution

### Implementing the interfaces in parallel

If the participant solver is using one of the supported MPIs,
the relevant MPI communicator should be provided when startint the mapping workflow or
when establishing
the connection to System Coupling. The participant library
interfaces should be implemented in each rank of that communicator.
The participant library will
manage all parallel processing of mesh and variable data internally.
If some elements and/or nodes are duplicated in multiple partitions
(for example due to the mesh overlap layer), the participant library can
be expected to handle such scenarios robustly.

#### C++

Mapping

```cpp
...
// initialize the MPI
MPI_Init(&argc, &argv);
...
// pass the MPI communicator
sysc::SystemCoupling sc(MPI_COMM_WORLD));
...
```

Cosimulation

```cpp
...
// initialize the MPI
MPI_Init(&argc, &argv);
...
std::string scHost, scname, buildInfo;
unsigned short int scPort;
...
// pass the MPI communicator when connecting to System Coupling
sysc::SystemCoupling sc(scHost, scPort, scName, MPI_COMM_WORLD, buildInfo));
...
```

#### C

Mapping

```c
...
/* initialize the MPI */
MPI_Init(&argc, &argv);
...
/* pass the MPI communicator */
syscStartStandaloneParallel(MPI_COMM_WORLD);
...
```

Cosimulation

```c
...
/* initialize the MPI */
MPI_Init(&argc, &argv);
...
const char* scHost, scName, buildInfo;
unsigned short int scPort;
...
/* pass the MPI communicator when connecting to System Coupling */
syscConnectParallel(scHost, scPort, scName, MPI_COMM_WORLD, buildInfo);
...
```

#### Fortran

Mapping

```fortran
...
integer :: err_code
...
! initialize the MPI
call MPI_INIT(err_code)
...
! pass the MPI communicator
syscStartStandaloneF(MPI_COMM_WORLD)
...
```

Cosimulation

```fortran
...
integer :: err_code
character(len=256) :: scHost
integer :: scPort
character(len=256) :: scName
character(len=256) :: buildInfo
...
! initialize the MPI
call MPI_Init(err_code)
...
! pass the MPI communicator when connecting to System Coupling
syscConnectF(scHost, scPort, scName, MPI_COMM_WORLD, buildInfo)
...
```

#### Python

Parallel interfaces are not supported for Python.

### Running the participant in parallel

In order to link to the correct MPI wrapper at run-time, the path
to the correct wrapper directory should be set in the
**`PATH`** environment variable on Windows or **`LD_LIBRARY_PATH`** environment
variable on Linux. For example, if the participant solver
is using Intel MPI library, then those environment variables should
contain the following path:

`<Ansys Installation Path>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<version>/multiport/mpi_wrapper/<platform>/intel`

This will link to the MPI wrapper library in that directory
(`mpi_wrapper.dll` on Windows and `libmpi_wrapper.so` on Linux).

If, for example, the Open MPI library is used, then the `openmpi` directory should be
used instead of `intel` in the path above.

For examples of compiling, linking, and executing a program that uses the
participant library and a supported MPI, see
[Compiling, linking, and executing applications that use the Participant library](compiling-linking-executing.md)

## Using an unsupported MPI distribution

If the participant solver is using an MPI distribution that is not
supported by the Fluent's MPI wrapper library, then
all participant library interfaces should be
implemented/used only
on one process (for example, process with rank 0). The
participant solver should manage all parallel collection
of mesh and variable data for access by the participant library.
In this case, the stub MPI wrapper should be used at run-time, which is located
in the following directory:

`<Ansys Installation Path>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<version>/multiport/mpi_wrapper/<platform>/stub`

See [Compiling, linking, and executing applications that use the Participant library](compiling-linking-executing.md)
for more detailed examples.
