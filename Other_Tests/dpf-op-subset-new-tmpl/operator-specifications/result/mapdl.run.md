# result:mapdl run

## Description

Solve in mapdl a dat/inp file and returns a datasources with the rst file.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mapdl_exe_path |[`string`](../../getting-started/using-data-containers.md#string) | No |  |
| **Pin 1** | working_dir |[`string`](../../getting-started/using-data-containers.md#string) | No |  |
| **Pin 2** | number_of_processes |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Set the number of MPI processes used for resolution (default is 2) |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | data sources containing the input file. |
| **Pin 5** | server_mode |[`bool`](../../getting-started/using-data-containers.md#bool) | No | used when a user includes commands in the input file allowing to launch DPF server inside MAPDL to interact with MAPDL using DPF client API |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | returns the data source if the server_mode pin is not set to yes |
| **Pin 1** | ip |[`string`](../../getting-started/using-data-containers.md#string) | Yes | returns the Ip if the server_mode pin is set to yes |
| **Pin 2** | port |[`string`](../../getting-started/using-data-containers.md#string) | Yes | returns a port when the server mode pin is set to yes |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | mapdl.run | result.mapdl.run | mapdl::run | None |
