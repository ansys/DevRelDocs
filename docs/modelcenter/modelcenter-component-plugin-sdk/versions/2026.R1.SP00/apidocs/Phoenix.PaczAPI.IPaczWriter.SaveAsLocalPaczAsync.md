# Method SaveAsLocalPaczAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## SaveAsLocalPaczAsync(string)

Saves the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. Changes our
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource` value.

```csharp
Task<IPacz> SaveAsLocalPaczAsync(string pacz)

```

### Parameters

`pacz` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full path to the new pacz file to save to, including the .pacz extension

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that returns the newly created IPacz source object
