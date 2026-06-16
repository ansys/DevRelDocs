---
uid: Ans.DataProcessing.operators.utility.incremental_concatenate_as_fc
---

# *class* incremental_concatenate_as_fc(field: object = None, label: object = None, config: OperatorConfig = None)

Assemble fields in a fields container.

available inputs: `field` (Field), `label` (LabelSpace) (optional)

available outputs: `output` (FieldsContainer)

**DPF Framework Reference:** [incremental_concatenate_as_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/incremental_concatenate_as_fc.md)

**Parameters:**

* **field**
* **label**
* **config**

**Example:**

```python
op = incremental_concatenate_as_fc()

op = incremental_concatenate_as_fc(field=my_field,label=my_label)
```

## Inputs

### field

**Type:** *LinkableInput*

### label

Label space value that must be applied to the added field.

**Type:** *LinkableInput*

## Outputs

### output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
