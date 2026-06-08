# Constructor ScriptEditorViewModel

Namespace: [Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## ScriptEditorViewModel(ScriptModel, string, ILogger, Func<ScriptModel, Task>, Action, Action<Exception>, Uri)

Constructor.

```csharp
public ScriptEditorViewModel(ScriptModel model, string componentName, ILogger logger, Func<ScriptModel, Task> saveAsync, Action closeViewAction, Action<Exception> showErrorAction, Uri icon = null)

```

### Parameters

`model` [ScriptModel](Phoenix.ComponentPlugInSDK.Models.ScriptModel.md)

The model representing the script.

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component to use in the View.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

The logger to use.

`saveAsync` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[ScriptModel](Phoenix.ComponentPlugInSDK.Models.ScriptModel.md), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

An Async Function to invoke to perform a save operaion.

`closeViewAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

An action that closes the window.

`showErrorAction` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)>

An action that displays error information to the user.

`icon` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The optional URI of the icon to use in the view. If null or not specified, the default Windows icon will be used.
