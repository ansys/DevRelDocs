---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:assemble scalars to matrix

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  xx |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  yy |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  zz |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 3</strong>|  xy |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 4</strong>|  yz |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 5</strong>|  xz |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 6</strong>|  yx |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 7</strong>|  zy |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 8</strong>|  zx |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 60</strong>|  symmetrical |[`bool`](../../getting-started/using-data-containers.md#bool) |  |


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

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_matrices

 **License**: None
 
