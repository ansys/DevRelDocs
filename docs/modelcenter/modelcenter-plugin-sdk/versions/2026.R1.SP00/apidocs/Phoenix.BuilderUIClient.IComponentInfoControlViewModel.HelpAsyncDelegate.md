# Property HelpAsyncDelegate

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## HelpAsyncDelegate

Method for showing a help dialog. Should be set by the user after construction.

```csharp
Func<Task> HelpAsyncDelegate { get; set; }

```

### Property Value

[Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

### Remarks

This is the code to show a help dialog specific to the application this control is embedded in.
`Phoenix.BuilderUIClient.IComponentInfoControlViewModel.HelpCommandAsync` is the command that hooks up this to the view via _onHelp.
