---
uid: Ans.DataProcessing.operators.math.window_bartlett_fc
---

# *class* window_bartlett_fc(fields_container: object = None, config: OperatorConfig = None)

Apply bartlett windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [window_bartlett_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/window_bartlett_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = window_bartlett_fc()

op = window_bartlett_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
