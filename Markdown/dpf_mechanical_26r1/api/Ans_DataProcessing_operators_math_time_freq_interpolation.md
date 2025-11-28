---
uid: Ans.DataProcessing.operators.math.time_freq_interpolation
---

# time_freq_interpolation Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

time_freq_interpolation()
time_freq_interpolation(fields_container: object, time_freq_values: object, step: object, interpolation_type: object, force_new_time_freq_support: object, time_freq_support: object, config: OperatorConfig)
time_freq_interpolation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
time_freq_interpolation()
```

#### Constructor

```python
time_freq_interpolation(fields_container, time_freq_values, step, interpolation_type, force_new_time_freq_support, time_freq_support, config)
```

**Parameters:**

- `fields_container` (*object*)
- `time_freq_values` (*object*)
- `step` (*object*)
- `interpolation_type` (*object*)
- `force_new_time_freq_support` (*object*)
- `time_freq_support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_freq_interpolation(config)
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
