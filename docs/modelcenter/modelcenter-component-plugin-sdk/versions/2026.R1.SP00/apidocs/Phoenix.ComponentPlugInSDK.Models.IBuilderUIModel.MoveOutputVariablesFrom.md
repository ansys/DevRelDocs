# Method MoveOutputVariablesFrom

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` based on the passed in values

```csharp
void MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable> outputs)

```

### Parameters

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The input variables to take ownership of

### Remarks

This class takes responsibility for Disposing the passed in values.
The caller should not use the passed in values after calling this function.

```
This function does not handle passing IRuntimeVariables that originated from
<xref href="Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables" data-throw-if-not-resolved="false"></xref>. If you want to receive the InputVariables, modify
them and pass them back, use <xref href="Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.CloneOutputVariablesFrom(System.Collections.Generic.IEnumerable%7bPhoenix.PaczAPI.IRuntimeVariable%7d)" data-throw-if-not-resolved="false"></xref>

```
