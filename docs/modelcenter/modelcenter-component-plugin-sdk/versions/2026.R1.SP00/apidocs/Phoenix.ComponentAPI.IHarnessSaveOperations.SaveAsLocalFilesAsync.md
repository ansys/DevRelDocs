# Method SaveAsLocalFilesAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## SaveAsLocalFilesAsync(string)

Saves the current pacz to an uncompressed folder. The metadata is saved to
component.pacj. Associated files are copied to the folder. The
`Phoenix.PaczAPI.IPacz.SourceUri` is updated to reflect the new location.

```csharp
Task SaveAsLocalFilesAsync(string pacjFolder)

```

### Parameters

`pacjFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The folder to save to

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will be completed when the save is completed.
