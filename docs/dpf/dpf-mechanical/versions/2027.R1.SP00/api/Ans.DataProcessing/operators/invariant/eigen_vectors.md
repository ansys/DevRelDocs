---
uid: Ans.DataProcessing.operators.invariant.eigen_vectors
---

# *class* eigen_vectors(field: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen vectors for each tensor in the field.

available inputs: `field` (FieldsContainer, Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [eigen_vectors operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/eigen_vectors.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = eigen_vectors()

op = eigen_vectors(field=my_field)
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
