---
category: result
plugin: core
license: None
---

# result:cyclic expansion

**Version: 0.0.0**

## Description

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field container with the base and duplicate sectors |
| <strong>Pin 3</strong>|  harmonic_index |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../core-concepts/dpf-types.md#standard-types) | default is true |
| <strong>Pin 6</strong>|  map_size_scoping_out |`umap<int32,int32>` | map provider by scoping adapter |
| <strong>Pin 7</strong>|  normalization_factor |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 14</strong>|  merge_stages |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |  |
| <strong>Pin 18</strong>|  sectors_to_expand |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |
| <strong>Pin 19</strong>|  phi |[`double`](../../core-concepts/dpf-types.md#standard-types) | angle phi in degrees (default value 0.0) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainer filled in |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cache** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: cyclic_expansion

 **Full name**: result.cyclic_expansion

 **Internal name**: cyclic_expansion

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cyclic_expansion"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_fields_container);
op.connect(3, my_harmonic_index);
op.connect(5, my_bool_rotate_to_global);
op.connect(6, my_map_size_scoping_out);
op.connect(7, my_normalization_factor);
op.connect(14, my_merge_stages);
op.connect(16, my_cyclic_support);
op.connect(18, my_sectors_to_expand);
op.connect(19, my_phi);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cyclic_expansion() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.harmonic_index.connect(my_harmonic_index)
op.inputs.bool_rotate_to_global.connect(my_bool_rotate_to_global)
op.inputs.map_size_scoping_out.connect(my_map_size_scoping_out)
op.inputs.normalization_factor.connect(my_normalization_factor)
op.inputs.merge_stages.connect(my_merge_stages)
op.inputs.cyclic_support.connect(my_cyclic_support)
op.inputs.sectors_to_expand.connect(my_sectors_to_expand)
op.inputs.phi.connect(my_phi)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cyclic_expansion() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.harmonic_index.Connect(my_harmonic_index)
op.inputs.bool_rotate_to_global.Connect(my_bool_rotate_to_global)
op.inputs.map_size_scoping_out.Connect(my_map_size_scoping_out)
op.inputs.normalization_factor.Connect(my_normalization_factor)
op.inputs.merge_stages.Connect(my_merge_stages)
op.inputs.cyclic_support.Connect(my_cyclic_support)
op.inputs.sectors_to_expand.Connect(my_sectors_to_expand)
op.inputs.phi.Connect(my_phi)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.