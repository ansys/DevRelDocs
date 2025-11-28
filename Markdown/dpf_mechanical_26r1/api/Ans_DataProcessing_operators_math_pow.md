---
uid: Ans.DataProcessing.operators.math.pow
title: pow
---

# pow Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes element-wise field[i]^p.   ///available inputs: field (Field), factor (double)
            available outputs: field (Field)

pow()
pow(field: object, factor: object, config: OperatorConfig)
pow(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
pow()
```

#### Constructor

```python
pow(field, factor, config)
```

**Parameters:**

- `field` (*object*)
- `factor` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
pow(config)
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
