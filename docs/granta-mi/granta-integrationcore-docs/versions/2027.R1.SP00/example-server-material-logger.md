# Server plugin example: MaterialLoggerPlugin

## Introduction

`MaterialLoggerPlugin` is an example Host Integration plugin for the MI Integration Service. It demonstrates how to implement the `IPlugin` and `IPluginFactory` interfaces from `Ansys.GrantaMI.IntegrationCore.ServerPlugin`. It is a recommended starting point for developing a server-based plugin.

This example demonstrates the server plugin concept by implementing a plugin that just logs selected materials to a configurable text file.

Example log output:

```text
[2025-07-14T10:30:00.0000000Z] Host=my-host | Name=Steel | Id=3fa85f64-... | DB=MI_Training | Table=MaterialUniverse | Units=SI | Format=MTL | Description=Structural steel
```

The example code can be found on the Granta MI installation CD `extras`, in the `MaterialLoggerSamplePlugin.DirectLib` folder of the `IntegrationDevKit.zip`.

## Implementation

### MaterialLoggerPluginFactory

`MaterialLoggerPluginFactory` implements `IPluginFactory` to create `MaterialLoggerPlugin` instances. The `settings` value passed to `Create` is used as the log file path. If not provided, it defaults to `materials.log` in the application base directory.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/ServerHost/MaterialLoggerSamplePlugin.DirectLib/MaterialLoggerPlugin/MaterialLoggerPluginFactory.cs#MaterialLoggerPluginFactory)]

### MaterialLoggerPlugin

`MaterialLoggerPlugin` implements `IPlugin`. Each call to `AddMaterials` appends a line per material to the log file, and returns a `MaterialStatus` result for each material.

[!code-csharp[](~/../granta-integration-service/devkit/examples/OnPrem/ServerHost/MaterialLoggerSamplePlugin.DirectLib/MaterialLoggerPlugin/MaterialLoggerPlugin.cs#MaterialLoggerPlugin)]

## Plugin configuration

The `settings` JSON object specified for the plugin in the Host Configuration is used to set the log file path:

| Settings value | Behavior |
|---|---|
| `{"LogFilePath": null}` | Logs to `materials.log` in the application base directory |
| `{"LogFilePath": "C:\MaterialLoggerPlugin\materials.log"}` | Logs to the specified file |

## Build

From the `MaterialLoggerSamplePlugin.DirectLib` folder, publish the plugin solution:

```powershell
dotnet publish .\MaterialLoggerPlugin.sln
```

## Deploy

1. Check that the plugin folder exists. By default, this is `%ProgramFiles%\Granta\Granta MI\Integration Service\Plugins`. Create this folder if it does not exist.
2. Create a folder to host the MaterialLoggerPlugin within the MI Integration Service plugins folder, for example `%ProgramFiles%\Granta\Granta MI\Integration Service\Plugins\MaterialLoggerPlugin`
3. Copy all the files from the publish directory (from `MaterialLoggerPlugin\bin\Release\net10.0\publish`) to the MaterialLoggerPlugin folder you created above.
4. In MI Settings, select 'Materials Gateway Web', and click 'Add host'. Leave the template set to 'None', and enter the Host ID and Host Name as `Logger`. Click 'Save'.
5. Provide the following additional settings for the `Logger` host configuration:

   * Host integration type: Server
   * Integration DLL: `MaterialLoggerPlugin.dll`
   * Runtime settings: `{"LogFilePath": "C:\MaterialLoggerPlugin\materials.log"}` - Create the folder `C:\MaterialLoggerPlugin` if it does not exist.
   * Authentication type: None selected

This registers the plugin with the name `Logger`, and configures the plugin to write the log file to the `C:\MaterialLoggerPlugin\materials.log` file.

## Test

MI Materials Gateway must be launched with the Host ID provided as a URL parameter, in a URL of the form:

`https://your_server_name/grantami/gateway/?webMode=true&hostId=logger`

where `your_server_name` is the name of the Granta MI server.

When MI Materials Gateway loads, materials can be selected. When a material is selected, the details about the selection are written to the log file specified in the configuration.
