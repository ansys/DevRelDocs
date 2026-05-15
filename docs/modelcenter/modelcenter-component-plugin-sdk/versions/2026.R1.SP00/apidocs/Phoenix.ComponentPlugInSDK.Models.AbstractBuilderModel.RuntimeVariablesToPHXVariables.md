# Method RuntimeVariablesToPHXVariables

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## RuntimeVariablesToPHXVariables(IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>, VariableValueScope)

Converts a set of input and output variables into an enumerable of PHXVariable.

```csharp
public static IEnumerable<PHXVariable> RuntimeVariablesToPHXVariables(IEnumerable<IRuntimeVariable> inputs, IEnumerable<IRuntimeVariable> outputs, VariableValueScope scope)

```

### Parameters

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The inputs to convert. May be null

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>

The outputs to convert. May be null

`scope` VariableValueScope

As PHXVariables are created, the `Phoenix.ModelCenter.Common.PHXVariable.DefaultIVariableValue`
is filled with clones of the input default variables and the cloned values are given to this scope
object for management. Values are stored in this scope using the variable name as the key and with
a validity of false.

### Returns

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<PHXVariable>

An enumerable of PHXVariable. Will never be null
