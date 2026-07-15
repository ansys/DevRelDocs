# Method ClearAndFillFromConfig

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ClearAndFillFromConfig(VariableValueScope, IReadOnlyComponentConfig, bool, bool)

Clears the given scope of all variables and values, and then calls
`Phoenix.PaczAPI.VariableValueScopeExtensions.FillFromConfig(Phoenix.ModelCenter.Common.Types.VariableValueScope,Phoenix.PaczAPI.IReadOnlyComponentConfig,System.Boolean,System.Boolean)`

```csharp
public static void ClearAndFillFromConfig(this VariableValueScope scope, IReadOnlyComponentConfig config, bool includeInputs = true, bool includeOutputs = true)

```

### Parameters

`scope` VariableValueScope

The scope to fill in

`config` [IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

The configuration to read from

`includeInputs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to include input variables in the scope

`includeOutputs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to include output variables in the scope
