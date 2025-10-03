---
category: composite
plugin: composite
license: None
---

# composite:multiple_failure_criteria_operator

**Version: 0.0.0**

## Description

Uses failure configuration, CMeshedRegion and stress and strain fields to compute failure criteria and extracts the maximum over all criteria.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The mesh region which is consistent with the strain and stress containers. |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` |  |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Section data fields container. Only needed for some of the failure criteria evaluations. |
| <strong>Pin 25</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_properties_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh property fields container. Only needed if eLayupModelContextPin (218) is true. |
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Combined failure criterion configuration (string of json dict |
| <strong>Pin 102</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  check_meshed_region |[`bool`](../../core-concepts/dpf-types.md#standard-types) | The check is enabled by default but it can be costly if the meshes are huge. |
| <strong>Pin 103</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  is_acp_composite_model |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Deprecated since 2024 R2. Please use eLayupModelContextPin (pin 218). Set to true for ACP composites models. Default is false. |
| <strong>Pin 104</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  skip_sandwich_criteria |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Skip the sandwich criteria. This should be true if not all plies are selected in which case sandwich criteria cannot be evaluated in a meaningful way. Default is false. |
| <strong>Pin 218</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  layup_model_context_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Define the source of section data. Values are: 0=not available, 1=ACP, 2=RST,                                3=MIXED (ACP+RST). Default is not available. |
| <strong>Pin 400</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | CFieldsContainer with strains |
| <strong>Pin 401</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stresses_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | CFieldsContainer with stresses |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: multiple_failure_criteria_operator

 **Full name**: composite.multiple_failure_criteria_operator

 **Internal name**: composite::multiple_failure_criteria_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.