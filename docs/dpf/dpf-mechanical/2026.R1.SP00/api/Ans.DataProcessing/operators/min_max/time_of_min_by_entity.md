---
uid: Ans.DataProcessing.operators.min_max.time_of_min_by_entity
---

# time_of_min_by_entity Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

## Summary

Evaluates time/frequency of minimum.

available inputs: `fields_container` (FieldsContainer), `abs_value` (bool) (optional), `compute_amplitude` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = time_of_min_by_entity()

op = time_of_min_by_entity(fields_container=my_fields_container,abs_value=my_abs_value,compute_amplitude=my_compute_amplitude)
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

### abs_value

Should use absolute value.

**Type:** *LinkableInput*

### compute_amplitude

Do calculate amplitude.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
time_of_min_by_entity()
```

#### Constructor

```python
time_of_min_by_entity(fields_container, abs_value, compute_amplitude, config)
```

**Parameters:**

- `fields_container` (*object*)
- `abs_value` (*object*)
- `compute_amplitude` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_of_min_by_entity(config)
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
