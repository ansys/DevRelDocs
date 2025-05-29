---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to vector fc

## Description

Takes three scalar fields container and assembles them as a 3D vector fields container.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  x |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 2</strong>|  z |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_vectors_fc

 **License**: None
