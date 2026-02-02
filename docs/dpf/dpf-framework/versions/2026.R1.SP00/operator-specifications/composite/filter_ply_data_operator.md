---
category: composite
plugin: composite
license: None
---

# composite:filter_ply_data_operator

**Version: 0.0.0**

## Description

Selects a ply from layered elemental_nodal data and averages the data over the spots. The result is a elemental nodal field with a single value per (corner) node. For solid elements no averaging happens and the output elemental nodal field just contains the values of selected plies (one value per node)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | Elemental Nodal input field with layered data. Example are stress and strains fields as read from the rst file. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  ply_id |[`string`](../../core-concepts/dpf-types.md#standard-types) | Ply Id of the analysis ply that gets selected. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduction_strategy |[`string`](../../core-concepts/dpf-types.md#standard-types) | Reduction strategy for spot data (bot, mid, top) values. Available options:  - AVG: average over spots (default) - MIN: take minimum value of all spots - MAX: take maximum value of all spots - BOT: take bottom value (only supported for shell elements if at least two spots are available in the output) - MID: take mid value (only supported for shell elements if at least three spots are available in the output) - TOP: take top value (only supported for shell elements if at least two spots are available in the output) |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed region with composite information. The mesh needs to have property field with the name 'element_layer_indices' whichcontains the number of layers for each element. It also needs to have a field with the name AnalysisPly::ply_id where ply_id is the ply_id as defined by pin 1. These two property fields are automatically added to the meshed region if the 'composite::layup_provider_operator'is run. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) | Output field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: filter_ply_data_operator

 **Full name**: composite.filter_ply_data_operator

 **Internal name**: composite::filter_ply_data_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.