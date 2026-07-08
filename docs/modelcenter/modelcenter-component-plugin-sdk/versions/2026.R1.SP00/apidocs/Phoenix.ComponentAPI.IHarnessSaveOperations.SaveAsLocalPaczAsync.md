# Method SaveAsLocalPaczAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## SaveAsLocalPaczAsync(string)

Gets the Runner associated with this builder.
Saves the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. The `Phoenix.PaczAPI.IPacz.SourceUri`
is updated to reflect the new location.

```csharp
Task SaveAsLocalPaczAsync(string pacz)

```

### Parameters

`pacz` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new pacz file to save to.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will be completed when the save is completed.
