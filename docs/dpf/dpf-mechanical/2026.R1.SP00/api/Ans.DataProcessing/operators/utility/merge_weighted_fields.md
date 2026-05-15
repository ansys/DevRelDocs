---
uid: Ans.DataProcessing.operators.utility.merge_weighted_fields
---

# merge_weighted_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of fields into a unique one, applying a weight on the sum of the fields.

available inputs: `sum_merge` (bool) (optional), `merged_support` (AbstractFieldSupport) (optional), `fields1` (Field, FieldsContainer), `fields2` (Field, FieldsContainer), `weights1` (PropertyField), `weights2` (PropertyField)

available outputs: `merged_field` (Field)

## Example

```python
op = merge_weighted_fields()

op = merge_weighted_fields(sum_merge=my_sum_merge,merged_support=my_merged_support,fields1=my_fields1,fields2=my_fields2,weights1=my_weights1,weights2=my_weights2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### sum_merge

Default is false. If true, redundant quantities are summed instead of being ignored.

**Type:** *LinkableInput*

### merged_support

Already merged field support.

**Type:** *LinkableInput*

### fields1

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

### fields2

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

### weights1

Weights to apply to each field from pin 1000 to ...

**Type:** *LinkableInput*

### weights2

Weights to apply to each field from pin 1000 to ...

**Type:** *LinkableInput*

## Outputs

### merged_field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_weighted_fields()
```

#### Constructor

```python
merge_weighted_fields(sum_merge, merged_support, fields1, fields2, weights1, weights2, config)
```

**Parameters:**

- `sum_merge` (*object*)
- `merged_support` (*object*)
- `fields1` (*object*)
- `fields2` (*object*)
- `weights1` (*object*)
- `weights2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_weighted_fields(config)
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
