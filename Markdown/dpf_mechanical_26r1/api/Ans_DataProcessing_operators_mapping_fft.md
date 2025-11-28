---
uid: Ans.DataProcessing.operators.mapping.fft
title: fft
---

# fft Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).   ///available inputs: field (Field, FieldsContainer), scale_forward_transform (double) (optional), inplace (bool) (optional), force_fft_points (Int32) (optional), cutoff_frequency (double) (optional), scale_right_amplitude (bool) (optional)
            available outputs: fields_container (FieldsContainer)

fft()
fft(field: object, scale_forward_transform: object, inplace: object, force_fft_points: object, cutoff_frequency: object, scale_right_amplitude: object, config: OperatorConfig)
fft(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fft()
```

#### Constructor

```python
fft(field, scale_forward_transform, inplace, force_fft_points, cutoff_frequency, scale_right_amplitude, config)
```

**Parameters:**

- `field` (*object*)
- `scale_forward_transform` (*object*)
- `inplace` (*object*)
- `force_fft_points` (*object*)
- `cutoff_frequency` (*object*)
- `scale_right_amplitude` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft(config)
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
