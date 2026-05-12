---
uid: Ans.DataProcessing.operators.filter.abc_weightings
---

# *class* abc_weightings(fields_container: object = None, weighting_type: object = None, shape_by_tf_scoping: object = None, config: OperatorConfig = None)

Computes ABC-weightings for the amplitude spectrum in dB units.

available inputs: `fields_container` (FieldsContainer), `weighting_type` (Int32), `shape_by_tf_scoping` (bool)

available outputs: `weightings` (FieldsContainer)

**DPF Framework Reference:** [abc_weightings operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/abc_weightings.md)

**Parameters:**

* **fields_container**
* **weighting_type**
* **shape_by_tf_scoping**
* **config**

**Example:**

```python
op = abc_weightings()

op = abc_weightings(fields_container=my_fields_container,weighting_type=my_weighting_type,shape_by_tf_scoping=my_shape_by_tf_scoping)
```

## Inputs

### fields_container

data to be weighted in dB units equipped with cumulative ids in the scoping.

**Type:** *LinkableInput*

### weighting_type

if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed.

**Type:** *LinkableInput*

### shape_by_tf_scoping

if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false

**Type:** *LinkableInput*

## Outputs

### weightings

weighted data in dB units.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
