# Miscellaneous

This page covers all Ansys products that don't fit neatly into a single product collection. For example, Ansys System Coupling couples multiple solvers in a single solution and fits reasonably well into structures, electronics, or fluids.

## Workbench 

Ansys Workbench provides Python journaling capabilities. The Python interpreter enables Python scripting within the application. It also includes an interpreter that interacts with the application and PyWorkbench, an open-source PyAnsys library.

[PyWorkbench documentation (PyAnsys)](https://workbench.docs.pyansys.com/)

### Ansys Workbench training material 

* [Scripting for Mechanical Engineers](https://developer.ansys.com/blog/scripting-mechanical-engineers)

### Non-Ansys Workbench training material 

* [Webinar: Scripting with Ansys Workbench: 2011 (PADT)](https://www.youtube.com/watch?v=61DQdMMUuH4)

## Multi-physics examples 

The PyAnsys workflow repository contains multi-physics examples.

[PyAnsys workflows documentation (PyAnsys)](https://workflows.docs.pyansys.com/)

## System coupling

Ansys System Coupling provides two main developer tools: participant libraries and PySystemCoupling. The participant libraries are closed-source and available in multiple languages. PySystemCoupling is an open-source PyAnsys library.

* [System coupling for developers (Developer portal documentation)](https://developer.ansys.com/docs/system-coupling)
* [PySystemCoupling documentation (PyAnsys)](https://systemcoupling.docs.pyansys.com/)

## Data Processing Framework (DPF) 

DPF is a Python library tool available within many Ansys applications. DPF includes multiple developer tools, such as a C++/C# client library, a Python result object accessed through ACT, and three PyAnsys libraries.

* [Data Processing Framework (DPF) for developers (Developer Portal documentation)](https://developer.ansys.com/docs/dpf)
* [PyDPF-Core documentation (PyAnsys)](https://dpf.docs.pyansys.com/version/stable/index.html)
* [PyDPF-Post documentation (PyAnsys)](https://post.docs.pyansys.com/version/stable/index.html)
* [PyDPF Composites documentation (PyAnsys)](https://composites.dpf.docs.pyansys.com/version/stable/index.html)

### Ansys DPF training material 

* [Introduction to Ansys Data Processing Framework (ALH)](https://www.ansys.com/training-center/course-catalog/structures/introduction-to-ansys-data-processing-framework)
* [PyDPF: Contour Plots for Named Selections (ALH)](https://www.ansys.com/training-center/course-catalog/structures/pydpf-contour-plots-for-named-selections)
* [Reconstructing specific APDL results with DPF](https://medium.com/ansys-developer/reconstructing-specific-apdl-results-with-dpf-19627939a287)
* [PyAnsys Training: PyDPF Examples and Use Cases](https://www.youtube.com/watch?v=PWjnQrLCfBk)

### Non-Ansys DPF training material 

* [PyAnsys Tutorial – Exporting Ansys Results in 3D File Formats, Part 1 (PADT)](https://www.padtinc.com/2023/07/06/pyansys-tutorial-3d-files-part-1/)

## Dynamic Reporting 

Ansys Dynamic Reporting (ADR) is the report-generation, analytics, and data-storage framework integrated into multiple Ansys products. It is a web-oriented collection of tools you use to bring all your data together in one place, organize it, and create compelling reports for yourself, your engineers, your colleagues, and your customers.

There are two primary ADR Python interfaces and PyDynamicReporting, a PyAnsys OSS library.

* [EnSight Python Ansys Dynamic Reporting API](https://nexusdemo.ensight.com/docs/en/html/EnSightPythonADRAPI.html)
  * This API integrates into the Ensight Python interpreter.
* [External Python API](https://nexusdemo.ensight.com/docs/en/html/ExternalPythonAPI.html)
  * This external Python API is provided by the Python interpreter included in the CEI/Ansys distributions. It can be used inside and outside the internal interpreter.
* [PyDynamicReporting documentation (PyAnsys)](https://dynamicreporting.docs.pyansys.com/)

### Ansys Dynamic Reporting training material 

* [A Guide to Streamlining CFD Simulations and Reporting](https://developer.ansys.com/blog/guide-streamlining-cfd-simulations-and-reporting)
* [Embedding PyDynamicReporting into applications](https://developer.ansys.com/blog/embedding-pydynamicreporting-applications)
* [Ansys Dynamic Reporting: generate a custom number of plots with any number of variables](https://developer.ansys.com/blog/ansys-dynamic-reporting-generate-custom-number-plots-any-number-variables )
* [How to manipulate report HTML: a user example](https://developer.ansys.com/blog/how-manipulate-report-html-user-example)
* [Ansys Dynamic Reporting HowTos](https://nexusdemo.ensight.com/docs/en/html/DynamicReportingHowTos.html)

## Geometry 

The Ansys Geometry Service includes PyAnsys Geometry, an open-source PyAnsys library.

[PyAnsys Geometry documentation (PyAnsys)](https://geometry.docs.pyansys.com/version/stable/index.html)

### Ansys Geometry training material 

* [PyAnsys Training: PyGeometry and Workflow Examples](https://www.youtube.com/watch?v=FhyI-FfOvmE)
* [Scripting in Ansys Discovery Modeling (AIS)](https://innovationspace.ansys.com/product/scripting-in-ansys-discovery-modeling/)
* [Advanced Scripting in Ansys Discovery (AIS)](https://innovationspace.ansys.com/product/advanced-scripting-in-ansys-discovery/)

## Prime Mesh 

Ansys Prime Mesh provides core Ansys meshing technology for building meshes of different types for various physics simulations.

* [Ansys Prime Mesh for developers (Developer Portal documentation)](https://developer.ansys.com/docs/primemesh)
* [PyPrimeMesh documentation (PyAnsys)](https://prime.docs.pyansys.com/version/stable/)

Developers can interface with Prime Mesh through two options using the Ansys Prime Server:

* The open-source Ansys PyPrimeMesh Python client to access the meshing APIs
* The Ansys Prime Mesh Python client library available in the Ansys installation  

These two options have feature parity.

### Ansys Prime Mesh training material

* [PyAnsys Training: Overview of PyPrimeMesh](https://www.youtube.com/watch?v=uBQkw8JoO-A)

## Charge Plus

See Ansys Discovery.

## Ansys Composite PrepPost (ACP)

* [Ansys Composite PrepPost (ACP) for developers (Developer Portal documentation)](https://developer.ansys.com/docs/acp)
* [PyACP documentation (PyAnsys)](https://acp.docs.pyansys.com/version/dev/)

## High Performance Computation (HPC) Platform Services
HPS has REST APIs and PyHPS, an open-source PyAnsys library.

[PyHPS documentation (PyAnsys)](https://hps.docs.pyansys.com/)

## PyAnsys Math

PyAnsys Math gathers all mathematical calculation tools present in Ansys software and uses the MAPDL solver in the background.

[PyAnsys Math documentation (PyAnsys)](https://math.docs.pyansys.com/)

## Product Instance Management (PIM)

PyPIM exposes a Pythonic interface to communicate with the Product Instance Management (PIM) API.

[PyPIM documentation (PyAnsys)](https://pypim.docs.pyansys.com/version/stable/)

## SimAI 

SimAI has an associated PyAnsys library named PySimAI.

[PySimAI documentation (PyAnsys)](https://simai.docs.pyansys.com/)

### Ansys SimAI Training 

* [PyAnsys Training: Overview of PySimAI](https://www.youtube.com/watch?v=AeTL76GyMRI)

## PyAnsys Shared Components 

This open-source PyAnsys library provides a collection of components shared across the PyAnsys ecosystem.

[PyAnsys Shared Components documentation (PyAnsys)](https://shared.docs.pyansys.com/)

## Ansys Notebook 

Ansys Notebook is a Jupyter-like environment that provides access to Ansys solvers over the web using PyAnsys.

[Ansys Notebook for developers (Developer Portal documentation)](https://developer.ansys.com/docs/notebook)
