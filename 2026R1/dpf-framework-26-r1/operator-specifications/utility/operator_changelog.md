---
category: utility
plugin: core
license: None
---

# utility:operator changelog

**Version: 0.0.0**

## Description

Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  operator_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Operator internal name. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| changelog_gdc |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | GenericDataContainer used to instantiate a Changelog. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: operator_changelog

 **Full name**: utility.operator_changelog

 **Internal name**: operator_changelog

 **License**: None


## Changelog

- Version 0.0.0: Initial release.