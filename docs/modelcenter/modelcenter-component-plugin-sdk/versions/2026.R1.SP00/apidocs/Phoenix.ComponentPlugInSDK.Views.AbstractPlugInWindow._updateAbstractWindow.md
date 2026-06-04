# Method _updateAbstractWindow

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## _updateAbstractWindow(IPlugInViewModel, VariableTreeProperties)

Sets the viewModel for the View. Also updates the TreeCtrl

```csharp
protected void _updateAbstractWindow(IPlugInViewModel viewModel, VariableTreeProperties treeProperties)

```

### Parameters

`viewModel` [IPlugInViewModel](Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.md)

The viewModel for the View.

`treeProperties` [VariableTreeProperties](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.md)

Properties that define the tree control behavior.
A value of null will use the default VariableTreeProperties.
