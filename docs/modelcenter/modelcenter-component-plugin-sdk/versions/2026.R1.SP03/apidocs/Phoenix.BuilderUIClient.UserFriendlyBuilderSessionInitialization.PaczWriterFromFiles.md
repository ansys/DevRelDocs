# Method PaczWriterFromFiles

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## PaczWriterFromFiles(IEnumerable<string>, string, Guid, IPaczClient)

Create a new IPaczWriter by importing a list of files.

```csharp
public static Task<IPaczWriter> PaczWriterFromFiles(IEnumerable<string> fileRelativePaths, string baseDir, Guid plugInId, IPaczClient paczClient)

```

### Parameters

`fileRelativePaths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

The paths of the files to copy.
These should be actual files relative to baseDir.
No paths in this should attempt to traverse up a directory.

`baseDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The base directory for `fileRelativePaths`

`plugInId` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The plug-in ID to set in the new component configuration.

`paczClient` IPaczClient

The Pacz client to use when creating the new Pacz.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IPaczWriter>

A new IPaczWriter with the specified files listed as instance files.
The IPaczWriter will not have a source location (will not actually be saved).

### Exceptions

[InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

If any of the files in `fileRelativePaths` attempt to traverse up a directory.
