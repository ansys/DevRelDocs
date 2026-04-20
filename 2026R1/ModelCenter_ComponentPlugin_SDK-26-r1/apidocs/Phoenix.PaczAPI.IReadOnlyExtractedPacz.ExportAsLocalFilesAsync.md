# Method ExportAsLocalFilesAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ExportAsLocalFilesAsync(string)

Exports the current pacz to an uncompressed folder. This has the
side-effect of forcing any current state in
`Phoenix.PaczAPI.IExtractedPacz.Config` to the extraction
folder but otherwise does not affect this object or
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`.

```csharp
Task<IPacz> ExportAsLocalFilesAsync(string pacjFolder)

```

### Parameters

`pacjFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new folder to save to. If the folder doesn't exist, it will be created.
If it does exist, contents that conflict will be overwritten.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that returns the newly created IPacz source object
