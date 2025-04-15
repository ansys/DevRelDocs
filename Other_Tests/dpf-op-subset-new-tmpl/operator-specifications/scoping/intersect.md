# scoping:intersect scopings

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scopingA |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 1** | scopingB |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | intersection |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 1** | scopingA_min_intersection |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | intersect | scoping.intersect | scoping::intersect | None |
