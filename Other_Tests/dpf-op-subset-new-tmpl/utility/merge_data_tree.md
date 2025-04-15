# utility:merge data tree

## Description

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_tree |[`data_tree`](../getting-started/using-data-containers.md#data-tree), [`vector<shared_ptr<data_tree>>`](../getting-started/using-data-containers.md#vector<shared-ptr<data-tree>>) | Yes | Either a vector of data trees or data trees from pin 0 to ... to merge. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | any |[`any`](../getting-started/using-data-containers.md#any) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_data_tree | utility.merge_data_tree | merge::data_tree | None |
