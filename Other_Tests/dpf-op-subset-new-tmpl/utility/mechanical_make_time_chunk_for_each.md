# utility:mechanical: make time chunk

## Description

Splits a list of time/freq values into chunks depending on evaluated result properties,mesh size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | target_time_freq_values |[`vector<double>`](../getting-started/using-data-containers.md#vector<double>), [`double`](../getting-started/using-data-containers.md#double) | Yes | List of time/freq values to potentially split in chunks. |
| **Pin 1** | operator_to_iterate |[`operator`](../getting-started/using-data-containers.md#operator) | Yes | Operator that must be reconnected with the range values. |
| **Pin 2** | pin_index |[`int32`](../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 7** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | The number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk. |
| **Pin 200** | chunk_config |[`abstract_data_tree`](../getting-started/using-data-containers.md#abstract-data-tree) | Yes | a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected. |
| **Pin 1000** | producer_op1 |[`operator`](../getting-started/using-data-containers.md#operator) | Yes |  |
| **Pin 1001** | output_pin_of_producer_op1 |[`int32`](../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 1002** | input_pin_of_consumer_op1 |[`int32`](../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 1003** | consumer_op1 |[`operator`](../getting-started/using-data-containers.md#operator) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | chunks | | Yes | To connect to "producer_consumer_for_each" Operator on pin 0 |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | None | None | mechanical::make_time_chunk_for_each | None |
