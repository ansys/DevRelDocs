---
category: composite
plugin: composite
license: None
---

# composite:convert_sampling_point_to_json

**Version: 0.0.0**

## Description

Converts a sampling point object into a sampling point json string.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  sampling_point |`struct dataProcessing::composite::sampling_point::SamplingPoint` | Sampling Point |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| string |[`string`](../../core-concepts/dpf-types.md#standard-types) | Sampling point json |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: convert_sampling_point_to_json

 **Full name**: composite.convert_sampling_point_to_json

 **Internal name**: composite::convert_sampling_point_to_json

 **License**: None


## Changelog

- Version 0.0.0: Initial release.