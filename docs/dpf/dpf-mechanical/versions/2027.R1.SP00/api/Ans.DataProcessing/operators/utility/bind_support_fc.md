---
uid: Ans.DataProcessing.operators.utility.bind_support_fc
---

# *class* bind_support_fc(fields_container: object = None, support: object = None, config: OperatorConfig = None)

Ties a support to a fields container.

available inputs: `fields_container` (FieldsContainer), `support` (MeshedRegion, AbstractFieldSupport, TimeFreqSupport)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [bind_support_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/bind_support_fc.md)

**Parameters:**

* **fields_container**
* **support**
* **config**

**Example:**

```python
op = bind_support_fc()

op = bind_support_fc(fields_container=my_fields_container,support=my_support)
```

## Inputs

### fields_container

Fields container to which the support will be attached

**Type:** *LinkableInput*

### support

Meshed region, support, or time frequency support to attach to the fields container

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the attached support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
