# Method GetMetadataForAssembly

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## GetMetadataForAssembly(Assembly)

Creates a list of PlugInInfo objects from the attributes on an Assembly.

```csharp
public static IEnumerable<PlugInInfo> GetMetadataForAssembly(Assembly assm)

```

### Parameters

`assm` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

The assembly to inspect

### Returns

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)>

A list of PlugInInfo objects
