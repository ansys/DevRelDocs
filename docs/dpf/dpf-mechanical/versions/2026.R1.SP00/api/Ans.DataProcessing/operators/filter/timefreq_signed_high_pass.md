---
uid: Ans.DataProcessing.operators.filter.timefreq_signed_high_pass
---

# timefreq_signed_high_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

## Summary

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

available inputs: `time_freq_support` (TimeFreqSupport), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `time_freq_support` (TimeFreqSupport), `scoping` (Scoping)

## Example

```python
op = timefreq_signed_high_pass()

op = timefreq_signed_high_pass(time_freq_support=my_time_freq_support,threshold=my_threshold,both=my_both)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### threshold

A threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

**Type:** *LinkableInput*

## Outputs

### time_freq_support

**Type:** *LinkableOutput*

### scoping

**Type:** *LinkableOutput*

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
