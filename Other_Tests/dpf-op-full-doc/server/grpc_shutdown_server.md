# server:grpc shutdown server

## Description

Shutdowns dpf's grpc server

## Inputs


- **Pin 0** grpc_stream (type: ['streams_container']) (optional: False): dpf streams handling the server


## Outputs



## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: server
- **plugin**: grpc
- **scripting name**: grpc_shutdown_server
- **full name**: server.grpc_shutdown_server
- **internal name**: grpc_server_shutdown
- **license**: None