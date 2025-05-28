---
category: serialization
plugin: core
license: None
---

# serialization:serializer to string

## Description

Take any input and serialize them in a string.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stream_type |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 for string (default), and 1 for binary |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  any_input |[`any`](../../getting-started/using-data-containers.md#any) | any input |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | serialized_string |[`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: serialization
- Plugin: core
- Scripting name: serializer_to_string
- Full name: serialization.serializer_to_string
- Internal name: serializer_to_string
- License: None
  