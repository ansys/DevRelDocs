# serialization:export symbolic workflow

## Description

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | Yes |  |
| **Pin 1** | path |[`string`](../../getting-started/using-data-containers.md#string) | No |  |
| **Pin 2** | format |[`int32`](../../getting-started/using-data-containers.md#int32) | No | 0 is ASCII format and 1 is binary, default is 0. |
| **Pin 3** | options |[`int32`](../../getting-started/using-data-containers.md#int32) | No | 1 copies connections with its data, 2 forwards named inputs and outputs names, 7 copies connections of named inputs and ouputs with their data. default is 7. |

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
| **serialization** | core | None | None | export_symbolic_workflow | any_dpf_supported_increments |
