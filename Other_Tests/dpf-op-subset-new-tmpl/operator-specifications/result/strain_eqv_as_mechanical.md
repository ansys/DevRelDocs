# result:von mises strains as mechanical

## Description

Computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output. |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | nodes or elements scoping required in output. |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | result file path container. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | prevents from reading the mesh in the results file. |
| **Pin 9** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | No | average the elemental nodal result to the requested location (default is nodal). |
| **Pin 13** | poisson_ratio |[`int32`](../../getting-started/using-data-containers.md#int32), [`double`](../../getting-started/using-data-containers.md#double) | No | Poisson ratio to be used in equivalent strain calculation. |
| **Pin 14** | read_cyclic |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if true, cyclic expansion is done. If false, it's ignored. |
| **Pin 200** | average_across_bodies |[`bool`](../../getting-started/using-data-containers.md#bool) | No | for multibody simulations, the stresses are averaged across bodies if true or not if false (default). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | meshes_container |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mechanical_results | None | None | strain_eqv_as_mechanical | None |
