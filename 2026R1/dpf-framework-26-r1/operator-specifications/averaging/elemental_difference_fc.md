---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:elemental difference (fields container)

**Version: 0.0.0**

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the unaveraged or averaged (depending on the input fields) computed result for all nodes in this element. The result is computed on a given element scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | The mesh region in this pin is used to perform the averaging, used if there is no fields support. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Average only on these elements. If it is scoping container, the label must correspond to the one of the fields container. |
| <strong>Pin 10</strong>|  collapse_shell_layers |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, the data across different shell layers is averaged as well (default is false). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_difference_fc

 **Full name**: averaging.elemental_difference_fc

 **Internal name**: elemental_difference_fc

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elemental_difference_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(3, my_scoping);
op.connect(10, my_collapse_shell_layers);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_difference_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.scoping.connect(my_scoping)
op.inputs.collapse_shell_layers.connect(my_collapse_shell_layers)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_difference_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.scoping.Connect(my_scoping)
op.inputs.collapse_shell_layers.Connect(my_collapse_shell_layers)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.