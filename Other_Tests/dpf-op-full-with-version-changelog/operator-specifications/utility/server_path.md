---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:server path

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Returns the platform-specific path to a folder in the Dpf server


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  subpath |[`int32`](../../getting-started/using-data-containers.md#int32) | Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows". |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| path |[`string`](../../getting-started/using-data-containers.md#string) | Path to the requested folder in the Dpf server |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: server_path

 **Full name**: utility.server_path

 **Internal name**: server_path

 **License**: None
 
