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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Integrate the input field over a specific scoping. |
| <strong>Pin 2</strong>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Time Freq to integrate on, otherwise time freq support from the input field is taken. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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