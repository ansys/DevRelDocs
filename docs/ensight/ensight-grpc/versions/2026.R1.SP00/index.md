# EnSight gRPC interface

The gRPC server API exposed by the EnSight client.

 The EnSight client supports a gRPC based rpc system that makes it possible to access various aspects of the EnSight client in a service-orientated fashion. This functionality is enabled at EnSight launch via the -grpc_server {port} command line option.

 There is a raw gRPC interface accessed via the [ensight.proto](./reference/files/ensight_8proto.md) and ensight_fluent.proto files and a higher-level Python interface in the ensight_rpc module named [ensight\_grpc.py](./reference/files/ensight__grpc_8py.md). Details on how to leverage this interface cen be found in [EnSight Command and Control API](./user-guide/ensight-command.md).

