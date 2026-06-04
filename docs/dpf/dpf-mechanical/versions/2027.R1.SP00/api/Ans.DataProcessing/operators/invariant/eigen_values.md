---
uid: Ans.DataProcessing.operators.invariant.eigen_values
---

# *class* eigen_values(field: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen values of a tensor field.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [eigen_values operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/eigen_values.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = eigen_values()

op = eigen_values(field=my_field)
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
