# scoping:compute element centroids

## Description

Computes the element centroids of the mesh. It also outputs the element measure.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | element_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | If provided, only the centroids of the elements in the scoping are computed. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Mesh to compute centroids |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | centroids |[`field`](../../getting-started/using-data-containers.md#field) | Yes | element centroids. |
| **Pin 1** | measure |[`field`](../../getting-started/using-data-containers.md#field) | Yes | element measure (length, surface or volume depending on the dimension of the element). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | compute_element_centroids | scoping.compute_element_centroids | compute_element_centroids | None |
