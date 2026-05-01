# Property FilesToCopy

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## FilesToCopy

A list of relative paths of files to import into the pacz.
Combining these with `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopyBaseDir` should yield the full paths to the actual files to copy.
No relative paths in this list should traverse up a directory.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`.
Otherwise, it may be null, and should be ignored.

```csharp
public IEnumerable<string> FilesToCopy { get; }

```

### Property Value

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
