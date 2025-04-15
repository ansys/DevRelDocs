# metadata:cyclic support provider

## Description

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | Streams containing the result file. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | data sources containing the result file. |
| **Pin 7** | sector_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | mesh of the first sector. |
| **Pin 15** | expanded_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | if this pin is set, expanding the mesh is not necessary. |
| **Pin 18** | sectors_to_expand |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) | Yes |  |
| **Pin 1** | sector_meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **metadata** | mapdl | cyclic_support_provider | metadata.cyclic_support_provider | mapdl::rst::support_provider_cyclic | None |
