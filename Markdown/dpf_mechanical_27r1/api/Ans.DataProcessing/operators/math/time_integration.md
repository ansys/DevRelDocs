---
uid: Ans.DataProcessing.operators.math.time_integration
---

# *class* time_integration(field: object = None, resample_output: object = None, absolute_error: object = None, minimum_step_size: object = None, integration_constant: object = None, config: OperatorConfig = None)

Integrates a field of time varying quantities over time

available inputs: `field` (Field), `resample_output` (bool) (optional), `absolute_error` (double) (optional), `minimum_step_size` (double) (optional), `integration_constant` (double) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [time_integration operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/time_integration.md)

**Parameters:**

* **field**
* **resample_output**
* **absolute_error**
* **minimum_step_size**
* **integration_constant**
* **config**

**Example:**

```python
op = time_integration()

op = time_integration(field=my_field,resample_output=my_resample_output,absolute_error=my_absolute_error,minimum_step_size=my_minimum_step_size,integration_constant=my_integration_constant)
```

## Inputs

### field

field

**Type:** *LinkableInput*

### resample_output

Resample the output

**Type:** *LinkableInput*

### absolute_error

Absolute error for the resampling

**Type:** *LinkableInput*

### minimum_step_size

Minimum time step size for the resamplig

**Type:** *LinkableInput*

### integration_constant

Constant to be added to the integrated field

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
