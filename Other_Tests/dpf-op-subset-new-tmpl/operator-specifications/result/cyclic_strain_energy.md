# result:cyclic strain energy

## Description

Computes mapdl::rst::ENG_SE from an rst file.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No |  |
| **Pin 1** | mesh_scoping |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No |  |
| **Pin 2** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No | FieldsContainer already allocated modified inplace |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container), [`stream`](../../getting-started/using-data-containers.md#stream) | No | Streams containing the result file. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | data sources containing the result file. |
| **Pin 5** | bool_rotate_to_global |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if true the field is rotated to global coordinate system (default true) |
| **Pin 6** | all_dofs |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if this pin is set to true, all the dofs are retrieved. By default this pin is set to false and only the translational dofs are retrieved. |
| **Pin 7** | sector_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | mesh of the base sector (can be a skin). |
| **Pin 14** | read_cyclic |[`enum dataProcessing::ECyclicReading`](../../getting-started/using-data-containers.md#enum-dataprocessing::ecyclicreading), [`int32`](../../getting-started/using-data-containers.md#int32) | No | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| **Pin 15** | expanded_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | mesh expanded. |
| **Pin 16** | cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainer filled in |
| **Pin 1** | expanded_meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | cyclic_strain_energy | result.cyclic_strain_energy | mapdl::rst::ENG_SE_cyclic | None |
