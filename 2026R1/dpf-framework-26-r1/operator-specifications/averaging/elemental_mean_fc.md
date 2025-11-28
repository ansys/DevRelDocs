---
category: averaging
plugin: core
license: None
---

# averaging:elemental mean (fields container)

**Version: 0.0.0**

## Description

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is false, then the fields could be split by element shape and the output fields container would have an elshape label depending on the e_shell_layer and merge_solid_shell inputs (if e_shell_layer is not specified, the fields are split; if it is specified, the fields can be split based on merge_solid_shell).If collapseShellLayers is true, all available shell layers are collapsed and shells and solid fields are always merged.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  collapse_shell_layers |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, the data across different shell layers is averaged as well (default is false). |
| <strong>Pin 2</strong>|  force_averaging |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true you average, if false you just sum. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields container. |
| <strong>Pin 4</strong>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For shell/solid mixed fields, group in the same field all solids and shells (false by default). This pin only has an effect when collapse_shell_layers is false and a value for e_shell_layer is provided. |
| <strong>Pin 27</strong>|  e_shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. This pin only has an effect when collapse_shell_layers is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_mean_fc

 **Full name**: averaging.elemental_mean_fc

 **Internal name**: entity_average_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("entity_average_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_collapse_shell_layers);
op.connect(2, my_force_averaging);
op.connect(3, my_scoping);
op.connect(4, my_abstract_meshed_region);
op.connect(26, my_merge_solid_shell);
op.connect(27, my_e_shell_layer);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_mean_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.collapse_shell_layers.connect(my_collapse_shell_layers)
op.inputs.force_averaging.connect(my_force_averaging)
op.inputs.scoping.connect(my_scoping)
op.inputs.abstract_meshed_region.connect(my_abstract_meshed_region)
op.inputs.merge_solid_shell.connect(my_merge_solid_shell)
op.inputs.e_shell_layer.connect(my_e_shell_layer)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_mean_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.collapse_shell_layers.Connect(my_collapse_shell_layers)
op.inputs.force_averaging.Connect(my_force_averaging)
op.inputs.scoping.Connect(my_scoping)
op.inputs.abstract_meshed_region.Connect(my_abstract_meshed_region)
op.inputs.merge_solid_shell.Connect(my_merge_solid_shell)
op.inputs.e_shell_layer.Connect(my_e_shell_layer)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.