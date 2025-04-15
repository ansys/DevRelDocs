# mesh:meshes provider

## Description

Reads meshes from result files. Meshes can be spatially or temporally varying.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`int32`](../../getting-started/using-data-containers.md#int32) | No | Time/frequency set IDs required in output. |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | result file path container, used if no streams are set |
| **Pin 14** | read_cyclic |[`enum dataProcessing::ECyclicReading`](../../getting-started/using-data-containers.md#enum-dataProcessing::ECyclicReading), [`int32`](../../getting-started/using-data-containers.md#int32) | No | if 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1). |
| **Pin 25** | region_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | meshes_provider | mesh.meshes_provider | meshes_provider | None |
