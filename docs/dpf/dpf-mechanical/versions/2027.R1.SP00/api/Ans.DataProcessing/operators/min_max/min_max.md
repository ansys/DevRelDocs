---
uid: Ans.DataProcessing.operators.min_max.min_max
---

# *class* min_max(field: object = None, config: OperatorConfig = None)

Computes, for each component of the input field, the minimum and the maximum across all entities.

Also known as component-wise min/max over a field.

The output minimum (pin 0) and maximum (pin 1) are scalar fields with one entity per component of the input.

Each entity id in the output scoping is the id of the input entity that holds the returned minimum or maximum value for that component.

Within the input field, all elementary values contribute to the reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

If the input is a fields container, it must contain exactly one field.

**When to use:** you have a single field and want the per-component extrema.

Example: peak of each stress component over the whole mesh at one time step.

Use `min_max_fc` when you have several fields and want one summary per field, or `min_max_by_entity` to keep the per-entity resolution while reducing over the fields axis.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = min_max()

op = min_max(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field_min

Scalar field of per-component minimum values. Its scoping ids point to the input entity that holds each minimum.

**Type:** *LinkableOutput*

### field_max

Scalar field of per-component maximum values. Its scoping ids point to the input entity that holds each maximum.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
