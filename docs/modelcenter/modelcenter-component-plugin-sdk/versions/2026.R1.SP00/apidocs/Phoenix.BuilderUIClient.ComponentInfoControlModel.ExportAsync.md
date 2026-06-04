# Method ExportAsync

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ExportAsync(string)

Export the pacz to a file. Whether export is compressed or uncompressed depends on if path ends with '.pacz'.

```csharp
public Task ExportAsync(string path)

```

### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to export the file to.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

Task of the running operation.
