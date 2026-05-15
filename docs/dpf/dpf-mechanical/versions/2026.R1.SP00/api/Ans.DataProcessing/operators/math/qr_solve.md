---
uid: Ans.DataProcessing.operators.math.qr_solve
---

# qr_solve Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the solution using QR factorization.

available inputs: `fields_container` (FieldsContainer), `rhs` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = qr_solve()

op = qr_solve(fields_container=my_fields_container,rhs=my_rhs)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### rhs

fields_container

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
qr_solve()
```

#### Constructor

```python
qr_solve(fields_container, rhs, config)
```

**Parameters:**

- `fields_container` (*object*)
- `rhs` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
qr_solve(config)
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
