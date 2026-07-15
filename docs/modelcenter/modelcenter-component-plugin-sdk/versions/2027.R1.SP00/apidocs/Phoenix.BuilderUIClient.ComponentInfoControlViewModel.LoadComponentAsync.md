# Method LoadComponentAsync

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## LoadComponentAsync(IReadOnlyExtractedPacz, string, string)

Load a new component into the control.

```csharp
public Task LoadComponentAsync(IReadOnlyExtractedPacz pacz, string source, string type)

```

### Parameters

`pacz` IReadOnlyExtractedPacz

The pacz information of the component to display.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source path of the component.

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

Tthe name of the plug-in the pacz is an instance of.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)
