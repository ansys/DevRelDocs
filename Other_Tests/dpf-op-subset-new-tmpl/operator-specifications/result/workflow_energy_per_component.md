# result:workflow energy per component

## Description

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed. |
| **Pin 2** | energy_type |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy) |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 5** | named_selection |[`string`](../../getting-started/using-data-containers.md#string) | No | Named Selections. Intersection of all  Named Selections with the master scoping will be done. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | component_energy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | component_energy_percentage |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | workflow_energy_per_component | result.workflow_energy_per_component | workflow_energy_per_component | any_dpf_supported_increments |
