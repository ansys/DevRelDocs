---
category: result
plugin: mapdl
license: None
---

# result:cms dst table provider

## Description

Read CST table from a subfile.

### Plugin

mapdl

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Data_sources (must contain at least one subfile). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dst_table |[`property_field`](../../getting-started/using-data-containers.md#property-field) | returns integer values of the dst table |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: mapdl
- Scripting name: cms_dst_table_provider
- Full name: result.cms_dst_table_provider
- Internal name: cms_dst_table_provider
- License: None
  