# Method GetPlugInIconOrDefaultAsync

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## GetPlugInIconOrDefaultAsync(IPlugInInstance)

Get the plug-in icon, if possible, or a default if the plug-in does not specify an icon.

```csharp
public static Task<Bitmap> GetPlugInIconOrDefaultAsync(this IPlugInInstance plugin)

```

### Parameters

`plugin` IPlugInInstance

The plug-in instance on which to operate.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)>

A Bitmap suitable for display to the user.
