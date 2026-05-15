---
uid: Ans.DataProcessing.operators.math.mechanical.min_max_over_time
---

# min_max_over_time Class

**Namespace:** [Ans.DataProcessing.operators.math.mechanical](Ans_DataProcessing_operators_math_mechanical.md)

## Summary

Evaluates minimum/maximum over time/frequency.

available inputs: `fields_container` (FieldsContainer), `int32` (Int32)

available outputs: `field_container_1` (FieldsContainer), `field_container_2` (FieldsContainer)

## Example

```python
op = min_max_over_time()

op = min_max_over_time(fields_container=my_fields_container,int32=my_int32)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math.mechanical` |
| Assembly | `Ans_Dpf_Mechanical_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### int32

Define min or max.

**Type:** *LinkableInput*

## Outputs

### field_container_1

**Type:** *LinkableOutput*

### field_container_2

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
min_max_over_time()
```

#### Constructor

```python
min_max_over_time(fields_container, int32, config)
```

**Parameters:**

- `fields_container` (*object*)
- `int32` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_over_time(config)
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
