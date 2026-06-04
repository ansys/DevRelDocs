# Method SetPaczIcon

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetPaczIcon(Uri, string)

Adds an icon file to the Pacz from a resource image.

```csharp
protected void SetPaczIcon(Uri iconFileResourceUri, string iconFilename = "icon.png")

```

### Parameters

`iconFileResourceUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

URI to the image resource.

`iconFilename` [string](https://learn.microsoft.com/dotnet/api/system.string)

The filename to use for the icon in the Pacz.

### Remarks

In general you should not add an icon to the pacz unless the user is overriding
the default icon for the plug-in. If a pacz does not contain an icon, the system will
fall back on the plug-in's icon at runtime.
