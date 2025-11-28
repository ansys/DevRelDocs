---
uid: Ans.DataProcessing.operators.filter.timefreq_low_pass
title: timefreq_low_pass
---

# timefreq_low_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

The low pass filter returns all the values below (but not equal to) the threshold value in input.   ///available inputs: time_freq_support (TimeFreqSupport), threshold (double, Field), both (bool) (optional)
            available outputs: time_freq_support (TimeFreqSupport), scoping (Scoping)

timefreq_low_pass()
timefreq_low_pass(time_freq_support: object, threshold: object, both: object, config: OperatorConfig)
timefreq_low_pass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
timefreq_low_pass()
```

#### Constructor

```python
timefreq_low_pass(time_freq_support, threshold, both, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
timefreq_low_pass(config)
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
