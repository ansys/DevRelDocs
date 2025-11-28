---
uid: Ans.DataProcessing.operators.math.accumulate
title: accumulate
---

# accumulate Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Sums all the elementary data of a field to produce one elementary data point.   ///available inputs: fieldA (Field, FieldsContainer), weights (Field) (optional), time_scoping (Scoping) (optional)
            available outputs: field (Field)

accumulate()
accumulate(fieldA: object, weights: object, time_scoping: object, config: OperatorConfig)
accumulate(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
accumulate()
```

#### Constructor

```python
accumulate(fieldA, weights, time_scoping, config)
```

**Parameters:**

- `fieldA` (*object*)
- `weights` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulate(config)
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
