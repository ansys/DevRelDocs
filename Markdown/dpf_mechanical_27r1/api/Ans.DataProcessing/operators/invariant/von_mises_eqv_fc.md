---
uid: Ans.DataProcessing.operators.invariant.von_mises_eqv_fc
---

# *class* von_mises_eqv_fc(fields_container: object = None, poisson_ratio: object = None, config: OperatorConfig = None)

Computes the element-wise Von-Mises criteria on all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer), `poisson_ratio` (double, Int32)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [von_mises_eqv_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/von_mises_eqv_fc.md)

**Parameters:**

* **fields_container**
* **poisson_ratio**
* **config**

**Example:**

```python
op = von_mises_eqv_fc()

op = von_mises_eqv_fc(fields_container=my_fields_container,poisson_ratio=my_poisson_ratio)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### poisson_ratio

Poisson ratio to be used in equivalent strain calculation.

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
