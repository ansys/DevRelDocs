# math:dot (by scalar field)

## Description

Extract Elemental Topology Density result from topo solver output. Default behavior is to use graphical density.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 3** | streams |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No | topo file stream. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | No | topo file data source. |
| **Pin 200** | custom_ponderation_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | take custom ponderation_field from the topo file by name |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | hdf5::topo::elemental_density | None |
