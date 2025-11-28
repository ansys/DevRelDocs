---
uid: Ans.DataProcessing.operators.utility.merge_string_fields
title: merge_string_fields
---

# merge_string_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of string fields into a unique one.   ///available inputs: string_fields1 (StringField), string_fields2 (StringField)
            available outputs: string_field (StringField)

merge_string_fields()
merge_string_fields(string_fields1: object, string_fields2: object, config: OperatorConfig)
merge_string_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_string_fields()
```

#### Constructor

```python
merge_string_fields(string_fields1, string_fields2, config)
```

**Parameters:**

- `string_fields1` (*object*)
- `string_fields2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_string_fields(config)
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
