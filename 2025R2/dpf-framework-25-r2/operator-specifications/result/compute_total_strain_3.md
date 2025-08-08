---
category: result
plugin: live post
license: None
---

# result:compute total strain 3

**Version: 0.0.0**

## Description

Computes the strain from a displacement field.
Only SOLID185 (B-Bar, Simplified Enhanced Strain, Enhanced Strain formulations), SOLID186 (Full Integration) & SOLID187 elements are supported.
Layered elements are not supported.
Thermal strains are not supported.
Only one value of material properties are allowed per element for isotropic and orthotropic elasticity. Material nonlinearity is not supported
Only linear analysis are supported without On Demand Expansion.
All coordinates are global coordinates.
Euler Angles need to be included in the database.
 Get the 3rd principal component.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.. Will only be used if no displacement input is given (will be applied on displacement operator). |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | The element scoping on which the result is computed. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected. |
| <strong>Pin 5</strong>|  extrapolate |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Whether to extrapolate the data from the integration points to the nodes. |
| <strong>Pin 6</strong>|  nonlinear |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity). |
| <strong>Pin 7</strong>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Average the Elemental Nodal result to the requested location. |
| <strong>Pin 10</strong>|  displacement |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The computed result fields container (elemental nodal). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: live post

 **Scripting name**: compute_total_strain_3

 **Full name**: result.compute_total_strain_3

 **Internal name**: compute_total_strain_3

 **License**: None


## Changelog

- Version 0.0.0: Initial release.