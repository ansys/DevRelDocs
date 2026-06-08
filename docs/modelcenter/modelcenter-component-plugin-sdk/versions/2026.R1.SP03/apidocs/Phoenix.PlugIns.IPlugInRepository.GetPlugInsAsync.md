# Method GetPlugInsAsync

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## GetPlugInsAsync()

Gets all plug-ins found directly in this level of the repository

```csharp
Task<IReadOnlyList<IPlugInInstance>> GetPlugInsAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[IPlugInInstance](Phoenix.PlugIns.IPlugInInstance.md)>>

A task that when complete will contain a list of `Phoenix.PlugIns.IPlugInInstance` objects
