---
uid: Ans.DataProcessing.operators.math.norm
---

# norm Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the element-wise Lp norm of the field elementary data. Default Lp=L2   ///available inputs: field (Field, FieldsContainer), scalar_int (Int32) (optional)
            available outputs: field (Field)

norm()
norm(field: object, scalar_int: object, config: OperatorConfig)
norm(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
