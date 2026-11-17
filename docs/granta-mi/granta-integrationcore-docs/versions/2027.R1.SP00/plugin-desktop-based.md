# Creating a desktop-based integration

For desktop-based integrations, the Host Integration plugin is written as a customization or plugin to the host application, in whatever language or scripting environment that application supports (for example, C#/.NET, Python, or a vendor-specific scripting language). The plugin communicates with Granta MI using the MI Integration Service REST API, documented [here](xref:MI%20Integration%20Service/1.1.0).

A desktop plugin is a client of the MI Integration Service REST API: it creates a session, opens a browser at the MI Materials Gateway URL for that session, and receives materials data pushed into the session as the user makes selections, so that it can write that data into the host application.

For complete, working implementations of the concepts described on this page, see:

* [Desktop plugin example: DesktopIntegrationSampleCSharp](example-desktop-csharp.md)
* [Desktop plugin example: DesktopIntegrationSamplePython](example-desktop-python.md)

## Plugin overview

A desktop plugin is launched from a launch point in the host application UI. For example, a button or menu command. Once the plugin is launched, it must perform the following steps:

1. Authenticate to Granta MI, prompting the user for their credentials if required.
2. Create an MI Integration Service session.
3. Open MI Materials Gateway.

The desktop plugin must wait for the user to select a material. The plugin should not block the host application UI while the selection is being made, since the user may need to interact with the host application while selecting materials.

When a material is selected, the plugin must:

4. Retrieve the selected material from the MI Integration Service session, via either Server-Sent Events (SSE) or long-polling.
5. Process the retrieved data, and write it into the host application.

Steps 4 and 5 may be triggered multiple times if the user selects multiple materials.

Finally, once the material selection is complete, the plugin must delete the MI Integration Service session. This may be when the browser is closed, or when the host application is closed.

### Create an MI Integration Service session

The plugin must call `POST /sessions` on the MI Integration Service REST API to create a new session. The response includes the session ID, which is used both to open MI Materials Gateway in the context of the newly created session, and to delete the session once it is no longer needed.

### Open MI Materials Gateway

The plugin must construct the MI Materials Gateway URL based on the session ID returned when the session was created. This URL is of the form:

`https://your_server_name/grantami/gateway/?webMode=true&gisSessionId=<SessionID>&hostId=<HostID>`

* `your_server_name` is the Granta MI application server name.
* `gisSessionId=<SessionID>`, where `<SessionID>` is the session ID returned by the MI Integration Service when the session was created.
* `hostId=<HostID>` (optional), where `<HostID>` is the ID of the host configuration defined in MI Settings. See [Configuring your host integration](host-configuration.md) for more information.

For example:

`https://your.granta.mi.server.com/grantami/gateway/?webMode=true&gisSessionId=289ed913-63c9-438f-8745-9089b2730931&hostId=MyCustomHost`

or

`https://your.granta.mi.server.com/grantami/gateway/?webMode=true&gisSessionId=6a1d26ae-561a-4c69-bc36-52de1b5c7290`

### Retrieve materials data

Once the session is open, the plugin must retrieve the materials data pushed into the session as the user makes selections in MI Materials Gateway, using either:

* Server-Sent Events (`GET /sessions/{uid}/data/sse`): A persistent streaming connection that pushes each item to the plugin as it becomes available.
* Long-polling (`GET /sessions/{uid}/data`): A blocking request that returns the next available item, or a `204 No Content` response after a timeout, in which case the plugin should simply poll again.

Each item returned includes a sequence ID, so that the plugin can resume from where it left off if a connection is interrupted.

## Best practice

When designing the plugin, consider the following best practices:

* Authenticate using whatever mechanism is required for the Granta MI system.
* Create a new session for each launch of the integration, rather than reusing sessions across launches. Each session should correspond to a single browsing session in MI Materials Gateway.
* Delete the session once the plugin no longer needs it, for example when the host application window or document closes, rather than leaving it to expire. Perform this cleanup in a `finally` block or equivalent, so it also runs if the user cancels or an error occurs.
* Use Server-Sent Events (SSE) for retrieving materials data if the language/environment supports it, or long-polling otherwise.
* Avoid blocking the host application's UI thread while waiting for materials data; perform the session request and data retrieval asynchronously or on a background thread.
* Use a host configuration and `hostId` URL parameter to configure the MI Materials Gateway behavior for the specific host, for example by specifiying default exporters and a default profile.
* Open a browser and provide the URL automatically.

## Build

Build the plugin using the toolchain appropriate for the host application's customization or scripting environment.

## Deploy

The plugin must be deployed on the host application client machines, and registered in the usual way for customizations to that host application. Depending on the host application, this may be via a launch point in the host application UI, or via a command line tool.

## Test

Launch the plugin from the host application. It should create a session and open MI Materials Gateway in a browser window. When a material is selected, the plugin should receive the data and write it into the host application.
