---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to matrix fc

## Description

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  xx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  yy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 2</strong>|  zz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 3</strong>|  xy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 4</strong>|  yz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 5</strong>|  xz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 6</strong>|  yx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 7</strong>|  zy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 8</strong>|  zx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 60</strong>|  symmetrical |[`bool`](../../getting-started/using-data-containers.md#bool) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: None
- Full name: None
- Internal name: assemble_scalars_to_matrices_fc
- License: None
  