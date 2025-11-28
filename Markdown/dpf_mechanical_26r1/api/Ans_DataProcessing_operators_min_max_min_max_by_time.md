---
uid: Ans.DataProcessing.operators.min_max.min_max_by_time
title: min_max_by_time
---

# min_max_by_time Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Evaluates minimum, maximum by time or frequency over all the entities of each field   ///available inputs: fields_container (FieldsContainer), compute_absolute_value (bool) (optional)
            available outputs: min (FieldsContainer), max (FieldsContainer)

min_max_by_time()
min_max_by_time(fields_container: object, compute_absolute_value: object, config: OperatorConfig)
min_max_by_time(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_by_time()
```

#### Constructor

```python
min_max_by_time(fields_container, compute_absolute_value, config)
```

**Parameters:**

- `fields_container` (*object*)
- `compute_absolute_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_by_time(config)
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
