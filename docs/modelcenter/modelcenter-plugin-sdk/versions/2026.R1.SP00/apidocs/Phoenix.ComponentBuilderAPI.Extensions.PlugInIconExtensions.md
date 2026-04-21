# Class PlugInIconExtensions

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

Contains extension methods for loading the icon specified by an `Phoenix.PlugIns.IPlugInInstance`.

```csharp
public static class PlugInIconExtensions

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PlugInIconExtensions](Phoenix.ComponentBuilderAPI.Extensions.PlugInIconExtensions.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

[GetDefaultPlugInBitmap(IPlugInInstance)](Phoenix.ComponentBuilderAPI.Extensions.PlugInIconExtensions.GetDefaultPlugInBitmap.md#Phoenix_ComponentBuilderAPI_Extensions_PlugInIconExtensions_GetDefaultPlugInBitmap_Phoenix_PlugIns_IPlugInInstance_)

Get a placeholder plug-in icon for cases when there is an issue loading the plug-in icon.

[GetPlugInIconImageSourceOrDefaultAsync(IPlugInInstance)](Phoenix.ComponentBuilderAPI.Extensions.PlugInIconExtensions.GetPlugInIconImageSourceOrDefaultAsync.md#Phoenix_ComponentBuilderAPI_Extensions_PlugInIconExtensions_GetPlugInIconImageSourceOrDefaultAsync_Phoenix_PlugIns_IPlugInInstance_)

Get the plug-in icon, if possible, or a default if the plug-in does not specify an icon.
This maintains the original size of the icon image.

[GetPlugInIconOrDefaultAsync(IPlugInInstance)](Phoenix.ComponentBuilderAPI.Extensions.PlugInIconExtensions.GetPlugInIconOrDefaultAsync.md#Phoenix_ComponentBuilderAPI_Extensions_PlugInIconExtensions_GetPlugInIconOrDefaultAsync_Phoenix_PlugIns_IPlugInInstance_)

Get the plug-in icon, if possible, or a default if the plug-in does not specify an icon.
