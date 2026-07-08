# Constructor VariableBasedBuilderView

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## VariableBasedBuilderView(VariableBasedBuilderModel, string, VariableTreeProperties, FileLoadProperties, ILogger, Func<VariableBasedBuilderModel, Task>, Uri)

Constructor, creates a new instance of the view

```csharp
public VariableBasedBuilderView(VariableBasedBuilderModel model, string componentName, VariableTreeProperties treeProperties, FileLoadProperties fileLoadProperties, ILogger logger, Func<VariableBasedBuilderModel, Task> saveAsync, Uri icon = null)

```

### Parameters

`model` [VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md)

The model representing the variableBasedBuilder.

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component to use in the View.

`treeProperties` [VariableTreeProperties](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.md)

Properties that define the tree control behavior.

`fileLoadProperties` [FileLoadProperties](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.md)

Definition of how file load should work

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

The Logger to use

`saveAsync` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

An Async Function to invoke to perform a save operaion.

`icon` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The optional URI of the icon to use in the view. If null or not specified, the default Windows icon will be used.
