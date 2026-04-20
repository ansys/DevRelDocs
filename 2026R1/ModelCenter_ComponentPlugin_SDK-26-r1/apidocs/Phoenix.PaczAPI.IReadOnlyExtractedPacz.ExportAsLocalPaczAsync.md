# Method ExportAsLocalPaczAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ExportAsLocalPaczAsync(string)

Exports the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. This has the side-effect of forcing
any current state in `Phoenix.PaczAPI.IExtractedPacz.Config` to the extraction
folder but otherwise does not affect this object or
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`.

```csharp
Task<IPacz> ExportAsLocalPaczAsync(string pacz)

```

### Parameters

`pacz` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new pacz file to save to.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that returns the newly created IPacz source object
