# Method GetPlugInIconImageSourceOrDefaultAsync

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## GetPlugInIconImageSourceOrDefaultAsync(IPlugInInstance)

Get the plug-in icon, if possible, or a default if the plug-in does not specify an icon.
This maintains the original size of the icon image.

```csharp
public static Task<ImageSource> GetPlugInIconImageSourceOrDefaultAsync(this IPlugInInstance plugin)

```

### Parameters

`plugin` IPlugInInstance

The plug-in instance on which to operate.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ImageSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imagesource)>

An ImageSource suitable for display to the user.
