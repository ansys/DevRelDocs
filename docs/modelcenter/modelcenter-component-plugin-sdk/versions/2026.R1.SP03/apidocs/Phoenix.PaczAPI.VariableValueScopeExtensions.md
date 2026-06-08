# Class VariableValueScopeExtensions

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Extension functions that enable filling a scope from an IReadOnlyComponentConfig

```csharp
public static class VariableValueScopeExtensions

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VariableValueScopeExtensions](Phoenix.PaczAPI.VariableValueScopeExtensions.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

[ClearAndFillFromConfig(VariableValueScope, IReadOnlyComponentConfig, bool, bool)](Phoenix.PaczAPI.VariableValueScopeExtensions.ClearAndFillFromConfig.md#Phoenix_PaczAPI_VariableValueScopeExtensions_ClearAndFillFromConfig_Phoenix_ModelCenter_Common_Types_VariableValueScope_Phoenix_PaczAPI_IReadOnlyComponentConfig_System_Boolean_System_Boolean_)

Clears the given scope of all variables and values, and then calls
`Phoenix.PaczAPI.VariableValueScopeExtensions.FillFromConfig(Phoenix.ModelCenter.Common.Types.VariableValueScope,Phoenix.PaczAPI.IReadOnlyComponentConfig,System.Boolean,System.Boolean)`

[FillFromConfig(VariableValueScope, IReadOnlyComponentConfig, bool, bool)](Phoenix.PaczAPI.VariableValueScopeExtensions.FillFromConfig.md#Phoenix_PaczAPI_VariableValueScopeExtensions_FillFromConfig_Phoenix_ModelCenter_Common_Types_VariableValueScope_Phoenix_PaczAPI_IReadOnlyComponentConfig_System_Boolean_System_Boolean_)

For each variable in the component config, set the default value into the given scope.
