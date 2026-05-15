---
uid: Ans.DataProcessing.operators.utility.unitary_field
---

# *class* unitary_field(field: object = None, config: OperatorConfig = None)

Takes a field and returns another field of scalars in the same location and scoping as the input field.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [unitary_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/unitary_field.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = unitary_field()

op = unitary_field(field=my_field)
```

## Inputs

### field

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
