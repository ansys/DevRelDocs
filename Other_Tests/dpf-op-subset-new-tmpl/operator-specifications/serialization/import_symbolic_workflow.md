# serialization:import symbolic workflow

## Description

Reads a file or string holding a Symbolic Workflow and instantiate a WorkFlow with its data.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | string_or_path |[`string`](../../getting-started/using-data-containers.md#string), [`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 2** | format |[`int32`](../../getting-started/using-data-containers.md#int32) | No | -1 is auto-detection, 0 is ASCII format, 1 is binary, 2 is json, default is -1 (auto-detection). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | None | None | import_symbolic_workflow | any_dpf_supported_increments |
