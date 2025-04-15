# compression:kMeans clustering

## Description

Apply kMeans clustering to group data depending on the data's non-linearity.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | clusters_number |[`int32`](../getting-started/using-data-containers.md#int32) | No | number of the clusters (dafault is 3) |
| **Pin 1** | formula |[`string`](../getting-started/using-data-containers.md#string) | No | formula ('dist'/'dotprod'), default is 'dist' |
| **Pin 2** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | an iunput fields container containing the data which will be used for the clustering |
| **Pin 3** | component_number |[`int32`](../getting-started/using-data-containers.md#int32) | No | component number as an int (default is 0), ex '0' for X-displacement, '1' for Y-displacement,... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scoping_clusters |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Scopings container with the space scoping (entities' ids) corresponding to each of k-clusters |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **compression** | core | kmeans_clustering | compression.kmeans_clustering | kmeans_operator | any_dpf_supported_increments |
