# Introduction

The ADR websocketserver server provides a cross-platform mechanism to route a raw
TCP/IP socket connection to a client application using the ws/wss protocol.  The
tool includes a stand-alone HTML webserver in addition to the websocket server
(the two run on different ports).

## Command Line Options

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
local services is illustrated in the [Builtin Service Operation](#builtin-service-operation) section.
More complex operations can be configured using the --remote_session_config
mechanism outlined in the [External Services](#external-services) section.

The server can also provide HTTP based services if the --http_directory option
is specified.  If it is, the files in the directory specified by that option
will be served up via HTTP on the port specified by --http_port.  Enabling the
HTTP server also enables a [REST API](#rest-api) that can be used to interact
with the server via HTTP GET requests and a /ansys redirect [HTTP Server](#http-server)
which simplifies the deployment of tools that leverage the Ansys ADR 3D viewer
web component.  

The timeout option specifies that a reservation that is made, but left unused
for some number of seconds may be reclaimed by the system (e.g. the user reserved 
a service instance but did not activate it while viewing a web page containing 
the reservation token). The default timeout is 5min (300s) if left unspecified. 

## Basic Operation {#basic-operation}

Websocketserver will route a TCP/IP stream from a listening socket to a
client via the ws or wss protocol.  Usually the client is a JavaScript application 
running in a browser.  For example, one could tunnel the EnSight vnc protocol to
a viewer in a webpage like this:

-# Launch EnSight with an embedded vnc service listening for connections on port 5900


 ```sh
 bin\ensight.bat -vnc "vnc://?primary_password=veronica"
 ```

-# Launch websocketserver serving up some web pages (the JavaScript VNC client) on port 9000.  The 
local host port 5900 should be served up via ws:// on port 9090

 ```sh
 bin\cpython.bat nexus###\nexus_launcher\websocketserver.py --http_directory nexus### --http_port 9000 --client_hostname localhost --client_port 5900 --verbose 1 9090
 ```

-# In a web browser, browse to this URL

 ```
 http://localhost:9000/ansys###/nexus/novnc/vnc_envision.html?password=veronica&autoconnect=true&host=localhost&port=9090
 ```

 The browser-based VNC client will connect to the running EnSight instance and display 
 the remote imagery.  Websocketserver includes REST API to control its operation.  

-# The server may be stopped by browsing to the URL:

 ```
 http://localhost:9000/v1/stop
 ```

## Builtin Service Operation {#builtin-service-operation}

Websocketserver allows for some pre-configured services, including EnSight and EnVision
to be used.  This can be used to support 3D remote graphics using EnVision like this:

-# Launch websocketserver serving up some web pages (http) on port 28000 and the web 
socket protocol on port 28001:

 ```sh
 bin\cpython.bat nexus###\nexus_launcher\websocketserver.py --http_directory nexus### --http_port 28000 --client_hostname localhost --local_session envision 4 --verbose 1 28001
 ```

-# In a web browser, browse to this URL:

 ```
 http://localhost:28000/ansys###/nexus/test/viewer_test_vnc.html
 ```

The testing web page will be loaded.  The upper panel displays a proxy image which
may be clicked to launch a new EnVision session.  The lower panel will automatically 
launch an EnVision session, interactively viewing a 3D dataset.

## External Services {#external-services}

Websocketserver provides a mechanism for to launch an application in response
to a ws/wss request.  The application being launched must provide the host and
port number of a listening socket that websocketserver will connect to and tunnel via the
ws/wss protocol to the caller. Each unique launching mechanism is referred to as a
"service".  Individual services may serve up multiple potential socket connections
via websocketserver.  A service instance may require significant system resources, so
a REST-based service reservation/allocation system is built into websocketserver.  

Before a service can be instantiated, it must first be reserved.  The reservation 
process  marks the service as having been allocated, usually for use in a single web 
page.  The reservation process associates a "token" with the potential service instance.
Tokens are generally GUIDs, but should be treated as short strings that do not include 
any whitespace.  A reservation may be requested via the [REST API](#rest-api) interface.
An allocated token is returned as the result of a successful reservation.
Normally, an application would embed this token into the HTML/JavaScript 
of a web page.  When an incoming ws/wss request is make with the aforementioned 
token, websocketserver will launch the hosting application.  It will then connect the
listening socket created during the launching process to the incoming ws/wss
connection.  When the w/wss connection is lost, websocketserver will arrange for the 
launched application to be stopped.

In the [Basic Operation](#webcomponentviewer_api) example where the socket being forwarded had 
previously been established, only the hostname and port of the websocketserver web socket 
service are included in the URL.  For an external web service to be started by 
websocketserver, the allocated token must be passed in the URL that is used to begin 
the websocket stream so websocketserver knows what to launch.  Expanding on the example 
above, the path of "websockify" is passed and the "token" passed in the query portion of 
the URL:

```
http://localhost:9000/vnc_envision.html?path=websockify&token={}&session_name={}&autoconnect=true&host=127.0.0.1&port=9090
```

Note: websocketserver actually ignores the path and relies only on the token.  The path 
feature is designed to be used by a webserver (e.g. nginx) that might be providing a
front-end proxy to websocketserver.  The webserver can use the path to decide to
proxy the request to websocketserver.

### Service Configuration

Services are described to websocketserver via a service config file.  This is a JSON format 
file provided by the end-user.  It includes a list of "services" and a link to a Python 
script that encapsulates the startup and shutdown of a service  instance.  The script
is responsible for initiating and terminating a socket connection that the websocketserver
engine will make available via the websocket protocol using a URL containing the 
service specific token.  An example might look like this:

```json
{
  "Local Software Session": {"script": "desktop_session.py", "count": 2,
                             "options": {"sizes": ["12080x1024", "1600x1200"], "display_base": 100}},
  "Cluster Node Session": {"script": "x11vnc_desktop_session.py", "count": 1,
                           "options": {"sizes": ["1600x1200"], "group": "ClusterRendering", "host": "n8"}}
}
```

This configuration file defines an object with multiple keys (e.g. "Local Software Session").  
Each key is the name of a type of service.  The value of each key is another object.  
There are three required keys in the object:

- script : the name of a Python script file responsible for creating an object that can start and stop a service.
- count : the maximum number of simultaneous instances of this service type
- options : a dictionary of optional data items that can be used by ADR to customize the web interface and any 
  additional data items that can be used by the session instance
  
Each type of service must provide the name of a Python "script" file.  This file must create an instance of a
Python object (a subclass of the RemoteServiceScript class) that is responsible for starting and ending a service 
instance.  There can be multiple instances of each session type service at the same time.  This is limited with 
the "count" key which specifies the maximum number of simultaneously allowed services of that type.  When a 
service of a given type is started, an index number running from zero to this number minus one will be passed 
to the Python code.  The code should use this number to ensure that each service instance uses non-conflicting 
resources (e.g. port numbers, node allocations, graphics cards, etc).

Additional pieces of data can be passed via the "options" object.  The option dictionary is passed to the 
RemoteServiceScript creation method as 'common options' and by default is stored as the _common_options 
attribute on the RemoteServiceScript subclass instance.  The system will also look for the "group" key 
in the options dictionary.  In the example above, this key has been set to the value "ClusterRendering" for 
instances of the "Cluster Node Session" session type. If the "group" key is set to the name of an ADR
administration group, the service type will only be made available to users who are members of that 
specific group.  In the example, if you are not a member of the "ClusterRendering" group, you will not 
be allowed to create "Cluster Node Session" service.

If the service is intended to provide file viewing ability, the "file_ext" options
dictionary key may be set to a list of filename extensions that the service knows
how to view.

## Internal Services

In addition to the external services specified in the JSON file specified by the --remote_session_config
option, websocketserver support the notation of internal, built-in services.  Two such services 
are currently defined: 'ensight' and 'envision'.  The --local_session command line option
specifies the number of each of these services websocketserver will make available.  For 
example: --local_session ensight 2 will make two instances of EnSight available.  The local
session is created by launching the associated application on the local computer and the
vnc server will be made available over the websocket protocol as per the external services
described previously.

## HTTP Server {#http-server}

If --http_port is provided on the command line, websocketserver will start an HTTP server
on that port that will serve up readonly copies of the file tree rooted at the directory
pointed to by --http_directory.  It will allow the user to browse the files and can be
used to deliver additional web content.  Two URL namespaces are reserved by the server.
The /v1/ root pathname (and future /v{x}/ pathnames) are reserved for the [REST API](#rest-api).
The /ansys/ root pathname is reserved for the purpose of serving other
[Ansys services](#ansys-nexus-viewer).
 
### Ansys ADR Viewer Service {#ansys-nexus-viewer}

If the GET pathname starts with /ansys/, then the directory content served up will be the 
ADR /ansys directory.  For example, if one specified --http_directory as /tmp, then `http://{host}:{port}/tmp/foo`
would return the file /tmp/foo to the caller.  The URL `http://{host}:{port}/ansys###/nexus/viewer-loader.js`,
then the file returned will be `{install_root}/ansys###/nexus/viewer-loader.js`.  This makes 
it easy to start a 3D viewer service via \ref webcomponentviewer_api.

### EnSight REST API Service {#ensight-rest-api}

Starting with 2024 R1, EnSight now supports a [REST API](https://ensight.docs.pyansys.com/dev/rest_api/rest_api.html).
Websocketserver can be configured to serve up this API as well.  To do this, websocketserver
needs to be able to create a gRPC connection to the EnSight instance.  The --grpc_port
command line option is used for this.  It is assumed the host is the same as 
--client_hostname.  Note that one must provide a security key in this case.  That key will
be used as the sessionid for the REST API.


## REST API {#rest-api}

Websocketserver includes a REST API that allows an external application (ADR) to stop the
server, reserve a session and view the core status of the services layer.  If the incoming GET pathname 
starts with /v1/, then the GET request is interpreted as being a REST API call.  The current
API is implemented using REST GET operations on the websocketserver HTML server port 
(--http_port).  Note that --http_directory must be specified for the HTML server to be enabled.
The API namespace is currently defined as:

- `/v1/stop` - shutdown the server
- `/v1/status` - return the status of the current services as a JSON formatted string
- `/v1/status_view` - return the status of the current services as an HTML table (human readable)
- `/v1/reserve/{servicename}?option1=value1&option2=value2` - reserve a service with the specified options
- `/v1/release/{token}` - release a reserved or active token

### Security token

The websocketserver REST API can be protected using a shared secret that must be
included in all REST GET operations.  When the websocketserver is started, the
security token can be supplied via the 'WEBSOCKETSERVER_SECURITY_TOKEN' environmental 
variable or via the --security_token command line option.  If the token is specified,
then the query field 'security_token' must be supplied.  For example, if the server
is launched with "--security_token HELLO" then the REST URI for the status operation
would look like:  "/v1/status?security_token=HELLO".  Without the token, a 401 
error will result.

