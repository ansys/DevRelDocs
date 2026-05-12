---
uid: Ans.DataProcessing.operators.mapping.fft
---

# *class* fft(field: object = None, scale_forward_transform: object = None, inplace: object = None, force_fft_points: object = None, cutoff_frequency: object = None, scale_right_amplitude: object = None, config: OperatorConfig = None)

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

available inputs: `field` (Field, FieldsContainer), `scale_forward_transform` (double) (optional), `inplace` (bool) (optional), `force_fft_points` (Int32) (optional), `cutoff_frequency` (double) (optional), `scale_right_amplitude` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [fft operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/fft.md)

**Parameters:**

* **field**
* **scale_forward_transform**
* **inplace**
* **force_fft_points**
* **cutoff_frequency**
* **scale_right_amplitude**
* **config**

**Example:**

```python
op = fft()

op = fft(field=my_field,scale_forward_transform=my_scale_forward_transform,inplace=my_inplace,force_fft_points=my_force_fft_points,cutoff_frequency=my_cutoff_frequency,scale_right_amplitude=my_scale_right_amplitude)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
