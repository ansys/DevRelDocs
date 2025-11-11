---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to vector

**Version: 0.0.0**

## Description

Takes three scalar fields and assembles them as a 3D vector field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  x |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  y |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  z |[`field`](../../core-concepts/dpf-types.md#field) |  |

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

 **Internal name**: assemble_scalars_to_vectors

 **License**: None


## Changelog

- Version 0.0.0: Initial release.