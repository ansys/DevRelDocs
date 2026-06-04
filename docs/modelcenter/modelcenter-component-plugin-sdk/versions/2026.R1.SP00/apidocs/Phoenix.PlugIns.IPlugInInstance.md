# Interface IPlugInInstance

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

Represents a plug-in found in the registry and managed by
an `Phoenix.PlugIns.IPlugInManager`

```csharp
public interface IPlugInInstance

```

## Properties

[Icon](Phoenix.PlugIns.IPlugInInstance.Icon.md#Phoenix_PlugIns_IPlugInInstance_Icon)

The path to an image file to display as the icon for this plugin.
The path will be null if the metadata file did not specify an icon or specified a path to a nonexistent file.

[Metadata](Phoenix.PlugIns.IPlugInInstance.Metadata.md#Phoenix_PlugIns_IPlugInInstance_Metadata)

Get metadata about the plug-in

## Methods

[GetLocalFolder()](Phoenix.PlugIns.IPlugInInstance.GetLocalFolder.md#Phoenix_PlugIns_IPlugInInstance_GetLocalFolder)

Returns a folder on the local drive that can be passed to PlugInInfo's
instantiation functions to actually instantiate the component. This may be
a cached folder if the repository it comes from is remote. It is guaranteed
to exist at least until the repository is disposed and will contain the
metadata.phxplugin file.

[GetPlugInTypeAsync()](Phoenix.PlugIns.IPlugInInstance.GetPlugInTypeAsync.md#Phoenix_PlugIns_IPlugInInstance_GetPlugInTypeAsync)

Gets the type of the plug-in

[InstantiateAsync<T>()](Phoenix.PlugIns.IPlugInInstance.InstantiateAsync.md#Phoenix_PlugIns_IPlugInInstance_InstantiateAsync__1)

Instantiates the plug-in
