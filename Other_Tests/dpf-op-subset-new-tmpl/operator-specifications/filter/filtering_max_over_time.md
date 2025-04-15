# filter:filtering max over time workflow

## Description

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | invariant_fc_operator |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc). |
| **Pin 1** | output_pin |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Output pin of the invariant operator. Default = 0. |
| **Pin 2** | list_of_results |[`vector<string>`](../../getting-started/using-data-containers.md#vector<string>), [`string`](../../getting-started/using-data-containers.md#string) | No | If no result is given, filter will be applied on Stresses and Strains |
| **Pin 3** | threshold |[`double`](../../getting-started/using-data-containers.md#double) | No | Threshold from which the operator will filter. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **filter** | core | None | None | filtering_max_over_time | None |
