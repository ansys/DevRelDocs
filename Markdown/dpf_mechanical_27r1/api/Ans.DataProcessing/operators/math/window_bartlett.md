---
uid: Ans.DataProcessing.operators.math.window_bartlett
---

# *class* window_bartlett(field: object = None, config: OperatorConfig = None)

Apply bartlett windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field ,FieldsContainer)

**DPF Framework Reference:** [window_bartlett operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/window_bartlett.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = window_bartlett()

op = window_bartlett(field=my_field)
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
