# math:total sum (fields container)

## Description

Sums all the elementary data of a field to produce one elementary data point.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | ponderation |[`field`](../../getting-started/using-data-containers.md#field) | No | Field containing weights, one weight per entity |
| **Pin 2** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | time_scoping |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Field containing the (weighted) sum for each component in an elementary data |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | accumulate_fc | None |
