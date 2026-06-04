# Property FolderToConvert

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## FolderToConvert

The folder to convert to a Pacz.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.CONVERT_DIRECTORY`.
Otherwise, it may be null, and should be ignored.

```csharp
public string FolderToConvert { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
