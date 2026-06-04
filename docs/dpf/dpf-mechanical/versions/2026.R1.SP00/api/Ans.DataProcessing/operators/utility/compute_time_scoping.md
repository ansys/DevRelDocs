---
uid: Ans.DataProcessing.operators.utility.compute_time_scoping
---

# compute_time_scoping Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

compute_time_scoping()
compute_time_scoping(time_freq_values: object, step: object, interpolation_type: object, time_freq_support: object, config: OperatorConfig)
compute_time_scoping(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_freq_values

List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps".

**Type:** *LinkableInput*

### step

**Type:** *LinkableInput*

### interpolation_type

1:ramped' or 2:stepped', default is ramped

**Type:** *LinkableInput*

### time_freq_support

**Type:** *LinkableInput*

## Outputs

### scoping

time_scoping

**Type:** *LinkableOutput*

### field

time_freq_values

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
compute_time_scoping()
```

#### Constructor

```python
compute_time_scoping(time_freq_values, step, interpolation_type, time_freq_support, config)
```

**Parameters:**

- `time_freq_values` (*object*)
- `step` (*object*)
- `interpolation_type` (*object*)
- `time_freq_support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_time_scoping(config)
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
