---
category: mapping
plugin: core
license: None
---

# mapping:prep sampling fft

## Description

Prepare time sampling optimum for FFT computation and expected frequencies in output.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Initial time domain TimeFreqSupport. |
| <strong>Pin 1</strong>|  cutoff_frequency |[`double`](../../getting-started/using-data-containers.md#double) | Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation). |
| <strong>Pin 2</strong>|  number_sampling_point |[`int32`](../../getting-started/using-data-containers.md#int32) | For number of sampling point (calculation with cutoff_frequency is ignored). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | time_tfs_sampled |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Optimum sampled time domain TimeFreqSupport. |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | freq_tfs_fft |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Frequency domain TimeFreqSupport expected in output of FFT. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: mapping
- Plugin: core
- Scripting name: prep_sampling_fft
- Full name: mapping.prep_sampling_fft
- Internal name: prepare_sampling_fft
- License: None
  