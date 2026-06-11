# Method _promptUserToSaveLocalEdit

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## _promptUserToSaveLocalEdit()

Show a dialog asking the user if they want to save the current changes or cancel the future operation.

```csharp
protected virtual MessageBoxResult _promptUserToSaveLocalEdit()

```

### Returns

[MessageBoxResult](https://learn.microsoft.com/dotnet/api/system.windows.messageboxresult)

Yes if saving should continue, No if changes should be discarded, cancel if it should be cancelled.
