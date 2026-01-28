---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:apply mechanical native mapping

**Version: 0.0.0**

## Description

Maps source data from source mesh to target mesh (computes interpolation).This operator needs to be used with the prepare mechanical native mapping associated one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Source mesh |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Source mesh id |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Target mesh |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Target mesh id |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mapping_manager_data | |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_data |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Source data |
| <strong>Pin 6</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target scoping the result will be scoped on |
| <strong>Pin 9</strong>|  threads_user_requested |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of threads to be used to parallelize apply operations. Default: 1 (run in series). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapped_data |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mapped data |
|  **Pin 1**| apply_output | | A Map containing the outputs of the interpolation as a key value pair |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: apply_mechanical_native_mapping

 **Full name**: mapping.apply_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::apply

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::apply"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_source_mesh_id);
op.connect(2, my_target_mesh);
op.connect(3, my_target_mesh_id);
op.connect(4, my_mapping_manager_data);
op.connect(5, my_source_data);
op.connect(6, my_target_scoping);
op.connect(9, my_threads_user_requested);
ansys::dpf::FieldsContainer my_mapped_data = op.getOutput<ansys::dpf::FieldsContainer>(0);
 my_apply_output = op.getOutput<>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.source_mesh_id.connect(my_source_mesh_id)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_id.connect(my_target_mesh_id)
op.inputs.mapping_manager_data.connect(my_mapping_manager_data)
op.inputs.source_data.connect(my_source_data)
op.inputs.target_scoping.connect(my_target_scoping)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data()
my_apply_output = op.outputs.apply_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.source_mesh_id.Connect(my_source_mesh_id)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_id.Connect(my_target_mesh_id)
op.inputs.mapping_manager_data.Connect(my_mapping_manager_data)
op.inputs.source_data.Connect(my_source_data)
op.inputs.target_scoping.Connect(my_target_scoping)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data.GetData()
my_apply_output = op.outputs.apply_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.