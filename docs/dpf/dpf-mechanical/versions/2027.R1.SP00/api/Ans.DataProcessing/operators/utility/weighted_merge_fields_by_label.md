---
uid: Ans.DataProcessing.operators.utility.weighted_merge_fields_by_label
---

# *class* weighted_merge_fields_by_label(fields_container: object = None, label: object = None, merged_field_support: object = None, sum_merge: object = None, weights1: object = None, weights2: object = None, config: OperatorConfig = None)

Performs a weighted merge on fields of a fields container that share the same label value.

available inputs: `fields_container` (FieldsContainer), `label` (string), `merged_field_support` (AbstractFieldSupport) (optional), `sum_merge` (bool) (optional), `weights1` (PropertyField), `weights2` (PropertyField)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [weighted_merge_fields_by_label operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/weighted_merge_fields_by_label.md)

**Parameters:**

* **fields_container**
* **label**
* **merged_field_support**
* **sum_merge**
* **weights1**
* **weights2**
* **config**

**Example:**

```python
op = weighted_merge_fields_by_label()

op = weighted_merge_fields_by_label(fields_container=my_fields_container,label=my_label,merged_field_support=my_merged_field_support,sum_merge=my_sum_merge,weights1=my_weights1,weights2=my_weights2)
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

### weights1

Weights to apply to each field from pin 1000 to ...

**Type:** *LinkableInput*

### weights2

Weights to apply to each field from pin 1000 to ...

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
