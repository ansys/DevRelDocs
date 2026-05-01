# Property DefaultValue

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## DefaultValue

The default value for this variable.

```csharp
IVariableValue DefaultValue { get; }

```

### Property Value

IVariableValue

### Remarks

This property will return an object whose lifetime is controlled by this IRuntimeVariable.
If you would like to keep the return value longer than the lifespan of this IRuntimeVariable,
you must clone the returned value.
