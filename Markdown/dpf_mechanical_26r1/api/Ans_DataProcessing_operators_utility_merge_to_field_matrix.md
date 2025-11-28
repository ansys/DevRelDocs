---
uid: Ans.DataProcessing.operators.utility.merge_to_field_matrix
title: merge_to_field_matrix
---

# merge_to_field_matrix Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of fields into a field matrix.   ///available inputs: fields1 (Field, FieldsContainer), fields2 (Field, FieldsContainer)
            available outputs: merged_field_matrix (Field)

merge_to_field_matrix()
merge_to_field_matrix(fields1: object, fields2: object, config: OperatorConfig)
merge_to_field_matrix(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_to_field_matrix()
```

#### Constructor

```python
merge_to_field_matrix(fields1, fields2, config)
```

**Parameters:**

- `fields1` (*object*)
- `fields2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_to_field_matrix(config)
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
