# Class PaczIconExtensions

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

Contains extension methods for loading icons from PACZs.

```csharp
public static class PaczIconExtensions

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PaczIconExtensions](Phoenix.ComponentBuilderAPI.Extensions.PaczIconExtensions.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

[GetIconBitmapAsync(IPacz)](Phoenix.ComponentBuilderAPI.Extensions.PaczIconExtensions.GetIconBitmapAsync.md#Phoenix_ComponentBuilderAPI_Extensions_PaczIconExtensions_GetIconBitmapAsync_Phoenix_PaczAPI_IPacz_)

Given an `Phoenix.PaczAPI.IPacz`, retrieve the icon as a `System.Drawing.Bitmap`.

[GetIconImageSourceAsync(IPacz)](Phoenix.ComponentBuilderAPI.Extensions.PaczIconExtensions.GetIconImageSourceAsync.md#Phoenix_ComponentBuilderAPI_Extensions_PaczIconExtensions_GetIconImageSourceAsync_Phoenix_PaczAPI_IPacz_)

Given an `Phoenix.PaczAPI.IPacz`, retrieve the icon as an `System.Windows.Media.ImageSource`.
This returns the icon scaled to 16 x 16.
