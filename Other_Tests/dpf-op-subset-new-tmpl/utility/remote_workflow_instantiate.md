# utility:remote workflow instantiate

## Description

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | workflow_to_send |[`workflow`](../getting-started/using-data-containers.md#workflow), [`int32`](../getting-started/using-data-containers.md#int32) | Yes | local workflow to push to a remote or id of a remote workflow |
| **Pin 3** | streams_to_remote |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | Yes |  |
| **Pin 4** | data_sources_to_remote |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | remote_workflow |[`workflow`](../getting-started/using-data-containers.md#workflow) | Yes | remote workflow containing an image of the remote workflow and the protocols streams |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | remote_workflow_instantiate | utility.remote_workflow_instantiate | remote_workflow_instantiate | None |
