---
uid: Ans.DataProcessing.operators.math.unit_convert_fc
---

# *class* unit_convert_fc(fields_container: object = None, unit_name: object = None, config: OperatorConfig = None)

Converts an input fields container of a given unit to another unit.

available inputs: `fields_container` (FieldsContainer), `unit_name` (string)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [unit_convert_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/unit_convert_fc.md)

**Parameters:**

* **fields_container**
* **unit_name**
* **config**

**Example:**

```python
op = unit_convert_fc()

op = unit_convert_fc(fields_container=my_fields_container,unit_name=my_unit_name)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### unit_name

unit as a string, ex 'm' for meter, 'Pa' for pascal,...

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer with converted units (inplace operation)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
