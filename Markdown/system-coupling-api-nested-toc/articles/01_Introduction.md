# Introduction

The System Coupling Participant (SCP) library provides interfaces that allow
**participant solvers** to:

  1. Connect to the System Coupling solver
    and to take part in the **coupled analysis**. This is workflow is called **co-simulation**.
  2. Perform the transfer of solution data between non-conformal meshes.
    This workflow is called **mapping**.

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

- [System Coupling Participant library capabilities](02_ParticipantLibraryCapabilities.md)
- [Concepts and terminology](03_ConceptsAndTerminology.md)
- [Steps to perform mapping](04_ParticipantStepsForMapping.md)
- [Steps to set up and execute a coupled analysis](05_StepsToSetupAndExecutedCoupledAnalysis.md)
- [Completing the System Coupling participant setup](06_ParticipantSetup.md)
- [Participant steps in a coupled analysis](07_ParticipantStepsInCoupledAnalysis.md)
- [Command line arguments for participant solvers](08_CommandLineArguments.md)
- [Execution in a parallel environment](09_ParallelExecution.md)
- [Access to parameter data](10_ParameterDataAccess.md)
- [Access to heavyweight data](11_HeavyweightDataAccess.md)
- [Mesh and point cloud data access](12_MeshDataAccess.md)
- [Creating restart points and restarting a coupled analysis](13_Restarts.md)
- [Multi-region coupling interfaces](14_Multiregion.md)
- [Testing and debugging tools](15_TestingDebuggingTools.md)
- [Migration guide](16_MigrationGuide.md)
- [Compiling, linking, and executing applications that use the participant library](17_CompilingLinkingExecuting.md)
- [Tutorial: Heat transfer in square channel air flow](18_ChannelFlowTutorial.md)
- [Tutorial: Oscillating plate damping](19_PlateDampingTutorial.md)
- [Tutorial: Pipe papping](20_PipeMappingTutorial.md)
