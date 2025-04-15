# min_max:incremental over field

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 17** | domain_id |[`int32`](../../getting-started/using-data-containers.md#int32) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_min |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | field_max |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | domain_ids_min |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 3** | domain_ids_max |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **min_max** | core | None | None | min_max_inc | any_dpf_supported_increments |
