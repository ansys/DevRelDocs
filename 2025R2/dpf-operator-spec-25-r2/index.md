# Introduction

This documentation provides a comprehensive guide of the DPF framework as well as all DPF operators available in ANSYS-made DPF plugins. It is organized into key sections, including core concepts, getting started tutorials, and detailed documentation of available operators. Whether you are new to DPF or looking for information on operators, this guide offers the necessary resources to understand and use DPF effectively in your workflows.

# Overview of DPF

Ansys Data Processing Framework (DPF) provides numerical simulation users and engineers with a toolbox for accessing and transforming simulation data.
With DPF, you can perform complex preprocessing or postprocessing of large amounts of simulation data within a simulation workflow.

DPF is an independent, physics-agnostic tool that you can plug into many apps for both data input and data output, including visualization and result plots.
The following table shows an exhaustive list of solver apps supported by DPF and their related formats:

|     **Solver**     |    **File format**              |   **DPF version required**       |
|--------------------|---------------------------------|-------------------------------------|
| MAPDL              | .rst, .mode, .rth, .rfrq, .rdsp | **1.0** (*2021 R1*) and later       |
| MAPDL              | .psd, .prs                      | **10.0** (*2025 R2 pre0*) and later |
| LS DYNA            | .d3plot, .binout                | **4.0** (*2022 R2*) and later       |
| FLUENT             | .cas/dat.h5, .flprj             | **7.0** (*2024 R1 pre0*) and later  |
| CFX                | .res, .flprj                    | **7.0** (*2024 R1 pre0*) and later  |

Using the many DPF operators that are available, you can manipulate and transform this data.
You can also chain operators together to create simple or complex data-processing workflows that you can reuse for repeated or future evaluations.

The data in DPF is defined based on physics-agnostic mathematical quantities described in self-sufficient entities called **fields**.
This allows DPF to be a modular and easy-to-use tool with a large range of capabilities.

![dpf-flow](../images/dpf-flow.png)


## Advantages

**Computational efficiency**

DPF is a modern framework based on new hardware architectures.
Thanks to continued development, new capabilities are frequently added.

**Generic interface**

DPF is physics-agnostic, which means that its use is not limited to a particular field, physics solution, or file format.

**Extensibility and customization**

DPF is developed around two core entities:

- Data represented as a **field**
- An **operator** to act upon this data

Each DPF capability is developed through operators that allow for componentization of the framework. Because DPF is plugin-based, new features or formats can be easily added.
