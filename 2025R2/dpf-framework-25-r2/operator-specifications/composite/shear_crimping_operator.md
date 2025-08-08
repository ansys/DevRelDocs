---
category: composite
plugin: composite
license: None
---

# composite:shear_crimping_operator

**Version: 0.0.0**

## Description

Computes shear crimping criterion for layered elements. Use the composite::layup_provider_operator                    to import the required lay-up data. The criterion can also be used for stack of solid elements if the                    ACP's composite definition file of the solid model was loaded by the composite::layup_provider_operator.                    Elements without section data are skipped.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` | Materials container |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Section Data Container |
| <strong>Pin 25</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_properties_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Properties from the ACP model to compute Shear Crimping for solids. Not needed to compute wrinkling for shells. |
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  criterion_configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Criterion specification (json dict as string): For instance "{"active": true, "kc" : 1., "kf" : 0., "wf" : 1.0}"  |
| <strong>Pin 102</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  check_mesh_regions |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 401</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stresses_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the failure value results under the label is_failure_value=1                     and failure modes under the label is_failure_value=0                     from a specific failure criterion operator. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: shear_crimping_operator

 **Full name**: composite.shear_crimping_operator

 **Internal name**: composite::shear_crimping_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.