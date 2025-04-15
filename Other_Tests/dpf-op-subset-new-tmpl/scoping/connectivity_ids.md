# scoping:connectivity ids

## Description

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes | Elemental scoping |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | the support of the scoping is expected if there is no mesh in input |
| **Pin 10** | take_mid_nodes |[`bool`](../getting-started/using-data-containers.md#bool) | No | default is true |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 1** | elemental_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes | same as the input scoping but with ids duplicated to have the same size as nodal output scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | connectivity_ids | scoping.connectivity_ids | scoping::connectivity_ids | None |
