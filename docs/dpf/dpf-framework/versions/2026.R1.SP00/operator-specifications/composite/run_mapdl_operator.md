---
category: composite
plugin: composite
license: None
---

# composite:run_mapdl_operator

**Version: 0.0.0**

## Description

Runs mapdl and returns CFieldsContainer with the results at requested time

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_scoping |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources with the input rst file |
| <strong>Pin 107</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Results to read from rst file. Comma separated string. Supports 'S' and 'EPEL'. Example: 'S,EPEL' |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 4**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the result data |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: run_mapdl_operator

 **Full name**: composite.run_mapdl_operator

 **Internal name**: composite::run_mapdl_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.