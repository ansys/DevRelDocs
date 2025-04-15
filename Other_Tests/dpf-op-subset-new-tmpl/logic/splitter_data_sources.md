# logic:splitter::data_sources

## Description

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | Data sources to split. |
| **Pin 1** | output_count |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | Number of desired outputs. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -1** | output_count |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | Actual number of outputs. |
| **Pin 0** | outputs |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | Data sources outputs. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | splitter::data_sources | logic.splitter::data_sources | splitter::data_sources | any_dpf_supported_increments |
