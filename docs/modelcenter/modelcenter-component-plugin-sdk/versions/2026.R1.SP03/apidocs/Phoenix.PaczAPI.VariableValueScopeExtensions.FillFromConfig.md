# Method FillFromConfig

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## FillFromConfig(VariableValueScope, IReadOnlyComponentConfig, bool, bool)

For each variable in the component config, set the default value into the given scope.

```csharp
public static void FillFromConfig(this VariableValueScope scope, IReadOnlyComponentConfig config, bool includeInputs = true, bool includeOutputs = true)

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
