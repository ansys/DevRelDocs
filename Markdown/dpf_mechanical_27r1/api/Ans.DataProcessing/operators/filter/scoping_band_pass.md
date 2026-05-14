---
uid: Ans.DataProcessing.operators.filter.scoping_band_pass
---

# *class* scoping_band_pass(field: object = None, min_threshold: object = None, max_threshold: object = None, config: OperatorConfig = None)

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

available inputs: `field` (Field, FieldsContainer), `min_threshold` (double, Field), `max_threshold` (double, Field) (optional)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [scoping_band_pass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_band_pass.md)

**Parameters:**

* **field**
* **min_threshold**
* **max_threshold**
* **config**

**Example:**

```python
op = scoping_band_pass()

op = scoping_band_pass(field=my_field,min_threshold=my_min_threshold,max_threshold=my_max_threshold)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### min_threshold

A minimum threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### max_threshold

A maximum threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

## Outputs

### scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
