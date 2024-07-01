# Create the business logic

> ##### Summary
> 
> Create the business logic needed to solve your specific engineering problem.

<a id="what"></a>

## What?

The *business logic* of a solution application controls how it operates, determining how it handles data validation, calculations, decision-making, and other operations. Creating the business logic involves creating the methods needed to solve the engineering problem your solution is designed to address.

<a id="where"></a>

## Where?

When you generate a solution using the `ansys-templates` tool, this logic layer resides in the solution’s `logic` directory.

```default
src
└── ansys
    └── solutions
        └── <solution_name>
            └── logic
                └── assets
```

By default, the `logic` directory contains an `assets` folder for storing assets that are needed by the business logic, such as input decks.

<a id="how"></a>

## How?

You may place your methods directly in the `logic` folder or organize them into a hierarchy of folders that reflect different parts of the solution. For example, your solution could have a folder structure and contents similar to this:

```default
src
└── ansys
    └── solutions
        └── <solution_name>
            └── logic
                ├── assets
                │   └── leaf360_for_script.scdoc
                ├── report
                │   └── report_items.py
                │   └── report_templates.py
                ├── cad_viewer.py
                ├── maxwell2D.py
                ├── session_setup.py
                ├── thermal.py
                └── utils.py
```

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
