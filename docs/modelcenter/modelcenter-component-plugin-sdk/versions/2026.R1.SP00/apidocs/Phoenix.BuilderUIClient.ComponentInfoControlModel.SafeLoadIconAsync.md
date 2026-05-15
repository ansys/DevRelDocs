# Method SafeLoadIconAsync

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## SafeLoadIconAsync()

Attempt to load the icon, setting the `Phoenix.BuilderUIClient.ComponentInfoControlModel.IconImage` property with any result.
The image property is not changed if an error occurs during loading.

```csharp
public Task SafeLoadIconAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task which is complete when the loading process is finished.
