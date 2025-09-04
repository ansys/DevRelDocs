---
category: composite
plugin: composite
license: None
---

# composite:mechanical_sampling_point_operator

**Version: 0.0.0**

## Description

Uses json failure configuration to compute evaluate composite sampling point.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_definition |[`string`](../../core-concepts/dpf-types.md#standard-types) | Combined sampling point configuration (string of json dict |
| <strong>Pin 310</strong>|  unit_system |`class dataProcessing::unit::CUnitSystem`, [`result_info`](../../core-concepts/dpf-types.md#result-info), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Default unit system. Used if the result file specifies no unit system. Can be unit system object, result_info object int or string.In case of int it is one of the predefined Ansys unit system ids, in case of string it should be a semicolon separated list of units. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| results |[`string`](../../core-concepts/dpf-types.md#standard-types) | Result in the json format. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: mechanical_sampling_point_operator

 **Full name**: composite.mechanical_sampling_point_operator

 **Internal name**: composite::mechanical_sampling_point_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.