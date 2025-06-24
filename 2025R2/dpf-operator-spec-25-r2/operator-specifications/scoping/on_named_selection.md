---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:on named selection

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

provides a scoping at a given location based on a given named selection


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](./../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  named_selection_name |[`string`](./../../getting-started/using-data-containers.md#string) | the string is expected to be in upper case |
| <strong>Pin 2</strong>|  int_inclusive |[`int32`](./../../getting-started/using-data-containers.md#int32) | If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../getting-started/using-data-containers.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: on_named_selection

 **Full name**: scoping.on_named_selection

 **Internal name**: scoping_provider_by_ns

 **License**: None
 
