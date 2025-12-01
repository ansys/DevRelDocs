---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:transient rayleigh integration

**Version: 0.0.0**

## Description

Computes the transient Rayleigh integral

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | the input field container expects acceleration fields |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | The meshes region in this pin has to be boundary or skin mesh. This is the source meshes. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_scoping |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Load step number (if it's specified, the Transient rayleigh integration is computed only on the substeps of this step) or time scoping |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | The field represents the coordinates of the observation position. It should be specified if not observation mesh is provided.  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  observation_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | This is the observation mesh region |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_density |[`double`](../../core-concepts/dpf-types.md#standard-types) | Mass density (if it's not specified, default value of the air is applied). |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  speed_of_sound |[`double`](../../core-concepts/dpf-types.md#standard-types) | Speed of sound (if it's not specified, default value of the speed of sound in the air is applied). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: transient_rayleigh_integration

 **Full name**: result.transient_rayleigh_integration

 **Internal name**: transient_rayleigh_integration

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transient_rayleigh_integration"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(2, my_time_scoping);
op.connect(3, my_field);
op.connect(4, my_observation_mesh);
op.connect(5, my_mass_density);
op.connect(6, my_speed_of_sound);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.transient_rayleigh_integration() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.field.connect(my_field)
op.inputs.observation_mesh.connect(my_observation_mesh)
op.inputs.mass_density.connect(my_mass_density)
op.inputs.speed_of_sound.connect(my_speed_of_sound)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.transient_rayleigh_integration() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.field.Connect(my_field)
op.inputs.observation_mesh.Connect(my_observation_mesh)
op.inputs.mass_density.Connect(my_mass_density)
op.inputs.speed_of_sound.Connect(my_speed_of_sound)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.