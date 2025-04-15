# averaging:elemental nodal to nodal (field)

## Description

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | average only on these entities |
| **Pin 2** | should_average |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities). |
| **Pin 4** | extend_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Compute mid nodes (when available) by averaging the neighbour primary nodes. |
| **Pin 5** | extend_weights_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Extends weights to mid nodes (when available). Default is false. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | weight |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_nodal_to_nodal | averaging.elemental_nodal_to_nodal | elemental_nodal_To_nodal | None |
