---
category: result
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# result:equivalent radiated power

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Compute the Equivalent Radiated Power (ERP)


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | the input field container expects displacements fields |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](./../../getting-started/using-data-containers.md#meshes-container) | the mesh region in this pin has to be boundary or skin mesh |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_scoping |[`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](./../../getting-started/using-data-containers.md#scoping) | load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_density |[`double`](./../../getting-started/using-data-containers.md#double) | mass density (if it's not specified, default value of the air is applied). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  speed_of_sound |[`double`](./../../getting-started/using-data-containers.md#double) | speed of sound (if it's not specified, default value of the speed of sound in the air is applied). |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  erp_type |[`int32`](./../../getting-started/using-data-containers.md#int32) | if this pin is set to 0, the classical ERP is computed, 1 the corrected ERP is computed (a mesh of one face has to be given in the pin 1) and 2 the enhanced ERP is computed. Default is 0. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  boolean |[`bool`](./../../getting-started/using-data-containers.md#bool) | if this pin is set to true, the ERP level in dB is computed |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  factor |[`double`](./../../getting-started/using-data-containers.md#double) | erp reference value. Default is 1E-12 |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: equivalent_radiated_power

 **Full name**: result.equivalent_radiated_power

 **Internal name**: ERP

 **License**: any_dpf_supported_increments
 
