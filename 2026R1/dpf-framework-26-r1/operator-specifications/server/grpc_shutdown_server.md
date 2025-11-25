---
category: server
plugin: grpc
license: None
---

# server:grpc shutdown server

**Version: 0.0.0**

## Description

Shutdowns dpf's grpc server

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  grpc_stream |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | dpf streams handling the server |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: server

 **Plugin**: grpc

 **Scripting name**: grpc_shutdown_server

 **Full name**: server.grpc_shutdown_server

 **Internal name**: grpc_server_shutdown

 **License**: None


## Changelog

- Version 0.0.0: Initial release.