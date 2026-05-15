---
uid: Ans.DataProcessing.operators.server
---

# Ans.DataProcessing.operators.server Namespace

## Classes

| Class | Description |
|-------|-------------|
| [grpc_shutdown_server](Ans_DataProcessing_operators_server_grpc_shutdown_server.md) | Shutdowns dpf's grpc server   ///available inputs: grpc_stream (StreamsContainer) |
| [grpc_start_server](Ans_DataProcessing_operators_server_grpc_start_server.md) | Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.   ///available inputs: ip (string) (optional), port (string, Int32) (optional), starting_option (Int32) (optional), should_start_server (bool) (optional), data_sources (DataSources) (optional), dpf_context (string, Int32) (optional) |
