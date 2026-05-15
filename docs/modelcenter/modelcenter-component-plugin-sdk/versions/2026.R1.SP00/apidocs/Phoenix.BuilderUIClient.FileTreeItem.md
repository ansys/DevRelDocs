# Class FileTreeItem

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

An entry in the `Phoenix.BuilderUIClient.ComponentInfoControl`'s Files tree.

```csharp
public class FileTreeItem : INotifyPropertyChanged, IEquatable<FileTreeItem>

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FileTreeItem](Phoenix.BuilderUIClient.FileTreeItem.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged),
[IEquatable<FileTreeItem>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[FileTreeItem(string, bool, bool)](Phoenix.BuilderUIClient.FileTreeItem.-ctor.md#Phoenix_BuilderUIClient_FileTreeItem__ctor_System_String_System_Boolean_System_Boolean_)

Constructor.

## Properties

[CanChangeCheck](Phoenix.BuilderUIClient.FileTreeItem.CanChangeCheck.md#Phoenix_BuilderUIClient_FileTreeItem_CanChangeCheck)

Is the file plug-in integral?

[FileName](Phoenix.BuilderUIClient.FileTreeItem.FileName.md#Phoenix_BuilderUIClient_FileTreeItem_FileName)

The name of the file or directory.

[IsChecked](Phoenix.BuilderUIClient.FileTreeItem.IsChecked.md#Phoenix_BuilderUIClient_FileTreeItem_IsChecked)

Is the file checked for inclusion as an instance file?

[Items](Phoenix.BuilderUIClient.FileTreeItem.Items.md#Phoenix_BuilderUIClient_FileTreeItem_Items)

Child files of this file, if this file is a directory.

[RelativePath](Phoenix.BuilderUIClient.FileTreeItem.RelativePath.md#Phoenix_BuilderUIClient_FileTreeItem_RelativePath)

The path to the file, relative to the extraction directory.

## Methods

[Equals(FileTreeItem)](Phoenix.BuilderUIClient.FileTreeItem.Equals.md#Phoenix_BuilderUIClient_FileTreeItem_Equals_Phoenix_BuilderUIClient_FileTreeItem_)

Indicates whether the current object is equal to another object of the same type.

[OnPropertyChanged(string)](Phoenix.BuilderUIClient.FileTreeItem.OnPropertyChanged.md#Phoenix_BuilderUIClient_FileTreeItem_OnPropertyChanged_System_String_)

Raises the PropertyChanged Event for the calling member.

[ToString()](Phoenix.BuilderUIClient.FileTreeItem.ToString.md#Phoenix_BuilderUIClient_FileTreeItem_ToString)

Returns a string that represents the current object.

[PropertyChanged](Phoenix.BuilderUIClient.FileTreeItem.PropertyChanged.md#Phoenix_BuilderUIClient_FileTreeItem_PropertyChanged)

Occurs when a property value changes.
