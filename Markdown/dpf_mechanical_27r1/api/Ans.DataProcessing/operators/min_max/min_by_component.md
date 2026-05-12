---
uid: Ans.DataProcessing.operators.min_max.min_by_component
---

# *class* min_by_component(use_absolute_value: object = None, field1: object = None, field2: object = None, config: OperatorConfig = None)

Give the minimum for each element rank by comparing several fields.

available inputs: `use_absolute_value` (bool), `field1` (Field, FieldsContainer), `field2` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [min_by_component operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_by_component.md)

**Parameters:**

* **use_absolute_value**
* **field1**
* **field2**
* **config**

**Example:**

```python
op = min_by_component()

op = min_by_component(use_absolute_value=my_use_absolute_value,field1=my_field1,field2=my_field2)
```

## Inputs

### use_absolute_value

use_absolute_value

**Type:** *LinkableInput*

### field1

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field2

field or fields container with only one field is expected

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
