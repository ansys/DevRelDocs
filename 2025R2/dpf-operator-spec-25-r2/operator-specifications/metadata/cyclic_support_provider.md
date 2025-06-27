---
category: metadata
plugin: mapdl
license: None
Version: 0.0.0
---

# metadata:cyclic support provider

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams containing the result file. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | data sources containing the result file. |
| <strong>Pin 7</strong>|  sector_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | mesh of the first sector. |
| <strong>Pin 15</strong>|  expanded_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | if this pin is set, expanding the mesh is not necessary. |
| <strong>Pin 18</strong>|  sectors_to_expand |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |  |
|  **Pin 1**| sector_meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: metadata

 **Plugin**: mapdl

 **Scripting name**: cyclic_support_provider

 **Full name**: metadata.cyclic_support_provider

 **Internal name**: mapdl::rst::support_provider_cyclic

 **License**: None
 
