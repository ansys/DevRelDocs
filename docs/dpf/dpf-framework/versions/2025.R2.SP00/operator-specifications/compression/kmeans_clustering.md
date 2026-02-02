---
category: compression
plugin: core
license: any_dpf_supported_increments
---

# compression:kMeans clustering

**Version: 0.0.0**

## Description

Apply kMeans clustering to group data depending on the data's non-linearity.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  clusters_number |[`int32`](../../core-concepts/dpf-types.md#standard-types) | number of the clusters (dafault is 3) |
| <strong>Pin 1</strong>|  formula |[`string`](../../core-concepts/dpf-types.md#standard-types) | formula ('dist'/'dotprod'), default is 'dist' |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | an iunput fields container containing the data which will be used for the clustering |
| <strong>Pin 3</strong>|  component_number |[`int32`](../../core-concepts/dpf-types.md#standard-types) | component number as an int (default is 0), ex '0' for X-displacement, '1' for Y-displacement,... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping_clusters |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scopings container with the space scoping (entities' ids) corresponding to each of k-clusters |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: compression

 **Plugin**: core

 **Scripting name**: kmeans_clustering

 **Full name**: compression.kmeans_clustering

 **Internal name**: kmeans_operator

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.