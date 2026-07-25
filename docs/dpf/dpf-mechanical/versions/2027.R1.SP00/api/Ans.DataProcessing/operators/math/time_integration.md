---
uid: Ans.DataProcessing.operators.math.time_integration
---

# *class* time_integration(field: object = None, resample_output: object = None, absolute_error: object = None, minimum_step_size: object = None, integration_constant: object = None, config: OperatorConfig = None)

Computes the cumulative [integral](https://en.wikipedia.org/wiki/Integral) of a scalar

time-varying field using adaptive numerical integration.

The input field must have a time-frequency support that provides the time values.

When `resample_output` (pin 1) is true, the output time steps are resampled by the integrator

(producing a new time support); when false, the output reuses the input time support.

The optional integration constant (pin 4) is added to all output values as an initial condition.

available inputs: `field` (Field), `resample_output` (bool) (optional), `absolute_error` (double) (optional), `minimum_step_size` (double) (optional), `integration_constant` (double) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [time_integration operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/time_integration.md)

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

Scalar time-varying field to integrate. Must have a time-frequency support.

**Type:** *LinkableInput*

### resample_output

When true, the output is resampled to an adaptively chosen set of time steps. When false (default), the output uses the same time support as the input.

**Type:** *LinkableInput*

### absolute_error

Absolute error tolerance for the resampling step. Only used when pin 1 is true.

**Type:** *LinkableInput*

### minimum_step_size

Minimum time step size allowed during resampling. Only used when pin 1 is true.

**Type:** *LinkableInput*

### integration_constant

Constant added to all integrated values as an initial condition. Default is $0$.

**Type:** *LinkableInput*

## Outputs

### field

Integrated scalar field. Has the same unit as (input unit $\times$ second). The time support is either the input support (when pin 1 is false) or a resampled support (when pin 1 is true).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
