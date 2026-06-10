# Method GetDefaultPlugInBitmap

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## GetDefaultPlugInBitmap(IPlugInInstance)

Get a placeholder plug-in icon for cases when there is an issue loading the plug-in icon.

```csharp
public static Bitmap GetDefaultPlugInBitmap(this IPlugInInstance plugin)

```

### Parameters

`plugin` IPlugInInstance

The plug-in on which to operate.

### Returns

[Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

A Bitmap containing a default plug-in icon.
