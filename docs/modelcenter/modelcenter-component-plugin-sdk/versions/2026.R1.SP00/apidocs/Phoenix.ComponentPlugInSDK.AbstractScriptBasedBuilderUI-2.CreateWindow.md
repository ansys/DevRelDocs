# Method CreateWindow

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## CreateWindow()

Creates the Main Window of the Builder UI. It is recommended that all implementations return
a Window that implements `Phoenix.ComponentPlugInSDK.Views.ISaveableWindow`. If the window does not, then requests
from the OEM to save the UI via `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.TrySaveAsync` will silently
return true.

```csharp
protected override Window CreateWindow()

```

### Returns

[Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

The main window.
