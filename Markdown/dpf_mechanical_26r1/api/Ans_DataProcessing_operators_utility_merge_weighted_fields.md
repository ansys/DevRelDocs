---
uid: Ans.DataProcessing.operators.utility.merge_weighted_fields
title: merge_weighted_fields
---

# merge_weighted_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of fields into a unique one, applying a weight on the sum of the fields.   ///available inputs: sum_merge (bool) (optional), merged_support (AbstractFieldSupport) (optional), fields1 (Field, FieldsContainer), fields2 (Field, FieldsContainer), weights1 (PropertyField), weights2 (PropertyField)
            available outputs: merged_field (Field)

merge_weighted_fields()
merge_weighted_fields(sum_merge: object, merged_support: object, fields1: object, fields2: object, weights1: object, weights2: object, config: OperatorConfig)
merge_weighted_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
