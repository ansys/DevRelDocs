---
uid: Ans.DataProcessing.operators.min_max.max_over_phase
---

# *class* max_over_phase(real_field: object = None, imaginary_field: object = None, abs_value: object = None, phase_increment: object = None, config: OperatorConfig = None)

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.

available inputs: `real_field` (Field), `imaginary_field` (Field), `abs_value` (bool) (optional), `phase_increment` (double) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [max_over_phase operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/max_over_phase.md)

**Parameters:**

* **real_field**
* **imaginary_field**
* **abs_value**
* **phase_increment**
* **config**

**Example:**

```python
op = max_over_phase()

op = max_over_phase(real_field=my_real_field,imaginary_field=my_imaginary_field,abs_value=my_abs_value,phase_increment=my_phase_increment)
```

## Inputs

### real_field

**Type:** *LinkableInput*

### imaginary_field

**Type:** *LinkableInput*

### abs_value

Should use absolute value.

**Type:** *LinkableInput*

### phase_increment

Phase increment (default is 10.0 degrees).

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
