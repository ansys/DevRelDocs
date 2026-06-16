---
uid: Ans.DataProcessing.operators.invariant.segalman_von_mises_eqv
---

# *class* segalman_von_mises_eqv(field: object = None, config: OperatorConfig = None)

Computes the element-wise Segalman Von-Mises criteria on a tensor field.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [segalman_von_mises_eqv operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/segalman_von_mises_eqv.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = segalman_von_mises_eqv()

op = segalman_von_mises_eqv(field=my_field)
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
