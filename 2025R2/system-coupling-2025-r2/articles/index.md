# Introduction

The System Coupling Participant (SCP) library provides interfaces that allow
**participant solvers** to:

  1. Connect to the System Coupling solver
    and to take part in the **coupled analysis**. This is workflow is called **co-simulation**.
  2. Perform the transfer of solution data between non-conformal meshes.
    This workflow is called **mapping**. Mapping can be done within a single
    (distributed parallel) application, or across multiple (distributed parallel) applications.

Each coupling participant (also referred to as "participant," "participant solver," or "solver")
is an instance of a standalone application that provides a solution to one or more physical models.

A coupled analysis (a concept that applies only in the context of co-simulation)
is the process in which the coupled participants are executed in an iterative
sequence for the purpose of converging the overall coupled solution. A coupled
analysis is controlled by the System Coupling application, rather than the
participants. Once the participant solver is instrumented with System Coupling
APIs, it can participate in a coupled analysis with other coupled participants,
taking advantage of all the functionality provided by System Coupling.

The two workflows, mapping and co-simulation, can be combined. That is, the participant solver
can partake in a coupled analysis and at the same time map the solution data across its
non-conformal mesh interface.

For more information, see:

- [System Coupling Participant library capabilities](user-guide/participant-library-capabilities.md)
- [Concepts and terminology](user-guide/concepts-and-terminology.md)
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
