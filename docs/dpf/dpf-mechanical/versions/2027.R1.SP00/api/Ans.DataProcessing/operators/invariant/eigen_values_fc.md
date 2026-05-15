---
uid: Ans.DataProcessing.operators.invariant.eigen_values_fc
---

# *class* eigen_values_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen values of all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [eigen_values_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/eigen_values_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = eigen_values_fc()

op = eigen_values_fc(fields_container=my_fields_container)
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
