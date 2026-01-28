---
category: utility
plugin: core
license: None
---

# utility:extract field

**Version: 0.0.0**

## Description

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | if a field is in input, it is passed on as an output |
| <strong>Pin 1</strong>|  indices |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Default is the first field |

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

 **Scripting name**: extract_field

 **Full name**: utility.extract_field

 **Internal name**: ExtractFromFC

 **License**: None


## Changelog

- Version 0.0.0: Initial release.