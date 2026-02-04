---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per component

**Version: 0.0.0**

## Description

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed. |
| <strong>Pin 2</strong>|  energy_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy, 3: All energy types) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong>|  named_selection |[`string`](../../core-concepts/dpf-types.md#standard-types) | Named Selections. Intersection of all  Named Selections with the master scoping will be done. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| component_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| component_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 2**| component_total_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 3**| component_total_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 4**| component_strain_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 5**| component_strain_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 6**| component_kinetic_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 7**| component_kinetic_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: workflow_energy_per_component

 **Full name**: result.workflow_energy_per_component

 **Internal name**: workflow_energy_per_component

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.