# Method CreateCloneFrom

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## CreateCloneFrom(IEnumerable<KeyValuePair<string, VariableState>>)

Creates a new ComponentRunRequest by making a clone of the given data.

```csharp
public static ComponentRunRequest CreateCloneFrom(IEnumerable<KeyValuePair<string, VariableState>> source)

```

### Parameters

`source` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>>

The input values to use for the run request.

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

You should always
use the returned value in a using block, or otherwise ensure it will be disposed.

## CreateCloneFrom(IEnumerable<IRuntimeVariable>, IEnumerable<KeyValuePair<string, VariableState>>)

Creates a new ComponentRunRequest by making a clone of the given data, filtered by a set of inputs.

```csharp
public static ComponentRunRequest CreateCloneFrom(IEnumerable<IRuntimeVariable> inputList, IEnumerable<KeyValuePair<string, VariableState>> source)

```

### Parameters

`inputList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IRuntimeVariable](Phoenix.PaczAPI.IRuntimeVariable.md)>

Which variables to include from `source`

`source` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>>

The input values to use for the run request.

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

You should always
use the returned value in a using block, or otherwise ensure it will be disposed.

## CreateCloneFrom(IEnumerable<string>, IEnumerable<KeyValuePair<string, VariableState>>)

Creates a new ComponentRunRequest by making a clone of the given data, filtered by a set of inputs.

```csharp
public static ComponentRunRequest CreateCloneFrom(IEnumerable<string> inputList, IEnumerable<KeyValuePair<string, VariableState>> source)

```

### Parameters

`inputList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Which variables to include from `source`

`source` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>>

The input values to use for the run request.

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

You should always
use the returned value in a using block, or otherwise ensure it will be disposed.
