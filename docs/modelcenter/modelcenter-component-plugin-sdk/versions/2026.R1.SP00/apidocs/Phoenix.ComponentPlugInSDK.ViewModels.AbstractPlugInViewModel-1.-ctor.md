# Constructor AbstractPlugInViewModel

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## AbstractPlugInViewModel(MODEL_TYPE, ILogger, string, Func<MODEL_TYPE, Task>, Action, Action<Exception>, Uri)

Constructor.

```csharp
protected AbstractPlugInViewModel(MODEL_TYPE model, ILogger logger, string componentName, Func<MODEL_TYPE, Task> saveAsync, Action closeViewAction, Action<Exception> showErrorAction, Uri icon)

```

### Parameters

`model` MODEL_TYPE

The model representing the data of the derived viewModel.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

A logger to use

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component to use in the View.

`saveAsync` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<MODEL_TYPE, [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

An Async Function to invoke to perform a save operaion.

`closeViewAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

An action that closes the window.

`showErrorAction` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)>

An action that displays error information to the user.

`icon` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The URI of the icon to use in the view. If null, the default Windows icon will be used.
