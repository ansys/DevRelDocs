# External services

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
any whitespace.  A reservation may be requested via the [REST API](./rest-api.md) interface.
An allocated token is returned as the result of a successful reservation.
Normally, an application would embed this token into the HTML/JavaScript 
of a web page.  When an incoming ws/wss request is make with the aforementioned 
token, websocketserver will launch the hosting application.  It will then connect the
listening socket created during the launching process to the incoming ws/wss
connection.  When the w/wss connection is lost, websocketserver will arrange for the 
launched application to be stopped.

In the [Basic operation](./basic-operation.md) example where the socket being forwarded had 
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

## Service Configuration

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


