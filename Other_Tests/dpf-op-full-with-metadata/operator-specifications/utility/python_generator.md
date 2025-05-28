---
category: utility
plugin: core
license: None
---

# utility:python generator

## Description

Generates .py file with specifications for loaded plugin(s).

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dll_source_path |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_path |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 2</strong>|  load_symbol |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 3</strong>|  library_key |[`string`](../../getting-started/using-data-containers.md#string) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: None
- Full name: None
- Internal name: python_generator
- License: None
  