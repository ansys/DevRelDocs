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
| <strong>Pin 27</strong>|  e_shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0: Top, 1: Bottom, 2: BottomTop, 3: Mid, 4: BottomTopMid. This pin only has an effect when collapse_shell_layers is false. |

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


## Changelog

- Version 0.0.0: Initial release.