---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:high pass (timescoping)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above (but not equal to) the threshold value in input.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [time_freq_support](#input_0) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [threshold](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong>|  [both](#input_2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)



<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field)

A threshold scalar or a field containing one value is expected.

<a id="input_2"></a>
### both (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


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

 **Scripting name**: timescoping_high_pass

 **Full name**: filter.timescoping_high_pass

 **Internal name**: core::timescoping::high_pass

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::timescoping::high_pass"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_threshold);
op.connect(2, my_both);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.timescoping_high_pass() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.threshold.connect(my_threshold)
op.inputs.both.connect(my_both)
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.timescoping_high_pass() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.threshold.Connect(my_threshold)
op.inputs.both.Connect(my_both)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.