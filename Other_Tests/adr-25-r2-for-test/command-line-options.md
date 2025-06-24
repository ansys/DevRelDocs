---
access control: private
---

# Command line options

Websocketserver is a PyQt application that can be run with the ADR supplied cpython interpreter.  The resulting command line looks like this:

```sh
.\bin\cpython.bat .\nexus###\nexus_launcher\websocketserver.py -h
usage: websocketserver.py  [-h] [--http_directory http_directory]
                          [--http_port http_server_port]
                          [--cert ssl_certificate_filename]
                          [--key ssl_key_filename] [--security_token token]
                          [--remote_session_config remote_config.json]
                          [--client_hostname client_hostname]
                          [--client_port client_port]
                          [--grpc_port grpc_port]
                          [--timeout timeout_seconds]
                          [--local_session appname count]
                          [--verbose verbose_level] [--log_file log_filename]
                          ws_server_port

ADR websocket proxy server

positional arguments:
  ws_server_port        The port the server accepts incoming websocket
                        connection requests over

optional arguments:
  -h, --help              show this help message and exit
  --http_directory        http_directory
                          Directory to serve up files from via http. It enables
                          HTTP services.
  --http_port             http_server_port
                          Port to support http file serving on. Default:9090
  --grpc_port             grpc_server_port
                          Port of an EnSight gRPC service to be exposed via REST. Default:0 (none)
  --cert                  ssl_certificate_filename
                          Filename of the ssl certificate
  --key                   ssl_key_filename
                          Filename of the ssl key
  --security_token        token
                          REST API security token.
                          Default:WEBSOCKETSERVER_SECURITY_TOKEN environmental
                          variable value
  --remote_session_config remote_config.json
                          Name of the remote session configuration file
  --client_hostname       client_hostname
                          Hostname of the socket to serve using the websocket
                          protocol on ws_server_port
  --client_port           client_port
                          Port number of the socket to serve using the websocket
                          protocol on ws_server_port
  --timeout               timeout_seconds
                          Number of seconds before an unused reservation is
                          reclaimed
  --local_session         appname count
                          Specify some number of locally executed, built-in
                          sessions. These are specified by strings in the form
                          'appname count' where appname can be 'ensight' or
                          'envision'. The count is the maximum number of instances
                          of that application websocketserver may have
                          reserved/running simultaneously. This argument may be
                          repeated.
  --verbose               verbose_level
                          Enable debugging information
  --log_file              log_filename
                          Save program output to the named log file instead of
                          stdout
```

Websocketserver will listen for incoming websocket requests on the port specified
by ws_server_port.  In the basic mode of operation, the host and port specified
by --client_hostname and --client_port will be served up in response to incoming
requests.  

Websocketserver includes a reservation and launching mechanism that can support
local, preconfigured services such as EnSight and EnVision or more complex,
scripted operations via custom service configurations.  A specific example of
local services is illustrated in the [Builtin service operation](./builtin-service.md) section.
More complex operations can be configured using the --remote_session_config
mechanism outlined in the [External services](./external-services.md) section.

The server can also provide HTTP based services if the --http_directory option
is specified.  If it is, the files in the directory specified by that option
will be served up via HTTP on the port specified by --http_port.  Enabling the
HTTP server also enables a [REST API](./rest-api.md) that can be used to interact
with the server via HTTP GET requests and a /ansys redirect [HTTP Server](./http-server.md)
which simplifies the deployment of tools that leverage the Ansys ADR 3D viewer
web component.  

The timeout option specifies that a reservation that is made, but left unused
for some number of seconds may be reclaimed by the system (e.g. the user reserved 
a service instance but did not activate it while viewing a web page containing 
the reservation token). The default timeout is 5min (300s) if left unspecified. 


