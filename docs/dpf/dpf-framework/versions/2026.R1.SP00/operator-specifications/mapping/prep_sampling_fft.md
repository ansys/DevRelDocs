---
category: mapping
plugin: core
license: None
---

# mapping:prep sampling fft

**Version: 0.0.0**

## Description

Prepare time sampling optimum for FFT computation and expected frequencies in output.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Initial time domain TimeFreqSupport. |
| <strong>Pin 1</strong>|  cutoff_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation). |
| <strong>Pin 2</strong>|  number_sampling_point |[`int32`](../../core-concepts/dpf-types.md#standard-types) | For number of sampling point (calculation with cutoff_frequency is ignored). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| time_tfs_sampled |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Optimum sampled time domain TimeFreqSupport. |
|  **Pin 1**| freq_tfs_fft |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Frequency domain TimeFreqSupport expected in output of FFT. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: prep_sampling_fft

 **Full name**: mapping.prep_sampling_fft

 **Internal name**: prepare_sampling_fft

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("prepare_sampling_fft"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_cutoff_frequency);
op.connect(2, my_number_sampling_point);
ansys::dpf::TimeFreqSupport my_time_tfs_sampled = op.getOutput<ansys::dpf::TimeFreqSupport>(0);
ansys::dpf::TimeFreqSupport my_freq_tfs_fft = op.getOutput<ansys::dpf::TimeFreqSupport>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.prep_sampling_fft() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.cutoff_frequency.connect(my_cutoff_frequency)
op.inputs.number_sampling_point.connect(my_number_sampling_point)
my_time_tfs_sampled = op.outputs.time_tfs_sampled()
my_freq_tfs_fft = op.outputs.freq_tfs_fft()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.prep_sampling_fft() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.cutoff_frequency.Connect(my_cutoff_frequency)
op.inputs.number_sampling_point.Connect(my_number_sampling_point)
my_time_tfs_sampled = op.outputs.time_tfs_sampled.GetData()
my_freq_tfs_fft = op.outputs.freq_tfs_fft.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.