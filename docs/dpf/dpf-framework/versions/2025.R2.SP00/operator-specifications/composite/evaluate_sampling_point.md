---
category: composite
plugin: composite
license: None
---

# composite:evaluate_sampling_point

**Version: 0.0.0**

## Description

Creates a sampling point object.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Element scoping |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  material_support |`abstract_field_support` | Material Support |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` | Materials Container |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Section data container |
| <strong>Pin 304</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  failure_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container that contains the failure values |
| <strong>Pin 306</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | requested_time_id |
| <strong>Pin 308</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  extract_max_failure_per_layer |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, extract maximum failure value per layer. Otherwise get max values per spot. |
| <strong>Pin 309</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  check_mechanical_unit_system |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Check mechancial unit system. If true, checks that unit system is supported by mechanical |
| <strong>Pin 310</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit_system |`class dataProcessing::unit::CUnitSystem`, [`result_info`](../../core-concepts/dpf-types.md#result-info), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Unit system. Can be unit system object, result_info object int or string.In case of int it is one of the predefined Ansys unit system ids, in case of string it should be a semicolon separated list of units. |
| <strong>Pin 400</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Strains Container |
| <strong>Pin 401</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stresses_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Stresses Container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| struct dataProcessing::composite::sampling_point::SamplingPoint |`struct dataProcessing::composite::sampling_point::SamplingPoint` | Sampling Point |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: evaluate_sampling_point

 **Full name**: composite.evaluate_sampling_point

 **Internal name**: composite::evaluate_sampling_point

 **License**: None


## Changelog

- Version 0.0.0: Initial release.