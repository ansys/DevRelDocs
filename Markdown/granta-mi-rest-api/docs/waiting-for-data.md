# Waiting for data

There are two ways to wait for data

1. Poll [GET on your session's data endpoint](http://localhost:8080/integration_service.html#integration_service_api_v1_Granta_Integration_Service_1_0_0_sessions_uid_data_get)

2. Use the [SSE endpoint](http://localhost:8080/integration_service.html#integration_service_api_v1_Granta_Integration_Service_1_0_0_sessions_uid_data_sse_get)

## Poll GET on your session's data endpoint

This is the simplest way. GET requests to the /sessions/{session_uid}/data will wait for the value specified by pollSeconds in the session options. 

## Use the SSE endpoint on your session
GET requests to /sessions/{session_uid}/data/SSE will act as an event source giving back data as soon as materials are available.

See 
[Using SSEs](./sse-example.md)