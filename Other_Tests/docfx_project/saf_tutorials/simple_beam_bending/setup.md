# Setup

Setup is the second phase of the solution development lifecycle. Here, you’ll need to address two key steps:

### 1️⃣ Creation

### Why?

To start working on your solution, you need to generate a minimal solution from which you will build your own logic.

Objective
: Generate the minimal solution using `ansys-templates`.

### How?

Action

1. Start VS Code and open a new terminal.
2. Create the solution with `ansys-templates` using the following command:
   ```bash
   ansys-templates new solution -s simple-beam-bending -d "Simple Beam Bending" -u
   ```
3. Check the current working directory for a new folder named `simple-beam-bending`.

### 2️⃣ Installation

### Why?

A solution application lives in its own virtual environment where the necessary packages are installed because:

* It allows the solution developer and the end user to run locally multiple solutions
  concurrently with different sets of requirements without getting dependency conflicts.
* It keeps the system Python interpreter clean.

Objective
: Install the solution’s Python virtual environment.

### How?

Action

1. Navigate to the solution directory and run the `setup_environment.py` script:
   ```bash
   python setup_environment.py -d all -lw <saf_wheels_directory>
   ```
2. Once the script execution completes, activate the virtual environment:
   * Windows CMD:
     > ```bash
     > .venv\Scripts\activate.bat
     > ```
   * Windows PowerShell:
     > ```bash
     > .venv\Scripts\Activate.ps1
     > ```
   * Linux:
     > ```bash
     > source .venv/bin/activate
     > ```
3. [Optional] Check the contents of the virtual environment using `pip`:
   ```bash
   pip list
   ```
4. The `simple-beam-bending` solution requires `numpy`. Add the package to the virtual environment using `poetry`:
   ```bash
   poetry add numpy==1.24.4 -vv
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
