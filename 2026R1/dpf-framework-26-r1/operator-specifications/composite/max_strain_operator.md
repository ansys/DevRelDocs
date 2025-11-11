---
category: composite
plugin: composite
license: None
---

# composite:max_strain_operator

**Version: 0.0.0**

## Description

Computes max strain for ElementalNodal data

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed Region |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` |  |
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  criterion_configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Criterion specification: For instance {"active": true, "e1": true, "e12": true, "e13": false, "e2": true, "e23": false, "e3": false, "eSxy": 0, "eSxz": 0, "eSyz": 0, "eXc": 0, "eXt": 0, "eYc": 0, "eYt": 0, "eZc": 0, "eZt": 0, "force_global_strain_limits": false, "wf_e1": 1, "wf_e12": 1, "wf_e13": 1, "wf_e2": 1, "wf_e23": 1, "wf_e3": 1}  |
| <strong>Pin 101</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  activate_ply_type_filter |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, only computes failure criteria for ply types 'woven' and 'regular'  |
| <strong>Pin 102</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  check_mesh_regions |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 400</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

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

 **Scripting name**: max_strain_operator

 **Full name**: composite.max_strain_operator

 **Internal name**: composite::max_strain_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.