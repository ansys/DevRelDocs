# mesh:mesh_to_graphics

## Description

Generate tessellation for input mesh

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 2** | node_normals |[`bool`](../getting-started/using-data-containers.md#bool) | No | average element normals for node normals (default no, use element normals for node normals) |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | nodes |[`field`](../getting-started/using-data-containers.md#field) | Yes | node coordinates |
| **Pin 1** | normals |[`field`](../getting-started/using-data-containers.md#field) | Yes | node normals |
| **Pin 2** | connectivity |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_to_graphics | mesh.mesh_to_graphics | mesh_to_graphics | None |
