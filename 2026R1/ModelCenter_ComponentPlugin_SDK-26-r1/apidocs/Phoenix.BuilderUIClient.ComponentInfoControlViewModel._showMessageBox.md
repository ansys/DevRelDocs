# Method _showMessageBox

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## _showMessageBox(string, string, MessageBoxButton, MessageBoxImage)

Shows a `System.Windows.MessageBox` to the user. Broken out to allow overriding for testing.

```csharp
protected virtual MessageBoxResult _showMessageBox(string text, string caption, MessageBoxButton button, MessageBoxImage icon)

```

### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message box text.

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message box caption.

`button` [MessageBoxButton](https://learn.microsoft.com/dotnet/api/system.windows.messageboxbutton)

The message box button type.

`icon` [MessageBoxImage](https://learn.microsoft.com/dotnet/api/system.windows.messageboximage)

The message box button type.

### Returns

[MessageBoxResult](https://learn.microsoft.com/dotnet/api/system.windows.messageboxresult)

The message box result selected by the user.
