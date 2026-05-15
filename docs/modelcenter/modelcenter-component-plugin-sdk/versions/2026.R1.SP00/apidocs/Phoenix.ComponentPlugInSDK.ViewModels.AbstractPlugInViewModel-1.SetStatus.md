# Method SetStatus

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetStatus(string, Color)

Sets the status parameters. If the message is null and the color is the default, `System.Windows.Media.Colors.Transparent`,
then `Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel`1.HasStatus` will return false.

```csharp
public void SetStatus(string message, Color color = default)

```

### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to set.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

The color to set. The default `System.Windows.Media.Colors.Transparent` turns the circle off.
