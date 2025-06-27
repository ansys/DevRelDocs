---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:extract scoping

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes a field or a fields container and extracts its scoping or scopings container.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  field_or_fields_container |[`field`](../../core-concepts/dpf-types#field), [`fields_container`](../../core-concepts/dpf-types#fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types#scoping), [`scopings_container`](../../core-concepts/dpf-types#scopings-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: extract_scoping

 **License**: None
 
