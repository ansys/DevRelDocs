---
uid: Ans.DataProcessing.operators.math.pow_fc
---

# *class* pow_fc(fields_container: object = None, factor: object = None, division_by_zero_value: object = None, config: OperatorConfig = None)

Computes element-wise field[i]^p.

available inputs: `fields_container` (FieldsContainer), `factor` (double), `division_by_zero_value` (double) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [pow_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/pow_fc.md)

**Parameters:**

* **fields_container**
* **factor**
* **division_by_zero_value**
* **config**

**Example:**

```python
op = pow_fc()

op = pow_fc(fields_container=my_fields_container,factor=my_factor,division_by_zero_value=my_division_by_zero_value)
```

## Inputs

### fields_container

Field for which to compute power operation

**Type:** *LinkableInput*

### factor

Power exponent value

**Type:** *LinkableInput*

### division_by_zero_value

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
