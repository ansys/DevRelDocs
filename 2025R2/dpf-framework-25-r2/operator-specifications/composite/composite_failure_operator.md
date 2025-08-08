---
category: composite
plugin: composite
license: None
---

# composite:composite_failure_operator

**Version: 0.0.0**

## Description

Uses json failure configuration to compute evaluate composite failure criterion.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_definition |[`string`](../../core-concepts/dpf-types.md#standard-types) | Combined failure criterion configuration (string of json dict) |
| <strong>Pin 310</strong>|  unit_system |`class dataProcessing::unit::CUnitSystem`, [`result_info`](../../core-concepts/dpf-types.md#result-info), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Default unit system. Used if the result file specifies no unit system. Can be unit system object, result_info object int or string.In case of int it is one of the predefined Ansys unit system ids, in case of string it should be a semicolon separated list of units. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_containerMin |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the minimal failure value results. Contains data for the failure value,failure mode and layer index |
|  **Pin 1**| fields_containerMax |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the maximum failure value results. Contains data for the failure value,failure mode and layer index |
|  **Pin 2**| fields_containerMin_ref_surface |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the minimum failure value results. Contains data for the failure value,failure mode, global stack index, per element stack index and solid element id |
|  **Pin 3**| fields_containerMax_ref_surface |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the maximum failure value results. Contains data for the failure value,failure mode, global stack index, per element stack index and solid element id |
|  **Pin 402**| cache_status |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Cache status for the different inputs. A data tree with the attributes: rst_data_source, default_unit_system, layup_data_source, engineering_data_source, material_support and ref_surface_unit_system. Each attribute is an int that is 1 if the cache was hit and 0 if not. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: composite_failure_operator

 **Full name**: composite.composite_failure_operator

 **Internal name**: composite::composite_failure_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.