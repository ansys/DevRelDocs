---
category: serialization
plugin: core
license: None
---

# serialization:serializer to string

**Version: 0.0.0**

## Description

Take any input and serialize them in a string.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stream_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 for string (default), and 1 for binary |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  any_input |[`any`](../../core-concepts/dpf-types.md#any) | any input |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| serialized_string |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: serializer_to_string

 **Full name**: serialization.serializer_to_string

 **Internal name**: serializer_to_string

 **License**: None


## Changelog

- Version 0.0.0: Initial release.