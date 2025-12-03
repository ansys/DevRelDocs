---
category: utility
plugin: core
license: None
---

# utility:merge meshes

**Version: 0.0.0**

## Description

Take a set of meshes and assemble them in a unique one

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -201</strong>|  naive_merge_elements |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, merge the elemental Property Fields of the input meshes assuming that there is no repetition in their scoping ids. Default is false. |
| <strong>Pin -200</strong>|  should_merge_named_selections |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |`vector<shared_ptr<abstract_meshed_region>>`, [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | A vector of meshed region to merge or meshed region from pin 0 to ... |
| <strong>Pin 101</strong>|  merge_method |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0: merge by distance, 1: merge by node id (default) |
| <strong>Pin 102</strong>|  box_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | Box size used when merging by distance. Default value is 1e-12. |
| <strong>Pin 103</strong>|  remove_duplicate_elements |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0: keep duplicate elements (default), 1: remove duplicate elements |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merges_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_meshes

 **Full name**: utility.merge_meshes

 **Internal name**: merge::mesh

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::mesh"); // operator instantiation
op.connect(-201, my_naive_merge_elements);
op.connect(-200, my_should_merge_named_selections);
op.connect(0, my_meshes);
op.connect(101, my_merge_method);
op.connect(102, my_box_size);
op.connect(103, my_remove_duplicate_elements);
ansys::dpf::MeshedRegion my_merges_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_meshes() # operator instantiation
op.inputs.naive_merge_elements.connect(my_naive_merge_elements)
op.inputs.should_merge_named_selections.connect(my_should_merge_named_selections)
op.inputs.meshes1.connect(my_meshes1)
op.inputs.meshes2.connect(my_meshes2)
op.inputs.merge_method.connect(my_merge_method)
op.inputs.box_size.connect(my_box_size)
op.inputs.remove_duplicate_elements.connect(my_remove_duplicate_elements)
my_merges_mesh = op.outputs.merges_mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_meshes() # operator instantiation
op.inputs.naive_merge_elements.Connect(my_naive_merge_elements)
op.inputs.should_merge_named_selections.Connect(my_should_merge_named_selections)
op.inputs.meshes.Connect(my_meshes)
op.inputs.merge_method.Connect(my_merge_method)
op.inputs.box_size.Connect(my_box_size)
op.inputs.remove_duplicate_elements.Connect(my_remove_duplicate_elements)
my_merges_mesh = op.outputs.merges_mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.