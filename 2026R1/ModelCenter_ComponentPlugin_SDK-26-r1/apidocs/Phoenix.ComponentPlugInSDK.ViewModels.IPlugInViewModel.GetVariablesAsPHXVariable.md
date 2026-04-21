# Method GetVariablesAsPHXVariable

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## GetVariablesAsPHXVariable(VariableValueScope)

Retrieves the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables`
converted to an enumerable of PHXVariable objects.

```csharp
IEnumerable<PHXVariable> GetVariablesAsPHXVariable(VariableValueScope scope)

```

### Parameters

`scope` VariableValueScope

As PHXVariables are created, the `Phoenix.ModelCenter.Common.PHXVariable.DefaultIVariableValue`
is filled with clones of the input default variables and the cloned values are given to this scope
object for management. Values are stored in this scope using the variable name as the key and with
a validity of false.

### Returns

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<PHXVariable>

The current list of variables
