---
uid: Ans.DataProcessing.operators.mapping.prep_sampling_fft
---

# prep_sampling_fft Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Prepare time sampling optimum for FFT computation and expected frequencies in output.

available inputs: `time_freq_support` (TimeFreqSupport), `cutoff_frequency` (double) (optional), `number_sampling_point` (Int32) (optional)

available outputs: `time_tfs_sampled` (TimeFreqSupport), `freq_tfs_fft` (TimeFreqSupport)

## Example

```python
op = prep_sampling_fft()

op = prep_sampling_fft(time_freq_support=my_time_freq_support,cutoff_frequency=my_cutoff_frequency,number_sampling_point=my_number_sampling_point)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_freq_support

Initial time domain TimeFreqSupport.

**Type:** *LinkableInput*

### cutoff_frequency

Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation).

**Type:** *LinkableInput*

### number_sampling_point

For number of sampling point (calculation with cutoff_frequency is ignored).

**Type:** *LinkableInput*

## Outputs

### time_tfs_sampled

Optimum sampled time domain TimeFreqSupport.

**Type:** *LinkableOutput*

### freq_tfs_fft

Frequency domain TimeFreqSupport expected in output of FFT.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
prep_sampling_fft()
```

#### Constructor

```python
prep_sampling_fft(time_freq_support, cutoff_frequency, number_sampling_point, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `cutoff_frequency` (*object*)
- `number_sampling_point` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
prep_sampling_fft(config)
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
