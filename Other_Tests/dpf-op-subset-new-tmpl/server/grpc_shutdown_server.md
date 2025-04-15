# server:grpc shutdown server

## Description

Shutdowns dpf's grpc server

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | grpc_stream |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | Yes | dpf streams handling the server |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **server** | grpc | grpc_shutdown_server | server.grpc_shutdown_server | grpc_server_shutdown | None |
