---
uid: Ans.DataProcessing.operators.math.window_welch
---

# *class* window_welch(field: object = None, config: OperatorConfig = None)

Apply welch windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field ,FieldsContainer)

**DPF Framework Reference:** [window_welch operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/window_welch.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = window_welch()

op = window_welch(field=my_field)
```

## Inputs

### field

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
