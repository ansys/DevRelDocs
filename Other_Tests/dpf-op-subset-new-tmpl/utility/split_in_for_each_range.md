# utility:split in for each range

## Description

Split a scoping into several pieces so you can iterate it with a for_each loop.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | iterable | | No | Iterable that can be combined with the one currently generated. |
| **Pin 1** | operator_to_iterate |[`operator`](../getting-started/using-data-containers.md#operator) | Yes | Operator that must be reconnected with the range values. |
| **Pin 2** | pin_index |[`int32`](../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 3** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 4** | chunk_size |[`int32`](../getting-started/using-data-containers.md#int32) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | output | | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | split_in_for_each_range | utility.split_in_for_each_range | chunk_in_for_each_range | None |
