---
uid: Ans.DataProcessing.operators.min_max.min_max_by_entity
---

# *class* min_max_by_entity(fields_container: object = None, config: OperatorConfig = None)

Computes, for each entity and each component, the minimum and the maximum across all fields of the input fields container.

Entity ids are matched across fields.

A field is skipped for a given entity if that entity id is not present in its scoping;

if the entity id has not been seen in any prior field, it is added to the output with the current field data.

Fields with no data are skipped entirely.

The outputs share the same scoping as the first non-empty input field, augmented with any entity ids first seen in later fields.

Within each input field, all elementary values contribute to the per-entity reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** you want to keep the entity axis while reducing over the fields axis.

Example: envelope of nodal stress across load cases, giving one min/max value per node and per component.

Use `min_max_fc` to get one summary per field instead, or `min_max_over_time_by_entity` when the fields are indexed by a `time` label.

available inputs: `fields_container` (FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max_by_entity operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_entity.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = min_max_by_entity()

op = min_max_by_entity(fields_container=my_fields_container)
```

## Inputs

### fields_container

Fields container whose fields are aggregated per entity and per component.

**Type:** *LinkableInput*

## Outputs

### field_min

Field of per-entity, per-component minima across all input fields.

**Type:** *LinkableOutput*

### field_max

Field of per-entity, per-component maxima across all input fields.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
