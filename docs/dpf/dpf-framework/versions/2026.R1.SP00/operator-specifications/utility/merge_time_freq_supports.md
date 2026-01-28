---
category: utility
plugin: core
license: None
---

# utility:merge time freq supports

**Version: 0.0.0**

## Description

Assembles a set of time/frequency supports into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_supports |`vector<shared_ptr<time_freq_support>>`, [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_time_freq_supports

 **Full name**: utility.merge_time_freq_supports

 **Internal name**: merge::time_freq_support

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::time_freq_support"); // operator instantiation
op.connect(0, my_time_freq_supports);
ansys::dpf::TimeFreqSupport my_merged_support = op.getOutput<ansys::dpf::TimeFreqSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_time_freq_supports() # operator instantiation
op.inputs.time_freq_supports1.connect(my_time_freq_supports1)
op.inputs.time_freq_supports2.connect(my_time_freq_supports2)
my_merged_support = op.outputs.merged_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_time_freq_supports() # operator instantiation
op.inputs.time_freq_supports.Connect(my_time_freq_supports)
my_merged_support = op.outputs.merged_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.