---
category: utility
plugin: core
license: None
---

# utility:incremental concantenate as fields container.

**Version: 0.0.0**

## Description

Assemble fields in a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  label |[`label_space`](../../core-concepts/dpf-types.md#label-space) | Label space value that must be applied to the added field. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: incremental_concatenate_as_fc

 **Full name**: utility.incremental_concatenate_as_fc

 **Internal name**: incremental::concatenate_as_fc

 **License**: None


## Changelog

- Version 0.0.0: Initial release.