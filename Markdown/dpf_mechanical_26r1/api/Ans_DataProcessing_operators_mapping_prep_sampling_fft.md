---
uid: Ans.DataProcessing.operators.mapping.prep_sampling_fft
title: prep_sampling_fft
---

# prep_sampling_fft Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Prepare time sampling optimum for FFT computation and expected frequencies in output.   ///available inputs: time_freq_support (TimeFreqSupport), cutoff_frequency (double) (optional), number_sampling_point (Int32) (optional)
            available outputs: time_tfs_sampled (TimeFreqSupport), freq_tfs_fft (TimeFreqSupport)

prep_sampling_fft()
prep_sampling_fft(time_freq_support: object, cutoff_frequency: object, number_sampling_point: object, config: OperatorConfig)
prep_sampling_fft(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
