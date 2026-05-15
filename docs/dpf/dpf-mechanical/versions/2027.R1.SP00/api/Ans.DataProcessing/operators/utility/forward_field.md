---
uid: Ans.DataProcessing.operators.utility.forward_field
---

# *class* forward_field(field: object = None, config: OperatorConfig = None)

Returns the input field or fields container.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [forward_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/forward_field.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = forward_field()

op = forward_field(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Forwarded field (passthrough of input)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
