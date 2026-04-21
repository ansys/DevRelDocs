# Constructor CombiningRepository

Namespace: [Phoenix.PlugIns.Repositories](Phoenix.PlugIns.Repositories.md)  
Assembly: Phoenix.PlugIns.dll

## CombiningRepository(IEnumerable<IPlugInRepository>, ILogger<CombiningRepository>)

Constructor

```csharp
public CombiningRepository(IEnumerable<IPlugInRepository> repos, ILogger<CombiningRepository> logger)

```

### Parameters

`repos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md)>

The inner repositories to combine. This repository takes ownership of the wrapped repositories and
will dispose them when it is disposed.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger-1)<[CombiningRepository](Phoenix.PlugIns.Repositories.CombiningRepository.md)>

A logger for errors and warnings
