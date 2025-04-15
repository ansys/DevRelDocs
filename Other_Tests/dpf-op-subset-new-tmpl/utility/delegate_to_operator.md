# utility:delegate to operator

## Description

Delegate the run to an Operator instantiated by the name in input (forwards all the input of this Operator to the sub Operator).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -1** | operator_name |[`string`](../getting-started/using-data-containers.md#string) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | any |[`any`](../getting-started/using-data-containers.md#any) | Yes | inputs |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | delegate_to_operator | utility.delegate_to_operator | delegate_to_operator | None |
