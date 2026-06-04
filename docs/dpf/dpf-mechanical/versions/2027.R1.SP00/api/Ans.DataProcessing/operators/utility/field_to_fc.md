---
uid: Ans.DataProcessing.operators.utility.field_to_fc
---

# *class* field_to_fc(field: object = None, label: object = None, config: OperatorConfig = None)

Creates a fields container containing the field provided on pin 0.

available inputs: `field` (Field, FieldsContainer), `label` (LabelSpace)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [field_to_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/field_to_fc.md)

**Parameters:**

* **field**
* **label**
* **config**

**Example:**

```python
op = field_to_fc()

op = field_to_fc(field=my_field,label=my_label)
```

## Inputs

### field

If a fields container is set in input, it is passed on as an output with the additional label space (if any).

**Type:** *LinkableInput*

### label

Sets a label space.

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
