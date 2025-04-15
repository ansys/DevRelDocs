# result:euler nodes

## Description

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container), [`stream`](../getting-started/using-data-containers.md#stream) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 6** | coord_and_euler |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | if true, then the field has ncomp=6 with 3 coordinates and 3 Euler angles, else there is only the Euler angles (default is true). |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | euler_nodes | result.euler_nodes | coords_and_euler_nodes | None |
