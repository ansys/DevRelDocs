---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create sysc shape function mapping workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | Mesh where the source data is defined. If not set, an input pin named "source_mesh" is exposed. |
| <strong>Pin 1</strong>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | Mesh where the target data is defined. If not set, an input pin named "source_mesh" is exposed. |
| <strong>Pin 6</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh. If not set, an input pin named "target_scoping" is exposed. |
| <strong>Pin 10</strong>|  options_data_tree |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | DataTree that contains an optional 'mapping_options' subtree with 'conservative' (bool, default is false) information, and a mandatory 'data_definition' subtree with 'location' (string) and 'dimensionality' (int) information, that are required by the mapping operator. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) | Workflow with input pin 'source_data'; optionally 'source_mesh', 'target_mesh', 'target_scoping', and 'options_data_tree'; and output pin 'target_data'. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | If permissive is set to false, the validity of the source and target meshes is checked before performing mapping, raising an error if they are invalid. If permissive is set to true, no check is done. Default is true. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sysc_shape_function_wf

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("sysc_shape_function_wf"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(6, my_target_scoping);
op.connect(10, my_options_data_tree);
ansys::dpf::Workflow my_mapping_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_scoping.connect(my_target_scoping)
op.inputs.options_data_tree.connect(my_options_data_tree)
my_mapping_workflow = op.outputs.mapping_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_scoping.Connect(my_target_scoping)
op.inputs.options_data_tree.Connect(my_options_data_tree)
my_mapping_workflow = op.outputs.mapping_workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.