---
uid: Ans.DataProcessing.operators.utility.merge_fields_by_label
---

# merge_fields_by_label Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Merges the fields of a fields container that share the same label value.

available inputs: `fields_container` (FieldsContainer), `label` (string), `merged_field_support` (AbstractFieldSupport) (optional), `sum_merge` (bool) (optional)

available outputs: `fields_container` (FieldsContainer), `merged_field_support` (AbstractFieldSupport)

## Example

```python
op = merge_fields_by_label()

op = merge_fields_by_label(fields_container=my_fields_container,label=my_label,merged_field_support=my_merged_field_support,sum_merge=my_sum_merge)
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

## Outputs

### fields_container

**Type:** *LinkableOutput*

### merged_field_support

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_fields_by_label()
```

#### Constructor

```python
merge_fields_by_label(fields_container, label, merged_field_support, sum_merge, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `merged_field_support` (*object*)
- `sum_merge` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_fields_by_label(config)
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
