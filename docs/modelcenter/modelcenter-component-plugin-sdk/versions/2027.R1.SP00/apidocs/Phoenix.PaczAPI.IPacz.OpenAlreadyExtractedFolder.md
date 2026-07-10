# Method OpenAlreadyExtractedFolder

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## OpenAlreadyExtractedFolder(string)

Generally meant to be used only internally by Phoenix Integration. Allows the
out of process host executable to reuse the directory already extracted by the OEM
process. The returned IPaczWriter.DeleteOnDispose will already
be set to false.

```csharp
Task<IPaczWriter> OpenAlreadyExtractedFolder(string folderName)

```

### Parameters

`folderName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The folder that has already been extracted. Must be non-null

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPaczWriter](Phoenix.PaczAPI.IPaczWriter.md)>

A task that returns an IPaczWriter for the folder
