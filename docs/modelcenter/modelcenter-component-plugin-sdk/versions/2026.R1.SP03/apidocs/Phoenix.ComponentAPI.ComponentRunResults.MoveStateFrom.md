# Method MoveStateFrom

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>>, ComponentRunResultsMetadata)

Creates a new instance of a ComponentRunResults.

```csharp
public static ComponentRunResults MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>> resultValues, ComponentRunResultsMetadata resultMetadata)

```

### Parameters

`resultValues` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>>

The output variable values to take ownership of. The source array should
not be used after calling this function.

`resultMetadata` [ComponentRunResultsMetadata](Phoenix.ComponentAPI.ComponentRunResultsMetadata.md)

Metadata about each run

### Returns

[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)

A new ComponentRunResults

### Remarks

You should always use the returned value in a using block, or otherwise ensure it will
be disposed.

## MoveStateFrom(VariableValueScope, ComponentRunResultsMetadata)

Creates a new instance of a ComponentRunResults by moving the data.

```csharp
public static ComponentRunResults MoveStateFrom(VariableValueScope resultValues, ComponentRunResultsMetadata resultMetadata)

```

### Parameters

`resultValues` VariableValueScope

The output variable values to take ownership of. The source array should
not be used after calling this function.

`resultMetadata` [ComponentRunResultsMetadata](Phoenix.ComponentAPI.ComponentRunResultsMetadata.md)

Metadata about each run

### Returns

[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)

A new ComponentRunResults

### Remarks

You should always use the returned value in a using block, or otherwise ensure it will
be disposed.
