# Declare the solution

> ##### Summary
> 
> Declare the solution by updating the solution definition module with the solution name.
<br/>

By default, the `definition.py` module contains the following solution declaration:

```python
from ansys.saf.glow.solution import Solution, StepsModel

from ansys.solutions.desktop_solution_test.solution.first_step import FirstStep
from ansys.solutions.desktop_solution_test.solution.second_step import SecondStep

class Steps(StepsModel):
    """Workflow definition."""

    first_step: FirstStep
    second_step: SecondStep

class Desktop_Solution_TestSolution(Solution):
    """Solution definition."""

    display_name: str = "my-desktop-solution"
    steps: Steps
```

To declare your solution, update `definition.py` with your solution name. For instance, a solution named **Compass Thermal Solution** could have the following declaration:

```python
from ansys.saf.glow.solution import Solution, StepsModel

from ansys.solutions.desktop_solution_test.solution.first_step import FirstStep
from ansys.solutions.compass_thermal_solution.solution.second_step import SecondStep

class Steps(StepsModel):
    """Workflow definition."""

    first_step: FirstStep
    second_step: SecondStep

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
