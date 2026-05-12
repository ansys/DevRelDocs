---
uid: Ans.DataProcessing.operators.min_max.phase_of_max
---

# *class* phase_of_max(real_field: object = None, imaginary_field: object = None, abs_value: object = None, phase_increment: object = None, config: OperatorConfig = None)

Evaluates phase of maximum.

available inputs: `real_field` (Field), `imaginary_field` (Field), `abs_value` (bool) (optional), `phase_increment` (double)

available outputs: `field` (Field)

**DPF Framework Reference:** [phase_of_max operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/phase_of_max.md)

**Parameters:**

* **real_field**
* **imaginary_field**
* **abs_value**
* **phase_increment**
* **config**

**Example:**

```python
op = phase_of_max()

op = phase_of_max(real_field=my_real_field,imaginary_field=my_imaginary_field,abs_value=my_abs_value,phase_increment=my_phase_increment)
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

Phase increment.

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
