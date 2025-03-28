# Structures

## Ansys Mechanical and MAPDL

Ansys' Mechanical product consists of two aspects: Mechanical and Mechanical APDL (MAPDL). MAPDL further consists of two constituent parts: the user interface which allows one to call and run APDL code, and APDL itself. APDL stands for "Ansys Parametric Design Language".

Ansys Mechanical and MAPDL are essentially two sides of the same coin, being two ways to access the same solver, and there are four principle developer tools associated with them plus a fifth that's only available as part of the Mechanical Premium & Enterprise products.

1. [ACT](https://developer.ansys.com/docs/mechanical-scripting-interface/index.md) - Available within Mechanical this is a Python scripting interface used for programmatically interacting with the Mechanical UI
2. APDL - FORTRAN-like scripting language that directly interacts with the underlying solver of both tools.
3. [PyMAPDL (PyAnsys)](https://mapdl.docs.pyansys.com/) - OSS Python wrapper for APDL that can call APDL commands from within Python scripts when installed alongside a compatible installation of MAPDL.
4. [PyMechanical (PyAnsys)](https://mechanical.docs.pyansys.com/) - OSS Python interface with the Mechanical UI. Has access to the .NET objects available in ACT.
5. [Ansys Rigid Body Dynamics](https://developer.ansys.com/docs/rigid-body-dynamics)

Ansys Rigid Body Dynamics is an analysis system within the Ansys Mechanical Premium and Enterprise products that takes the form of an IronPython library within ACT.

### Ansys Mechanical and MAPDL training material 

* [What is APDL?](https://www.ansys.com/blog/what-is-apdl)
* [Getting Started With PyMAPDL (AIC)](https://innovationspace.ansys.com/product/getting-started-with-ansys-pymapdl/)
* [Introduction to APDL Scripting (AIC)](https://innovationspace.ansys.com/product/intro-to-ansys-apdl-scripting/)
* [ML/AI Datasets using PyMAPDL (AIC)](https://innovationspace.ansys.com/product/ml-ai-datasets-using-pymapdl/)
* [Creating Modeling and Simulation Applications using PyAnsys (AIC)](https://innovationspace.ansys.com/product/developing-webapps-with-pymapdl/)
* [PyMAPDL Tutorial](https://tutorials.mapdl.docs.pyansys.com/tutorials/01-pymapdl.html)
* [PyAnsys Training: Overview of PyMAPDL and PyMechanical](https://www.youtube.com/watch?v=Qh4Y07OZdms)
* [PyAnsys Training: PyMADPL Examples and Use Cases](https://www.youtube.com/watch?v=H_i-O712wQE)
* [Exploring PyMechanical access methods: A brief overview](https://developer.ansys.com/blog/exploring-pymechanical-access-methods-brief-overview)
* [Introduction to Ansys ACT in Mechanical (ALH)](https://www.ansys.com/training-center/course-catalog/structures/introduction-to-ansys-act-mechanical)
* [Ansys Mechanical Scripting (ALH)](https://learninghub.ansys.com/learn/courses/902/ansys-mechanical-scripting)
* [Introduction to ACT Wizards (ALH)](https://www.ansys.com/training-center/course-catalog/structures/introduction-to-ansys-act-wizards)
* [Create a report from a saved Mechanical session](https://developer.ansys.com/blog/create-report-saved-mechanical-session-mechdb-or-mechdat)

### Non-Ansys Mechanical and MAPDL training material 

* [PADT Blog (PADT)](https://www.padtinc.com/blog-home/)
* [Using Ansys Scripting with pyMAPDL, pyDPF-Post, and More - PART 1: Running and Post-Processing and Ansys Model Outside Ansys (PADT)](https://www.padtinc.com/2022/07/18/ansys-scripting-python-p1-solve-post/)
  * [Part 2: Solving and post-processing ANSYS models in Python (PADT)](https://www.padtinc.com/2022/10/06/ansys-scripting-python-p2-solve-post/)
  * [Part 3: Creating Your Own Finite Element Solutions With Python (PADT)](https://www.padtinc.com/2023/01/12/ansys-scripting-python-p3-fe-solver/)
* [PyAnsys Scripting: Importing Geometry and Mapping Model Load Data from Rhino to Ansys (PADT)](https://www.padtinc.com/2023/04/07/pyansys-scripting-rhino-to-ansys/)
* [New Second Edition in Paperback and Kindle: Introduction to the ANSYS Parametric Design Language (APDL) (PADT)](https://www.padtinc.com/2016/08/29/new-second-edition-in-paperback-and-kindle-introduction-to-the-ansys-parametric-design-language-apdl/)
* [Using the ACT Console for Automation in Ansys Mechanical (PADT)](https://www.padtinc.com/2021/05/17/ansys-act-console-automation-ansys-mechanical/)
* [Developing Ansys ACT Apps for Ansys Mechanical Course by CADFEM (CADFEM)](https://www.cadfem.net/gb/en/shop/professional-development/training-elearning/trending-topics/developing-ansys-act-apps-for-ansys-mechanical-17601.html)
* [How to Install Ansys ACT Extensions in Mechanical (randsim)](https://resources.randsim.com/rand-simulation-solutions-blog/how-to-install-ansys-act-extensions-in-mechanical)

## LS-DYNA

LS-DYNA has an OSS Python interface in the form of PyDyna and is part of PyAnsys.

[PyDyna Documentation (PyAnsys)](https://dyna.docs.pyansys.com/version/stable/index.html)

## Sherlock

Ansys Sherlock has an OSS Python interface in the form of PySherlock.

[PySherlock Documentation (PyAnsys)](https://sherlock.docs.pyansys.com/)

### Ansys Sherlock training material

* [Installation & Usaged Demo (Beginner)](https://www.youtube.com/watch?v=ugiueYuNEKk)
* [Installation & Usaged Demo (Advanced)](https://www.youtube.com/watch?v=06s_tNvlOTM)

## Forming

There are no Forming developer tools available at this time.

However, Ansys Forming runs on the LS-Dyna solver, so see the section on LS-Dyna for more information.

## Motion

Ansys Motion has both a Preprocessor C# library and a Postprocessor C# library.

[Ansys Motion Docs Homepage](https://developer.ansys.com/docs/motion)

* [Preprocessor 2024r2](https://developer.ansys.com/docs/motion-standalone-preprocessor-c-sharp-library-2024-r2/index.md)
* [Postprocessor 2024r2](https://developer.ansys.com/docs/motion-standalone-postprocessor-c-sharp-library-2024-r2/index.md)

## PolyUMod

There are no developer tools available at this time.

## MCalibration

There are no developer tools available at this time.

## Autodyn

There are no developer tools available at this time.

## nCode DesignLife

There are no developer tools available at this time.
