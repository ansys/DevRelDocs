# Method RuntimeVariableToPHXVariable

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## RuntimeVariableToPHXVariable(IRuntimeVariable, bool, VariableValueScope)

Converts from an IRuntimeVariable to a PHXVariable

```csharp
public static PHXVariable RuntimeVariableToPHXVariable(IRuntimeVariable source, bool input, VariableValueScope scope)

```

### Parameters

`source` IRuntimeVariable

The source variable to convert

`input` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true to make the returned PHXVariable an input, false an output

`scope` VariableValueScope

As PHXVariables are created, the `Phoenix.ModelCenter.Common.PHXVariable.DefaultIVariableValue`
is filled with clones of the input default variables and the cloned values are given to this scope
object for management. Values are stored in this scope using the variable name as the key and with
a validity of false.

### Returns

PHXVariable

A newly created PHXVariable
