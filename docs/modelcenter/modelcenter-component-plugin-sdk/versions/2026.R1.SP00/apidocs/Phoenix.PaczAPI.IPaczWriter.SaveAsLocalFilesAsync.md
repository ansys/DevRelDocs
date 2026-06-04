# Method SaveAsLocalFilesAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## SaveAsLocalFilesAsync(string)

Saves the current pacz to an uncompressed folder. Changes our
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource` value.

```csharp
Task<IPacz> SaveAsLocalFilesAsync(string pacjFolder)

```

### Parameters

`pacjFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new folder to save to. If the folder doesn't exist, it will be created.
If it does exist, contents that conflict will be overwritten.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that returns the newly created IPacz source object
