---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to matrix

**Version: 0.0.0**

## Description

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  xx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  yy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  zz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 3</strong>|  xy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 4</strong>|  yz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 5</strong>|  xz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 6</strong>|  yx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 7</strong>|  zy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 8</strong>|  zx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 60</strong>|  symmetrical |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_matrices

 **License**: None


## Changelog

- Version 0.0.0: Initial release.