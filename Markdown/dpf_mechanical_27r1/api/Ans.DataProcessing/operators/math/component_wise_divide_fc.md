---
uid: Ans.DataProcessing.operators.math.component_wise_divide_fc
---

# *class* component_wise_divide_fc(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

For every two fields with the same label space (from the two input fields containers), computes component-wise fraction between two fields of same dimensionality. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [component_wise_divide_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_divide_fc.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = component_wise_divide_fc()

op = component_wise_divide_fc(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

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
