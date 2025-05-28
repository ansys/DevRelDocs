---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (field)

## Description

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | average only on these entities |
| <strong>Pin 2</strong>|  should_average |[`bool`](../../getting-started/using-data-containers.md#bool) | Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities). |
| <strong>Pin 4</strong>|  extend_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | Compute mid nodes (when available) by averaging the neighbour primary nodes. |
| <strong>Pin 5</strong>|  extend_weights_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | Extends weights to mid nodes (when available). Default is false. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 1**| weight |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal

 **Full name**: averaging.elemental_nodal_to_nodal

 **Internal name**: elemental_nodal_To_nodal

 **License**: None
