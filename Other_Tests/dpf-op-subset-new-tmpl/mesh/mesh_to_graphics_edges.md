# mesh:mesh_to_graphics_edges

## Description

Generate edges of surface elements for input mesh

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 6** | include_mid_nodes |[`bool`](../getting-started/using-data-containers.md#bool) | No |  |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | nodes |[`field`](../getting-started/using-data-containers.md#field) | Yes | node coordinates |
| **Pin 2** | connectivity |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_to_graphics_edges | mesh.mesh_to_graphics_edges | mesh_to_graphics_edges | None |
