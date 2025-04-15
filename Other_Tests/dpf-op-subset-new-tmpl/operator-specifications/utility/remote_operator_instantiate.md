# utility:remote operator instantiate

## Description

Create a local image of an existing remote operator (identified by an id and an address) for a given protocol registered in the streams. A workflow is created with this operator and returned in output

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | operator_to_send |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | local workflow to push to a remote or id of a remote workflow |
| **Pin 1** | output_pin |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | pin number of the output to name |
| **Pin 3** | streams_to_remote |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | Yes |  |
| **Pin 4** | data_sources_to_remote |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | No |  |
| **Pin 5** | output_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | output's name of the workflow to return |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | remote_workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | Yes | remote workflow containing an image of the remote workflow and the protocols streams |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | remote_operator_instantiate | utility.remote_operator_instantiate | remote_operator_instantiate | None |
