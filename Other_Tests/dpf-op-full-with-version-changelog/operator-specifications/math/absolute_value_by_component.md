---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:absolute value by component (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Compute the absolute value of each data value of the input field, no norm performed.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`double`](../../getting-started/using-data-containers.md#double), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | field or fields container with only one field is expected |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: absolute_value_by_component

 **License**: None
 
