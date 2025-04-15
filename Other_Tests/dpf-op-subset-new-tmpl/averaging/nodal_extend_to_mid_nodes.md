# averaging:nodal extend to mid nodes (field)

## Description

Extends a Nodal field defined on corner nodes to a field defined also on mid nodes.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | node_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Nodes expected in output. |
| **Pin 5** | element_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Precomputed list of elements of interest (improves performances). |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin inplace** |[`bool`](../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | nodal_extend_to_mid_nodes | averaging.nodal_extend_to_mid_nodes | nodal_extend_to_mid_nodes | None |
