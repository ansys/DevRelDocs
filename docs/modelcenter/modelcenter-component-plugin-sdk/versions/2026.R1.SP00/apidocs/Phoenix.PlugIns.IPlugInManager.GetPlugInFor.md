# Method GetPlugInFor<T>

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## GetPlugInFor<T>(Guid)

Gets information about a particular plug-in.
Passthrough to `Phoenix.PlugIns.IPlugInManager.GetPlugInFor(System.String,System.Guid)` with
`Phoenix.PlugIns.PlugInInterfaceNameAttribute.GetNameOrDefault(System.Type)` on T.

```csharp
IPlugInInstance GetPlugInFor<T>(Guid id)

```

### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The Id of the desired plug-in

### Returns

[IPlugInInstance](Phoenix.PlugIns.IPlugInInstance.md)

The requested plug-in

### Type Parameters

`T`

The type of plug-in to search for.

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If the desired plug-in is not found

## GetPlugInFor(string, Guid)

Gets information about a particular plug-in.

```csharp
IPlugInInstance GetPlugInFor(string type, Guid id)

```

### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of plug-in to search for

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The Id of the desired plug-in

### Returns

[IPlugInInstance](Phoenix.PlugIns.IPlugInInstance.md)

The requested plug-in

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If the desired plug-in is not found
