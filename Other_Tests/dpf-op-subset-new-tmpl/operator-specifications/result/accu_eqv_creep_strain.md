# result:accu eqv creep strain

## Description

Read/compute element nodal accumulated equivalent creep strain by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | No | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| **Pin 1** | mesh_scoping |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`scoping`](../../getting-started/using-data-containers.md#scoping) | No | nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains |
| **Pin 2** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No | Fields container already allocated modified inplace |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | result file path container, used if no streams are set |
| **Pin 5** | bool_rotate_to_global |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if true the field is rotated to global coordinate system (default true) |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | prevents from reading the mesh in the result files |
| **Pin 9** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | No | requested location Nodal, Elemental or ElementalNodal |
| **Pin 14** | read_cyclic |[`enum dataProcessing::ECyclicReading`](../../getting-started/using-data-containers.md#enum-dataprocessing::ecyclicreading), [`int32`](../../getting-started/using-data-containers.md#int32) | No | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| **Pin 22** | read_beams |[`bool`](../../getting-started/using-data-containers.md#bool) | No | elemental nodal beam results are read if this pin is set to true (default is false) |
| **Pin 26** | split_shells |[`bool`](../../getting-started/using-data-containers.md#bool) | No | This pin forces elemental nodal shell and solid results to be split if this pin is set to true (default is false) |
| **Pin 27** | shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32) | No | If the requested_location pin is not connected, and if spli_shells pin is set to true, we choose one of the shell layer for shell element. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | accu_eqv_creep_strain | result.accu_eqv_creep_strain | ENL_CREQ | None |
