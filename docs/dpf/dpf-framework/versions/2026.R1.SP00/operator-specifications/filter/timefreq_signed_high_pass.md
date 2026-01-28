---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:signed high pass (timefreq)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) | A threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  both |[`bool`](../../core-concepts/dpf-types.md#standard-types) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
|  **Pin 1**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: timefreq_signed_high_pass

 **Full name**: filter.timefreq_signed_high_pass

 **Internal name**: core::timefreq::signed_high_pass

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::timefreq::signed_high_pass"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_threshold);
op.connect(2, my_both);
ansys::dpf::TimeFreqSupport my_time_freq_support = op.getOutput<ansys::dpf::TimeFreqSupport>(0);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.timefreq_signed_high_pass() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.threshold.connect(my_threshold)
op.inputs.both.connect(my_both)
my_time_freq_support = op.outputs.time_freq_support()
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.timefreq_signed_high_pass() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.threshold.Connect(my_threshold)
op.inputs.both.Connect(my_both)
my_time_freq_support = op.outputs.time_freq_support.GetData()
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.