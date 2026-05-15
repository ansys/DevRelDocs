# Class AbstractPlugInViewModel<MODEL_TYPE>

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This Class serves as a base class for CAM PlugIn ViewModels.
It has built-in commands for saving and managing the model state.

```csharp
public abstract class AbstractPlugInViewModel<MODEL_TYPE> : IPlugInViewModel, INotifyPropertyChanged where MODEL_TYPE : IBuilderUIModel

```

#### Type Parameters

`MODEL_TYPE`

The Type of the model that the viewModel is presenting.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[AbstractPlugInViewModel<MODEL_TYPE>](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.md)

#### Implements

[IPlugInViewModel](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.md),
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

[AbstractPlugInViewModel(MODEL_TYPE, ILogger, string, Func<MODEL_TYPE, Task>, Action, Action<Exception>, Uri)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.-ctor.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__ctor__0_Microsoft_Extensions_Logging_ILogger_System_String_System_Func__0_System_Threading_Tasks_Task__System_Action_System_Action_System_Exception__System_Uri_)

Constructor.

## Fields

[_logger](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1._logger.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__logger)

The logger to use.

[_showErrorAction](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1._showErrorAction.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__showErrorAction)

Displays an error message to the user, in a way defined by the view.

## Properties

[BuilderName](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.BuilderName.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_BuilderName)

The Name of the Builder, this will be used to build the WindowTitle and titles of other dialogs.

[ExternalMetadata](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.ExternalMetadata.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_ExternalMetadata)

The ExternalMetadata, if any, associated with the pacz

[HasStatus](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.HasStatus.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_HasStatus)

If there is any status set.
Will be true if StatusMessage is non-null OR StatusColor is not `System.Windows.Media.Colors.Transparent`

[InputVariables](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.InputVariables.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_InputVariables)

List of input variables in the component.

[IsBusy](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.IsBusy.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_IsBusy)

Whether the view model is currently busy.

[IsDirty](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.IsDirty.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_IsDirty)

Whether there are any unsaved changes in the editor.

[IsNotReadOnly](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.IsNotReadOnly.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_IsNotReadOnly)

If the pacz is NOT read only, this is true when the pacz is writable

[IsReadOnly](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.IsReadOnly.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_IsReadOnly)

If the pacz is read only

[OkCommand](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.OkCommand.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_OkCommand)

Command to apply changes and close the dialog.

[OutputVariables](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.OutputVariables.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_OutputVariables)

List of output variables in the component.

[SaveCommand](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.SaveCommand.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_SaveCommand)

Command to perform an apply operation.

[StatusColor](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.StatusColor.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_StatusColor)

The color to use to indicate the status. `System.Windows.Media.Colors.Transparent` is used to indicate not set.

[StatusMessage](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.StatusMessage.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_StatusMessage)

The status message to display

[WindowIcon](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.WindowIcon.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_WindowIcon)

The icon of the view's window. If null, the default Windows icon will be used.

[WindowTitle](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.WindowTitle.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_WindowTitle)

The Title of the View's Window, should indicate state(IsDirty, IsBusy)

## Methods

[CloneInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.CloneInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_CloneInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

[CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.CloneOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_CloneOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

[GetVariablesAsPHXVariable(VariableValueScope)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.GetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_GetVariablesAsPHXVariable_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Retrieves the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables`
converted to an enumerable of PHXVariable objects.

[MoveInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.MoveInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_MoveInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

[MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.MoveOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_MoveOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

[OnPropertyChanged(string)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.OnPropertyChanged.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_OnPropertyChanged_System_String_)

Raises the PropertyChanged Event for the calling member

[SaveAsync()](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.SaveAsync.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_SaveAsync)

Saves the current state of the component to the Pacz.

[SetStatus(string, Color)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.SetStatus.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_SetStatus_System_String_System_Windows_Media_Color_)

Sets the status parameters. If the message is null and the color is the default, `System.Windows.Media.Colors.Transparent`,
then `Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel`1.HasStatus` will return false.

[SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.SetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_SetVariablesAsPHXVariable_System_Collections_Generic_IEnumerable_Phoenix_ModelCenter_Common_PHXVariable__)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

[_handleError(Exception)](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1._handleError.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__handleError_System_Exception_)

Function to use to handle errors in command executions

[_onInputsChanged()](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1._onInputsChanged.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__onInputsChanged)

This function will be called when the `Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel`1.InputVariables` change to allow
derived classes to notify the UI.

[_onOutputsChanged()](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1._onOutputsChanged.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1__onOutputsChanged)

This function will be called when the `Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel`1.InputVariables` change to allow
derived classes to notify the UI.

[PropertyChanged](Phoenix.ComponentPlugInSDK.ViewModels.AbstractPlugInViewModel-1.PropertyChanged.md#Phoenix_ComponentPlugInSDK_ViewModels_AbstractPlugInViewModel_1_PropertyChanged)

An INotifyPropertyChanged Event Handler that will handle the PropertyChanged event raised when a property is changed.
