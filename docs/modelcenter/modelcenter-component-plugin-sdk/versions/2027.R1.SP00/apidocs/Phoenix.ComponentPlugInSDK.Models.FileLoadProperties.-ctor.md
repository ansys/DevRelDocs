# Constructor FileLoadProperties

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## FileLoadProperties(Func<string, VariableBasedBuilderViewModel, Task>, string)

Constructor.

```csharp
public FileLoadProperties(Func<string, VariableBasedBuilderViewModel, Task> fileLoadAction, string fileFilter)

```

### Parameters

`fileLoadAction` [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<[string](https://learn.microsoft.com/dotnet/api/system.string), [VariableBasedBuilderViewModel](Phoenix.ComponentPlugInSDK.ViewModels.VariableBasedBuilderViewModel.md), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

Action to invoke to load the file.

`fileFilter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file filter to use in the OpenFileDialog.
