# Class UserFriendlyBuilderSessionInitialization

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

```csharp
public class UserFriendlyBuilderSessionInitialization

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[UserFriendlyBuilderSessionInitialization](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[UserFriendlyBuilderSessionInitialization(InitializationOption, IEnumerable<string>, string, string, bool, string, string)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.-ctor.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization__ctor_Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_InitializationOption_System_Collections_Generic_IEnumerable_System_String__System_String_System_String_System_Boolean_System_String_System_String_)

Protected constructor. Calling code should use `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.PromptUser(System.String,System.String,Phoenix.DotNetUtils.DelegateCommandAsync)` to display the wizard.

## Properties

[DesiredSaveLocation](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.DesiredSaveLocation.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_DesiredSaveLocation)

The desired save location.

[FilesToCopy](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopy.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_FilesToCopy)

A list of relative paths of files to import into the pacz.
Combining these with `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopyBaseDir` should yield the full paths to the actual files to copy.
No relative paths in this list should traverse up a directory.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`.
Otherwise, it may be null, and should be ignored.

[FilesToCopyBaseDir](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopyBaseDir.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_FilesToCopyBaseDir)

The base directory for `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopy`.
Combining this with `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FilesToCopy` should yield the full paths to the actual files to copy.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.IMPORT_FILES`.
Otherwise, it may be null, and should be ignored.

[FolderToConvert](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.FolderToConvert.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_FolderToConvert)

The folder to convert to a Pacz.
This field is only meaningful if `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode` is `Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.InitializationOption.CONVERT_DIRECTORY`.
Otherwise, it may be null, and should be ignored.

[Mode](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.Mode.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_Mode)

The initialization mode.

[SelectedName](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.SelectedName.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_SelectedName)

The selected name of the pacz.

[ShouldSaveExpanded](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.ShouldSaveExpanded.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_ShouldSaveExpanded)

Whether or not the user requested an expanded Pacz (true for expanded, false for compressed).

## Methods

[BuilderUISessionFromPaczWriter(IHarnessBuilderUIClient, IPaczWriter, IRunnerSessionOptions)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.BuilderUISessionFromPaczWriter.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_BuilderUISessionFromPaczWriter_Phoenix_ComponentAPI_IHarnessBuilderUIClient_Phoenix_PaczAPI_IPaczWriter_Phoenix_ComponentAPI_IRunnerSessionOptions_)

A utility function to create a builder UI session from an existing `Phoenix.PaczAPI.IPaczWriter`.

[CreateSession(UserFriendlyBuilderSessionInitialization, Guid, IHarnessBuilderUIClient, IPaczClient, IRunnerSessionOptions)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.CreateSession.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_CreateSession_Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_System_Guid_Phoenix_ComponentAPI_IHarnessBuilderUIClient_Phoenix_PaczAPI_IPaczClient_Phoenix_ComponentAPI_IRunnerSessionOptions_)

Create a new builder UI session.

[PaczWriterFromDirectory(string, Guid, IPaczClient)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.PaczWriterFromDirectory.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_PaczWriterFromDirectory_System_String_System_Guid_Phoenix_PaczAPI_IPaczClient_)

Create a new IPaczWriter by converting an existing directory.

[PaczWriterFromFiles(IEnumerable<string>, string, Guid, IPaczClient)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.PaczWriterFromFiles.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_PaczWriterFromFiles_System_Collections_Generic_IEnumerable_System_String__System_String_System_Guid_Phoenix_PaczAPI_IPaczClient_)

Create a new IPaczWriter by importing a list of files.

[PromptUser(string, string, DelegateCommandAsync)](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.PromptUser.md#Phoenix_BuilderUIClient_UserFriendlyBuilderSessionInitialization_PromptUser_System_String_System_String_Phoenix_DotNetUtils_DelegateCommandAsync_)
