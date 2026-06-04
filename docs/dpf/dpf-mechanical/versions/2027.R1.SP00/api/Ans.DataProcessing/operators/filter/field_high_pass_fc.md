---
uid: Ans.DataProcessing.operators.filter.field_high_pass_fc
---

# *class* field_high_pass_fc(fields_container: object = None, threshold: object = None, both: object = None, config: OperatorConfig = None)

The high pass filter returns all the values above (but not equal to) the threshold value in input.

available inputs: `fields_container` (FieldsContainer), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [field_high_pass_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/field_high_pass_fc.md)

**Parameters:**

* **fields_container**
* **threshold**
* **both**
* **config**

**Example:**

```python
op = field_high_pass_fc()

op = field_high_pass_fc(fields_container=my_fields_container,threshold=my_threshold,both=my_both)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### threshold

A threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

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
