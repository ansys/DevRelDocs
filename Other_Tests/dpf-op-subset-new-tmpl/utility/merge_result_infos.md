# utility:merge result infos

## Description

Assembles a set of result information into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | result_infos |[`vector<shared_ptr<result_info>>`](../getting-started/using-data-containers.md#vector<shared-ptr<result-info>>), [`result_info`](../getting-started/using-data-containers.md#result-info) | Yes | A vector of result info containers to merge or result infos from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_result_infos |[`result_info`](../getting-started/using-data-containers.md#result-info) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_result_infos | utility.merge_result_infos | merge::result_info | None |
