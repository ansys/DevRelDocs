---
uid: Ans.DataProcessing.operators.math.qr_solve
---

# qr_solve Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the solution using QR factorization.   ///available inputs: fields_container (FieldsContainer), rhs (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

qr_solve()
qr_solve(fields_container: object, rhs: object, config: OperatorConfig)
qr_solve(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
