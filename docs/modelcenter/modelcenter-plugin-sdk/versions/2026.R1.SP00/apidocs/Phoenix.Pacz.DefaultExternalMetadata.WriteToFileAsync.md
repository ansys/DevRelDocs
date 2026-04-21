# Method WriteToFileAsync

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## WriteToFileAsync(string)

Writes the external metadata to a file. This does nothing if this does not contain any metadata values.

```csharp
public Task WriteToFileAsync(string destFolder)

```

### Parameters

`destFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the folder where the metadata file should be written.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task representing the write operation.
