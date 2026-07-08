# Method CloneOutputVariablesFrom

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable>)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

```csharp
void CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable> outputs)

```

### Parameters

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The output variables to clone and save

### Remarks

This class takes responsibility for the clones, but not the passed in
values.
