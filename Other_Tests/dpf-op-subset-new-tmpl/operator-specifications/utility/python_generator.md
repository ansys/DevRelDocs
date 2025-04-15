# utility:python generator

## Description

Generates .py file with specifications for loaded plugin(s).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | dll_source_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |
| **Pin 1** | output_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |
| **Pin 2** | load_symbol |[`string`](../../getting-started/using-data-containers.md#string) | No |  |
| **Pin 3** | library_key |[`string`](../../getting-started/using-data-containers.md#string) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | None | None | python_generator | None |
