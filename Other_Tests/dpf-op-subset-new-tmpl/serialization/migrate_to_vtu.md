# serialization:migrate to vtu

## Description

Extract all results from a datasources and exports them into vtu format. All the connected inputs are forwarded to the result providers operators.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No | time sets to export, default is all |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | result file path container, used if no streams are set |
| **Pin 20** | directory |[`string`](../getting-started/using-data-containers.md#string) | Yes | directory path |
| **Pin 21** | base_name |[`string`](../getting-started/using-data-containers.md#string) | No | vtu base file name, (default is file) |
| **Pin 30** | result |[`string`](../getting-started/using-data-containers.md#string) | No | if Operator's names are connected to this Pin, only these results are exported (else all available results are exported) |
| **Pin 100** | write_mode |[`string`](../getting-started/using-data-containers.md#string) | No | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | path |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../getting-started/using-data-containers.md#bool) | true | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | vtk | None | None | migrate_to_vtu | None |
