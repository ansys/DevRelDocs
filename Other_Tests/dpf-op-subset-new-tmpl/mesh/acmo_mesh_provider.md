# mesh:acmo mesh provider

## Description

Converts an Assembly Mesh into a DPF Meshes container

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | assembly_mesh |[`ans_dispatch_holder`](../getting-started/using-data-containers.md#ans-dispatch-holder), [`struct IAnsDispatch`](../getting-started/using-data-containers.md#struct IAnsDispatch) | Yes |  |
| **Pin 1** | unit |[`string`](../getting-started/using-data-containers.md#string) | No |  |

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
| **mesh** | core | None | None | acmo_mesh_provider | None |
