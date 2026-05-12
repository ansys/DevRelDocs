---
uid: Ans.DataProcessing.operators.math.make_one_on_comp
---

# *class* make_one_on_comp(fieldA: object = None, scalar_int: object = None, config: OperatorConfig = None)

Takes the input field's scoping and creates a field full of zeros, except for the indexes from pin 1 that will hold 1.0.

available inputs: `fieldA` (Field), `scalar_int` (Int32)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_one_on_comp operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/make_one_on_comp.md)

**Parameters:**

* **fieldA**
* **scalar_int**
* **config**

**Example:**

```python
op = make_one_on_comp()

op = make_one_on_comp(fieldA=my_fieldA,scalar_int=my_scalar_int)
```

## Inputs

### fieldA

**Type:** *LinkableInput*

### scalar_int

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
