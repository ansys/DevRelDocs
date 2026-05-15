---
uid: Ans.DataProcessing.operators.min_max.min_max
---

# min_max Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

## Summary

Compute the component-wise minimum (out 0) and maximum (out 1) over a field.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

## Example

```python
op = min_max()

op = min_max(field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
min_max()
```

#### Constructor

```python
min_max(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max(config)
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
