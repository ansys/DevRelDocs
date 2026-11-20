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

```csharp
/// <summary>
/// Base URL for the MI Integration Service API, derived from <see cref="ServiceLayerAddress"/>,
/// for example <c>https://my_server_name/mi_servicelayer/Proxy/v1.svc/integration-service/api/v1/</c>.
/// </summary>
public Uri IntegrationServiceApiBase =>
    new($"{ServiceLayerAddress!.TrimEnd('/')}/Proxy/v1.svc/integration-service/api/v1/");
```

```csharp
/// <summary>
/// Builds the Granta MI Gateway web page URL for the given session id, for example
/// <c>https://my_server_name/grantami/gateway/?webMode=true&amp;gisSessionId=&lt;uid&gt;</c>.
/// </summary>
public Uri BuildGatewayUrl(Guid sessionId)
{
    var serviceLayerHost = new Uri(ServiceLayerAddress!).GetLeftPart(UriPartial.Authority);
    var hostIdParameter = string.IsNullOrWhiteSpace(HostId) ? "" : $"&hostId={Uri.EscapeDataString(HostId)}";
    return new Uri($"{serviceLayerHost}/grantami/gateway/?webMode=true&gisSessionId={sessionId}{hostIdParameter}");
}
```

### Authentication

`AuthHandlerFactory` builds an `HttpMessageHandler` configured for the requested authentication mode: Windows Authentication (the default), HTTP Basic (`-u`/`-p`), or OIDC (`-o`). For OIDC, the token acquisition must be implemented based on the configured identity provider.

```csharp
public static HttpMessageHandler Create(CommandLineOptions options)
{
    if (options.UseOidc)
    {
        return new OidcAuthHandler(new HttpClientHandler());
    }

    return options.UseBasic ? CreateBasicHandler(options.User!, options.Password!) : CreateIwaHandler();
}
```

### Creating an MI Integration Service session

`IntegrationServiceClient.CreateSessionAsync` creates a new session by calling `POST /sessions`. The plugin then builds the MI Materials Gateway URL for that session, and opens it in the user's default browser.

```csharp
/// <summary>
/// Creates a new MI Integration Service session. Corresponds to <c>POST /sessions</c>.
/// </summary>
public async Task<Session> CreateSessionAsync(SessionRequest request, CancellationToken cancellationToken)
{
    using var content = new StringContent(
        JsonSerializer.Serialize(request, JsonOptions), Encoding.UTF8, "application/json");

    using var response = await httpClient.PostAsync("sessions", content, cancellationToken);
    await ThrowIfUnsuccessfulAsync(response, cancellationToken);

    var session = await response.Content.ReadFromJsonAsync<Session>(JsonOptions, cancellationToken);
    return session ?? throw new InvalidOperationException("Session response body was empty.");
}
```

```csharp
Console.WriteLine($"Creating session on {options.ServiceLayerAddress} ...");
session = await integrationServiceClient.CreateSessionAsync(
    new SessionRequest(options.SessionName), cts.Token);
Console.WriteLine($"Session created: id={session.Id}, expiresAt={session.ExpiresAt:u}");

var gatewayUrl = options.BuildGatewayUrl(session.Id);
Console.WriteLine($"Opening browser at: {gatewayUrl}");
OpenBrowser(gatewayUrl);
```

### Receiving materials data

`IntegrationServiceClient.StreamSessionDataAsync` opens an SSE connection to the session's data endpoint, and yields each `SequencedData` item as it is pushed into the session by MI Materials Gateway.

```csharp
/// <summary>
/// Streams session data pushed into the session via SSE. Corresponds to
/// <c>GET /sessions/{uid}/data/sse</c>. The returned sequence completes when the connection
/// is closed or <paramref name="cancellationToken"/> is triggered.
/// </summary>
public async IAsyncEnumerable<SequencedData> StreamSessionDataAsync(
    Guid sessionId,
    [System.Runtime.CompilerServices.EnumeratorCancellation] CancellationToken cancellationToken)
{
    using var request = new HttpRequestMessage(HttpMethod.Get, $"sessions/{sessionId}/data/sse");
    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("text/event-stream"));

    using var response = await httpClient.SendAsync(
        request, HttpCompletionOption.ResponseHeadersRead, cancellationToken);
    await ThrowIfUnsuccessfulAsync(response, cancellationToken);

    await using var stream = await response.Content.ReadAsStreamAsync(cancellationToken);

    await foreach (var sseItem in SseParser.Create<SequencedData?>(stream, ParseSequencedData).EnumerateAsync(cancellationToken))
    {
        if (sseItem.Data is not null)
        {
            yield return sseItem.Data;
        }
    }
}
```

The application loops over this stream, and for each item received, prints the data to the console. For an actual implementation, the plugin would instead write the materials data into the host application using the appropriate host application API.

```csharp
Console.WriteLine("Listening for material selections (Ctrl+C to stop and clean up)...");
await foreach (var data in integrationServiceClient.StreamSessionDataAsync(session.Id, cts.Token))
{
    // This line is where the 'integration' happens
    // In this example the application simply prints the received data to the console.
    // In a real integration the data would instead be passed into the application.
    Console.WriteLine($"[{DateTimeOffset.Now:HH:mm:ss}] Received data (sid={data.Id}): {data.Value}");
}
```

This example always starts a new SSE stream from the beginning of the session; it does not implement reconnect-by-sequence-id (using the `?id=` query parameter) to resume a stream after a dropped connection. A production integration that needs to survive network interruptions should implement this.

### Cleaning up the session

The session should be deleted once the plugin no longer needs it. This example deletes the session in a `finally` block, so that this happens both on normal completion and when the user presses Ctrl+C.

```csharp
if (session is not null)
{
    Console.WriteLine("Deleting session...");
    try
    {
        // Use a fresh token: the linked cancellation token may already be cancelled.
        using var cleanupCts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
        await integrationServiceClient.DeleteSessionAsync(session.Id, cleanupCts.Token);
        Console.WriteLine("Session deleted.");
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"Warning: failed to delete session {session.Id}: {ex.Message}");
    }
}
```

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
