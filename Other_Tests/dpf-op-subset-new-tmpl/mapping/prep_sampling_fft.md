# mapping:prep sampling fft

## Description

Prepare time sampling optimum for FFT computation and expected frequencies in output.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_support |[`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support) | Yes | Initial time domain TimeFreqSupport. |
| **Pin 1** | cutoff_frequency |[`double`](../getting-started/using-data-containers.md#double) | No | Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation). |
| **Pin 2** | number_sampling_point |[`int32`](../getting-started/using-data-containers.md#int32) | No | For number of sampling point (calculation with cutoff_frequency is ignored). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_tfs_sampled |[`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support) | Yes | Optimum sampled time domain TimeFreqSupport. |
| **Pin 1** | freq_tfs_fft |[`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support) | Yes | Frequency domain TimeFreqSupport expected in output of FFT. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mapping** | core | prep_sampling_fft | mapping.prep_sampling_fft | prepare_sampling_fft | None |
