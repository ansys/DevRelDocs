# Interface IPlugInViewModel

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

An Interface for plugin ViewModels that provides common properties and methods.

```csharp
public interface IPlugInViewModel

```

## Properties

[BuilderName](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.BuilderName.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_BuilderName)

The Name of the Builder, this will be used to build the WindowTitle and titles of other dialogs.

[InputVariables](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_InputVariables)

List of input variables in the component.

[IsBusy](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.IsBusy.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_IsBusy)

Whether the view model is currently busy.

[IsDirty](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.IsDirty.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_IsDirty)

Whether there are any unsaved changes in the editor.

[IsReadOnly](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.IsReadOnly.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_IsReadOnly)

If the pacz is read only

[OkCommand](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OkCommand.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_OkCommand)

Command to apply changes and close the dialog.

[OutputVariables](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_OutputVariables)

List of output variables in the component.

[SaveCommand](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.SaveCommand.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_SaveCommand)

Command to perform an apply operation.

[WindowIcon](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.WindowIcon.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_WindowIcon)

The icon of the view's window. If null, the default Windows icon will be used.

[WindowTitle](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.WindowTitle.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_WindowTitle)

The Title of the View's Window, should indicate state(IsDirty, IsBusy)

## Methods

[CloneInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.CloneInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_CloneInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

[CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.CloneOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_CloneOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

[GetVariablesAsPHXVariable(VariableValueScope)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.GetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_GetVariablesAsPHXVariable_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Retrieves the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables`
converted to an enumerable of PHXVariable objects.

[MoveInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.MoveInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_MoveInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

[MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.MoveOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_MoveOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

[SaveAsync()](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.SaveAsync.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_SaveAsync)

Saves the current state of the component to the Pacz.

[SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.SetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_SetVariablesAsPHXVariable_System_Collections_Generic_IEnumerable_Phoenix_ModelCenter_Common_PHXVariable__)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

[PropertyChanged](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.PropertyChanged.md#Phoenix_ComponentPlugInSDK_ViewModels_IPlugInViewModel_PropertyChanged)

An INotifyPropertyChanged Event Handler that will handle the PropertyChanged event raised when a property is changed.
