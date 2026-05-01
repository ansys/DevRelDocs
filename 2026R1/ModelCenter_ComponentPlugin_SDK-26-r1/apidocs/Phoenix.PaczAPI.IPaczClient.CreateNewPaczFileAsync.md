# Method CreateNewPaczFileAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## CreateNewPaczFileAsync(string, bool)

Creates a new IPaczWriter that is backed by a temporary folder which
can be used to start creating a new Pacz. The source of the returned IPaczWriter
will be null.

```csharp
Task<IPaczWriter> CreateNewPaczFileAsync(string extractionFolder = null, bool deleteOnDispose = true)

```

### Parameters

`extractionFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

If non-null will be used as the extraction folder instead of a temporary folder.

`deleteOnDispose` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, the extraction folder will be deleted when the returned object is diposed.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPaczWriter](Phoenix.PaczAPI.IPaczWriter.md)>

A task that when complete contains a new instance of IPaczWriter
