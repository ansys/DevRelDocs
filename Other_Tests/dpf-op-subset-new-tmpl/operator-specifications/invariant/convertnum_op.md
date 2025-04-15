# invariant:convertnum operator

## Description

Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | input_ordering |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | Input ordering number |
| **Pin 1** | output_ordering |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | Output ordering number |
| **Pin 2** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Expect fields container |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | Data_sources (must contain the full file). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | mapdl | convertnum_op | invariant.convertnum_op | convertnum_op | None |
