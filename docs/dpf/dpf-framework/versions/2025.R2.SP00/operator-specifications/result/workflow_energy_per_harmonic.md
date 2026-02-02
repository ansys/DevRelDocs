---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per harmonic

**Version: 0.0.0**

## Description

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Master scoping. All harmonics will be intersected with this scoping. |
| <strong>Pin 2</strong>|  energy_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| harmonic_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| harmonic_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: workflow_energy_per_harmonic

 **Full name**: result.workflow_energy_per_harmonic

 **Internal name**: workflow_energy_per_harmonic

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.