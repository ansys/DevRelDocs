# Property FilesToCopyBaseDir

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## FilesToCopyBaseDir

The base directory for `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopy`.
Combining this with `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopy` should yield the full paths to the actual files to copy.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`.
Otherwise, it may be null, and should be ignored.

```csharp
public string FilesToCopyBaseDir { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
