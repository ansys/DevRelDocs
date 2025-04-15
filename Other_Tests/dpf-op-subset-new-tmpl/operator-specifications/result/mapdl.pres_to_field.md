# result:pres to field

## Description

Read the presol generated file from mapdl.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | filepath |[`string`](../../getting-started/using-data-containers.md#string) | Yes | filepath |
| **Pin 1** | columns_to_read |[`int32`](../../getting-started/using-data-containers.md#int32) | No | columns_to_read |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | mapdl.pres_to_field | result.mapdl.pres_to_field | PRES_Reader | None |
