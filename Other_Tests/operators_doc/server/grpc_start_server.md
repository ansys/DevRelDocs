# server:grpc start server

## Description

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

## Inputs


- **Pin 0** ip (type: ['string']) (optional: True): If no ip address is put, the local ip address is taken

- **Pin 1** port (type: ['string', 'int32']) (optional: True): If no port is put, port 50052 is taken

- **Pin 2** starting_option (type: ['int32']) (optional: True): default is 1 that starts server in new thread. With 0, this thread will be waiting for grpc calls and will not be usable for anything else. With 2, it the server will be started in a new process.

- **Pin 3** should_start_server (type: ['bool']) (optional: True): If true, the server is assumed to be local and is started. If false, only a client (able to send grpc calls) will be started

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): A data source with result key 'grpc' and file path 'port:ip' can be used instead of the input port and IP.

- **Pin 5** dpf_context (type: ['string', 'int32']) (optional: True): This pin is associated with pin(2) = 2 (server started in a new process). User can enter the integer associated with a DPF context (1: Standalone Context - DpfCoreStandalone.xml, 3: Custom - DpfCustomDefined.xml) or a string with the path of the XML specifying the context. 


## Outputs


- **Pin 0** grpc_streams (type: ['streams_container']): dpf streams handling the server, if the server is started in this thread, then nothing is added in output


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: server
- **plugin**: grpc
- **scripting name**: grpc_start_server
- **full name**: server.grpc_start_server
- **internal name**: grpc::stream_provider
- **license**: None