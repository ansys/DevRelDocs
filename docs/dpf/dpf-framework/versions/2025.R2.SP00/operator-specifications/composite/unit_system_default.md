---
category: composite
plugin: composite
license: None
---

# composite:unit_system_default

**Version: 0.0.0**

## Description

Returns the in the rst stream if specified, otherwise return the default unit system.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Stream with result file |
| <strong>Pin 50</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  default_unit_system |`class boost::optional<class dataProcessing::unit::CUnitSystem>` | default_unit_system |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| unit_system |`class dataProcessing::unit::CUnitSystem` | unit_system |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: unit_system_default

 **Full name**: composite.unit_system_default

 **Internal name**: composite::unit_system_default

 **License**: None


## Changelog

- Version 0.0.0: Initial release.