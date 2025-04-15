# serialization:data tree to txt

## Description

Writes a txt file or string from a DataTree

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_tree |[`abstract_data_tree`](../../getting-started/using-data-containers.md#abstract-data-tree) | Yes |  |
| **Pin 1** | path |[`string`](../../getting-started/using-data-containers.md#string) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources), [`string`](../../getting-started/using-data-containers.md#string) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | None | None | data_tree_to_txt | None |
