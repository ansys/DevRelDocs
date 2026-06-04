# Method CloneInputVariablesFrom

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## CloneInputVariablesFrom(IEnumerable<IRuntimeVariable>)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

```csharp
void CloneInputVariablesFrom(IEnumerable<IRuntimeVariable> inputs)

```

### Parameters

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The input variables to clone and save

### Remarks

This class takes responsibility for the clones, but not the passed in
values.
