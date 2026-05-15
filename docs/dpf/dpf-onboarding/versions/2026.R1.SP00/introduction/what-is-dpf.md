# What is DPF

Ansys' **Data Processing Framework (DPF)** is a numerical toolbox for accessing and transforming simulation data. It provides engineers with the necessary tools to automate complex preprocessing and postprocessing workflows on large amounts of data.

The fundamental logic of DPF involves three key steps:

![diagrama](../images/dpf-main-logic.drawio.svg)

## What kind of data can DPF process

DPF is designed around a specific type of data: **discrete numerical simulation results** — quantities such as displacement, stress, temperature, or pressure, defined at specific locations (nodes, elements) on a mesh and potentially varying over time or frequency.

This data model is the key to understanding what DPF can and cannot work with:

**What DPF can process**:
Any data that maps onto this model - fields of values on a mesh over time - is something DPF can represent and process. This includes results from Ansys solvers (Mechanical APDL, Fluent, LS-DYNA, and many others), but also data from third-party solvers or any tool that produces simulation results in a compatible format. DPF ships with built-in support for Ansys result files as well as widely used open formats like VTK/VTU, HDF5, and CSV. See the full [Supported file formats](https://dpf.docs.pyansys.com/version/stable/introduction.html#id6) table. Because DPF is plugin-based, support for additional formats can be added by writing a custom reader plugin.

**What DPF cannot process**:
Raw CAD and geometry formats (IGES, STEP, CATIA, and similar) fall outside DPF's scope. CAD geometry describes shape - continuous surfaces and solids - without the discrete numerical fields that DPF's data model is built around. There is currently no DPF equivalent for pure geometry data.

## How does it process data

The "Data Processing" in DPF refers to how it transforms simulation data through **operators** - individual processing functions that each perform a specific task. Think of operators as specialized tools that work on your data.

**Three main types of operators exist:**

- **Data readers**: Read and load data from files such as simulation result files (e.g. RST, CAS, HDF5, D3PLOT, H5, RES files...)
- **Data transformers**: Create new data by processing existing data (filtering, mapping, compression, mathematics...)
- **Data writers**: Export and write data to files or visualization formats (e.g. HDF5, CSV, VTU...)

**Building workflows with operators:**

Each operator takes inputs, performs its specific operation, and produces outputs. You create data processing workflows by chaining operators together: the output of one becomes the input to the next.

For example, a simple workflow might be:
```
Read Results
  → Extract Stress
    → Filter by Component
      → Find Maximum Value
        → Export to HDF5
```

Each step in this chain is performed by a different operator, working together to transform your raw simulation data into the specific results you need.

## Why is it called a framework

The "Framework" in DPF refers to how it's structured to be extensible and organized. Unlike a simple collection of functions, a framework defines how components work together and can be extended.

**DPF is a framework because:**

- **Plugin-based architecture**: DPF's operators are organized into plugins that package related capabilities together. Core plugins provide fundamental operations (reading files, filtering data, math operations), while specialized plugins add domain-specific capabilities (composites analysis, multiphysics mapping, sound processing). This modular design means you can extend DPF by adding new plugins with custom operators for your specific needs.

- **Standardized interfaces**: Work consistently across different file formats and data sources using the same programming patterns. The framework ensures all operators follow the same input-output conventions.

- **Composability**: The framework allows you to build complex data processing pipelines by connecting simple operators together, creating powerful workflows from basic building blocks.

## Why use DPF

- **Automation and reusability**: Create processes once and apply them to different datasets, load cases, or projects. Automate repetitive post-processing tasks that would otherwise require manual work in a GUI.

- **Multiple language support**: Access DPF through Python, C++, C#, or within Ansys Mechanical, allowing integration with your existing tools and workflows.

- **Physics independence**: DPF processes data in a generalized manner based on its structure (fields, meshes, time series), not its physical meaning. This makes it versatile across structural, thermal, fluid, and other physics domains.

- **Scalability**: Efficiently handle large datasets and complex simulations with optimized data processing and memory management.

- **Integration flexibility**: As a standalone toolbox, DPF can be integrated into other software environments and automated workflows.
