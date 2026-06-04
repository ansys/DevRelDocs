
# Export Fluent simulation data to OpenUSD format for Omniverse visualization

> This use case explains how you can convert CFD simulation results from Ansys Fluent into OpenUSD format for advanced visualization in NVIDIA Omniverse.

## Audience and persona

- **Primary users:** CFD engineers, visualization specialists, and Python developers
- **Industry:** Any
- **Prerequisites:** Installations of Ansys Fluent, PyFluent, and NVIDIA Omniverse

## Problems

- Postprocessing CFD results in traditional tools limits interactive visualization and collaboration.
- Engineers need a way to export simulation data into a modern, interoperable format for advanced rendering and analysis.
- Desktop applications must be configured significantly to interact

## Solution

Use PyFluent to extract simulation data from Ansys Fluent and export it to an OpenUSD format file, which enables rich visualization workflows in Omniverse using Universal Scene Descriptors (USDs).

**Benefits:**

- Seamless integration between simulation and visualization environments
- Enables collaborative, real-time rendering of CFD data
- Supports advanced material and color mapping for better insights

## Features and capabilities used

- **PyFluent:** Access Fluent solver session and field data using scripting
- **USD Python bindings:** Create USD scene, geometry, and attributes
- **Omniverse integration:** In Omniverse, use USDs for visualization
