---
category: serialization
plugin: vtk
license: None
---

# serialization:migrate to vtu

**Version: 0.0.0**

## Description

Extract all results from a datasources and exports them into vtu format. All the connected inputs are forwarded to the result providers operators.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | time sets to export, default is all |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 20</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  directory |[`string`](../../core-concepts/dpf-types.md#standard-types) | directory path |
| <strong>Pin 21</strong>|  base_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | vtu base file name, (default is file) |
| <strong>Pin 30</strong>|  result |[`string`](../../core-concepts/dpf-types.md#standard-types) | if Operator's names are connected to this Pin, only these results are exported (else all available results are exported) |
| <strong>Pin 100</strong>|  write_mode |[`string`](../../core-concepts/dpf-types.md#standard-types) | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| path |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: migrate_to_vtu

 **License**: None


## Changelog

- Version 0.0.0: Initial release.