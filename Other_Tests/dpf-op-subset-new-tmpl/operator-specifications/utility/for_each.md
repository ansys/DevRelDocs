# utility:for each

## Description

Allows to write a loop over a chunk of operators.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | iterable | | Yes | Either the result of the make_iterable_info operator, or the operator that must be incremented. |
| **Pin 1** | iterable_values | | No |  |
| **Pin 2** | pin_index |[`int32`](../../getting-started/using-data-containers.md#int32) | No |  |
| **Pin 3** | forward | | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | empty | | Yes |  |
| **Pin 3** | output | | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin evaluate_inputs_before_run** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status. |
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | for_each | utility.for_each | for_each | None |
