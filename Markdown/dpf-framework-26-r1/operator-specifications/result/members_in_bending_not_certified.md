---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in bending not certified

**Version: 0.0.0**

## Description

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_yield_strength |[`field`](../../core-concepts/dpf-types.md#field) | This pin contains field of beam's Yield Strength defined by the user. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  class_cross_section |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container, used if no streams are set. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  partial_factor |[`double`](../../core-concepts/dpf-types.md#standard-types) | partial safety factor for resistance of members to instability assessed by member checks. Default value: 1. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  Mesh containing beam's properties defined by user |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  bending_moment_y |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of bending moment on axis y defined by user |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  bending_moment_z |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of bending moment on axis z defined by user |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| buckling_resistance_bending_yy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of buckling resistance factor on axis y-y in case of bending(M). These factors should be less than 1 and positive. |
|  **Pin 1**| buckling_resistance_bending_zz |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of buckling resistance factor on axis z-z in case of bending(M). These factors should be less than 1 and positive. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: members_in_bending_not_certified

 **Full name**: result.members_in_bending_not_certified

 **Internal name**: members_in_bending_not_certified

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("members_in_bending_not_certified"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_field_yield_strength);
op.connect(2, my_class_cross_section);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(6, my_partial_factor);
op.connect(7, my_mesh);
op.connect(8, my_bending_moment_y);
op.connect(9, my_bending_moment_z);
ansys::dpf::FieldsContainer my_buckling_resistance_bending_yy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_buckling_resistance_bending_zz = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.members_in_bending_not_certified() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.field_yield_strength.connect(my_field_yield_strength)
op.inputs.class_cross_section.connect(my_class_cross_section)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.partial_factor.connect(my_partial_factor)
op.inputs.mesh.connect(my_mesh)
op.inputs.bending_moment_y.connect(my_bending_moment_y)
op.inputs.bending_moment_z.connect(my_bending_moment_z)
my_buckling_resistance_bending_yy = op.outputs.buckling_resistance_bending_yy()
my_buckling_resistance_bending_zz = op.outputs.buckling_resistance_bending_zz()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.members_in_bending_not_certified() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.field_yield_strength.Connect(my_field_yield_strength)
op.inputs.class_cross_section.Connect(my_class_cross_section)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.partial_factor.Connect(my_partial_factor)
op.inputs.mesh.Connect(my_mesh)
op.inputs.bending_moment_y.Connect(my_bending_moment_y)
op.inputs.bending_moment_z.Connect(my_bending_moment_z)
my_buckling_resistance_bending_yy = op.outputs.buckling_resistance_bending_yy.GetData()
my_buckling_resistance_bending_zz = op.outputs.buckling_resistance_bending_zz.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.