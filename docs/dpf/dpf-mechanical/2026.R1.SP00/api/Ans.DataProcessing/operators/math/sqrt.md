---
uid: Ans.DataProcessing.operators.math.sqrt
---

# sqrt Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes element-wise square root function on field data: sqrt(field[i]).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

## Example

```python
op = sqrt()

op = sqrt(field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field or fields container containing numeric data for square root calculation

**Type:** *LinkableInput*

## Outputs

### field

Field with square root values applied element-wise to input data

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
sqrt()
```

#### Constructor

```python
sqrt(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sqrt(config)
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
