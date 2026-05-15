---
uid: Ans.DataProcessing.operators.filter.field_band_pass_fc
---

# *class* field_band_pass_fc(fields_container: object = None, min_threshold: object = None, max_threshold: object = None, config: OperatorConfig = None)

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

available inputs: `fields_container` (FieldsContainer), `min_threshold` (double, Field), `max_threshold` (double, Field) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [field_band_pass_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/field_band_pass_fc.md)

**Parameters:**

* **fields_container**
* **min_threshold**
* **max_threshold**
* **config**

**Example:**

```python
op = field_band_pass_fc()

op = field_band_pass_fc(fields_container=my_fields_container,min_threshold=my_min_threshold,max_threshold=my_max_threshold)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### min_threshold

A minimum threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### max_threshold

A maximum threshold scalar or a field containing one value is expected.

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
