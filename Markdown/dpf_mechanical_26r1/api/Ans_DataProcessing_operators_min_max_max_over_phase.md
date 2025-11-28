---
uid: Ans.DataProcessing.operators.min_max.max_over_phase
title: max_over_phase
---

# max_over_phase Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double) (optional)
            available outputs: field (Field)

max_over_phase()
max_over_phase(real_field: object, imaginary_field: object, abs_value: object, phase_increment: object, config: OperatorConfig)
max_over_phase(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
max_over_phase()
```

#### Constructor

```python
max_over_phase(real_field, imaginary_field, abs_value, phase_increment, config)
```

**Parameters:**

- `real_field` (*object*)
- `imaginary_field` (*object*)
- `abs_value` (*object*)
- `phase_increment` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
max_over_phase(config)
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
