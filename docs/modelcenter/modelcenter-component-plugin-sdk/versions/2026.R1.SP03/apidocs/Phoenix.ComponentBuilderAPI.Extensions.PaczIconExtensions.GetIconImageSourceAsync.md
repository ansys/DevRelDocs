# Method GetIconImageSourceAsync

Namespace: [Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## GetIconImageSourceAsync(IPacz)

Given an `Phoenix.PaczAPI.IPacz`, retrieve the icon as an `System.Windows.Media.ImageSource`.
This returns the icon scaled to 16 x 16.

```csharp
public static Task<ImageSource> GetIconImageSourceAsync(this IPacz paczSource)

```

### Parameters

`paczSource` IPacz

The PACZ from which to extract an icon.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ImageSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imagesource)>

The icon as a `System.Windows.Media.ImageSource` if it could successfully be loaded or null if the PACZ does not have an icon.

### Remarks

This function will throw an exception if it encounters an error when loading the icon.
