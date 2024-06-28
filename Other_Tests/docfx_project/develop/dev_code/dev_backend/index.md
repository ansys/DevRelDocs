# Develop the backend

> ##### Summary
> 
> Develop the backend by declaring the solution, creating the workflow, and building the individual step models.

<a id="what"></a>

## What?

When developing a solution application, you use Python to construct a *solution definition*: a data schema of steps and methods in the backend. Developing the backend involves making the following changes to the solution definition:

* declaring the solution
* creating the solution workflow
* building the step models

<a id="where"></a>

## Where?

When you generate a solution using the `ansys-templates` tool, the solution definition is created in the `solution` directory:

```default
src
└── ansys
    └── solutions
        └── <solution_name>
            └── solution
                ├── method_assets
                ├── definition.py
                ├── first_step.py
                └── second_step.py
```

By default, the `solution` directory contains the following items:

| Name | Description |
|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `method_assets`                                          | Folder for script files to be accessed by the `AssetFileReference` class and<br/>used by the solution methods.   |
| `definition.py`                                          | Solution definition template for declaring the solution and creating its workflow.                               |
| `first_step.py`<br/><br/><br/>`second_step.py`<br/><br/> | Step module templates for building the first two steps in the workflow.                                          |

<a id="how"></a>

## How?

Developing the backend involves the following steps:

Declare the solution in the solution definition module.

Create the workflow by creating and adding steps.

Build each step model in the corresponding step module.

<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
