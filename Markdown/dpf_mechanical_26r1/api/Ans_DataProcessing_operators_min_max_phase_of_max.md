---
uid: Ans.DataProcessing.operators.min_max.phase_of_max
title: phase_of_max
---

# phase_of_max Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Evaluates phase of maximum.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double)
            available outputs: field (Field)

phase_of_max()
phase_of_max(real_field: object, imaginary_field: object, abs_value: object, phase_increment: object, config: OperatorConfig)
phase_of_max(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
phase_of_max()
```

#### Constructor

```python
phase_of_max(real_field, imaginary_field, abs_value, phase_increment, config)
```

**Parameters:**

- `real_field` (*object*)
- `imaginary_field` (*object*)
- `abs_value` (*object*)
- `phase_increment` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
phase_of_max(config)
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
