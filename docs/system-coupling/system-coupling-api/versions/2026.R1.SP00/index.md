---
title: "Introduction"
---

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

- [System Coupling Participant library capabilities](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/participant-library-capabilities)
- [Concepts and terminology](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/concepts-and-terminology)
- [Steps to perform parallel data transfers](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/participant-steps-for-data-transfers)
- [Steps to perform mapping](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/participant-steps-for-mapping)
- [Steps to set up and execute a coupled analysis](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/steps-to-setup-and-executed-coupled-analysis)
- [Completing the System Coupling participant setup](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/participant-setup)
- [Participant steps in a coupled analysis](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/participant-steps-in-coupled-analysis)
- [Command line arguments for participant solvers](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/command-line-arguments)
- [Execution in a parallel environment](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/parallel-execution)
- [Access to parameter data](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/parameter-data-access)
- [Access to heavyweight data](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/heavyweight-data-access)
- [Mesh and point cloud data access](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/mesh-data-access)
- [Creating restart points and restarting a coupled analysis](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/restarts)
- [Multi-region coupling interfaces](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/multiregion)
- [Testing and debugging tools](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/testing-debugging-tools)
- [Migration guide](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/migration-guide)
- [Compiling, linking, and executing applications that use the participant library](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/compiling-linking-executing)
- [Tutorial: Heat transfer in square channel air flow](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/channel-flow-tutorial)
- [Tutorial: Oscillating plate damping](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/plate-damping-tutorial)
- [Tutorial: Pipe papping](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/user-guide/pipe-mapping-tutorial)
