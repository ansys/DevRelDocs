---
uid: Ans.DataProcessing.operators.math.time_derivation
title: time_derivation
---

# time_derivation Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Derives a field of time varying quantities with respect to time   ///available inputs: field (Field), spline_fitting (bool) (optional)
            available outputs: field (Field)

time_derivation()
time_derivation(field: object, spline_fitting: object, config: OperatorConfig)
time_derivation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
time_derivation()
```

#### Constructor

```python
time_derivation(field, spline_fitting, config)
```

**Parameters:**

- `field` (*object*)
- `spline_fitting` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_derivation(config)
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
