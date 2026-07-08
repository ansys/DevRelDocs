# Method GetLocalFolder

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## GetLocalFolder()

Returns a folder on the local drive that can be passed to PlugInInfo's
instantiation functions to actually instantiate the component. This may be
a cached folder if the repository it comes from is remote. It is guaranteed
to exist at least until the repository is disposed and will contain the
metadata.phxplugin file.

```csharp
Task<string> GetLocalFolder()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

A task that returns a local folder with the plug-in files
