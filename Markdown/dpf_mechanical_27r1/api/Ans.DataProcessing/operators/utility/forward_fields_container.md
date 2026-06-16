---
uid: Ans.DataProcessing.operators.utility.forward_fields_container
---

# *class* forward_fields_container(fields: object = None, config: OperatorConfig = None)

Returns the input field or fields container.

available inputs: `fields` (FieldsContainer, Field)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [forward_fields_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/forward_fields_container.md)

**Parameters:**

* **fields**
* **config**

**Example:**

```python
op = forward_fields_container()

op = forward_fields_container(fields=my_fields)
```

## Inputs

### fields

FieldsContainer or field to forward

**Type:** *LinkableInput*

## Outputs

### fields_container

Forwarded fields container (passthrough of input)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
