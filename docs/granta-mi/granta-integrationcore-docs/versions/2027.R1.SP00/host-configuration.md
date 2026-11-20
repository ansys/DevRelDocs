# Configuring your host integration

Both server and desktop integrations support the definitions of hosts in Granta MI, which control how the server interacts with the host.

For server-based integrations, the host configuration is required. For desktop-based integrations, the host configuration is optional.
For both integration types, host configurations are created in MI Settings. See the Granta MI documentation for more information.

## Server and desktop integrations

### Host identity

Server integrations must specify a `Host ID` and `Host Name`. Desktop integrations only need to specify them if they use a host configuration. This Host ID is included in the MI Materials Gateway URL to load the Gateway application in the correct context for the specified host. The `Host Name` is displayed in MI Materials Gateway when loaded with that `Host ID`.

### MI Materials Gateway default configuration

Host configurations can include default values for certain MI Materials Gateway features:

* Default Exporters: The default exporters to use when importing materials into the host
* Default unit system: The unit system that will be selected when the user first opens MI Materials Gateway for the host
* Default Profile: The profile that will be selected when the user first opens MI Materials Gateway for the host
* Initial view: The view that will be selected when the user first opens MI Materials Gateway for the host. One of Browse, Favorites, or Custom Search.

## Server integrations

These options are available if the Host integration type is set to 'Server'.

* Integration DLL: The full name of the DLL that implements the `ServerPlugin` `IPlugin` and `IPluginFactory` interfaces.
* Runtime settings: A JSON-formatted string that is passed to the integration `IPluginFactory` implementation. Used to configure the server plugin.
* Authentication type: The method used to authenticate to the host application server.

The following options are available if the Authentication type is set to 'OIDC':

* Authentication settings: Additional settings required to authenticate to the host application server.
* Client secret: The client secret for authentication to the host application server.
