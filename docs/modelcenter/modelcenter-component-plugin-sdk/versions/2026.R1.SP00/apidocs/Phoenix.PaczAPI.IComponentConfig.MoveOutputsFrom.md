# Method MoveOutputsFrom

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## MoveOutputsFrom(IEnumerable<IRuntimeVariable>)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs` by taking ownership of the passed in objects.

```csharp
void MoveOutputsFrom(IEnumerable<IRuntimeVariable> value)

```

### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IRuntimeVariable](Phoenix.PaczAPI.IRuntimeVariable.md)>

The output values to set

### Remarks

You should not use the original objects after calling this function as their
lifespan is determined by this object.
