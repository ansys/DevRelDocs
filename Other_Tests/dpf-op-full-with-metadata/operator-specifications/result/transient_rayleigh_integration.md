---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:transient rayleigh integration

## Description

Computes the transient Rayleigh integral

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | the input field container expects acceleration fields |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | The meshes region in this pin has to be boundary or skin mesh. This is the source meshes. |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_scoping |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Load step number (if it's specified, the Transient rayleigh integration is computed only on the substeps of this step) or time scoping |
| <strong>Pin 3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) | The field represents the coordinates of the observation position. It should be specified if not observation mesh is provided.  |
| <strong>Pin 4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  observation_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | This is the observation mesh region |
| <strong>Pin 5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_density |[`double`](../../getting-started/using-data-containers.md#double) | Mass density (if it's not specified, default value of the air is applied). |
| <strong>Pin 6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  speed_of_sound |[`double`](../../getting-started/using-data-containers.md#double) | Speed of sound (if it's not specified, default value of the speed of sound in the air is applied). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: core
- Scripting name: transient_rayleigh_integration
- Full name: result.transient_rayleigh_integration
- Internal name: transient_rayleigh_integration
- License: any_dpf_supported_increments
  