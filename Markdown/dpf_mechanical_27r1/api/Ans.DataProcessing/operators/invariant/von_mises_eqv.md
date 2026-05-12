---
uid: Ans.DataProcessing.operators.invariant.von_mises_eqv
---

# *class* von_mises_eqv(field: object = None, poisson_ratio: object = None, config: OperatorConfig = None)

Computes the element-wise Von-Mises criteria on a tensor field.

available inputs: `field` (Field, FieldsContainer), `poisson_ratio` (double, Int32)

available outputs: `field` (Field)

**DPF Framework Reference:** [von_mises_eqv operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/von_mises_eqv.md)

**Parameters:**

* **field**
* **poisson_ratio**
* **config**

**Example:**

```python
op = von_mises_eqv()

op = von_mises_eqv(field=my_field,poisson_ratio=my_poisson_ratio)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### poisson_ratio

Poisson ratio to be used in equivalent strain calculation.

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
