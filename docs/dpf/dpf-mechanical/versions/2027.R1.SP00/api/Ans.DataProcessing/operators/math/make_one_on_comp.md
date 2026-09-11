---
uid: Ans.DataProcessing.operators.math.make_one_on_comp
---

# *class* make_one_on_comp(fieldA: object = None, scalar_int: object = None, config: OperatorConfig = None)

Returns a scalar field with the same scoping as the input field.

All values are set to $0.0$, except for entity at index $k$ in the scoping (pin 1) where the value is set to $1.0$.

This produces the standard basis vector $e_k$ over the input scoping.

The output is always scalar (one component per entity), regardless of the input field's dimensionality.

Note: $k$ is the zero-based iteration index within the field's scoping, not the entity ID.

available inputs: `fieldA` (Field), `scalar_int` (Int32)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_one_on_comp operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/make_one_on_comp.md)

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

Input field. Its scoping is used as the scoping of the output field.

**Type:** *LinkableInput*

### scalar_int

Zero-based iteration index $k$ of the entity to set to $1.0$.

**Type:** *LinkableInput*

## Outputs

### field

Scalar output field (one component per entity) with the same scoping as the input. All values are $0.0$ except the entity at iteration index $k$ which holds $1.0$.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
