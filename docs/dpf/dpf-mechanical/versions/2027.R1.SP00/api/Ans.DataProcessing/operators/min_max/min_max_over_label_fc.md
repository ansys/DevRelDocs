---
uid: Ans.DataProcessing.operators.min_max.min_max_over_label_fc
---

# *class* min_max_over_label_fc(fields_container: object = None, label: object = None, config: OperatorConfig = None)

Groups the fields of the input fields container by the given label and, within each group, computes the per-component minimum and maximum across all fields of the group.

If the label is not set or does not exist in the fields container, the operation runs over all fields as a single group.

Outputs:

- Pins 0 and 1: fields of per-group, per-component minima and maxima. Their scoping is the set of label ids (or a single entity when no label applies).

- Pins 2 and 3 (optional): for each output entry, the id of one remaining label of the input fields container corresponding to the field that provided the minimum and maximum, respectively.

- Pins 4 and 5: for each output entry, the input scoping id of the entity within the source field that provided the minimum and maximum.

Input fields with no data are excluded from the output.

Within each input field, all elementary values contribute to the per-group reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** fields in the container are indexed by one or more labels (for example `body`, `zone`) and you want one per-component extremum per label id, collapsing every entity of each group into a single output entry.

Example: peak of each stress component per body when the container is labelled by body id.

Without a label, all entities of all fields collapse into a single output entity, equivalent to `min_max(min_max_fc(...))`.

Use `min_max_by_entity` to keep entity resolution instead, or `min_max_fc` to keep per-field resolution.

available inputs: `fields_container` (FieldsContainer), `label` (string)

available outputs: `field_min` (Field), `field_max` (Field), `domain_ids_min` (Scoping), `domain_ids_max` (Scoping), `scoping_ids_min` (Scoping), `scoping_ids_max` (Scoping)

**DPF Framework Reference:** [min_max_over_label_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_label_fc.md)

**Parameters:**

* **fields_container**
* **label**
* **config**

**Example:**

```python
op = min_max_over_label_fc()

op = min_max_over_label_fc(fields_container=my_fields_container,label=my_label)
```

## Inputs

### fields_container

Fields container whose fields are grouped by the label passed on pin 1.

**Type:** *LinkableInput*

### label

Name of the label used to group the fields of the input fields container. If not set or not present, all fields are used as a single group.

**Type:** *LinkableInput*

## Outputs

### field_min

Field of per-group, per-component minima. Scoped on the label ids used for grouping.

**Type:** *LinkableOutput*

### field_max

Field of per-group, per-component maxima. Scoped on the label ids used for grouping.

**Type:** *LinkableOutput*

### domain_ids_min

For each entry of the output minimum field, the id of one remaining label of the input fields container from the field that provided the minimum. Populated only when the input fields container has more than one label.

**Type:** *LinkableOutput*

### domain_ids_max

For each entry of the output maximum field, the id of one remaining label of the input fields container from the field that provided the maximum. Populated only when the input fields container has more than one label.

**Type:** *LinkableOutput*

### scoping_ids_min

For each entry of the output minimum field, the input scoping id of the entity within the source field that provided the minimum.

**Type:** *LinkableOutput*

### scoping_ids_max

For each entry of the output maximum field, the input scoping id of the entity within the source field that provided the maximum.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
