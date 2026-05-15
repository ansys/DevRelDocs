# Method PaczWriterFromDirectory

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## PaczWriterFromDirectory(string, Guid, IPaczClient)

Create a new IPaczWriter by converting an existing directory.

```csharp
public static Task<IPaczWriter> PaczWriterFromDirectory(string targetFolder, Guid plugInId, IPaczClient paczClient)

```

### Parameters

`targetFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target folder to convert.
This will become the source directory for the new IPaczWriter.
All the files in it will be listed as instance files.

`plugInId` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The plug-in ID to set in the new component config.

`paczClient` IPaczClient

The pacz client to use when creating the pacz.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IPaczWriter>

A new IPaczWriter with a configuration containing the target ID and existing files in the folder
as instance files.
