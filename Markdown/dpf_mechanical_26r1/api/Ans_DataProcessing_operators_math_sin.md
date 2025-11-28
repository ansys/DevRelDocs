---
uid: Ans.DataProcessing.operators.math.sin
title: sin
---

# sin Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes element-wise sine function on field data: sin(field[i]).   ///available inputs: field (Field)
            available outputs: field (Field)

sin()
sin(field: object, config: OperatorConfig)
sin(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
sin()
```

#### Constructor

```python
sin(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sin(config)
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
