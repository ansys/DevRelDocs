# Method ExtractToTempFolderAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ExtractToTempFolderAsync(string)

Tells the pacz to extract to a temp folder. You must call dispose on
the returned IPaczWriter object to clean up the extracted folder.

```csharp
Task<IPaczWriter> ExtractToTempFolderAsync(string folderName = null)

```

### Parameters

`folderName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPaczWriter](Phoenix.PaczAPI.IPaczWriter.md)>

A task that returns the IPaczWriter for the extracted folder
