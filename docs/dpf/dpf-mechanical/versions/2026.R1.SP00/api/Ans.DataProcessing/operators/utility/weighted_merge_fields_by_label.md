---
uid: Ans.DataProcessing.operators.utility.weighted_merge_fields_by_label
---

# weighted_merge_fields_by_label Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Performs a weighted merge on fields of a fields container that share the same label value.

available inputs: `fields_container` (FieldsContainer), `label` (string), `merged_field_support` (AbstractFieldSupport) (optional), `sum_merge` (bool) (optional), `weights1` (PropertyField), `weights2` (PropertyField)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = weighted_merge_fields_by_label()

op = weighted_merge_fields_by_label(fields_container=my_fields_container,label=my_label,merged_field_support=my_merged_field_support,sum_merge=my_sum_merge,weights1=my_weights1,weights2=my_weights2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
weighted_merge_fields_by_label()
```

#### Constructor

```python
weighted_merge_fields_by_label(fields_container, label, merged_field_support, sum_merge, weights1, weights2, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `merged_field_support` (*object*)
- `sum_merge` (*object*)
- `weights1` (*object*)
- `weights2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
weighted_merge_fields_by_label(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
