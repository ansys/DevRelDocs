# Constructor VariableBasedBuilderViewModel

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## VariableBasedBuilderViewModel(VariableBasedBuilderModel, ILogger, string, Func<VariableBasedBuilderModel, Task>, Func<string, VariableBasedBuilderViewModel, Task>, Action, Action<Exception>, Uri)

Constructor.

```csharp
public VariableBasedBuilderViewModel(VariableBasedBuilderModel model, ILogger logger, string componentName, Func<VariableBasedBuilderModel, Task> saveAsync, Func<string, VariableBasedBuilderViewModel, Task> openFileAction, Action closeViewAction, Action<Exception> showErrorAction, Uri icon = null)

```

### Parameters

`model` [VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md)

The model representing the variableBasedBuilder.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

The logger to use.

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component to use in the View.

`saveAsync` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

An Async Function to invoke to perform a save operaion.

`openFileAction` [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<[string](https://learn.microsoft.com/dotnet/api/system.string), [VariableBasedBuilderViewModel](Phoenix.ComponentPlugInSDK.ViewModels.VariableBasedBuilderViewModel.md), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

A Function to invoke for the builder to open a file.

`closeViewAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

An action that closes the window.

`showErrorAction` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)>

An action that displays error information to the user.

`icon` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The optional URI of the icon to use in the view. If null or not specified, the default Windows icon will be used.
