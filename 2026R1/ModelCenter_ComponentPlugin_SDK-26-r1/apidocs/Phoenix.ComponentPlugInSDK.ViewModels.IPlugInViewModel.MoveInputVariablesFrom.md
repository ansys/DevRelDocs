# Method MoveInputVariablesFrom

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## MoveInputVariablesFrom(IEnumerable<IRuntimeVariable>)

Sets `Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables` based on the passed in values

```csharp
void MoveInputVariablesFrom(IEnumerable<IRuntimeVariable> inputs)

```

### Parameters

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The input variables to take ownership of

### Remarks

This class takes responsibility for Disposing the passed in values.
The caller should not use the passed in values after calling this function.

```
This function does not handle passing IRuntimeVariables that originated from
<xref href="Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.InputVariables" data-throw-if-not-resolved="false"></xref>. If you want to receive the InputVariables, modify
them and pass them back, use <xref href="Phoenix.ComponentPlugInSDK.ViewModels.IPlugInViewModel.CloneInputVariablesFrom(System.Collections.Generic.IEnumerable%7bPhoenix.PaczAPI.IRuntimeVariable%7d)" data-throw-if-not-resolved="false"></xref>

```
