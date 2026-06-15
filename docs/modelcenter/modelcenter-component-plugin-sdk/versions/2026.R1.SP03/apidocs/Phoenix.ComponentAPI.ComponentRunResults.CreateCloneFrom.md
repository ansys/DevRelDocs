# Method CreateCloneFrom

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## CreateCloneFrom(IReadOnlyDictionary<string, VariableState>, ComponentRunResultsMetadata)

Creates a new ComponentRunResults by making a clone of the given data.

```csharp
public static ComponentRunResults CreateCloneFrom(IReadOnlyDictionary<string, VariableState> resultValues, ComponentRunResultsMetadata resultMetadata)

```

### Parameters

`resultValues` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>

The output variable values to clone.

`resultMetadata` [ComponentRunResultsMetadata](Phoenix.ComponentAPI.ComponentRunResultsMetadata.md)

Metadata about each run

### Returns

[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)

A new ComponentRunResults

### Remarks

You should always
use the returned value in a using block, or otherwise ensure it will be disposed.
