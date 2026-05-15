# Method SetVariablesAsPHXVariable

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

```csharp
public void SetVariablesAsPHXVariable(IEnumerable<PHXVariable> variables)

```

### Parameters

`variables` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<PHXVariable>

The list of variables to set
