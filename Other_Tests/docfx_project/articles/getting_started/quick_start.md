<a id="saf-getting-started-quick-start"></a>

<a id="quick-start-guide"></a>

# Quick-start guide

> ##### Summary
> 
> Follow these steps to quickly create, set up, and run a minimal solution.

<a id="create"></a>

## Create

First, create the backbone of the solution.

#### NOTE
These commands must be executed from an initial base console environment, rather than within a virtual environment.

1. Install `ansys-templates`:
   ```bash
   python -m pip install ansys-templates
   ```
2. Create a solution in the current (default) directory:
   ```bash
   ansys-templates new solution -s <name-of-the-solution> -d <display-name-of-the-solution> -u
   ```

   A solution directory with the provided name is created in the current directory.
3. Move to the solution directory:
   ```bash
   cd <solution-name>
   ```

<a id="set-up"></a>

## Set up

Next, set up the Python ecosystem for the solution.

1. Install `toml` and `packaging` on your current system Python interpreter:
   ```bash
   pip install toml packaging
   ```
2. Install the Python ecosystem by specifying the SAF packages location:
   ```bash
   python setup_environment.py -d all -lw <saf_wheels_directory>
   ```

   #### NOTE
   In **Windows 10**, Version 1607 and earlier, there is a *maximum length for a path limitation* that is managed through the `MAX_PATH` environment variable. By default, this is defined as 260 characters. Either make sure that the `<saf_wheels_directory>` path length is less than this limit or adapt this limit following [these instructions](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=registry).

   A virtual environment named `.venv` is now available in the solution.
3. Activate the virtual environment:
   ```bash
   .venv\Scripts\activate.bat
   ```

   ```bash
   .venv\Scripts\Activate.ps1
   ```

   ```bash
   source .venv/bin/activate
   ```

<a id="run"></a>

## Run

Finally, run your solution application using the following command:

```bash
saf run
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
