# Method SetupView

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SetupView(IExtractedPacz, ScriptEditorViewModel, Menu)

Called before the mainWindow is shown.
This is where the view should be initialized. And Builder options loaded from the Pacz.
Allows setup and customization of the mainMenu for windows that have them.
This should be called by CreateWindow to allow derived classes to customize the menu.

```csharp
protected virtual bool SetupView(IExtractedPacz pacz, ScriptEditorViewModel viewModel, Menu mainMenu)

```

### Parameters

`pacz` IExtractedPacz

The Pacz to load from.

`viewModel` [ScriptEditorViewModel](Phoenix.ComponentPlugInSDK.ViewModels.ScriptEditorViewModel.md)

The viewModel that allows interaction with the view.

`mainMenu` [Menu](https://learn.microsoft.com/dotnet/api/system.windows.controls.menu)

The MainMenu to be customized.

### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if the mainMenu should be made visible.
