# mesh:node coordinates

## Description

Returns the node coordinates of the mesh(es) in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | coordinates |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | node_coordinates | mesh.node_coordinates | mesh::node_coordinates | None |
