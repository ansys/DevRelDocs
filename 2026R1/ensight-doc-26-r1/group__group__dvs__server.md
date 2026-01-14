# DVS Server

<a id="group__group__dvs__server"></a>

DVS Server used to receive data from DVS Clients.

DVS Servers receive data from the DVS Clients. A server can be ran as part of the postprocessing package (such as EnSight) or within any process as it is part of the DVS API. A server object is always used by the client to connect to a server (if starting a server locally it must be started before connecting with the client). However this server object is only a shell/proxy object unless it is started using [dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d) or [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c). If a server isn't started it is assumed another process/thread has started it and it is only used for connecting the client to the real server. A DVS server by default will listen to 127.0.0.1 for client connections by default. The server will also use Unix Domain Sockets by default, on linux. In this default scenario, SSL certificates won't be enforced. The port is still a required input, since it is being used to build the socket path. The default unix domain socket is "unix:/tmp/greeter{PORT}.sock". The user can change the default path "/tmp/greeter" setting the SERVER_UNIX_DOMAIN_PATH parameter. On Windows, if the use of TCP sockets are not explicitly set, the connection will only happen on localhost, but internally TCP sockets will still be used. In this default scenario, certificates won't be used. The user can enforce the use of TCP sockets settings explicitly the option SERVER_USE_TCP_SOCKETS=1. This is required if the user wants the server-client connection to happen between differente machines. In this case, the use of SSL certificates is enforced. On can disable explicitly the use of SSL certificates setting the option SERVER_DISABLE_TLS=1. The SSL certifcates generation is the user responsibility When TCP sockets are enabled, the user can explicitly set the server to listen to all networks setting the paramter SERVER_LISTEN_ALL_NETWORKS=1. In this scenario, the DVS server will listen to 0.0.0.0 for client connections, unless the user explicitly sets the host via the SERVER_HOST parameter. If TCP sockets and all networks are enabled, the use of secret keys is enforced. The user can set a secret key via the SERVER_SECURITY_SECRET parameter.





The SSL certificates are expected, by default in the current working directory, under the following locations:






* certs/server.crt

* certs/server.key

* certs/ca.crt

* certs/client.crt

* certs/client.key







The default folder can be overridden via the environment variable ANSYS_GRPC_CERTIFICATES. The full location of each certificate can be overridden via the environment variables GRPC_SERVER_CERT, GRPC_SERVER_KEY and GRPC_SERVER_CLIENT_CA. The settings for SERVER_LISTEN_ALL_NETWORKS, SERVER_DISABLE_TLS, SERVER_USE_TCP_SOCKETS and SERVER_UNIX_DOMAIN_PATH can also be set via environment variables, respectively being DVS_LISTEN_ALL_NETWORKS, DVS_DISABLE_TLS, DVS_USE_TCP_SOCKETS and DVS_UNIX_DOMAIN_SOCKET_PATH. If any of these environment variables is set, it will override the eventual values set on the server. For instance, if the user sets the option SERVER_LISTEN_ALL_NETWORKS and also the environment variable DVS_GRPC_ALLOW_NETWORK_CONNECTIONS, the second will be applied.





### Server Options

Server options are specified by the C API call [dvs\_server\_set\_option()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ae8abdb8455cea44bbd9f509c1a063516), or the C API call [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c).






| Server Option | Default | Description |
| --- | --- | --- |
| CACHE_URI | None | A URI used to specify cache type, location and filtering options. See [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri) for more information. |
| SERVER_PORT_BASE | 50051 | The base port to use for a group of servers. Used with SERVER_PORT_MULT to determine the port to listen to. i.e. SERVER_PORT_BASE + (server_num * SERVER_PORT_MULT). |
| SERVER_PORT_MULT | 0 | The multiplier to use with server number to increase SERVER_PORT_BASE by. i.e. SERVER_PORT_BASE + (server_num * SERVER_PORT_MULT). |
| SERVER_LISTEN_ALL_NETWORKS | False | Used to let the server listen to 0.0.0.0 for client connections instead of the default 127.0.0.1. |
| SERVER_SECURITY_SECRET | None | The secret string to use for a client to connect to this server. If none is specified no secret is needed by the client. |
| ENABLE_DYNAMIC_SOURCE | True | Used to force the server into waiting for external data or not. If false only reads from the specified cache. |
| VERBOSE | 0 | Verbosity level of the server, Min 0, Max 3. |
| DVS_FILE_LOCATION | Cache location | Set the location for the dvs files created when creating datasets. This can be a fully qualified pathname or relative to the root of the cache specified by the CACHE_URI. The internal link stored in the file pointing to the cache location is also controlled by if the DVS_FILE_LOCATION is a fully qualified pathname or relative. If it is fully qualified the link will be fully qualified. Allowing you to move the dvs file around with the cache staying in a static location. If the DVS_FILE_LOCATION is relative, then the internal link will be relative to the cache location. This will allow you to move the cache and dvs files around together and they will still work (recommended). |
| GRPC_MAX_NUM_RETRIES | 3 | Sets the maximum number of retries to use if using GRPC. This setting can help if having problems with too many clients going into a small number of servers. This should be used in conjunction with GRPC_BACKOFF_MIN_MS and GRPC_BACKOFF_MAX_MS |
| GRPC_BACKOFF_MIN_MS | 100 | The minimum time to wait before attempting a retry |
| GRPC_BACKOFF_MAX_MS | 1000 | The maximum time to wait before attempting a retry, the current algorithm is linear and increments each retry by GRPC_BACKOFF_LINEAR_MS until reaching either the maximum number of retries * GRPC_BACKOFF_LINEAR_MS or GRPC_BACKOFF_MAX_MS |
| GRPC_BACKOFF_LINEAR_MS | 100 | The linear amount to increment the backoff timer for each retry |


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)