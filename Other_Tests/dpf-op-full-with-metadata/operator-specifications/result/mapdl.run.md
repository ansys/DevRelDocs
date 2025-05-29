---
category: result
plugin: mapdl
license: None
---

# result:mapdl run

## Description

Solve in mapdl a dat/inp file and returns a datasources with the rst file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  mapdl_exe_path |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 1</strong>|  working_dir |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 2</strong>|  number_of_processes |[`int32`](../../getting-started/using-data-containers.md#int32) | Set the number of MPI processes used for resolution (default is 2) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | data sources containing the input file. |
| <strong>Pin 5</strong>|  server_mode |[`bool`](../../getting-started/using-data-containers.md#bool) | used when a user includes commands in the input file allowing to launch DPF server inside MAPDL to interact with MAPDL using DPF client API |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | returns the data source if the server_mode pin is not set to yes |
|  **Pin 1**| ip |[`string`](../../getting-started/using-data-containers.md#string) | returns the Ip if the server_mode pin is set to yes |
|  **Pin 2**| port |[`string`](../../getting-started/using-data-containers.md#string) | returns a port when the server mode pin is set to yes |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl.run

 **Full name**: result.mapdl.run

 **Internal name**: mapdl::run

 **License**: None
