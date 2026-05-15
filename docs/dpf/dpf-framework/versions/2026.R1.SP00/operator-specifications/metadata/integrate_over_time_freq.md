---
category: metadata
plugin: core
license: any_dpf_supported_increments
---

# metadata:integrate over time freq

**Version: 0.0.0**

## Description

Integration of an input field over timefreq.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong>|  [scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong>|  [time_freq_support](#input_2) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Integrate the input field over a specific scoping.

<a id="input_2"></a>
### time_freq_support (Pin 2)

- **Required:** No
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)

Time Freq to integrate on, otherwise time freq support from the input field is taken.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: integrate_over_time_freq

 **Full name**: metadata.integrate_over_time_freq

 **Internal name**: timefreq::integrate

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("timefreq::integrate"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_scoping);
op.connect(2, my_time_freq_support);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.integrate_over_time_freq() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.scoping.connect(my_scoping)
op.inputs.time_freq_support.connect(my_time_freq_support)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.integrate_over_time_freq() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.scoping.Connect(my_scoping)
op.inputs.time_freq_support.Connect(my_time_freq_support)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.