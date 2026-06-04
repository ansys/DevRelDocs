# REST API

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

## Security token

The websocketserver REST API can be protected using a shared secret that must be
included in all REST GET operations.  When the websocketserver is started, the
security token can be supplied via the 'WEBSOCKETSERVER_SECURITY_TOKEN' environmental 
variable or via the --security_token command line option.  If the token is specified,
then the query field 'security_token' must be supplied.  For example, if the server
is launched with "--security_token HELLO" then the REST URI for the status operation
would look like:  "/v1/status?security_token=HELLO".  Without the token, a 401 
error will result.

