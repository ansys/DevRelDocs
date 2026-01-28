# Introduction

The System Coupling Participant (SCP) library provides interfaces that allow
**participants** to perform a variety of coupling operations. These include:

  - Take part in a **coupled analysis** (**co-simulation**) to solve various physics problems, such as fluid-structure interaction problems.
  - **Mapping** of data across non-conformal mesh interfaces, either within one (distributed parallel) application,
  or between multiple (distributed parallel) applications.
  - **Data transfers** between processes of one (distributed parallel) application,
  or between multiple (distributed parallel) applications.

Each participant (also referred to as "coupling participant," "participant solver," or "solver")
is an instance of a standalone application. This application can be (but not limited to)
a physics solver that provides a solution to one or more physical models.

A coupled analysis is the process in which the coupled participants are executed in a sequence 
for the purpose of solving the overall coupled solution. A coupled
analysis is controlled by the System Coupling application, rather than the
participants. Once the participant solver implements SCP library APIs, it can participate 
in a coupled analysis with other coupled participants,
taking advantage of all the functionality provided by System Coupling.

For more information, see:

- [System Coupling Participant library capabilities](user-guide/participant-library-capabilities.md)
- [Concepts and terminology](user-guide/concepts-and-terminology.md)
- [Steps to perform parallel data transfers](user-guide/participant-steps-for-data-transfers.md)
- [Steps to perform mapping](user-guide/participant-steps-for-mapping.md)
- [Steps to set up and execute a coupled analysis](user-guide/steps-to-setup-and-executed-coupled-analysis.md)
- [Completing the System Coupling participant setup](user-guide/participant-setup.md)
- [Participant steps in a coupled analysis](user-guide/participant-steps-in-coupled-analysis.md)
- [Command line arguments for participant solvers](user-guide/command-line-arguments.md)
- [Execution in a parallel environment](user-guide/parallel-execution.md)
- [Access to parameter data](user-guide/parameter-data-access.md)
- [Access to heavyweight data](user-guide/heavyweight-data-access.md)
- [Mesh and point cloud data access](user-guide/mesh-data-access.md)
- [Creating restart points and restarting a coupled analysis](user-guide/restarts.md)
- [Multi-region coupling interfaces](user-guide/multiregion.md)
- [Testing and debugging tools](user-guide/testing-debugging-tools.md)
- [Migration guide](user-guide/migration-guide.md)
- [Compiling, linking, and executing applications that use the participant library](user-guide/compiling-linking-executing.md)
- [Tutorial: Heat transfer in square channel air flow](user-guide/channel-flow-tutorial.md)
- [Tutorial: Oscillating plate damping](user-guide/plate-damping-tutorial.md)
- [Tutorial: Pipe papping](user-guide/pipe-mapping-tutorial.md)
