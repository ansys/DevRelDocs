---
category: scoping
plugin: core
license: None
---

# scoping:compute element centroids

**Version: 0.0.0**

## Description

Computes the element centroids of the mesh. It also outputs the element measure.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | If provided, only the centroids of the elements in the scoping are computed. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh to compute centroids |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| centroids |[`field`](../../core-concepts/dpf-types.md#field) | element centroids. |
|  **Pin 1**| measure |[`field`](../../core-concepts/dpf-types.md#field) | element measure (length, surface or volume depending on the dimension of the element). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: compute_element_centroids

 **Full name**: scoping.compute_element_centroids

 **Internal name**: compute_element_centroids

 **License**: None


## Changelog

- Version 0.0.0: Initial release.