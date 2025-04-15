# server:grpc start server

## Description

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | ip |[`string`](../getting-started/using-data-containers.md#string) | No | If no ip address is put, the local ip address is taken |
| **Pin 1** | port |[`string`](../getting-started/using-data-containers.md#string), [`int32`](../getting-started/using-data-containers.md#int32) | No | If no port is put, port 50052 is taken |
| **Pin 2** | starting_option |[`int32`](../getting-started/using-data-containers.md#int32) | No | default is 1 that starts server in new thread. With 0, this thread will be waiting for grpc calls and will not be usable for anything else. With 2, it the server will be started in a new process. |
| **Pin 3** | should_start_server |[`bool`](../getting-started/using-data-containers.md#bool) | No | If true, the server is assumed to be local and is started. If false, only a client (able to send grpc calls) will be started |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | No | A data source with result key 'grpc' and file path 'port:ip' can be used instead of the input port and IP. |
| **Pin 5** | dpf_context |[`string`](../getting-started/using-data-containers.md#string), [`int32`](../getting-started/using-data-containers.md#int32) | No | This pin is associated with pin(2) = 2 (server started in a new process). User can enter the integer associated with a DPF context (1: Standalone Context - DpfCoreStandalone.xml, 3: Custom - DpfCustomDefined.xml) or a string with the path of the XML specifying the context.  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | grpc_streams |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | dpf streams handling the server, if the server is started in this thread, then nothing is added in output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **server** | grpc | grpc_start_server | server.grpc_start_server | grpc::stream_provider | None |
