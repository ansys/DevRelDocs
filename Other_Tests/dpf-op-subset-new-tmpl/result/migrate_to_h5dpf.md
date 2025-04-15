# result:migrate to h5dpf

## Description

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -5** | dataset_size_compression_threshold |[`int32`](../getting-started/using-data-containers.md#int32) | No | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| **Pin -2** | h5_native_compression |[`int32`](../getting-started/using-data-containers.md#int32) | No | Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed.  |
| **Pin -1** | export_floats |[`bool`](../getting-started/using-data-containers.md#bool) | No | converts double to float to reduce file size (default is true) |
| **Pin 0** | filename |[`string`](../getting-started/using-data-containers.md#string) | Yes | filename of the migrated file |
| **Pin 1** | comma_separated_list_of_results |[`string`](../getting-started/using-data-containers.md#string) | No | list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.   |
| **Pin 2** | all_time_sets |[`bool`](../getting-started/using-data-containers.md#bool) | No | default is false |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | streams (result file container) (optional) |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | No | if the stream is null then we need to get the file path from the data sources |
| **Pin 6** | compression_workflow |[`workflow`](../getting-started/using-data-containers.md#workflow), [`generic_data_container`](../getting-started/using-data-containers.md#generic-data-container) | No | BETA Option: Applies input compression workflow. User can input a GenericDataContainer that will map a compression workflow to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}} |
| **Pin 7** | filtering_workflow |[`workflow`](../getting-started/using-data-containers.md#workflow), [`generic_data_container`](../getting-started/using-data-containers.md#generic-data-container) | No | Applies input filtering workflow. User can input a GenericDataContainer of the format described for Pin(6) that will map a filtering workflow to a result name. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | migrated_file |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | migrate_to_h5dpf | result.migrate_to_h5dpf | hdf5::h5dpf::migrate_file | None |
