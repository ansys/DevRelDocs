# result:cms subfile info provider

## Description

Read required information from a subfile.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | Data_sources (must contain at least one subfile). |
| **Pin 200** | cms_subfile_data |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | If this pin i set to true, data are return in a field. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | int32 |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes |
| **Pin 1** | field |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes | returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | cms_subfile_info_provider | result.cms_subfile_info_provider | cms_subfile_info_provider | None |
