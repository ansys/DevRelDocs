# Class AbstractBuilderUI<RUNNER>

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This class serves as a common base class that implements IHarnessBuilderUI. It contains logic for managing the lifespan and events around the window
that implements the UI. It also contains some helper utilities around window management.

```csharp
public abstract class AbstractBuilderUI<RUNNER> : AbstractDisposable, IHarnessBuilderUI<RUNNER>, IHarnessBuilderUIBase, IDisposable where RUNNER : IHarnessRunner

```

#### Type Parameters

`RUNNER`

The type of IHarnessRunner that this builder edits.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[AbstractBuilderUI<RUNNER>](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.md)

#### Implements

IHarnessBuilderUI<RUNNER>,
IHarnessBuilderUIBase,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Fields

[_window](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1._window.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1__window)

The main window of the Builder UI.

## Properties

[ComponentIcon](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ComponentIcon.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ComponentIcon)

The URI of the icon to use for the builder UI. If null, the default Windows icon will be used.

[ComponentName](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ComponentName.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ComponentName)

The name of the builder to use in the UI.

[HarnessType](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.HarnessType.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_HarnessType)

Returns the Type object for the IHarnessRunner that this builder UI operates on.

[Host](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.Host.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_Host)

The host object

## Methods

[AddAsyncMenuItem(ItemsControl, string, RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_)

Adds a child menuItem to the specified parent.

[AddAsyncMenuItem(ItemsControl, string, ImageType, bool, RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_Images_ImageType_System_Boolean_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_)

Adds a child menuItem to the specified parent.

[AddAsyncMenuItem(ItemsControl, string, ImageSource, bool, RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_Media_ImageSource_System_Boolean_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_)

Adds a child menuItem to the specified parent.

[AddMenuItem(ItemsControl, string, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_RoutedEventHandler_)

Adds a child menuItem to the specified parent.

[AddMenuItem(ItemsControl, string, ImageType, bool, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_Images_ImageType_System_Boolean_System_Windows_RoutedEventHandler_)

Adds a child menuItem to the specified parent.

[AddMenuItem(ItemsControl, string, ImageSource, bool, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_Media_ImageSource_System_Boolean_System_Windows_RoutedEventHandler_)

Adds a child menuItem to the specified parent.

[ConstructAsync(IHarnessBuilderUIHost<RUNNER>)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ConstructAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ConstructAsync_Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost__0__)

Will always be called first to allow the object to instantiate itself.

[CreateWindow()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.CreateWindow.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_CreateWindow)

Creates the Main Window of the Builder UI. It is recommended that all implementations return
a Window that implements `Phoenix.ComponentPlugInSDK.Views.ISaveableWindow`. If the window does not, then requests
from the OEM to save the UI via `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.TrySaveAsync` will silently
return true.

[DisplayException(Exception)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.DisplayException.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_DisplayException_System_Exception_)

Given an Exception, display an appropriate error dialog to the user and log the full stack trace
to the logs.

[Dispose(bool)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.Dispose.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_Dispose_System_Boolean_)

Standard disposal.

[SelectVariables(IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>, IPlugInViewModel, string, string, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SelectVariables.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SelectVariables_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_System_String_System_String_System_String_)

Opens the CommonSelectVariablesForm.
The form will be initialized with the available variables plus the currently
selected variables from the IPlugInViewModel.
If the form is successfully closed, the viewModel's variable list will be updated to the selected variables.

[SelectVariables(AbstractVariableProvider, IPlugInViewModel, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SelectVariables.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SelectVariables_Phoenix_ComponentPlugInSDK_AbstractVariableProvider_Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_System_String_)

Opens the CommonSelectVariablesForm.
The form will initialize with variables provided by the variableProvider with the viewModel's
`Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` selected.
If the form is successfully closed, the viewModel's variable list will be updated to the selected variables.

[SetPaczIcon(Uri, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SetPaczIcon.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SetPaczIcon_System_Uri_System_String_)

Adds an icon file to the Pacz from a resource image.

[ShowAsync()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ShowAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ShowAsync)

Request that the UI be shown.

[TrySaveAsync()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.TrySaveAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_TrySaveAsync)

Tells the UI to save any current work. If there are no change, this
function should return true immediately. If there are unsaved changes,
the user should be prompted to save their work with (yes, no, cancel) options.

If the plug-in writer does not wish to have this protection, just return true and
do nothing.

[WindowClosed](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.WindowClosed.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_WindowClosed)

This event is raised any time the window is closed.
