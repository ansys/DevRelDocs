---
uid: Ans.DataProcessing.operators.filter.timefreq_signed_high_pass
---

# timefreq_signed_high_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.   ///available inputs: time_freq_support (TimeFreqSupport), threshold (double, Field), both (bool) (optional)
            available outputs: time_freq_support (TimeFreqSupport), scoping (Scoping)

timefreq_signed_high_pass()
timefreq_signed_high_pass(time_freq_support: object, threshold: object, both: object, config: OperatorConfig)
timefreq_signed_high_pass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
timefreq_signed_high_pass()
```

#### Constructor

```python
timefreq_signed_high_pass(time_freq_support, threshold, both, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
timefreq_signed_high_pass(config)
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
