---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:overlap fields

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Take two fields and superpose them, the overlapping field will override values of base_field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_field |[`field`](./../../core-concepts/dpf-types#field) |  |
| <strong>Pin 1</strong>|  overlapping_field |[`field`](./../../core-concepts/dpf-types#field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../core-concepts/dpf-types#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: overlap_fields

 **License**: None
 
