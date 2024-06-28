# Build the step models

> ##### Summary
> 
> Build the step models by adding step fields and transaction methods to trigger the appropriate processes in the backend.
<br/>

In the `solution` directory, edit each step module in the [solution workflow](dev_workflow.md#dev-workflow)).

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

By default, a step module contains the following step model template:

```python
from ansys.saf.glow.solution import StepModel, StepSpec, transaction


class FirstStep(StepModel):
    """Step definition of the first step."""

    first_arg: float = 0
    second_arg: float = 0
    result: float = 0

    @transaction(self=StepSpec(upload=["result"], download=["first_arg", "second_arg"]))
    def calculate(self) -> None:
        """Compute the sum of two numbers."""
        self.result = self.first_arg + self.second_arg
```

<a id="add-step-fields"></a>

## Add step fields

<a id="define-transaction-methods"></a>

## Define transaction methods

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
