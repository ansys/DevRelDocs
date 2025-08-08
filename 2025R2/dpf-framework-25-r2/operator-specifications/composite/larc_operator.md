---
category: composite
plugin: composite
license: None
---

# composite:larc_operator

**Version: 0.0.0**

## Description

Computes Larc for ElementalNodal data

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |materials_container | Materials container |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Layup Container with layer thicknesses, angles etc. |
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  criterion_configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Criterion specification (json dict as string): For instance {"active": True, "dim" : 2, "lfc" : True, "lft" : True, "lmc" : True, "lmt" : True, "wf_lfc" : 1, "wf_lft" : 1, "wf_lmc" : 1, "wf_lmt" : 1} |
| <strong>Pin 101</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  activate_ply_type_filter |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, only computes failure criteria for ply type 'isotropic' |
| <strong>Pin 102</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  bool |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 400</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
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

 **Scripting name**: larc_operator

 **Full name**: composite.larc_operator

 **Internal name**: composite::larc_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.