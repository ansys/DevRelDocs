---
uid: Ans.DataProcessing.operators.math.window_triangular_fc
---

# *class* window_triangular_fc(fields_container: object = None, config: OperatorConfig = None)

Apply triangular windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [window_triangular_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/window_triangular_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = window_triangular_fc()

op = window_triangular_fc(fields_container=my_fields_container)
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
