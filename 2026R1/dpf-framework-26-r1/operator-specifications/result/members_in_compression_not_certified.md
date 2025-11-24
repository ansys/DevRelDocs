---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in compression not certified

**Version: 0.0.0**

## Description

This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | time/freq set ids (use ints or scoping)  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_yield_strength |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) | This pin contains file csv or field of beam's Yield Strength. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_end_condition |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) | This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end condition's value of all beams as 1. |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container, used if no streams are set. |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  manufacture |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  partial_factor |[`double`](../../core-concepts/dpf-types.md#standard-types) | partial safety factor for resistance of members to instability assessed by member checks. Default value: 1. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  Mesh containing beam's properties defined by user |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  axial_force |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of axial force defined by user |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fabrication_type |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If there is beam I in the structure, please define its fabrication type. True: Rolled section, False: Welded section |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| buckling_resistance_compression_yy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of buckling resistance factor on axis y-y in case of compression. These factors should be less than 1 and positive. |
|  **Pin 1**| buckling_resistance_compression_zz |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of buckling resistance factor on axis z-z in case of compression. These factors should be less than 1 and positive. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: members_in_compression_not_certified

 **Full name**: result.members_in_compression_not_certified

 **Internal name**: members_in_compression_not_certified

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("members_in_compression_not_certified"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_field_yield_strength);
op.connect(2, my_field_end_condition);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(5, my_manufacture);
op.connect(6, my_partial_factor);
op.connect(7, my_mesh);
op.connect(8, my_axial_force);
op.connect(12, my_fabrication_type);
ansys::dpf::FieldsContainer my_buckling_resistance_compression_yy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_buckling_resistance_compression_zz = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.members_in_compression_not_certified() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.field_yield_strength.connect(my_field_yield_strength)
op.inputs.field_end_condition.connect(my_field_end_condition)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.manufacture.connect(my_manufacture)
op.inputs.partial_factor.connect(my_partial_factor)
op.inputs.mesh.connect(my_mesh)
op.inputs.axial_force.connect(my_axial_force)
op.inputs.fabrication_type.connect(my_fabrication_type)
my_buckling_resistance_compression_yy = op.outputs.buckling_resistance_compression_yy()
my_buckling_resistance_compression_zz = op.outputs.buckling_resistance_compression_zz()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.members_in_compression_not_certified() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.field_yield_strength.Connect(my_field_yield_strength)
op.inputs.field_end_condition.Connect(my_field_end_condition)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.manufacture.Connect(my_manufacture)
op.inputs.partial_factor.Connect(my_partial_factor)
op.inputs.mesh.Connect(my_mesh)
op.inputs.axial_force.Connect(my_axial_force)
op.inputs.fabrication_type.Connect(my_fabrication_type)
my_buckling_resistance_compression_yy = op.outputs.buckling_resistance_compression_yy.GetData()
my_buckling_resistance_compression_zz = op.outputs.buckling_resistance_compression_zz.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.