# Class ComponentInfoControlModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

Model for a control that displays properties of a `Phoenix.PaczAPI.IReadOnlyExtractedPacz` and allows editing if it
is a `Phoenix.PaczAPI.IExtractedPacz`.

```csharp
public class ComponentInfoControlModel

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ComponentInfoControlModel](Phoenix.BuilderUIClient.ComponentInfoControlModel.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[ComponentInfoControlModel(IReadOnlyExtractedPacz, string, string, IFile, IDirectory, IProcess)](Phoenix.BuilderUIClient.ComponentInfoControlModel.-ctor.md#Phoenix_BuilderUIClient_ComponentInfoControlModel__ctor_Phoenix_PaczAPI_IReadOnlyExtractedPacz_System_String_System_String_Phoenix_BuilderUIClient_IFile_Phoenix_BuilderUIClient_IDirectory_Phoenix_BuilderUIClient_IProcess_)

Constructor.

## Properties

[Author](Phoenix.BuilderUIClient.ComponentInfoControlModel.Author.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Author)

The author of the component whose information is being displayed.

[ComponentType](Phoenix.BuilderUIClient.ComponentInfoControlModel.ComponentType.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_ComponentType)

The type of component whose information is being displayed (Legacy Pacz, Quadratic, etc.).

[Description](Phoenix.BuilderUIClient.ComponentInfoControlModel.Description.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Description)

The description of the component whose information is being displayed.

[ExternalMetadata](Phoenix.BuilderUIClient.ComponentInfoControlModel.ExternalMetadata.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_ExternalMetadata)

Metadata about the Pacz from an external source. For example, the remote ID of the Pacz file for
Paczs hosted on a remote server.

[Files](Phoenix.BuilderUIClient.ComponentInfoControlModel.Files.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Files)

The list of files in the component's ExtractionFolder.

[Icon](Phoenix.BuilderUIClient.ComponentInfoControlModel.Icon.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Icon)

The uri to the icon file of the component whose information is being displayed.

[IconImage](Phoenix.BuilderUIClient.ComponentInfoControlModel.IconImage.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_IconImage)

The bitmap of the icon file for the component whose information is being displayed.

[Source](Phoenix.BuilderUIClient.ComponentInfoControlModel.Source.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Source)

The source path of the component whose information is being displayed.

[Version](Phoenix.BuilderUIClient.ComponentInfoControlModel.Version.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_Version)

The version of the component whose information is being displayed.

## Methods

[ApplyFileChanges()](Phoenix.BuilderUIClient.ComponentInfoControlModel.ApplyFileChanges.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_ApplyFileChanges)

Updates `Phoenix.BuilderUIClient.ComponentInfoControlModel._model`'s InstanceFiles with the current state of the file tree.

[ExpandFile(FileTreeItem)](Phoenix.BuilderUIClient.ComponentInfoControlModel.ExpandFile.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_ExpandFile_Phoenix_BuilderUIClient_FileTreeItem_)

Fetch the directory contents of the given `Phoenix.BuilderUIClient.FileTreeItem` and populate them into the view.

[ExportAsync(string)](Phoenix.BuilderUIClient.ComponentInfoControlModel.ExportAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_ExportAsync_System_String_)

Export the pacz to a file. Whether export is compressed or uncompressed depends on if path ends with '.pacz'.

[OpenExtractionFolderAsync()](Phoenix.BuilderUIClient.ComponentInfoControlModel.OpenExtractionFolderAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_OpenExtractionFolderAsync)

Open the component's extraction folder.

[SafeLoadIconAsync()](Phoenix.BuilderUIClient.ComponentInfoControlModel.SafeLoadIconAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_SafeLoadIconAsync)

Attempt to load the icon, setting the `Phoenix.BuilderUIClient.ComponentInfoControlModel.IconImage` property with any result.
The image property is not changed if an error occurs during loading.

[SetIconAsync(string)](Phoenix.BuilderUIClient.ComponentInfoControlModel.SetIconAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlModel_SetIconAsync_System_String_)

Set a new icon by first copying the old icon into the extraction folder, and then setting the Icon property
of the config.
