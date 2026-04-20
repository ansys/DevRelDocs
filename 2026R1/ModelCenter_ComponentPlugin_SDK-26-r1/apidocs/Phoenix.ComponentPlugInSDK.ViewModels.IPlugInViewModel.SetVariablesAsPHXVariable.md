# Method SetVariablesAsPHXVariable

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

```csharp
void SetVariablesAsPHXVariable(IEnumerable<PHXVariable> variables)

```

### Parameters

`variables` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<PHXVariable>

The list of variables to set
