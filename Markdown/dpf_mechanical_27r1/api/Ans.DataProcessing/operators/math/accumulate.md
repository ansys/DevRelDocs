---
uid: Ans.DataProcessing.operators.math.accumulate
---

# *class* accumulate(fieldA: object = None, weights: object = None, time_scoping: object = None, config: OperatorConfig = None)

Reduces a field to a single entity by summing all entity data component-wise.

Without weights: $\mathrm{out}[c] = \sum_k \mathrm{field}[k, c]$ for each component $c$.

With an optional weights field (pin 1): $\mathrm{out}[c] = \sum_k w_k \cdot \mathrm{field}[k, c]$,

where $w_k$ is the weight for entity $k$.

The weights field must be a scalar (1D) field providing one weight per entity.

available inputs: `fieldA` (Field, FieldsContainer), `weights` (Field) (optional), `time_scoping` (Scoping) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [accumulate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate.md)

**Parameters:**

* **fieldA**
* **weights**
* **time_scoping**
* **config**

**Example:**

```python
op = accumulate()

op = accumulate(fieldA=my_fieldA,weights=my_weights,time_scoping=my_time_scoping)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

Field containing weights, one weight per entity

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### time_scoping

Optional scoping that sets the output entity's location and ID.

**Type:** *LinkableInput*

## Outputs

### field

Field with one entity containing the (weighted) component sums $\sum_k w_k \cdot \mathrm{field}[k, c]$ for each component $c$.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
