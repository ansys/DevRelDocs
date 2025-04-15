# utility:producer consumer for each

## Description

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | producer_consumer_iterableq | | Yes | The result of the make_producer_consumer_for_each_iterator operator. |
| **Pin 3** | forward | | Yes | output of the last operators of the workflow |

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
| **utility** | core | producer_consumer_for_each | utility.producer_consumer_for_each | producer_consumer_for_each | None |
