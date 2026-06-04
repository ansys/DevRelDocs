# Method SelectVariables

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SelectVariables(IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>, IPlugInViewModel, string, string, string)

Opens the CommonSelectVariablesForm.
The form will be initialized with the available variables plus the currently
selected variables from the IPlugInViewModel.
If the form is successfully closed, the viewModel's variable list will be updated to the selected variables.

```csharp
protected bool SelectVariables(IEnumerable<IRuntimeVariable> availableInputs, IEnumerable<IRuntimeVariable> availableOutputs, IPlugInViewModel viewModel, string userVariableDisplayText = null, string userVariableMetadataTag = null, string helpPath = null)

```

### Parameters

`availableInputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

Available input parameters

`availableOutputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

Available output parameters

`viewModel` [IPlugInViewModel](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.md)

The viewModel with the variable list to use.

`userVariableDisplayText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The display name to show the user for "user variables".
If null, the name "User Variables" or a translation of that will be used. This parameter
is ignored if `userVariableMetadataTag` is null.

`userVariableMetadataTag` [string](https://learn.microsoft.com/dotnet/api/system.string)

If this value is non-null, then the "show only user variables"
feature of `Phoenix.ModelCenter.Common.CommonSelectVariablesForm` will be enabled. This allows the user to
downselect variables based off of this tag. Any variable whose `Phoenix.PaczAPI.IRuntimeVariable.CustomMetadata`
contains a key of this parameter's name will be included in the selection.

`helpPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to Help file. If null, no help button will be present.

### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if changes were applied, false otherwise.

## SelectVariables(AbstractVariableProvider, IPlugInViewModel, string)

Opens the CommonSelectVariablesForm.
The form will initialize with variables provided by the variableProvider with the viewModel's
`Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` selected.
If the form is successfully closed, the viewModel's variable list will be updated to the selected variables.

```csharp
[Obsolete("Prefer to use SelectVariables(IEnumerable<IRuntimeVariable> availableInputs, IEnumerable<IRuntimeVariable> availableOutputs, IPlugInViewModel viewModel)")]
protected bool SelectVariables(AbstractVariableProvider variableProvider, IPlugInViewModel viewModel, string helpPath = null)

```

### Parameters

`variableProvider` [AbstractVariableProvider](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.md)

The Variable Provider.

`viewModel` [IPlugInViewModel](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.md)

The viewModel with the variable list to use.

`helpPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to Help file. If null, no help button will be present.

### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if changes were applied, false otherwise.

### Remarks

Component Plugins work with `Phoenix.PaczAPI.IRuntimeVariable`, but some of the
default UI works with the older `Phoenix.ModelCenter.Common.PHXVariable`. The override
`Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.SelectVariables(System.Collections.Generic.IEnumerable{Phoenix.PaczAPI.IRuntimeVariable},System.Collections.Generic.IEnumerable{Phoenix.PaczAPI.IRuntimeVariable},Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel,System.String,System.String,System.String)`
provides a convenience function so that the plug-in writer does not need to use PHXVariable.
