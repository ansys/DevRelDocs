---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:extract field

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | if a field is in input, it is passed on as an output |
| <strong>Pin 1</strong>|  indices |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Default is the first field |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_field

 **Full name**: utility.extract_field

 **Internal name**: ExtractFromFC

 **License**: None
 
