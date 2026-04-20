# Class ComponentInfoControlViewModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

View model for `Phoenix.BuilderUIClient.ComponentInfoControl`.

```csharp
public class ComponentInfoControlViewModel : IComponentInfoControlViewModel, INotifyPropertyChanged

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ComponentInfoControlViewModel](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.md)

#### Implements

[IComponentInfoControlViewModel](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.md),
[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[ComponentInfoControlViewModel(ISaveFileDialog, IFile, IDirectory, IProcess)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.-ctor.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__ctor_Phoenix_BuilderUIClient_ISaveFileDialog_Phoenix_BuilderUIClient_IFile_Phoenix_BuilderUIClient_IDirectory_Phoenix_BuilderUIClient_IProcess_)

Constructor.

## Fields

[_model](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._model.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__model)

The model holding the control's data.

## Properties

[Author](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Author.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Author)

The author of the component whose information is being displayed.

[BrowseIconCommand](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.BrowseIconCommand.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_BrowseIconCommand)

Command that handles opening a file dialog to select a new icon.

[CanEditBuilderUI](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.CanEditBuilderUI.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_CanEditBuilderUI)

Does the model support opening an edit UI?

[ComponentType](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.ComponentType.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_ComponentType)

The type of component whose information is being displayed (Legacy Pacz, Quadratic, etc.).

[Description](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Description.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Description)

The description of the component whose information is being displayed.

[EditBuilderUILabel](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.EditBuilderUILabel.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_EditBuilderUILabel)

Label to use to view/edit the component

[EditCommandAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.EditCommandAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_EditCommandAsync)

Command that handles opening the component's edit UI. May be null if editing is not supported.

[ExportCommandAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.ExportCommandAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_ExportCommandAsync)

Command that handles exporting the component.

[ExternalMetadata](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.ExternalMetadata.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_ExternalMetadata)

Metadata about the Pacz from an external source. For example, the remote ID of the Pacz file for
Paczs hosted on a remote server.

[Files](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Files.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Files)

The list of files in the component's ExtractionFolder.

[HasChanged](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HasChanged.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HasChanged)

Have any fields been changed?

[HasComponent](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HasComponent.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HasComponent)

Is there a component loaded in the control?

[HelpAsyncDelegate](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HelpAsyncDelegate.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HelpAsyncDelegate)

Method for showing a help dialog. Should be set by the user after construction.

[HelpButtonEnabled](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HelpButtonEnabled.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HelpButtonEnabled)

Can the help button be used?

[HelpCommandAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HelpCommandAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HelpCommandAsync)

Command that handles showing the help dialog.

[HideExternalMetadata](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.HideExternalMetadata.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_HideExternalMetadata)

Whether to hide the external metadata portion of the UI.

[Icon](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Icon.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Icon)

The uri to the icon file of the component whose information is being displayed.

[IconImage](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.IconImage.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_IconImage)

The image of the icon for the component whose information is being displayed.

[InWriteMode](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.InWriteMode.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_InWriteMode)

Is the model in write mode (editing enabled)?

[IsReadOnly](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.IsReadOnly.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_IsReadOnly)

Is the model read-only?

[OnComponentSaved](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.OnComponentSaved.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_OnComponentSaved)

Event handler to fire when the user saves the component through the Edit Component UI.

[OpenFolderCommandAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.OpenFolderCommandAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_OpenFolderCommandAsync)

Command that handles opening the component's ExtractionFolder.

[SaveButtonEnabled](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.SaveButtonEnabled.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_SaveButtonEnabled)

Can the save button be used?

[SaveCommandAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.SaveCommandAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_SaveCommandAsync)

Command that handles saving changes to the component.

[Source](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Source.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Source)

The source path of the component whose information is being displayed.

[Version](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Version.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_Version)

The version of the component whose information is being displayed.

## Methods

[ExpandFile(FileTreeItem)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.ExpandFile.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_ExpandFile_Phoenix_BuilderUIClient_FileTreeItem_)

Fetch the directory contents of the given FileTreeItem and populate them into the view.

[LoadComponentAsync(IReadOnlyExtractedPacz, string, string)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.LoadComponentAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_LoadComponentAsync_Phoenix_PaczAPI_IReadOnlyExtractedPacz_System_String_System_String_)

Load a new component into the control.

[OnFileCheckChanged()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.OnFileCheckChanged.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_OnFileCheckChanged)

Handler for when a file in `Phoenix.BuilderUIClient.ComponentInfoControlViewModel.Files`'s check state is changed.

[OnPropertyChanged(string)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.OnPropertyChanged.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_OnPropertyChanged_System_String_)

Raises the PropertyChanged Event for the calling member.

[StartWriteMode(IExtractedPacz)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.StartWriteMode.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_StartWriteMode_Phoenix_PaczAPI_IExtractedPacz_)

Set the control to be writable temporarily. Sets writable mode immediately, and unsets it when the returned
`System.IDisposable` is disposed.

[UnloadComponent()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.UnloadComponent.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_UnloadComponent)

Unloads the current component from the control.

[_onBrowseIcon()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._onBrowseIcon.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__onBrowseIcon)

Opens a file dialog to select a new icon.

[_onExport()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._onExport.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__onExport)

Exports the component.

[_onHelp()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._onHelp.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__onHelp)

Shows the help dialog.

[_onOpenFolder()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._onOpenFolder.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__onOpenFolder)

Opens the components ExtrationFolder.

[_onSave()](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._onSave.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__onSave)

Saves changes to the component.

[_showMessageBox(string, string, MessageBoxButton, MessageBoxImage)](Phoenix.BuilderUIClient.ComponentInfoControlViewModel._showMessageBox.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel__showMessageBox_System_String_System_String_System_Windows_MessageBoxButton_System_Windows_MessageBoxImage_)

Shows a `System.Windows.MessageBox` to the user. Broken out to allow overriding for testing.

[PropertyChanged](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.PropertyChanged.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_PropertyChanged)

Occurs when a property value changes.

[RequestSaveAsync](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.RequestSaveAsync.md#Phoenix_BuilderUIClient_ComponentInfoControlViewModel_RequestSaveAsync)

Async method for requesting a save to `Phoenix.BuilderUIClient.LocalEditHolder`.
