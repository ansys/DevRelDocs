---
uid: Ans.DataProcessing.operators.math.norm
---

# norm Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the element-wise Lp norm of the field elementary data. Default Lp=L2

available inputs: `field` (Field, FieldsContainer), `scalar_int` (Int32) (optional)

available outputs: `field` (Field)

## Example

```python
op = norm()

op = norm(field=my_field,scalar_int=my_scalar_int)
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

### scalar_int

Lp normalisation type, p = 1, 2, ...n - Default Lp=L2

**Type:** *LinkableInput*

## Outputs

### field

Scalar field containing the Lp norm values for each element

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
norm()
```

#### Constructor

```python
norm(field, scalar_int, config)
```

**Parameters:**

- `field` (*object*)
- `scalar_int` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
norm(config)
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
