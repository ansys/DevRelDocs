---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (fields container)

**Version: 0.0.0**

## Description

Transforms Elemental Nodal fields into Nodal fields using an averaging process. The result is computed on a given node's scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label depending on the merge_solid_shell input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| <strong>Pin 2</strong>|  should_average |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities). |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers. |
| <strong>Pin 4</strong>|  extend_to_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Compute mid nodes (when available) by averaging the neighbour primary nodes. |
| <strong>Pin 5</strong>|  extend_weights_to_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Extends weights to mid nodes (when available). Default is false. |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For shell/solid mixed fields, group in the same field all solids and shells (false by default). If this pin is true, a shell_layer needs to be specified. |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. If merge_solid_shell is true, this pin needs to be specified to a value that extracts only one layer (Top, Bottom or Mid). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| weights |`class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>` | Gives for each node, the number of times it was found in the Elemental Nodal field. Can be used to average later. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal_fc

 **Full name**: averaging.elemental_nodal_to_nodal_fc

 **Internal name**: elemental_nodal_To_nodal_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elemental_nodal_To_nodal_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(2, my_should_average);
op.connect(3, my_scoping);
op.connect(4, my_extend_to_mid_nodes);
op.connect(5, my_extend_weights_to_mid_nodes);
op.connect(26, my_merge_solid_shell);
op.connect(27, my_shell_layer);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::Class Dataprocessing::Dpftypecollection<Class Dataprocessing::Cpropertyfield> my_weights = op.getOutput<ansys::dpf::Class Dataprocessing::Dpftypecollection<Class Dataprocessing::Cpropertyfield>>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.should_average.connect(my_should_average)
op.inputs.scoping.connect(my_scoping)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.connect(my_extend_weights_to_mid_nodes)
op.inputs.merge_solid_shell.connect(my_merge_solid_shell)
op.inputs.shell_layer.connect(my_shell_layer)
my_fields_container = op.outputs.fields_container()
my_weights = op.outputs.weights()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.should_average.Connect(my_should_average)
op.inputs.scoping.Connect(my_scoping)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.Connect(my_extend_weights_to_mid_nodes)
op.inputs.merge_solid_shell.Connect(my_merge_solid_shell)
op.inputs.shell_layer.Connect(my_shell_layer)
my_fields_container = op.outputs.fields_container.GetData()
my_weights = op.outputs.weights.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.