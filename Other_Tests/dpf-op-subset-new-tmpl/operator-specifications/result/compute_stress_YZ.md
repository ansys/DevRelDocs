# result:compute stress YZ

## Description

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the YZ shear component (12 component).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | The element scoping on which the result is computed. |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | Needed to get mesh and material ids. Optional if a data_sources have been connected. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | No | Needed to get mesh and material ids. Optional if a streams_container have been connected. |
| **Pin 9** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | No | Average the Elemental Nodal result to the requested location. |
| **Pin 10** | strain |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes | Field/or fields container containing only the elastic strain field (element nodal). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | The computed result fields container (elemental nodal). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | live post | compute_stress_YZ | result.compute_stress_YZ | compute_stress_YZ | None |
