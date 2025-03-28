# mapping:prep sampling fft

## Description

Prepare time sampling optimum for FFT computation and expected frequencies in output.

## Inputs


- **Pin 0** time_freq_support (type: ['time_freq_support']) (optional: False): Initial time domain TimeFreqSupport.

- **Pin 1** cutoff_frequency (type: ['double']) (optional: True): Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation).

- **Pin 2** number_sampling_point (type: ['int32']) (optional: True): For number of sampling point (calculation with cutoff_frequency is ignored).


## Outputs


- **Pin 0** time_tfs_sampled (type: ['time_freq_support']): Optimum sampled time domain TimeFreqSupport.

- **Pin 1** freq_tfs_fft (type: ['time_freq_support']): Frequency domain TimeFreqSupport expected in output of FFT.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: prep_sampling_fft
- **full name**: mapping.prep_sampling_fft
- **internal name**: prepare_sampling_fft
- **license**: None