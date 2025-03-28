# Miscellaneous

This page covers all Ansys products that don';t neatly fit into a single product collection. Ansys System Coupling, for example, facilitates coupling of multiple solvers in a single solution and fits reasonably well into Structures, Electronics or Fluids, as a consequence.

## Workbench 

Ansys Workbench provides journaling capability in Python. The Python interpreter doubles up as a method of performing Python scripting within the application. There is also an interactive interpreter that can interactively interact with the application and a PyAnsys library: PyWorkbench.

[PyWorkbench Docs (PyAnsys)](https://workbench.docs.pyansys.com/)

### Ansys Workbench training material 

* [Scripting for Mechanical Engineers](https://developer.ansys.com/blog/scripting-mechanical-engineers)

### Non-Ansys Workbench training material 

* [Webinar: Scripting with Ansys Workbench: 2011 (PADT)](https://www.youtube.com/watch?v=61DQdMMUuH4)

## Multi-physics examples 

There are multi-physics examples being collated in a specific PyAnsys workflow repository.

[PyAnsys workflows Documentation (PyAnsys)](https://workflows.docs.pyansys.com/)

## System coupling

Ansys System Coupling has two main developer tools associated with it: the participant libraries and PySystemCoupling. The former are closed-source libraries available in multiple languages and the latter is an OSS library that's part of PyAnsys.

* [System Coupling Participant Libraries](https://developer.ansys.com/docs/system-coupling)
* [PySystemCoupling (PyAnsys)](https://systemcoupling.docs.pyansys.com/)

## Data Processing Framework (DPF) 

DPF is a Python library tool that's available within a lot of Ansys applications. DPF has multiple developer tools associated with it and includes a C++/C# client library, a Python Result Object accessed through ACT, and three PyAnsys libraries.

* [Data Processing Framework (DPF) for developers](https://developer.ansys.com/docs/dpf)
* [PyDPF - Core Docs (PyAnsys)](https://dpf.docs.pyansys.com/version/stable/index.html)
* [PyDPF - Post Docs (PyAnsys)](https://post.docs.pyansys.com/version/stable/index.html)
* [PyDPF - Composites Docs (PyAnsys)](https://composites.dpf.docs.pyansys.com/version/stable/index.html)

### Ansys DPF training material 

* [Introduction to Ansys Data Processing Framework (ALH)](https://www.ansys.com/training-center/course-catalog/structures/introduction-to-ansys-data-processing-framework)
* [PyDPF: Contour Plots for Named Selections (Self-paced Learning Available) (ALH)](https://www.ansys.com/training-center/course-catalog/structures/pydpf-contour-plots-for-named-selections)
* [Reconstructing specific APDL results with DPF](https://medium.com/ansys-developer/reconstructing-specific-apdl-results-with-dpf-19627939a287)
* [PyAnsys Training: PyDPF Examples and Use Cases](https://www.youtube.com/watch?v=PWjnQrLCfBk)

### Non-Ansys DPF training material 

* [PyAnsys Tutorial – Exporting Ansys Results in 3D File Formats, Part 1 (PADT)](https://www.padtinc.com/2023/07/06/pyansys-tutorial-3d-files-part-1/)

## Dynamic Reporting 

["Ansys Dynamic Reporting (ADR) is the report-generation, analytics, and data-storage framework integrated into the multiple Ansys products. It is a web-oriented collection of tools that allows you to bring all of your data together in one place, organize it, and create compelling reports for yourself, your engineers, your colleagues, and your customers."](https://nexusdemo.ensight.com/docs/en/html/Nexus.html)

There are two primary Ansys Dynamic Reporting Python interfaces and the PyAnsys OSS library PyDynamicReporting:

* [EnSight Python Ansys Dynamic Reporting API](https://nexusdemo.ensight.com/docs/en/html/EnSightPythonADRAPI.html)
  * Integrated into Ensight Python interpreter
* [External Python API](https://nexusdemo.ensight.com/docs/en/html/ExternalPythonAPI.html)
  * Can be used inside and out of the internal intepreter
* [PyDynamicReporting Docs (PyAnsys)](https://dynamicreporting.docs.pyansys.com/)

### Ansys Dynamic Reporting training material 

* [A Guide to Streamlining CFD Simulations and Reporting](https://developer.ansys.com/blog/guide-streamlining-cfd-simulations-and-reporting)
* [Embedding PyDynamicReporting into applications](https://developer.ansys.com/blog/embedding-pydynamicreporting-applications)
* [Ansys Dynamic Reporting: generate a custom number of plots with any number of variables](https://developer.ansys.com/blog/ansys-dynamic-reporting-generate-custom-number-plots-any-number-variables )
* [How to manipulate report HTML: a user example](https://developer.ansys.com/blog/how-manipulate-report-html-user-example)
* [Ansys Dynamic Reporting HowTos](https://nexusdemo.ensight.com/docs/en/html/DynamicReportingHowTos.html)

## Geometry 

The Ansys Geometry Service has an OSS PyAnsys library called PyAnsys Geometry.

[PyAnsys Geometry Docs (PyAnsys)](https://geometry.docs.pyansys.com/version/stable/getting_started/index.html#)

### Ansys Geometry training material 

* [PyAnsys Training: PyGeometry and Workflow Examples](https://www.youtube.com/watch?v=FhyI-FfOvmE)
* [Scripting in Ansys Discovery Modeling](https://innovationspace.ansys.com/product/scripting-in-ansys-discovery-modeling/)
* [Advanced Scripting in Ansys Discovery](https://innovationspace.ansys.com/product/advanced-scripting-in-ansys-discovery/)

## Prime Mesh 

Ansys Prime Mesh provides core Ansys meshing technology that can be used to build meshes of different types for various physics simulations.

* [Ansys Prime Mesh for developers](https://developer.ansys.com/docs/primemesh)
* [PyPrimeMesh Docs (PyAnsys)](https://prime.docs.pyansys.com/version/stable/)

Developers can interface with Prime Mesh through two options using the Ansys Prime Server:

1. The open source Ansys PyPrimeMesh Python client to access the meshing APIs
2. The Ansys Prime Mesh Python client library available in the Ansys installation  

These two have feature parity.

### Ansys Prime Mesh training material

* [PyAnsys Training: Overview of PyPrimeMesh](https://www.youtube.com/watch?v=uBQkw8JoO-A)

## Charge Plus

See Ansys Discovery.

## Ansys Composite PrepPost (ACP)

* [Ansys Composite PrepPost (ACP) for developers](https://developer.ansys.com/docs/acp)
* [PyACP (PyAnsys)](https://acp.docs.pyansys.com/version/dev/)

## High Performance Computation (HPC) Platform Services
HPS has REST APIs and the OSS PyAnsys library PyHPS.

[PyHPS Docs (PyAnsys)](https://hps.docs.pyansys.com/)

## PyAnsys Math

PyAnsys Math aims to gather all mathematical calculation tools present in Ansys software and uses the MAPDL solver in the background.

[PyAnsys Math (PyAnsys)](https://math.docs.pyansys.com/)

## Product Instance Management (PIM)

PyPIM exposes a Pythonic interface to communicate with the Product Instance Management (PIM) API.

[PyPIM Docs (PyAnsys)](https://pypim.docs.pyansys.com/version/stable/)

## SimAI 

SimAI has an associated PyAnsys library in the form of PySimAI.

[PySimAI Docs (PyAnsys)](https://simai.docs.pyansys.com/)

### Ansys SimAI Training 

* [PyAnsys Training: Overview of PySimAI](https://www.youtube.com/watch?v=AeTL76GyMRI)

## PyAnsys Shared Components 

Collection of components shared across PyAnsys.

[PyAnsys Shared Components Docs (PyAnsys)](https://shared.docs.pyansys.com/)

## Ansys Notebook 

Ansys Notebook is a jupyter-like environment that provides access to Ansys solvers via the web and PyAnsys.

[Ansys Notebook for Developers](https://developer.ansys.com/docs/notebook)
