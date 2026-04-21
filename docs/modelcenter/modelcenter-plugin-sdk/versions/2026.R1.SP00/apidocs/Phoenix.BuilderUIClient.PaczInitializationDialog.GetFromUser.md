# Method GetFromUser

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## GetFromUser(DelegateCommandAsync)

Convenience function to instantiate the dialog, call `System.Windows.Window.ShowDialog` on it and return the result.

```csharp
public static UserFriendlyBuilderSessionInitialization.InitializationOption? GetFromUser(DelegateCommandAsync showHelp = null)

```

### Parameters

`showHelp` DelegateCommandAsync

### Returns

[UserFriendlyBuilderSessionInitialization](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.md).[InitializationOption](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.md)?

The chosen option.
