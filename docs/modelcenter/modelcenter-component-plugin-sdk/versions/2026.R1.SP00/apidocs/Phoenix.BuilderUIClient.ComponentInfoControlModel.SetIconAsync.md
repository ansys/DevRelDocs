# Method SetIconAsync

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## SetIconAsync(string)

Set a new icon by first copying the old icon into the extraction folder, and then setting the Icon property
of the config.

```csharp
public Task SetIconAsync(string filePath)

```

### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The absolute path to the new icon file.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

Task of the running operation.

### Remarks

This method does not delete the old icon to give the user the opportunity to copy it elsewhere.
Otherwise, it should be deleted when the extraction folder is cleaned up.
