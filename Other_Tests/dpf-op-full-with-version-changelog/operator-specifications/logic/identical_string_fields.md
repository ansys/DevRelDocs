---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:same string fields?

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes two string fields and compares them.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_fieldA |[`string_field`](../../getting-started/using-data-containers.md#string-field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_fieldB |[`string_field`](../../getting-started/using-data-containers.md#string-field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| are_identical |[`bool`](../../getting-started/using-data-containers.md#bool) |  |
|  **Pin 1**| information |[`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_string_fields

 **Full name**: logic.identical_string_fields

 **Internal name**: compare::string_field

 **License**: None
 
