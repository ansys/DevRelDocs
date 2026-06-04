# Interface IComponentInfoControlViewModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

Interface of a View model for `Phoenix.BuilderUIClient.ComponentInfoControl`.

```csharp
public interface IComponentInfoControlViewModel : INotifyPropertyChanged

```

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

[Author](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Author.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Author)

The author of the component whose information is being displayed.

[BrowseIconCommand](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.BrowseIconCommand.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_BrowseIconCommand)

Command that handles opening a file dialog to select a new icon.

[CanEditBuilderUI](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.CanEditBuilderUI.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_CanEditBuilderUI)

Does the model support opening an edit UI?

[ComponentType](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.ComponentType.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_ComponentType)

The type of component whose information is being displayed (Legacy Pacz, Quadratic, etc.).

[Description](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Description.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Description)

The description of the component whose information is being displayed.

[EditBuilderUILabel](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.EditBuilderUILabel.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_EditBuilderUILabel)

Label to use to view/edit the component

[EditCommandAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.EditCommandAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_EditCommandAsync)

Command that handles opening the component's edit UI. May be null if editing is not supported.

[ExportCommandAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.ExportCommandAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_ExportCommandAsync)

Command that handles exporting the component.

[ExternalMetadata](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.ExternalMetadata.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_ExternalMetadata)

Metadata about the Pacz from an external source. For example, the remote ID of the Pacz file for
Paczs hosted on a remote server.

[Files](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Files.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Files)

The list of files in the component's ExtractionFolder.

[HasChanged](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HasChanged.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HasChanged)

Have any fields been changed?

[HasComponent](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HasComponent.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HasComponent)

Is there a component loaded in the control?

[HelpAsyncDelegate](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HelpAsyncDelegate.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HelpAsyncDelegate)

Method for showing a help dialog. Should be set by the user after construction.

[HelpButtonEnabled](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HelpButtonEnabled.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HelpButtonEnabled)

Can the help button be used?

[HelpCommandAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HelpCommandAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HelpCommandAsync)

Command that handles showing the help dialog.

[HideExternalMetadata](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HideExternalMetadata.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_HideExternalMetadata)

Whether to hide the external metadata portion of the UI.

[Icon](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Icon.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Icon)

The uri to the icon file of the component whose information is being displayed.

[IconImage](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.IconImage.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_IconImage)

The icon image of the component whose information is being displayed.

[InWriteMode](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.InWriteMode.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_InWriteMode)

Is the model in write mode (editing enabled)?

[IsReadOnly](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.IsReadOnly.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_IsReadOnly)

Is the model read-only?

[OnComponentSaved](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.OnComponentSaved.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_OnComponentSaved)

Event handler to fire when the user saves the component through the Edit Component UI.

[OpenFolderCommandAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.OpenFolderCommandAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_OpenFolderCommandAsync)

Command that handles opening the component's ExtractionFolder.

[SaveButtonEnabled](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.SaveButtonEnabled.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_SaveButtonEnabled)

Can the save button be used?

[SaveCommandAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.SaveCommandAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_SaveCommandAsync)

Command that handles saving changes to the component.

[Source](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Source.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Source)

The source path of the component whose information is being displayed.

[Version](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.Version.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Version)

The version of the component whose information is being displayed.

## Methods

[ExpandFile(FileTreeItem)](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.ExpandFile.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_ExpandFile_Phoenix_BuilderUIClient_FileTreeItem_)

Fetch the directory contents of the given FileTreeItem and populate them into the view.

[LoadComponentAsync(IReadOnlyExtractedPacz, string, string)](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.LoadComponentAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_LoadComponentAsync_Phoenix_PaczAPI_IReadOnlyExtractedPacz_System_String_System_String_)

Load a new component into the control.

[StartWriteMode(IExtractedPacz)](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.StartWriteMode.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_StartWriteMode_Phoenix_PaczAPI_IExtractedPacz_)

Set the control to be writable temporarily. Sets writable mode immediately, and unsets it when the returned
`System.IDisposable` is disposed.

[UnloadComponent()](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.UnloadComponent.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_UnloadComponent)

Unloads the current component from the control.

[RequestSaveAsync](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.RequestSaveAsync.md#Phoenix_BuilderUIClient_IComponentInfoControlViewModel_RequestSaveAsync)

Async method for requesting a save to `Phoenix.BuilderUIClient.LocalEditHolder`.
