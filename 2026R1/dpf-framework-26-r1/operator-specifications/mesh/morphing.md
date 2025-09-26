---
category: mesh
plugin: N/A
license: any_dpf_supported_increments
---

# mesh:morphing

**Version: 0.0.0**

## Description

Applies morphing on a meshed region depending on an input displacement field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  displacement |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | expects either a field or a fields container with one field |
| <strong>Pin 1</strong>|  disp_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh on which displacement are scoped |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh to morph |
| <strong>Pin 3</strong>|  in_place |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Apply in place morhing (the input mesh is changed instead of copied) (default is true) |
| <strong>Pin 4</strong>|  morphing_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | morphing algorithm to use (0=PrimeRBF, 1=BSpline, 2=TetLinear, 3=TetRBF, 4=FFI) (default is 0) |
| <strong>Pin 5</strong>|  morphing_manager_data | | Morphing Manager Data from prepare_morphing_operator (needed if disp_coordinates not specified). |
| <strong>Pin 6</strong>|  sliding_planes |[`field`](../../core-concepts/dpf-types.md#field) | Sliding planes |
| <strong>Pin 7</strong>|  sliding_nodes |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Sliding nodes |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | morphed mesh |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1 |  |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: morphing

 **Full name**: mesh.morphing

 **Internal name**: morphing

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.