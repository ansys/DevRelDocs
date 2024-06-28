# Create the workflow

> ##### Summary
> 
> Create the workflow by creating step modules and adding the steps to the workflow definition.
<br/>

To create your solution workflow:

1. In the `solution` directory, create step modules for each step to be added:
   * Rename the two step module templates to reflect the first two steps of your solution.
   * If additional steps are needed, create and rename copies of an existing step module.

   For example, a solution named **Compass Thermal Solution** could have a `solution` directory with the following step modules:
   ```default
   src
   └── ansys
       └── solutions
           └── compass_thermal_solution
               └── solution
                   ├── method_assets
                   ├── electromagnetics_setup_step.py
                   ├── electromagnetics_results_step.py
                   ├── thermal_setup_step.py
                   ├── thermal_results_step.py
                   └── report_items_step.py
   ```
2. In the `definition.py` file:
   * Import the step modules.
   * Add the steps to the workflow definition.

   For example, the preceding **Compass Thermal Solution** would have the following imports and workflow definition:
   ```python
    from ansys.saf.glow.solution import Solution, StepsModel

    from ansys.solutions.compass_thermal_solution.solution.electromagnetics_setup_step import ElectromagneticsSetupStep
    from ansys.solutions.compass_thermal_solution.solution.electromagnetics_results_step import ElectromagneticsResultsStep
    from ansys.solutions.compass_thermal_solution.solution.thermal_setup_step import ThermalSetupStep
    from ansys.solutions.compass_thermal_solution.solution.thermal_results_step import ThermalResultsStep
    from ansys.solutions.compass_thermal_solution.solution.report_step import ReportStep

    class Steps(StepsModel):
        """Workflow definition."""

        electromagnetics_setup_step: ElectromagneticsSetupStep
        electromagnetics_results_step: ElectromagneticsResultsStep
        thermal_setup_step: ThermalSetupStep
        thermal_results_step: ThermalResultsStep
        report_step: ReportStep


    class Compass_Thermal_Solution(Solution):
        """Solution definition."""

        display_name: str = "compass-thermal-solution"
        steps: Steps
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
