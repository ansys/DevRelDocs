---
uid: Ans.DataProcessing.operators.math.component_wise_divide
---

# *class* component_wise_divide(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes component-wise fraction between two fields of same dimensionality. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely. When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [component_wise_divide operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_divide.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = component_wise_divide()

op = component_wise_divide(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

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
