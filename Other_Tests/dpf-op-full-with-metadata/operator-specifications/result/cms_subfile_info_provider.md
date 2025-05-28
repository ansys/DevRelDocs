---
category: result
plugin: mapdl
license: None
---

# result:cms subfile info provider

## Description

Read required information from a subfile.

### Plugin

mapdl

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Data_sources (must contain at least one subfile). |
| <strong>Pin 200</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cms_subfile_data |[`bool`](../../getting-started/using-data-containers.md#bool) | If this pin i set to true, data are return in a field. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | int32 |[`int32`](../../getting-started/using-data-containers.md#int32) | returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`property_field`](../../getting-started/using-data-containers.md#property-field) | returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: mapdl
- Scripting name: cms_subfile_info_provider
- Full name: result.cms_subfile_info_provider
- Internal name: cms_subfile_info_provider
- License: None
  