# Constructor UserFriendlyBuilderSessionInitialization

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## UserFriendlyBuilderSessionInitialization(InitializationOption, IEnumerable<string>, string, string, bool, string, string)

Protected constructor. Calling code should use `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.PromptUser(System.String,System.String,Phoenix.DotNetUtils.DelegateCommandAsync)` to display the wizard.

```csharp
protected UserFriendlyBuilderSessionInitialization(UserFriendlyBuilderSessionInitialization.InitializationOption mode, IEnumerable<string> filesToCopy, string filesToCopyBaseDir, string folderToConvert, bool shouldSaveExpanded, string desiredSaveLocation, string selectedName)

```

### Parameters

`mode` [UserFriendlyBuilderSessionInitialization](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.md).[InitializationOption](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.md)

The initialization mode.

`filesToCopy` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

The relative paths of files to copy.
Set to null unless `mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`

`filesToCopyBaseDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The base directory to find the actual source files in `filesToCopy`.
Set to null unless `mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`

`folderToConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

The folder to convert to a Pacz.
Set to null unless `folderToConvert` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.CONVERT_DIRECTORY`

`shouldSaveExpanded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if the pacz should be saved as expanded, false if it should be saved compressed.

`desiredSaveLocation` [string](https://learn.microsoft.com/dotnet/api/system.string)

The location where the Pacz should be saved.

`selectedName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The user's selected display name for the Pacz.
