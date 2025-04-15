# utility:hdf5dpf workflow provider

## Description

Extract a custom result from an hdf5dpf file as an executable workflow.

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
| **Pin 0** | field_or_fields_container |[`workflow`](../getting-started/using-data-containers.md#workflow) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | hdf5dpf_workglow_provider | utility.hdf5dpf_workglow_provider | hdf5::h5dpf::workflow_provider | None |
