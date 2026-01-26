---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:band pass (timescoping)

**Version: 0.0.0**

## Description

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [time_freq_support](#input_0) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [min_threshold](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong>|  [max_threshold](#input_2) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)



<a id="input_1"></a>
### min_threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field)

A minimum threshold scalar or a field containing one value is expected.

<a id="input_2"></a>
### max_threshold (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field)

A maximum threshold scalar or a field containing one value is expected.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: timescoping_band_pass

 **Full name**: filter.timescoping_band_pass

 **Internal name**: core::timescoping::band_pass

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::timescoping::band_pass"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_min_threshold);
op.connect(2, my_max_threshold);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.timescoping_band_pass() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.min_threshold.connect(my_min_threshold)
op.inputs.max_threshold.connect(my_max_threshold)
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.timescoping_band_pass() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.min_threshold.Connect(my_min_threshold)
op.inputs.max_threshold.Connect(my_max_threshold)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.