# Execute the solution

> ##### Summary
> 
> Execute the solution application using the `saf run` command.
<br/>
1. Activate the solution’s virtual environment.
   ```bash
   .venv\Scripts\Activate.ps1
   ```

   ```bash
   .venv\Scripts\activate.bat
   ```

   ```bash
   source .venv/bin/activate
   ```
2. Start the solution:
   ```python
   saf run
   ```

   #### NOTE
   The `saf run` command automatically detects the entry point of the solution, which is expected to be `ansys/solutions/<solution_name>/main.py`.

   If your solution has a different structure or `main.py` is renamed, use the `--solution` argument to specify the correct module using dot notation:
   ```python
   saf run --solution custom.namespace.module_with_main_function
   ```

   ```python
    saf run --solution ansys.solutions.glow.glow_main
   ```

   ```python
   saf run --solution abc_corp.apps.super_sim.main
   ```

This starts the solution stack. For details, see [Solution servers](https://laughing-couscous-1w1we9z.pages.github.io/version/dev/user_guide/servers.html#servers) in the SAF documentation.

After closing the running solution stack and making changes to the solution, you can rerun this command to view your changes in the user interface.

#### SEE ALSO
For more information on the `saf-run` command, see [SAF run options](https://laughing-couscous-1w1we9z.pages.github.io/version/dev/user_guide/run.html) in the SAF documentation.

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
