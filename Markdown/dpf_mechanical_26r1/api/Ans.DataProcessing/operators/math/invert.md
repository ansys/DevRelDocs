---
uid: Ans.DataProcessing.operators.math.invert
---

# invert Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

DEPRECATED, PLEASE USE DIVIDE. Computes the element-wise and component-wise inverse of a field (1./x).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

## Example

```python
op = invert()

op = invert(field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field with inverse values (1/x) applied element-wise to input data

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
invert()
```

#### Constructor

```python
invert(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
invert(config)
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
