---
uid: Ans.DataProcessing.operators.math.pow_fc
---

# pow_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes element-wise field[i]^p.

available inputs: `fields_container` (FieldsContainer), `factor` (double)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = pow_fc()

op = pow_fc(fields_container=my_fields_container,factor=my_factor)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Field for which to compute power operation

**Type:** *LinkableInput*

### factor

Power exponent value

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with power operation applied element-wise

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
pow_fc()
```

#### Constructor

```python
pow_fc(fields_container, factor, config)
```

**Parameters:**

- `fields_container` (*object*)
- `factor` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
pow_fc(config)
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
