---
category: composite
plugin: composite
license: None
---

# composite:interlaminar_normal_stress_operator

**Version: 0.0.0**

## Description

Computes the interlaminar normal stresses and updates the stress container                     for layered shell elements if the composite::layup_provider_operator                     is used to load lay-up data from the composites definition file of ACP. This operator cannot be used                     in combination with section data from the RST file. Elements with missing data are skipped.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed Region |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials_container |`materials_container` | Materials Container |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Section data fields container |
| <strong>Pin 25</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_properties_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh property fields container |
| <strong>Pin 102</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  check_mesh_regions |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to check if all the inputs have the same meshed region. This check can become expensive |
| <strong>Pin 400</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strains_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Strains |
| <strong>Pin 401</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stresses_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Stresses |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: interlaminar_normal_stress_operator

 **Full name**: composite.interlaminar_normal_stress_operator

 **Internal name**: composite::interlaminar_normal_stress_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.