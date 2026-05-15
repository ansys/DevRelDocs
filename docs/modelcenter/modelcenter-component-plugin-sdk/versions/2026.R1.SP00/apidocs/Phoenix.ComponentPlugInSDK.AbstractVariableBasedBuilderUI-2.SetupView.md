# Method SetupView

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetupView(IExtractedPacz, VariableBasedBuilderViewModel, Menu)

Called before the mainWindow is shown.
This is where the view should be initialized. And Builder options loaded from the Pacz.
Allows setup and customization of the mainMenu for windows that have them.
This should be called by CreateWindow to allow derived classes to customize the menu.
The mainMenu is visible by default, and already has an apply button that saves the builder.

```csharp
protected virtual void SetupView(IExtractedPacz pacz, VariableBasedBuilderViewModel viewModel, Menu mainMenu)

```

### Parameters

`pacz` IExtractedPacz

The Pacz to load from.

`viewModel` [VariableBasedBuilderViewModel](Phoenix.ComponentPlugInSDK.ViewModels.VariableBasedBuilderViewModel.md)

The viewModel that allows interaction with the view.

`mainMenu` [Menu](https://learn.microsoft.com/dotnet/api/system.windows.controls.menu)

The MainMenu to be customized.
