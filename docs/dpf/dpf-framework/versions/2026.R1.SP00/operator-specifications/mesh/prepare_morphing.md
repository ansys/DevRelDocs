---
category: mesh
plugin: N/A
license: any_dpf_supported_increments
---

# mesh:prepare morphing

**Version: 0.0.0**

## Description

Prepare morphing on a meshed region depending on an input displacement field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  displacement_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | expects either a scoping or a scopings container with one field |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  disp_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh on which displacement are scoped |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh to morph |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| morphing_manager_data | | Morphing manager data (can be used as input of morphed_field or morphing operators. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: prepare_morphing

 **Full name**: mesh.prepare_morphing

 **Internal name**: prepare_morphing

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("prepare_morphing"); // operator instantiation
op.connect(0, my_displacement_scoping);
op.connect(1, my_disp_mesh);
op.connect(2, my_mesh);
 my_morphing_manager_data = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.prepare_morphing() # operator instantiation
op.inputs.displacement_scoping.connect(my_displacement_scoping)
op.inputs.disp_mesh.connect(my_disp_mesh)
op.inputs.mesh.connect(my_mesh)
my_morphing_manager_data = op.outputs.morphing_manager_data()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.prepare_morphing() # operator instantiation
op.inputs.displacement_scoping.Connect(my_displacement_scoping)
op.inputs.disp_mesh.Connect(my_disp_mesh)
op.inputs.mesh.Connect(my_mesh)
my_morphing_manager_data = op.outputs.morphing_manager_data.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.