---
category: scoping
plugin: core
license: None
---

# scoping:compute element centroids

## Description

Computes the element centroids of the mesh. It also outputs the element measure.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  element_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | If provided, only the centroids of the elements in the scoping are computed. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Mesh to compute centroids |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | centroids |[`field`](../../getting-started/using-data-containers.md#field) | element centroids. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | measure |[`field`](../../getting-started/using-data-containers.md#field) | element measure (length, surface or volume depending on the dimension of the element). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

- Category: scoping
- Plugin: core
- Scripting name: compute_element_centroids
- Full name: scoping.compute_element_centroids
- Internal name: compute_element_centroids
- License: None
  