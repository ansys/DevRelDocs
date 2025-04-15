# utility:forward meshes container

## Description

Returns the input mesh or meshes container into a meshes container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container), [`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | default_label |[`string`](../getting-started/using-data-containers.md#string) | No | this default label is used if a new meshes container needs to be created (default is unknown) |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes_container |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | forward_meshes_container | utility.forward_meshes_container | forward_meshes_container | None |
