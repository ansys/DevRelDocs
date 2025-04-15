# utility:merge collections

## Description

Merges a set of collections into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | collections |[`vector<shared_ptr<any_collection>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<any-collection>>), [`any_collection`](../../getting-started/using-data-containers.md#any-collection) | Yes | a vector of collections to merge or collections from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_collections |[`any_collection`](../../getting-started/using-data-containers.md#any-collection) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_collections | utility.merge_collections | merge::any_collection | None |
