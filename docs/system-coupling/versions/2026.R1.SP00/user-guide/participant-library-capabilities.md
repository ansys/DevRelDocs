# System coupling participant library capabilities

- Co-simulation with System Coupling
- Standalone mapping within a single, possibly distributed parallel, application.
- Standalone mapping across multiple, possibly distributed parallel, applications [1].
- Data transfers across multiple, possibly distributed parallel, applications [1].
- Co-simulation analysis type options
  - Steady coupled analysis
  - Transient coupled analysis
- Co-simulation restarts
- Co-simulation time integration options (transient analysis only)
  - Implicit
  - Explicit
- Options for communicating co-simulation setup information
  - System Coupling Participant (SCP) file writing
  - Direct setup communication via socket connection
- Region discretization options
  - Mesh
  - Point cloud
- Region topology options (mesh discretization type only)
  - Surfaces
  - Volumes
- Participant Dimension options
  - 2D
  - 3D
- High-order mesh elements
- Polygons and polyhedral mesh elements
- Support for specifying mesh model (that is, sharing of bounding surface region between two volume regions, etc.)
- Variable tensor type options
  - Scalar
  - Vector
- Support for intensive and extensive variables
- Real-valued and complex-valued variables
- Element-based and node-based variables
- Integer-valued participant attributes [2]
- Real-valued participant attributes with specified dimensionality [2]
- Integer-valued variable attributes
- Real-valued variable attributes with specified dimensionality
- Single-valued parameters [2]
- N:M mapping (that is, mapping between different numbers of regions on source and on target)
- Mapping of variables with different properties:
  - Mapping between element-based and node-based variables
  - Mapping between intensive and extensive variables
- Debugging tools
  - Mesh validity checks
  - Code tracer and log output
  - Standalone mode for co-simulation
- EnSight results writing [3]
- Support for MPI parallel processing [4]
- Languages supported [5]
  - C++
  - C
  - Fortran
  - Python
- Support for streaming transcript file to System Coupling GUI for co-simulation [2]

[1] Currently only supported in C++ and Python.

[2] Not currently supported in Fortran.

[3] EnSight results can be written by the participant library only if the mapping workflow is used.

[4] For details, see [Execution in a parallel environment](parallel-execution.md).

[5] For details, see [Compiling, linking, and executing applications that use the Participant Library](compiling-linking-executing.md).

Note the following limitations:

- Currently, all values are assumed to be in SI units.
- Currently, mapping across multiple applications is only supported via C++ APIs.
