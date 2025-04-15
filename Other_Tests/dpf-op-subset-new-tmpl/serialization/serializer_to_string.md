# serialization:serializer to string

## Description

Take any input and serialize them in a string.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -1** | stream_type |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | 0 for string (default), and 1 for binary |
| **Pin 1** | any_input |[`any`](../getting-started/using-data-containers.md#any) | Yes | any input |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | serialized_string |[`string`](../getting-started/using-data-containers.md#string) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | serializer_to_string | serialization.serializer_to_string | serializer_to_string | None |
