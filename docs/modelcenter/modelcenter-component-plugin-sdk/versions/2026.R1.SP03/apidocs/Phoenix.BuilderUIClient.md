# Namespace Phoenix.BuilderUIClient

### Namespaces

[Phoenix.BuilderUIClient.FileDialogs](Phoenix.BuilderUIClient.FileDialogs.md)

[Phoenix.BuilderUIClient.Properties](Phoenix.BuilderUIClient.Properties.md)

### Classes

[BooleanInvertConverter](Phoenix.BuilderUIClient.BooleanInvertConverter.md)

A value converter class that will invert the value of a boolean in a xaml binding

[BuilderUIClientFactory](Phoenix.BuilderUIClient.BuilderUIClientFactory.md)

[ComponentInfoControl](Phoenix.BuilderUIClient.ComponentInfoControl.md)

Interaction logic for ComponentInfoControl.xaml

[ComponentInfoControlModel](Phoenix.BuilderUIClient.ComponentInfoControlModel.md)

Model for a control that displays properties of a `Phoenix.PaczAPI.IReadOnlyExtractedPacz` and allows editing if it
is a `Phoenix.PaczAPI.IExtractedPacz`.

[ComponentInfoControlViewModel](Phoenix.BuilderUIClient.ComponentInfoControlViewModel.md)

View model for `Phoenix.BuilderUIClient.ComponentInfoControl`.

[ComponentInfoSessionManager](Phoenix.BuilderUIClient.ComponentInfoSessionManager.md)

Manager for the loading and switching between sessions in a ComponentInfoControl.
Provides methods to prompt the user for applying changes, and ensures proper cleanup and reuse of active edit
sessions.

[FileTreeItem](Phoenix.BuilderUIClient.FileTreeItem.md)

An entry in the `Phoenix.BuilderUIClient.ComponentInfoControl`'s Files tree.

[NewComponentWizard](Phoenix.BuilderUIClient.NewComponentWizard.md)

Interaction logic for NewComponentWizard.xaml

[NewComponentWizardModel](Phoenix.BuilderUIClient.NewComponentWizardModel.md)

The model for the NewComponentWizard dialog

[PaczInitializationDialog](Phoenix.BuilderUIClient.PaczInitializationDialog.md)

Interaction logic for PaczInitializationDialog.xaml

[UserFriendlyBuilderSessionInitialization](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.md)

### Interfaces

[IComponentInfoControlViewModel](Phoenix.BuilderUIClient.IComponentInfoControlViewModel.md)

Interface of a View model for `Phoenix.BuilderUIClient.ComponentInfoControl`.

[IDirectory](Phoenix.BuilderUIClient.IDirectory.md)

Interface that defines operations on directories.

[IFile](Phoenix.BuilderUIClient.IFile.md)

Interface that defines operations on files.

[IProcess](Phoenix.BuilderUIClient.IProcess.md)

Interface that defines operations with Processes.

[ISaveFileDialog](Phoenix.BuilderUIClient.ISaveFileDialog.md)

Interface that defines operations with a save dialog.

### Enums

[ComponentInfoSessionManager.FutureOperation](Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation.md)

Flag passed to `Phoenix.BuilderUIClient.ComponentInfoSessionManager.TrySavingExistingSessionAsync(Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation,Phoenix.ComponentAPI.IHarnessRunnerSession,System.Boolean,System.Boolean)` to help determine if the current session can be
reused and saving is not required.

[ComponentInfoSessionManager.FutureOperation](Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation.md)

Flag passed to `Phoenix.BuilderUIClient.ComponentInfoSessionManager.TrySavingExistingSessionAsync(Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation,Phoenix.ComponentAPI.IHarnessRunnerSession,System.Boolean,System.Boolean)` to help determine if the current session can be
reused and saving is not required.

[UserFriendlyBuilderSessionInitialization.InitializationOption](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.md)

Options for initializing a new Pacz

[UserFriendlyBuilderSessionInitialization.InitializationOption](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.md)

Options for initializing a new Pacz
