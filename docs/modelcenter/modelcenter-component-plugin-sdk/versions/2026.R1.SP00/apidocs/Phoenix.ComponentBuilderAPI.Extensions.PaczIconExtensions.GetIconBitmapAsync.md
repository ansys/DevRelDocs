# Method GetIconBitmapAsync

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## GetIconBitmapAsync(IPacz)

Given an `Phoenix.PaczAPI.IPacz`, retrieve the icon as a `System.Drawing.Bitmap`.

```csharp
public static Task<Bitmap> GetIconBitmapAsync(this IPacz paczSource)

```

### Parameters

`paczSource` IPacz

The PACZ from which to extract an icon.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)>

The icon as a `System.Drawing.Bitmap` if it could successfully be loaded.

### Remarks

Because `System.Drawing.Bitmap` is not well-supported in newer .NET Core versions,
this functionality has been moved from `Phoenix.PaczAPI.IPacz` to here to avoid cross-platform issues.
Because this assembly necessarily already targets .NET Framework and is associated with using the CAM framework
in a GUI-based context, adding this extension method here allows CAM client code an easy way to access arbitrary PACZ icons
as `System.Drawing.Bitmap` instances.
This function will throw an exception if it encounters an error when loading the icon.
