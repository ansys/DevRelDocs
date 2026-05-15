# Class NewComponentWizardModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

The model for the NewComponentWizard dialog

```csharp
public class NewComponentWizardModel : INotifyPropertyChanged

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[NewComponentWizardModel](Phoenix.BuilderUIClient.NewComponentWizardModel.md)

#### Implements

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

[NewComponentWizardModel(string, string, DelegateCommandAsync)](Phoenix.BuilderUIClient.NewComponentWizardModel.-ctor.md#Phoenix_BuilderUIClient_NewComponentWizardModel__ctor_System_String_System_String_Phoenix_DotNetUtils_DelegateCommandAsync_)

Constructor

## Properties

[CompType](Phoenix.BuilderUIClient.NewComponentWizardModel.CompType.md#Phoenix_BuilderUIClient_NewComponentWizardModel_CompType)

Returns the component type

[Compressed](Phoenix.BuilderUIClient.NewComponentWizardModel.Compressed.md#Phoenix_BuilderUIClient_NewComponentWizardModel_Compressed)

Whether a compressed pacz file should be used

[HelpAvailable](Phoenix.BuilderUIClient.NewComponentWizardModel.HelpAvailable.md#Phoenix_BuilderUIClient_NewComponentWizardModel_HelpAvailable)

Returns a visibility used to hide the Help button if `Phoenix.BuilderUIClient.NewComponentWizardModel.OnHelp` is not set.

[Location](Phoenix.BuilderUIClient.NewComponentWizardModel.Location.md#Phoenix_BuilderUIClient_NewComponentWizardModel_Location)

The location to store this component on disk

[Name](Phoenix.BuilderUIClient.NewComponentWizardModel.Name.md#Phoenix_BuilderUIClient_NewComponentWizardModel_Name)

The name to give this component

[OnHelp](Phoenix.BuilderUIClient.NewComponentWizardModel.OnHelp.md#Phoenix_BuilderUIClient_NewComponentWizardModel_OnHelp)

Delegate command for when the user clicks help

[OnPickLocation](Phoenix.BuilderUIClient.NewComponentWizardModel.OnPickLocation.md#Phoenix_BuilderUIClient_NewComponentWizardModel_OnPickLocation)

Delegate command for when the user clicks to choose a directory location

[Preview](Phoenix.BuilderUIClient.NewComponentWizardModel.Preview.md#Phoenix_BuilderUIClient_NewComponentWizardModel_Preview)

Returns what file will be generated given the current settings for display
to the user.

[SelectedPath](Phoenix.BuilderUIClient.NewComponentWizardModel.SelectedPath.md#Phoenix_BuilderUIClient_NewComponentWizardModel_SelectedPath)

Returns the selected path. If compressed will point to a .pacz file. If
uncompressed will point to the folder that should contain the component.pacj file.

[Uncompressed](Phoenix.BuilderUIClient.NewComponentWizardModel.Uncompressed.md#Phoenix_BuilderUIClient_NewComponentWizardModel_Uncompressed)

Returns the opposite of `Phoenix.BuilderUIClient.NewComponentWizardModel.Compressed`

## Methods

[OnPropertyChanged(string)](Phoenix.BuilderUIClient.NewComponentWizardModel.OnPropertyChanged.md#Phoenix_BuilderUIClient_NewComponentWizardModel_OnPropertyChanged_System_String_)

Raises the PropertyChanged Event for the calling member

[PropertyChanged](Phoenix.BuilderUIClient.NewComponentWizardModel.PropertyChanged.md#Phoenix_BuilderUIClient_NewComponentWizardModel_PropertyChanged)

Event fired when a property changes
