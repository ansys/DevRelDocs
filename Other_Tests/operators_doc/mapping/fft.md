# mapping:fft

## Description

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): Field or Fields Container.

- **Pin 3** scale_forward_transform (type: ['double']) (optional: True): Scale for Forward Transform, default is 2/field_num_elementary_data.

- **Pin 4** inplace (type: ['bool']) (optional: True): True if inplace, default is false.

- **Pin 5** force_fft_points (type: ['int32']) (optional: True): Explicitely define number of fft points to either rescope or perform zero padding.

- **Pin 6** cutoff_frequency (type: ['double']) (optional: True): Restrict output frequency up to this cutoff frequency

- **Pin 7** scale_right_amplitude (type: ['bool']) (optional: True): If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: fft
- **full name**: mapping.fft
- **internal name**: fft
- **license**: None