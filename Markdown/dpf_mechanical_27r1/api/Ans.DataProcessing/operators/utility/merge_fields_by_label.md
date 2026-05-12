---
uid: Ans.DataProcessing.operators.utility.merge_fields_by_label
---

# *class* merge_fields_by_label(fields_container: object = None, label: object = None, merged_field_support: object = None, sum_merge: object = None, config: OperatorConfig = None)

Merges the fields of a fields container that share the same label value.

available inputs: `fields_container` (FieldsContainer), `label` (string), `merged_field_support` (AbstractFieldSupport) (optional), `sum_merge` (bool) (optional)

available outputs: `fields_container` (FieldsContainer), `merged_field_support` (AbstractFieldSupport)

**DPF Framework Reference:** [merge_fields_by_label operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_fields_by_label.md)

**Parameters:**

* **fields_container**
* **label**
* **merged_field_support**
* **sum_merge**
* **config**

**Example:**

```python
op = merge_fields_by_label()

op = merge_fields_by_label(fields_container=my_fields_container,label=my_label,merged_field_support=my_merged_field_support,sum_merge=my_sum_merge)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### label

Label identifier that should be merged.

**Type:** *LinkableInput*

### merged_field_support

The FieldsContainer's support that has already been merged.

**Type:** *LinkableInput*

### sum_merge

Default is false. If true, redundant quantities are summed instead of being ignored.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

### merged_field_support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
