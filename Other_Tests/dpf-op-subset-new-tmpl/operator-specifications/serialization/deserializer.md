# serialization:deserializer

## Description

Takes a file generated by the serializer and deserializes it into DPF's entities.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | file_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes | file path |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | any_output |[`any`](../../getting-started/using-data-containers.md#any) | Yes | number and types of outputs corresponding of the inputs used in the serialization |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | deserializer | serialization.deserializer | deserializer | None |
