---
uid: Ans.DataProcessing.operators.utility.bind_support
---

# *class* bind_support(field: object = None, support: object = None, config: OperatorConfig = None)

Ties a support to a field.

available inputs: `field` (Field, FieldsContainer), `support` (MeshedRegion, AbstractFieldSupport)

available outputs: `field` (Field)

**DPF Framework Reference:** [bind_support operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/bind_support.md)

**Parameters:**

* **field**
* **support**
* **config**

**Example:**

```python
op = bind_support()

op = bind_support(field=my_field,support=my_support)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### support

Meshed region or a support of the field

**Type:** *LinkableInput*

## Outputs

### field

Field with the attached support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
