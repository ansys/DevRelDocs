# scoping:reduce sampling scoping

## Description

Take a scoping and remove half of it's content.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 1** | denominator |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Set the number of time the scoping is reduced (default is 2). Must be integer value above 1. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | reduce_sampling | scoping.reduce_sampling | scoping::reduce_sampling | None |
