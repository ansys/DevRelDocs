---
uid: Ans.DataProcessing.operators.math.norm_fc
---

# norm_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the element-wise L2 norm of the field elementary data. This process is applied on each field of the input fields container.

available inputs: `fields_container` (FieldsContainer), `scalar_int` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = norm_fc()

op = norm_fc(fields_container=my_fields_container,scalar_int=my_scalar_int)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### scalar_int

Lp normalisation type, p = 1, 2, ...n - Default Lp=2

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
norm_fc()
```

#### Constructor

```python
norm_fc(fields_container, scalar_int, config)
```

**Parameters:**

- `fields_container` (*object*)
- `scalar_int` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
norm_fc(config)
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
