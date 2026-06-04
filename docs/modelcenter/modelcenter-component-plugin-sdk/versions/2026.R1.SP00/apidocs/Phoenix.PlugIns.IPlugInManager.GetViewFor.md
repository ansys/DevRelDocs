# Method GetViewFor<T>

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## GetViewFor<T>()

Gets a hierarchical view of the plug-ins that implement a particular
interface.
Passthrough to `Phoenix.PlugIns.IPlugInManager.GetViewFor(System.String)` with
`Phoenix.PlugIns.PlugInInterfaceNameAttribute.GetNameOrDefault(System.Type)` on `T`.

```csharp
IPlugInRepository GetViewFor<T>()

```

### Returns

[IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md)

Hierarchical view of the plug-ins that implement the requested interface.

### Type Parameters

`T`

The type of plug-in to query

## GetViewFor(string)

Gets a hierarchical view of the plug-ins that implement a particular interface.

```csharp
IPlugInRepository GetViewFor(string type)

```

### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of plug-in to query

### Returns

[IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md)

Hierarchical view of the plug-ins that implement the requested interface.
