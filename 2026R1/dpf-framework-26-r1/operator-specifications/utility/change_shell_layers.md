---
category: utility
plugin: core
license: None
---

# utility:change shell layers

**Version: 0.0.0**

## Description

Extract the requested shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and the corresponding field in the output will be empty. If permissive configuration input is set to true (default), carefully check the result.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  e_shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types), `enum dataProcessing::EShellLayers` | 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. |
| <strong>Pin 2</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | Mesh support of the input fields_container, in case it does not have one defined. If the fields_container contains mixed shell/solid results, the mesh is required (either by connecting this pin or in the support). |
| <strong>Pin 26</strong>|  merge |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For fields with mixed shell layers (solid/shell elements with heterogeneous shell layers), group all of them in the same field (false by default). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | If permissive is set to false, the operator run will ensure the 'change shell layers' operation is allowed (for example, if asking mid layer for a field defined on top and bottom layers, the computed field will be empty). If permissive is set to true, the operator run will be done in a permissive way (no check). Default is true. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: change_shell_layers

 **Full name**: utility.change_shell_layers

 **Internal name**: change_shellLayers

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("change_shellLayers"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_e_shell_layer);
op.connect(2, my_mesh);
op.connect(26, my_merge);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.change_shell_layers() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.e_shell_layer.connect(my_e_shell_layer)
op.inputs.mesh.connect(my_mesh)
op.inputs.merge.connect(my_merge)
my_fields_container_as_fields_container = op.outputs.fields_container_as_fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.change_shell_layers() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.e_shell_layer.Connect(my_e_shell_layer)
op.inputs.mesh.Connect(my_mesh)
op.inputs.merge.Connect(my_merge)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.