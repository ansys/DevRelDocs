---
category: server
plugin: grpc
license: None
---

# server:grpc shutdown server

## Description

Shutdowns dpf's grpc server

### Plugin

grpc

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  grpc_stream |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | dpf streams handling the server |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: server
- Plugin: grpc
- Scripting name: grpc_shutdown_server
- Full name: server.grpc_shutdown_server
- Internal name: grpc_server_shutdown
- License: None
  