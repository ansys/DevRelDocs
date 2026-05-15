# Method MoveResultsTo

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## MoveResultsTo(VariableValueScope)

Puts the results from this object into the passed in scope. This object will show zero results
after calling this function.

```csharp
public void MoveResultsTo(VariableValueScope scope)

```

### Parameters

`scope` VariableValueScope

The scope to take ownership of the variable values

### Remarks

This function is the one exception to immutability
