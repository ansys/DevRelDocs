# result:workflow energy per harmonic

## Description

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Master scoping. All harmonics will be intersected with this scoping. |
| **Pin 2** | energy_type |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy) |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | harmonic_energy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | harmonic_energy_percentage |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | workflow_energy_per_harmonic | result.workflow_energy_per_harmonic | workflow_energy_per_harmonic | any_dpf_supported_increments |
