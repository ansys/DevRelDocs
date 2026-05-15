# Method MoveOutputVariablesFrom

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables` based on the passed in values

```csharp
public void MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable> outputs)

```

### Parameters

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The output variables to take ownership of

### Remarks

This class takes responsibility for Disposing the passed in values.
The caller should not use the passed in values after calling this function.

```
This function does not handle passing IRuntimeVariables that originated from
<xref href="Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.OutputVariables" data-throw-if-not-resolved="false"></xref>. If you want to receive the OutputVariables, modify
them and pass them back, use <xref href="Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.CloneOutputVariablesFrom(System.Collections.Generic.IEnumerable%7bPhoenix.PaczAPI.IRuntimeVariable%7d)" data-throw-if-not-resolved="false"></xref>

```
