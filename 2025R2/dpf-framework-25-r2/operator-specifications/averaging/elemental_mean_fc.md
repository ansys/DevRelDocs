---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:elemental mean (fields container)

Version: 0.0.0


## Description

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is not specified, then the fields are split by element shape and the output fields container has an elshape label.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> | collapse_shell_layers |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, shell layers are averaged as well (default is false). |
| <strong>Pin 2</strong> | force_averaging |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true you average, if false you just sum. |
| <strong>Pin 3</strong> | scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |
| <strong>Pin 4</strong> | abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

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