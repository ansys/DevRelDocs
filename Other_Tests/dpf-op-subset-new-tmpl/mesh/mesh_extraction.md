# mesh:mesh extraction

## Description

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 2** | extension |[`int32`](../getting-started/using-data-containers.md#int32) | No | Number of extension layer |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_extraction | mesh.mesh_extraction | mesh_extraction | None |
