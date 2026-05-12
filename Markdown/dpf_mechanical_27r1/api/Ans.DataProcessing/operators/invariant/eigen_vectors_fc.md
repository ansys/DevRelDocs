---
uid: Ans.DataProcessing.operators.invariant.eigen_vectors_fc
---

# *class* eigen_vectors_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen vectors for each tensor in the fields of the field container.

available inputs: `fields_container` (FieldsContainer, Field)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [eigen_vectors_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/eigen_vectors_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = eigen_vectors_fc()

op = eigen_vectors_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

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
