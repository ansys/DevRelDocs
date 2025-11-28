---
uid: Ans.DataProcessing.operators.filter.timefreq_band_pass
title: timefreq_band_pass
---

# timefreq_band_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.   ///available inputs: time_freq_support (TimeFreqSupport), min_threshold (double, Field), max_threshold (double, Field) (optional)
            available outputs: time_freq_support (TimeFreqSupport), scoping (Scoping)

timefreq_band_pass()
timefreq_band_pass(time_freq_support: object, min_threshold: object, max_threshold: object, config: OperatorConfig)
timefreq_band_pass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
timefreq_band_pass()
```

#### Constructor

```python
timefreq_band_pass(time_freq_support, min_threshold, max_threshold, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `min_threshold` (*object*)
- `max_threshold` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
timefreq_band_pass(config)
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
