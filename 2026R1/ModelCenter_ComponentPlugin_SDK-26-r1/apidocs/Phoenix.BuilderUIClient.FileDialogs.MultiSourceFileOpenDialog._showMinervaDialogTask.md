# Method _showMinervaDialogTask

Namespace: [Phoenix.BuilderUIClient.FileDialogs](Phoenix.BuilderUIClient.FileDialogs.md)  
Assembly: Phoenix.BuilderUIClient.dll

## _showMinervaDialogTask(MinervaCLIWrapper)

A Task that shows the Minerva File dialog and returns the selected path

```csharp
protected override Task<string> _showMinervaDialogTask(MinervaCLIWrapper minervaCLI)

```

### Parameters

`minervaCLI` MinervaCLIWrapper

THe MinervaCLIWrapper to use

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Task that return the selected path from the Minerva dialog
