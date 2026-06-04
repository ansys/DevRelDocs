# Automate simulation execution with PyMAPDL and email notifications: automatically trigger simulations with real-time email updates

> This use case explains how you can run Ansys Mechanical simulations programmatically and receive emails with status updates and results.

## Audience and persona

- **Primary users:** Simulation engineers, automation specialists, and method developers
- **Industry:** Any
- **Prerequisites:** Installations of Ansys MAPDL and PyMAPDL plus SMTP access for email notifications

## Problems

- Running simulations manually through the Ansys Mechanical GUI can be time-consuming and require constant monitoring when only small adjustments need to be made each time.
- Engineers can lose a lot of valuable time to simulations that fail early on in their expected runtime for unexpected reasons.
- Without sitting at their workstations, engineers must know as soon as possible when a simulation finishes and whether it succeeded.

## Solution

Use PyMAPDL scripts to automate simulation execution and send email notifications upon completion, including success status and optional result attachments.

**Benefits**

- Eliminates manual monitoring, allowing engineers to run simulations overnight, on holidays, or on weekends
- Reduces turnaround time for simulation workflows
- Improves productivity by enabling unattended execution

## Features and capabilities used

- **PyMAPDL scripting:** Automates MAPDL commands and job submission
- **Batch execution:** Runs simulations without GUI interaction
- **Result extraction:** Retrieves key outputs (such as stress and displacement)
- **Email integration:** Sends success/failure notifications and optional result files
- **Error handling:** Captures exceptions and logs for troubleshooting
