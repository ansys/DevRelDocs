---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:+ constant (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the sum of a field (in 0) and a scalar (in 1).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../getting-started/using-data-containers.md#field), [`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  ponderation |[`double`](./../../getting-started/using-data-containers.md#double), [`vector<double>`](./../../getting-started/using-data-containers.md#vector<double>) | double or vector of double |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: add_constant

 **Full name**: math.add_constant

 **Internal name**: add_constant

 **License**: None
 
