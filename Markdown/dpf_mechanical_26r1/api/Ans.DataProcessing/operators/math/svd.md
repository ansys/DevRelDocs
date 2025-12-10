---
uid: Ans.DataProcessing.operators.math.svd
---

# svd Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `s_svd` (FieldsContainer), `u_svd` (FieldsContainer), `vt_svd` (FieldsContainer)

## Example

```python
op = svd()

op = svd(fields_container=my_fields_container)
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

## Outputs

### s_svd

Singular values of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

### u_svd

U of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

### vt_svd

Vt of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
svd()
```

#### Constructor

```python
svd(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
svd(config)
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
