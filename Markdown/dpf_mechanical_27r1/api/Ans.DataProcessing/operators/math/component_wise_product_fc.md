---
uid: Ans.DataProcessing.operators.math.component_wise_product_fc
---

# *class* component_wise_product_fc(fields_container: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes component-wise product between two fields of same dimensionality. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely. When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields.

available inputs: `fields_container` (FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [component_wise_product_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_product_fc.md)

**Parameters:**

* **fields_container**
* **fieldB**
* **config**

**Example:**

```python
op = component_wise_product_fc()

op = component_wise_product_fc(fields_container=my_fields_container,fieldB=my_fieldB)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

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
