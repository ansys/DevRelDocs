# result:compute total strain X

## Description

Computes the strain from a displacement field.
Only SOLID185 (B-Bar, Simplified Enhanced Strain, Enhanced Strain formulations), SOLID186 (Full Integration) & SOLID187 elements are supported.
Layered elements are not supported.
Thermal strains are not supported.
Only one value of material properties are allowed per element for isotropic and orthotropic elasticity. Material nonlinearity is not supported
Only linear analysis are supported without On Demand Expansion.
All coordinates are global coordinates.
Euler Angles need to be included in the database.
 Get the XX normal component (00 component).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`int32`](../getting-started/using-data-containers.md#int32), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>), [`double`](../getting-started/using-data-containers.md#double), [`field`](../getting-started/using-data-containers.md#field), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | No | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.. Will only be used if no displacement input is given (will be applied on displacement operator). |
| **Pin 1** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | The element scoping on which the result is computed. |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected. |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected. |
| **Pin 5** | extrapolate |[`int32`](../getting-started/using-data-containers.md#int32) | No | Whether to extrapolate the data from the integration points to the nodes. |
| **Pin 6** | nonlinear |[`int32`](../getting-started/using-data-containers.md#int32) | No | Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity). |
| **Pin 7** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support. |
| **Pin 9** | requested_location |[`string`](../getting-started/using-data-containers.md#string) | No | Average the Elemental Nodal result to the requested location. |
| **Pin 10** | displacement |[`fields_container`](../getting-started/using-data-containers.md#fields-container), [`field`](../getting-started/using-data-containers.md#field) | No | Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | The computed result fields container (elemental nodal). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | live post | compute_total_strain_X | result.compute_total_strain_X | compute_total_strain_X | None |
