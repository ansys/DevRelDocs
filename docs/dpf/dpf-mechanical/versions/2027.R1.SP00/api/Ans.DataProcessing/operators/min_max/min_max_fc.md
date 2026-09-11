---
uid: Ans.DataProcessing.operators.min_max.min_max_fc
---

# *class* min_max_fc(fields_container: object = None, config: OperatorConfig = None)

Computes, for each field of the input fields container and for each component, the minimum and the maximum across all entities of that field.

Also known as component-wise min/max over a fields container.

The output minimum (pin 0) and maximum (pin 1) are fields with one entity per input field.

Each entity holds, for each component, the min or max value found in the corresponding input field.

The entity ids in the output scoping are the input field indices in the fields container.

Within each input field, all elementary values contribute to the reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** you want one per-component summary per field of the container, without reducing across fields.

Example: peak of each stress component per body when the container groups fields by body id.

Use `min_max` for a single field, `min_max_by_entity` to keep per-entity resolution across fields, or `min_max_over_label_fc` to group fields by label before reducing.

available inputs: `fields_container` (FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = min_max_fc()

op = min_max_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Fields container over which per-field, per-component minima and maxima are computed.

**Type:** *LinkableInput*

## Outputs

### field_min

Field of per-field, per-component minima. One entity per input field.

**Type:** *LinkableOutput*

### field_max

Field of per-field, per-component maxima. One entity per input field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
