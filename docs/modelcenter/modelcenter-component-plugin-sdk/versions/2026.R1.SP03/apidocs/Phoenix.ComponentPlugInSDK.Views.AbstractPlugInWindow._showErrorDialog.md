# Method _showErrorDialog

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## _showErrorDialog(Exception)

Display an error message to the user.

```csharp
[ExcludeFromCodeCoverage]
protected void _showErrorDialog(Exception ex)

```

### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

the exception to display

### Remarks

Must be called from the UI thread, this method does not proxy to UI thread if needed.
