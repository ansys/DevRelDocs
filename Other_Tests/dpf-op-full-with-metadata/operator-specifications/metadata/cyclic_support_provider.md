---
category: metadata
plugin: mapdl
license: None
---

# metadata:cyclic support provider

## Description

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

### Plugin

mapdl

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | Streams containing the result file. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | data sources containing the result file. |
| <strong>Pin 7</strong>|  sector_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | mesh of the first sector. |
| <strong>Pin 15</strong>|  expanded_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | if this pin is set, expanding the mesh is not necessary. |
| <strong>Pin 18</strong>|  sectors_to_expand |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | sector_meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

- Category: metadata
- Plugin: mapdl
- Scripting name: cyclic_support_provider
- Full name: metadata.cyclic_support_provider
- Internal name: mapdl::rst::support_provider_cyclic
- License: None
  