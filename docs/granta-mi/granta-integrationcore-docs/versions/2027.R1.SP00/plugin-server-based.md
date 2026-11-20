# Creating a server-based integration

For server-based integrations, the Host Integration plugin must be written as a .NET plugin to the MI Integration Service, using the `IPlugin` and `IPluginFactory` interfaces of the `Ansys.GrantaMI.IntegrationCore.ServerPlugin` assembly. This interface is documented [here](xref:Ansys.GrantaMI.IntegrationCore.ServerPlugin.V1). Any .NET language capable of implementing these interfaces may be used, though the samples and this documentation use C#.

The plugin is responsible for accepting materials data from the MI Integration Service, and writing that data to the host application server in whatever way is appropriate for that application (for example, writing to a database, calling an API, or writing to a file).

For a complete, working implementation of the concepts described on this page, see [Server plugin example: MaterialLoggerPlugin](example-server-material-logger.md).

## Creating the plugin

A plugin project must implement two interfaces:

* `IPluginFactory` - creates plugin instances. The MI Integration Service calls `Create(IPluginHostContext)` (or the typed overload provided by `PluginFactoryBase<TSettings, TPlugin>`) once per configured Host Configuration, passing an `IPluginHostContext` for that host. The `settings` object can carry any configuration the plugin needs, avoiding the need for a code change or rebuild for each deployment.
* `IPlugin` - implements the integration logic. The MI Integration Service calls `AddMaterials(MaterialData[], CancellationToken)` with the materials data selected by the user, and expects a `MaterialStatus` result for each material indicating whether it was processed successfully.

### `IPluginHostContext`

The `Ansys.GrantaMI.IntegrationCore.ServerPlugin` assembly also includes `IPluginHostContext`. This is implemented by the MI Integration Service, not by the plugin author; the instance passed to `Create()` provides host-scoped services and metadata for the lifetime of the plugin host instance. It should be retained by the factory/plugin as needed:

* `HostId` and `DllName` identify the host configuration and plugin assembly the context belongs to.
* `GetConfiguration<T>()` returns the host-deserialized settings object, throwing `PluginConfigurationException` if `T` does not match the type declared by `IPluginFactory.SettingsType`, or if configuration was not deserialized (for example, no `settings` were configured for the host).
* `CreateLogger(pluginName)` returns an `IPluginLog` for structured diagnostic logging (`LogDebug`, `LogInformation`, `LogWarning`, `LogError`), scoped to the plugin and host.
* `HttpClientFactory` (an `IPluginHostHttpClientFactory`) returns cached outbound `HttpClient` instances, one client per distinct set of options. Clients are cached for the lifetime of the host and must not be disposed by plugin code:
  * `GetBearerClient` returns a client that forwards the *calling user's* bearer token (from the ambient `IPluginRequestContext`) on every request, so the downstream call is made as the Materials Gateway user who triggered `AddMaterials`.
  * `GetStaticAuthClient` returns a client with a fixed `Authorization` header applied to every request, as supplied in `PluginStaticAuthHttpClientOptions.Authorization`. This is not limited to any one scheme - use it for Basic authentication, a static API key, or any other credential that can be expressed as a single `Authorization` header value.
  * `GetWindowsAuthClient` returns a client that uses integrated Windows authentication (Kerberos/NTLM) under the *MI Integration Service process's own identity* - not the identity of the user who made the HTTP request to the Integration Service.
* `Request` exposes the ambient `IPluginRequestContext` (bearer token, request id, trace activity) for the Integration Service HTTP request currently being processed, when one is in progress.

### Plugin configuration

The `settings` string specified for the plugin in the Host Configuration must be valid JSON. It is deserialized by the Integration Service Plugin Host and is available in the `IPluginHostContext`. Use the `PluginFactoryBase<TSettings, TPlugin>` helper to pass a strongly typed `TSettings` object to the plugin constructor. For example, given the following `settings` JSON in the Host Configuration:

```json
{
  "PluginOutputFolder": "C:\\PluginOutputs",
  "BaseUrl": "https://host.example.com/api"
}
```

The corresponding `TSettings` type and factory could be defined as:

```csharp
public sealed record CustomPluginSettings(
    string PluginOutputFolder,
    string BaseUrl);

public sealed class CustomPluginFactory
    : PluginFactoryBase<CustomPluginSettings, CustomPlugin>
{
    public override CustomPlugin Create(IPluginHostContext host, CustomPluginSettings settings)
        => new CustomPlugin(host, settings);
}
```

`PluginFactoryBase<TSettings, TPlugin>` deserializes the JSON into `CustomPluginSettings` before calling `Create`, so `settings.PluginOutputFolder` and `settings.BaseUrl` are automatically populated and strongly typed.

**Note: The plugin host uses the following settings for deserialization. The JSON object and `TSettings` type must be compatible with these JSON deserialization settings:**

* Keys are case-insensitive, so `PluginOutputFolder` and `pluginOutputFolder` are considered the same key
* Trailing commas are not supported
* Subclasses are not supported. For different configuration objects for different plugin registrations, use separate keys and optional fields.

### Logging

Instead of writing to the console or plain text files, use the `IPluginLog` returned by `IPluginHostContext.CreateLogger(pluginName)`. This ensures plugin log entries are correlated with the correct host and plugin, support the standard levels (`LogDebug`, `LogInformation`, `LogWarning`, `LogError`), and are properly flushed and rotated.

Log entries are written under the category `Plugin.<pluginName>.<HostId>`. To route a plugin's log entries to a dedicated file, add a `<logger>` element for `Plugin.<pluginName>` to the Integration Service's `log4net.xml`. For example, for a plugin with the name `CustomPlugin`, a typical log4net configuration would be:

```xml
<!-- Update appender name and file path based on the plugin name -->
<appender name="CustomPlugin" type="log4net.Appender.RollingFileAppender">
  <file value="C:\Logs\IntegrationService\CustomPlugin.log" />
  <appendToFile value="true" />
  <rollingStyle value="Date" />
  <datePattern value="yyyyMMdd" />
  <layout type="log4net.Layout.PatternLayout">
    <conversionPattern value="%-5p %d{hh:mm:ss} %message%newline" />
  </layout>
</appender>

<!-- Update logger name and appender-ref ref attributes based on the plugin name -->
<logger name="Plugin.CustomPlugin" additivity="false">
  <level value="ALL" />
  <appender-ref ref="CustomPlugin" />
</logger>
```

Set `additivity="false"` to stop entries also being written to the root appenders.

### Error handling

Errors importing individual materials should be reported through the `MaterialStatus` result for that material, not by throwing an exception. Set `MaterialStatus.Code` to an appropriate HTTP-style status code, and `MaterialStatus.Error` to a descriptive message, for any material that could not be processed. Return a status for every material passed to `AddMaterials`, even if the whole batch fails for the same underlying reason. This allows for per-material feedback in MI Materials Gateway.

Throwing an exception should be reserved for issues the plugin cannot reliably recover from, or issues that cannot be associated with a specific material, such as:

* Invalid or missing configuration:
  * If the configuration JSON and `IPluginFactory.SettingsType` do not agree, `IPluginHostContext.GetConfiguration<T>()` will throw `PluginConfigurationException` and can be left to propagate.
  * If the configuration values are of the correct type but are otherwise invalid, for example incorrect third-party credentials, throw `PluginConfigurationException` explicitly.
* Unexpected failures that prevent the plugin from operating at all, for example if `Create` cannot establish required state. Throw `PluginException` (or a subclass).

### Other best practices

The following best practices are recommended when designing a plugin:

* The `IPluginFactory` implementation should be lightweight, and should not include any blocking I/O or network calls.
* If your plugin requires settings, define a record or class for your settings (`TSettings`) and subclass the provided `PluginFactoryBase<TSettings, TPlugin>` helper.
* The `settings` format should be designed so that the same plugin DLL can be registered multiple times, under different Host Configurations, to support multiple host servers.
* Blocking or long-running operations should be avoided where possible; `AddMaterials` is asynchronous, so asynchronous APIs should be used when writing to the host application.
* Use `IPluginHostContext.HttpClientFactory` rather than creating and managing your own `HttpClient` instances. This ensures connections are pooled and authentication is handled consistently for the lifetime of the host.
* Where useful, record custom metrics or spans using `PluginTelemetry.Meter`/`PluginTelemetry.ActivitySource`. These support including plugin-specific telemetry alongside the `PluginMetrics` instruments already recorded by the host configuration for `AddMaterials` calls and outbound HTTP requests.

## Build

The plugin project is built as a class library, targeting .NET 10.0, referencing the `Ansys.GrantaMI.IntegrationCore.ServerPlugin` assembly.

**Important: If you do not use the example plugin as a starting point you must configure your package reference as follows, failure to do so can cause errors loading your plugin.**

```xml
<ItemGroup>
  <PackageReference Include="Ansys.GrantaMI.IntegrationCore.ServerPlugin" Version="X.Y.Z" >
    <ExcludeAssets>Runtime</ExcludeAssets>
  </PackageReference>
</ItemGroup>
```

## Deploy

1. Check that the MI Integration Service plugins folder exists. By default, this is `%ProgramFiles%\Granta\Granta MI\Integration Service\Plugins`. Create the folder if it does not exist.
2. Create a folder for the plugin within the MI Integration Service plugins folder.
3. Publish the plugin using `dotnet publish`.
4. Copy the output plugin DLL (and any dependencies) into the MI Integration Service plugins folder.
4. Add a host configuration in MI Settings > Materials Gateway (Web). See [Configuring your host integration](host-configuration.md) for more information.

## Test

MI Materials Gateway must be launched with the `HostID` provided as a URL parameter, in a URL of the form:

`https://your_server_name/grantami/gateway/?webMode=true&hostId=<HostID>`

where `your_server_name` is the name of the Granta MI server, and `<HostID>` is the configured Host ID.

When MI Materials Gateway loads, materials can be selected. When a material is selected, the MI Integration Service calls the plugin, which writes the data to the host application server.
