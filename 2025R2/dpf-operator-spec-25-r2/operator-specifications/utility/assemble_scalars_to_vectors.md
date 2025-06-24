---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:assemble scalars to vector

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes three scalar fields and assembles them as a 3D vector field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  x |[`field`](./../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  y |[`field`](./../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  z |[`field`](./../../getting-started/using-data-containers.md#field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_vectors

 **License**: None
 
