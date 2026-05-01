# Interface ISaveableWindow

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Windows that implement this interface allow us to programatically
ask for the window to notify the user to save

```csharp
public interface ISaveableWindow

```

## Methods

[TrySaveAsync()](Phoenix.ComponentPlugInSDK.Views.ISaveableWindow.TrySaveAsync.md#Phoenix_ComponentPlugInSDK_Views_ISaveableWindow_TrySaveAsync)

Request that window be saved. If there are no unsaved changes, this function
can simply do nothing and return true. If there are unsaved changes, the user
should be presented with Yes/No/Cancel options.
