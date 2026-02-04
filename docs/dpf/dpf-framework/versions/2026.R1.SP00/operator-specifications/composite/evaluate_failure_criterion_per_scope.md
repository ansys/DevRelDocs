---
category: composite
plugin: composite
license: None
---

# composite:evaluate_failure_criterion_per_scope

**Version: 0.0.0**

## Description

Evaluates failure criteria for a specified scope.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Element scoping on which failure criteria are evaluated |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stream_provider |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Stream with result file. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh (including layup information if available) |
| <strong>Pin 22</strong>|  material_fields |`umap<string,struct dataProcessing::composite::ImportedMaterialField>` | Material fields: Only needed if has_layup_provider is true |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` | Materials container |
| <strong>Pin 24</strong>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Section Data Container: Only needed if has_layup_provider is true |
| <strong>Pin 25</strong>|  mesh_properties_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh Properties Container Container: Only needed if has_layup_provider is true |
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  criterion_configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Failure criteria configuration |
| <strong>Pin 217</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  has_layup_provider |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Deprecated since 2024 R2. Use input pin 218instead.                               Should be set to true if layup information is available. Equivalent new input is ACP (1). |
| <strong>Pin 218</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  layup_model_context_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Define the source of section data. Values are: 0=not available, 1=ACP, 2=RST,                                3=MIXED (ACP+RST). |
| <strong>Pin 302</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  request_sandwich_results |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Request results for sandwich failure criteria. |
| <strong>Pin 303</strong>|  use_live_evaluation |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Use live evaluation. Default: False |
| <strong>Pin 307</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scope_configuration |`struct dataProcessing::composite::CompositeScopeConfig` | Scope configuration |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 304**| failure_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the failure results |
|  **Pin 306**| time_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Requested time id |
|  **Pin 400**| strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the strains |
|  **Pin 401**| stresses_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the stresses |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: evaluate_failure_criterion_per_scope

 **Full name**: composite.evaluate_failure_criterion_per_scope

 **Internal name**: composite::evaluate_failure_criterion_per_scope

 **License**: None


## Changelog

- Version 0.0.0: Initial release.