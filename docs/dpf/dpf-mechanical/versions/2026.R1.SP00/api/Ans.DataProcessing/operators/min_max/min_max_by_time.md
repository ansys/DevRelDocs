---
uid: Ans.DataProcessing.operators.min_max.min_max_by_time
---

# min_max_by_time Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

## Summary

Evaluates minimum, maximum by time or frequency over all the entities of each field

available inputs: `fields_container` (FieldsContainer), `compute_absolute_value` (bool) (optional)

available outputs: `min` (FieldsContainer), `max` (FieldsContainer)

## Example

```python
op = min_max_by_time()

op = min_max_by_time(fields_container=my_fields_container,compute_absolute_value=my_compute_absolute_value)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### compute_absolute_value

Calculate the absolute value of field entities before computing the min/max.

**Type:** *LinkableInput*

## Outputs

### min

**Type:** *LinkableOutput*

### max

**Type:** *LinkableOutput*

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
