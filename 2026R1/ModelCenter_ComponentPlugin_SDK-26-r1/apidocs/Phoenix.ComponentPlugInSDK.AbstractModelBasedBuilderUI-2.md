# Class AbstractModelBasedBuilderUI<RUNNER, MODEL>

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This abstract base class extends upon `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1` with the ability to load and save
from a model object. Typically used by plug-ins that want to use MVVM or similar pattern.

There are two ways that derived classes can interject code into the save/load process. The MODEL itself will get
a chance to save first. Then, the abstract function `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.SaveToPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` or `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)`
will be called. The Model is typically used by classes such as `Phoenix.ComponentPlugInSDK.AbstractScriptBasedBuilderUI`2` and
`Phoenix.ComponentPlugInSDK.AbstractVariableBasedBuilderUI`2` to provide overarching capabilities.
`Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.SaveToPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` and `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` are typically left abstract until
the actual implementation class as a quick way for them to add on additional save/load operations without needing to implement
their own Model.

```csharp
public abstract class AbstractModelBasedBuilderUI<RUNNER, MODEL> : AbstractBuilderUI<RUNNER>, IHarnessBuilderUI<RUNNER>, IHarnessBuilderUIBase, IDisposable where RUNNER : IHarnessRunner where MODEL : IBuilderUIModel, new()

```

#### Type Parameters

`RUNNER`

The type of IHarnessRunner that this builder edits.

`MODEL`

Type type of model object that this class will contain. It must have a no-argument
constructor and implement `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel`.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[AbstractBuilderUI<RUNNER>](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.md) ←
[AbstractModelBasedBuilderUI<RUNNER, MODEL>](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.md)

#### Implements

IHarnessBuilderUI<RUNNER>,
IHarnessBuilderUIBase,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[AbstractBuilderUI<RUNNER>._window](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1._window.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1__window),
[AbstractBuilderUI<RUNNER>.Dispose(bool)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.Dispose.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_Dispose_System_Boolean_),
[AbstractBuilderUI<RUNNER>.ComponentName](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ComponentName.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ComponentName),
[AbstractBuilderUI<RUNNER>.ComponentIcon](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ComponentIcon.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ComponentIcon),
[AbstractBuilderUI<RUNNER>.CreateWindow()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.CreateWindow.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_CreateWindow),
[AbstractBuilderUI<RUNNER>.AddMenuItem(ItemsControl, string, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_RoutedEventHandler_),
[AbstractBuilderUI<RUNNER>.AddAsyncMenuItem(ItemsControl, string, AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_),
[AbstractBuilderUI<RUNNER>.AddMenuItem(ItemsControl, string, ImageType, bool, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_Images_ImageType_System_Boolean_System_Windows_RoutedEventHandler_),
[AbstractBuilderUI<RUNNER>.AddAsyncMenuItem(ItemsControl, string, ImageType, bool, AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_Phoenix_ComponentPlugInSDK_Images_ImageType_System_Boolean_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_),
[AbstractBuilderUI<RUNNER>.AddMenuItem(ItemsControl, string, ImageSource, bool, RoutedEventHandler)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_Media_ImageSource_System_Boolean_System_Windows_RoutedEventHandler_),
[AbstractBuilderUI<RUNNER>.AddAsyncMenuItem(ItemsControl, string, ImageSource, bool, AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.AddAsyncMenuItem.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_AddAsyncMenuItem_System_Windows_Controls_ItemsControl_System_String_System_Windows_Media_ImageSource_System_Boolean_Phoenix_ComponentPlugInSDK_AbstractBuilderUI__0__RoutedEventHandlerAsync_),
[AbstractBuilderUI<RUNNER>.SelectVariables(IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>, IPlugInViewModel, string, string, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SelectVariables.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SelectVariables_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_System_String_System_String_System_String_),
[AbstractBuilderUI<RUNNER>.SelectVariables(AbstractVariableProvider, IPlugInViewModel, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SelectVariables.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SelectVariables_Phoenix_ComponentPlugInSDK_AbstractVariableProvider_Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_System_String_),
[AbstractBuilderUI<RUNNER>.SetPaczIcon(Uri, string)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.SetPaczIcon.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_SetPaczIcon_System_Uri_System_String_),
[AbstractBuilderUI<RUNNER>.HarnessType](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.HarnessType.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_HarnessType),
[AbstractBuilderUI<RUNNER>.WindowClosed](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.WindowClosed.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_WindowClosed),
[AbstractBuilderUI<RUNNER>.Host](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.Host.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_Host),
[AbstractBuilderUI<RUNNER>.ConstructAsync(IHarnessBuilderUIHost<RUNNER>)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ConstructAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ConstructAsync_Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost__0__),
[AbstractBuilderUI<RUNNER>.ShowAsync()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.ShowAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_ShowAsync),
[AbstractBuilderUI<RUNNER>.TrySaveAsync()](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.TrySaveAsync.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_TrySaveAsync),
[AbstractBuilderUI<RUNNER>.DisplayException(Exception)](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.DisplayException.md#Phoenix_ComponentPlugInSDK_AbstractBuilderUI_1_DisplayException_System_Exception_),
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

## Properties

[Model](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.Model.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2_Model)

The actual model for this instance.

## Methods

[ConstructAsync(IHarnessBuilderUIHost<RUNNER>)](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.ConstructAsync.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2_ConstructAsync_Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost__0__)

Derived classes typically do not need to override this behavior as they
can interject code in the Model and in `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)`.

[Dispose(bool)](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.Dispose.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2_Dispose_System_Boolean_)

Standard disposal.

[LoadFromPaczAsync(IExtractedPacz)](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.LoadFromPaczAsync.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2_LoadFromPaczAsync_Phoenix_PaczAPI_IExtractedPacz_)

Performs any necessary initialization of the Component Builder

[SaveToPaczAsync(IExtractedPacz)](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.SaveToPaczAsync.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2_SaveToPaczAsync_Phoenix_PaczAPI_IExtractedPacz_)

Allows derived classes to save their data to the pacz

[_saveAsync(IBuilderUIModel)](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2._saveAsync.md#Phoenix_ComponentPlugInSDK_AbstractModelBasedBuilderUI_2__saveAsync_Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_)

Causes the model to be properly saved, and the host notified of the save. Not called automatically,
it is up to derived classes to hook this up at the appropriate moments.
