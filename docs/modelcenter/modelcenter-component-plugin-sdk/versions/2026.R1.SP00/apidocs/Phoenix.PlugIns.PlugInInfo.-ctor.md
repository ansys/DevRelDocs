# Constructor PlugInInfo

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## PlugInInfo(Guid, IEnumerable<string>, Framework, string, string, string, string, IReadOnlyDictionary<string, string>, Uri, string, string, IReadOnlyDictionary<string, string>)

Constructor

```csharp
public PlugInInfo(Guid id, IEnumerable<string> supportedTypes, Framework implFramework, string implFile, string implClass, string author, string version, IReadOnlyDictionary<string, string> displayName, Uri helpUrl, string description, string icon, IReadOnlyDictionary<string, string> options)

```

### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The UUID for this plug-in

`supportedTypes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

The types of plug-in this instance supports.

`implFramework` [Framework](Phoenix.PlugIns.Framework.md)

The framework this plug-in is written in.

`implFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The .dll or .jar file that contains the plug-in.

`implClass` [string](https://learn.microsoft.com/dotnet/api/system.string)

The class in dotted notation that implements the plug-in.

`author` [string](https://learn.microsoft.com/dotnet/api/system.string)

The author of the plug-in. May be null

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version number of the plug-in. May be null

`displayName` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

The map of display names per language as defined in
Design/FileSchemas/PlugInMetadata/metadata.phxplugin.schema.json. May be null

`helpUrl` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

A Url that can be used to retrieve help for the component. May be null

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A longer description of the component. May be null

`icon` [string](https://learn.microsoft.com/dotnet/api/system.string)

A path, usually relative to the metadata file, to an icon or bitmap file. May be null

`options` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

An arbitrary string/value map of options. Refer to your SDK documentation for available
options that can be set. May be null
