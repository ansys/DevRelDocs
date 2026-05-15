# Property _cancelButton

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## _cancelButton

Reference to the derived window's cancel button, if applicable.   
This is checked against where the user clicks in `Phoenix.ComponentPlugInSDK.Views.AbstractPlugInWindow.AbstractPlugInWindow_PreviewMouseDown(System.Object,System.Windows.Input.MouseButtonEventArgs)`   
to allow bypassing the initial form validation if they wish to cancel.

```csharp
protected override Button _cancelButton { get; }

```

### Property Value

[Button](https://learn.microsoft.com/dotnet/api/system.windows.controls.button)
