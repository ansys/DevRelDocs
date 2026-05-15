# Method MoveDefaultValueFrom

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## MoveDefaultValueFrom(IVariableValue)

Sets `Phoenix.Pacz.RuntimeVariable.DefaultValue` by taking ownership of
`value`

```csharp
public void MoveDefaultValueFrom(IVariableValue value)

```

### Parameters

`value` IVariableValue

The value to take ownership of

### Remarks

The caller should not use `value` after calling
this function
