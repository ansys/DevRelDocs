# Method GetChildrenAsync

Namespace: [Phoenix.PlugIns.Repositories](Phoenix.PlugIns.Repositories.md)  
Assembly: Phoenix.PlugIns.dll

## GetChildrenAsync()

Get children repositories of this repository.

```csharp
public Task<IReadOnlyDictionary<string, IPlugInRepository>> GetChildrenAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md)>>

A task that when complete will contain a map of child name to child repository
