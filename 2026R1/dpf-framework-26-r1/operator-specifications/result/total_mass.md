---
category: result
plugin: mapdl
license: None
---

# result:total mass

**Version: 0.0.0**

## Description

Reads total mass from mode file.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources (must contain at least one mode file). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mass |[`double`](../../core-concepts/dpf-types.md#standard-types) | the unit should be grabbed from the rst file |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: total_mass

 **Full name**: result.total_mass

 **Internal name**: mapdl::mode::total_mass

 **License**: None


## Changelog

- Version 0.0.0: Initial release.