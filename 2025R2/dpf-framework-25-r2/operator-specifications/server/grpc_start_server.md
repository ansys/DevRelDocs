---
category: server
plugin: grpc
license: None
---

# server:grpc start server

**Version: 0.0.0**

## Description

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  ip |[`string`](../../core-concepts/dpf-types.md#standard-types) | If no ip address is put, the local ip address is taken |
| <strong>Pin 1</strong>|  port |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | If no port is put, port 50052 is taken |
| <strong>Pin 2</strong>|  starting_option |[`int32`](../../core-concepts/dpf-types.md#standard-types) | default is 1 that starts server in new thread. With 0, this thread will be waiting for grpc calls and will not be usable for anything else. With 2, it the server will be started in a new process. |
| <strong>Pin 3</strong>|  should_start_server |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, the server is assumed to be local and is started. If false, only a client (able to send grpc calls) will be started |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | A data source with result key 'grpc' and file path 'port:ip' can be used instead of the input port and IP. |
| <strong>Pin 5</strong>|  dpf_context |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | This pin is associated with pin(2) = 2 (server started in a new process). User can enter the integer associated with a DPF context (1: Standalone Context - DpfCoreStandalone.xml, 3: Custom - DpfCustomDefined.xml) or a string with the path of the XML specifying the context.  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| grpc_streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | dpf streams handling the server, if the server is started in this thread, then nothing is added in output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: server

 **Plugin**: grpc

 **Scripting name**: grpc_start_server

 **Full name**: server.grpc_start_server

 **Internal name**: grpc::stream_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.