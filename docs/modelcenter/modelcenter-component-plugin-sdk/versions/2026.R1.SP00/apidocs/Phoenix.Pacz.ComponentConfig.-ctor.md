# Constructor ComponentConfig

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## ComponentConfig(Guid, RunFolderPreference, IReadOnlyList<RuntimeVariable>, IReadOnlyList<RuntimeVariable>, string, string, IReadOnlyList<string>, IEnumerable<InstanceFile>, IEnumerable<ExternalFile>, IReadOnlyList<Compatibility>, IDictionary<string, object>, Uri, Uri, string, string)

Constructor

```csharp
[JsonConstructor]
public ComponentConfig(Guid plugInId, RunFolderPreference rfp, IReadOnlyList<RuntimeVariable> inputs, IReadOnlyList<RuntimeVariable> outputs, string version = null, string description = null, IReadOnlyList<string> requires = null, IEnumerable<InstanceFile> instanceFiles = null, IEnumerable<ExternalFile> externalFiles = null, IReadOnlyList<Compatibility> compatibilities = null, IDictionary<string, object> properties = null, Uri icon = null, Uri help = null, string asComponent = null, string author = null)

```

### Parameters

`plugInId` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The UUID of the plug-in that generated this Pacz

`rfp` [RunFolderPreference](Phoenix.PaczAPI.RunFolderPreference.md)

The RunFolderPreference for this Pacz

`inputs` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[RuntimeVariable](Phoenix.Pacz.RuntimeVariable.md)>

A list of the available inputs for this Pacz

`outputs` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[RuntimeVariable](Phoenix.Pacz.RuntimeVariable.md)>

A list of the available outputs for this Pacz

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version of this Pacz. The framework merely reports
this as a string and does not use any semantic parsing of the version string.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A description of the Pacz

`requires` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

A list of requirements to run this Pacz

`instanceFiles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[InstanceFile](Phoenix.Pacz.InstanceFile.md)>

A list of files to be included in the compressed pacz.

`externalFiles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ExternalFile](Phoenix.Pacz.ExternalFile.md)>

A list of external files that the component references.

`compatibilities` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[Compatibility](Phoenix.Pacz.Compatibility.md)>

This parameter is for internal use. Leave it null

`properties` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>

An arbitrary dictionary of values that allows a plug-in writer
to store data about the instance without needing to create additional files in the Pacz.

`icon` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The file relative to the .pacj file (usually stored in the .pacz file)
to be used as an icon

`help` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

URI of help to use for component

`asComponent` [string](https://learn.microsoft.com/dotnet/api/system.string)

Legacy field. Leave it null

`author` [string](https://learn.microsoft.com/dotnet/api/system.string)

The author of this component

## ComponentConfig(IReadOnlyComponentConfig)

Copy constructor. Creates a ComponentConfig that is a clone of the source.

```csharp
public ComponentConfig(IReadOnlyComponentConfig source)

```

### Parameters

`source` [IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

The source to copy from
