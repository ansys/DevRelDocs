---
category: serialization
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# serialization:export symbolic workflow

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) |  |
| <strong>Pin 1</strong>|  path |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 2</strong>|  format |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 is ASCII format and 1 is binary, default is 0. |
| <strong>Pin 3</strong>|  options |[`int32`](../../getting-started/using-data-containers.md#int32) | 1 copies connections with its data, 2 forwards named inputs and outputs names, 7 copies connections of named inputs and ouputs with their data. default is 7. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources), [`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: export_symbolic_workflow

 **License**: any_dpf_supported_increments
 
