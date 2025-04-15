# serialization:hdf5dpf custom read

## Description

Extract a custom result from an hdf5dpf file.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 3** | streams |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | Hdf5df file stream. |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | No | Hdf5df file data source. |
| **Pin 24** | meta_data |[`abstract_data_tree`](../getting-started/using-data-containers.md#abstract-data-tree) | No | meta_data that may be used to evaluate results or extract workflows. |
| **Pin 60** | result_name | | Yes | Name of the result that must be extracted from the hdf5dpf file |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_or_fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container), [`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | hdf5dpf_custom_read | serialization.hdf5dpf_custom_read | hdf5::h5dpf::custom | None |
