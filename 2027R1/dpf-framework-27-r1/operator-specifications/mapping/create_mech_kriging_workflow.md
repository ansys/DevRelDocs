---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create mechanical native mapping for kriging workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [source_mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong>|  [target_mesh](#input_1) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>6</strong>|  [target_scoping](#input_6) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>10</strong>|  [options_data_tree](#input_10) |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh where the source data is defined.

<a id="input_1"></a>
### target_mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh the data should be mapped on.

<a id="input_6"></a>
### target_scoping (Pin 6)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh.

<a id="input_10"></a>
### options_data_tree (Pin 10)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

DataTree that contains a 'mapping_options' subtree with the mapping options, and a 'data_definition' subtree with 'dimensionality' int and 'location' string attributes that are required by the 'prepare mechanical native mapping' operator (see documentation of this operator to know more about the supported options).


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mapping_workflow](#output_0) |[`workflow`](../../core-concepts/dpf-types.md#workflow) |


<a id="output_0"></a>
### mapping_workflow (Pin 0)

- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)

Workflow with input pin 'source_data'; optionally 'source_mesh', 'target_mesh', 'target_scoping', and 'options_data_tree'; and output pins 'target_data','unmapped_nodes_data','outside_nodes_data','mapping_error_codes', 'source_mesh_id' and 'target_mesh_id.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: create_mech_kriging_workflow

 **Full name**: mapping.create_mech_kriging_workflow

 **Internal name**: mech_kriging_wf

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mech_kriging_wf"); // operator instantiation
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

op = dpf.operators.mapping.create_mech_kriging_workflow() # operator instantiation
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

op = dpf.operators.mapping.create_mech_kriging_workflow() # operator instantiation
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