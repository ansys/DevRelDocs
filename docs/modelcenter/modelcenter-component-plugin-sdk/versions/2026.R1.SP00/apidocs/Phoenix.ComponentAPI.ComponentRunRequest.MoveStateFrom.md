# Method MoveStateFrom

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>>)

Creates a new ComponentRunRequest by taking ownership of all the variable values passed in.

```csharp
public static ComponentRunRequest MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>> source)

```

### Parameters

`source` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>>

The input values to use for the run request.

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

Disposing the returned object will dispose the passed in values. You should always
use the returned value in a using block, or otherwise ensure it will be disposed.

## MoveStateFrom(VariableValueScope)

Creates a new ComponentRunRequest by taking all variables from the given scope.

```csharp
public static ComponentRunRequest MoveStateFrom(VariableValueScope source)

```

### Parameters

`source` VariableValueScope

The source to move inputs from. This object will be empty after calling this function.

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

After calling this function, `source` will be empty. You should always
use the returned value in a using block, or otherwise ensure it will be disposed.
