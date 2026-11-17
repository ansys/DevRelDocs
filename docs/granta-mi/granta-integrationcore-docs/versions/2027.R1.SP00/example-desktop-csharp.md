# Desktop plugin example: DesktopIntegrationSampleCSharp

## Introduction

`DesktopIntegrationSampleCSharp` is an example Host Integration plugin for a desktop-based host application written in C#/.Net. It shows how to manage MI Integration Service sessions, and how to fetch materials data selected using MI Materials Gateway. It is a recommended starting point for developing a desktop-based plugin.

Unlike a server-based plugin, a desktop plugin does not implement an interface provided by MI Integration Service. Instead, it is a client of the MI Integration Service REST API: it creates a session, opens a browser at the MI Materials Gateway URL for that session, and receives materials data pushed into the session as the user makes selections.

This example demonstrates the desktop plugin concept with a console application that:

1. Authenticates to Granta MI (Windows Authentication, HTTP Basic, or OIDC).
2. Creates a session (`POST /sessions`).
3. Opens the MI Materials Gateway URL, passing the new session ID.
4. Streams material selections pushed into the session via Server-Sent Events (SSE) (`GET /sessions/{uid}/data/sse`), printing them as they arrive.
5. Cleans up on exit by deleting the session (`DELETE /sessions/{uid}`).

The example code can be found in the Granta MI installation CD `extras`, in the `DesktopIntegrationSampleCSharp` folder of the `IntegrationDevKit.zip`.

## Implementation

### Identifying the integration and building URLs

`CommandLineOptions` derives the URLs the plugin needs based on the MI Service Layer address (`-a`) and optional Host ID (`-i`) supplied on the command line. If `-i` is omitted, the `hostId` parameter is not included in the URL. The Host ID lets the host application identify itself to MI Materials Gateway, so that application behavior can be tailored for that specific host.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/CommandLineOptions.cs#IntegrationServiceApiBase)]

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/CommandLineOptions.cs#BuildGatewayUrl)]

### Authentication

`AuthHandlerFactory` builds an `HttpMessageHandler` configured for the requested authentication mode: Windows Authentication (the default), HTTP Basic (`-u`/`-p`), or OIDC (`-o`). For OIDC, the token acquisition must be implemented based on the configured identity provider.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/Auth/AuthHandlerFactory.cs#Create)]

### Creating an MI Integration Service session

`IntegrationServiceClient.CreateSessionAsync` creates a new session by calling `POST /sessions`. The plugin then builds the MI Materials Gateway URL for that session, and opens it in the user's default browser.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/IntegrationServiceClient.cs#CreateSessionAsync)]

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/Program.cs#CreateSessionAndOpenBrowser)]

### Receiving materials data

`IntegrationServiceClient.StreamSessionDataAsync` opens an SSE connection to the session's data endpoint, and yields each `SequencedData` item as it is pushed into the session by MI Materials Gateway.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/IntegrationServiceClient.cs#StreamSessionDataAsync)]

The application loops over this stream, and for each item received, prints the data to the console. For an actual implementation, the plugin would instead write the materials data into the host application using the appropriate host application API.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/Program.cs#ReceiveMaterialsData)]

This example always starts a new SSE stream from the beginning of the session; it does not implement reconnect-by-sequence-id (using the `?id=` query parameter) to resume a stream after a dropped connection. A production integration that needs to survive network interruptions should implement this.

### Cleaning up the session

The session should be deleted once the plugin no longer needs it. This example deletes the session in a `finally` block, so that this happens both on normal completion and when the user presses Ctrl+C.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSampleCSharp/Program.cs#CleanUpSession)]

## Build

From the `DesktopIntegrationSampleCSharp` folder, build the project:

```powershell
dotnet build .\DesktopIntegrationSampleCSharp.csproj -c Release
```

## Run

```powershell
dotnet run --project DesktopIntegrationSampleCSharp.csproj -- -a https://my_server_name/mi_servicelayer
```

This uses Windows Integrated Authentication to authenticate as the current user by default. To use HTTP Basic authentication instead, `-u` and `-p` are supplied:

```powershell
dotnet run --project DesktopIntegrationSampleCSharp.csproj -- -a https://my_server_name/mi_servicelayer -u myuser -p mypassword
```

To associate the session with a specific host, `-i` is supplied:

```powershell
dotnet run --project DesktopIntegrationSampleCSharp.csproj -- -a https://my_server_name/mi_servicelayer -i my_host_id
```

| Option | Default | Description |
|--------|---------|-------------|
| `-a` | *(required)* | MI Service Layer address, for example `https://my_server_name/mi_servicelayer`. |
| `-u` | *(none)* | User to authenticate as. If omitted, the current user is used. If specified, `-p` must also be specified. |
| `-p` | *(none)* | Password. Only used if `-u` has also been specified. |
| `-o` | `false` | Use OIDC (token acquisition is a stub in this example). |
| `-n` | `Desktop Integration Sample` | Session display name. |
| `-i` | *(none)* | Host id to pass to MI Materials Gateway as the `hostId` URL parameter. If omitted, the parameter is not included. |

## Deploy

For a real integration, the plugin must be deployed on the host application client machines, and registered in the usual way for customizations to that host application, for example triggered from a button or menu command in the host application UI.

## Test

The application is run against a Granta MI server, as described above. It creates a session and opens MI Materials Gateway in the default browser. When a material is selected, the details are printed to the console.
