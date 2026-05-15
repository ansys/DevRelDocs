# Class MultiSourceFileDialog

Namespace: [Phoenix.BuilderUIClient.FileDialogs](Phoenix.BuilderUIClient.FileDialogs.md)  
Assembly: Phoenix.BuilderUIClient.dll

Abstract base for MultiSourceFileDialogs. First presents a Windows File Dialog
but includes a button to launch the Minerva File Dialog.

```csharp
public abstract class MultiSourceFileDialog

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[MultiSourceFileDialog](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileDialog.md)

#### Derived

[MultiSourceFileOpenDialog](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileOpenDialog.md),
[MultiSourceFolderDialog](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFolderDialog.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

[SelectedPath](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileDialog.SelectedPath.md#Phoenix_BuilderUIClient_FileDialogs_MultiSourceFileDialog_SelectedPath)

The Path selected by the user.

## Methods

[ShowDialog()](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileDialog.ShowDialog.md#Phoenix_BuilderUIClient_FileDialogs_MultiSourceFileDialog_ShowDialog)

Runs a common dialog box with a default owner.

[ShowDialog(IWin32Window)](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileDialog.ShowDialog.md#Phoenix_BuilderUIClient_FileDialogs_MultiSourceFileDialog_ShowDialog_System_Windows_Forms_IWin32Window_)

Runs a common dialog box with a specified owner.

[_showMinervaDialogTask(MinervaCLIWrapper)](Phoenix.BuilderUIClient.FileDialogs.MultiSourceFileDialog._showMinervaDialogTask.md#Phoenix_BuilderUIClient_FileDialogs_MultiSourceFileDialog__showMinervaDialogTask_Phoenix_MinervaCLI_MinervaCLIWrapper_)

A Task that shows the Minerva File dialog and returns the selected path
