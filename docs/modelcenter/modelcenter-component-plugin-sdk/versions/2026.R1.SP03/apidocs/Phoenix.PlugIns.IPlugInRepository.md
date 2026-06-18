# Interface IPlugInRepository

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

A recursive structure that represents a repository of plug-ins. Used by
IPlugInManager to collate an index.

```csharp
public interface IPlugInRepository : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Methods

[GetChildrenAsync()](Phoenix.PlugIns.IPlugInRepository.GetChildrenAsync.md#Phoenix_PlugIns_IPlugInRepository_GetChildrenAsync)

Get children repositories of this repository.

[GetPlugInsAsync()](Phoenix.PlugIns.IPlugInRepository.GetPlugInsAsync.md#Phoenix_PlugIns_IPlugInRepository_GetPlugInsAsync)

Gets all plug-ins found directly in this level of the repository
