---
uid: Ans.DataProcessing.operators.mapping.fft
---

# fft Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

available inputs: `field` (Field, FieldsContainer), `scale_forward_transform` (double) (optional), `inplace` (bool) (optional), `force_fft_points` (Int32) (optional), `cutoff_frequency` (double) (optional), `scale_right_amplitude` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = fft()

op = fft(field=my_field,scale_forward_transform=my_scale_forward_transform,inplace=my_inplace,force_fft_points=my_force_fft_points,cutoff_frequency=my_cutoff_frequency,scale_right_amplitude=my_scale_right_amplitude)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field or Fields Container.

**Type:** *LinkableInput*

### scale_forward_transform

Scale for Forward Transform, default is 2/field_num_elementary_data.

**Type:** *LinkableInput*

### inplace

True if inplace, default is false.

**Type:** *LinkableInput*

### force_fft_points

Explicitely define number of fft points to either rescope or perform zero padding.

**Type:** *LinkableInput*

### cutoff_frequency

Restrict output frequency up to this cutoff frequency

**Type:** *LinkableInput*

### scale_right_amplitude

If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values.

**Type:** *LinkableInput*

## Outputs

### fields_container

Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it.

**Type:** *LinkableOutput*

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
