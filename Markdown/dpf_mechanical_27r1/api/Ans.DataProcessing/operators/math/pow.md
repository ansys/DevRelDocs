---
uid: Ans.DataProcessing.operators.math.pow
---

# *class* pow(field: object = None, factor: object = None, division_by_zero_value: object = None, config: OperatorConfig = None)

Computes element-wise field[i]^p.

available inputs: `field` (Field), `factor` (double), `division_by_zero_value` (double) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [pow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/pow.md)

**Parameters:**

* **field**
* **factor**
* **division_by_zero_value**
* **config**

**Example:**

```python
op = pow()

op = pow(field=my_field,factor=my_factor,division_by_zero_value=my_division_by_zero_value)
```

## Inputs

### field

Field for which to compute power operation

**Type:** *LinkableInput*

### factor

Power exponent value

**Type:** *LinkableInput*

### division_by_zero_value

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
