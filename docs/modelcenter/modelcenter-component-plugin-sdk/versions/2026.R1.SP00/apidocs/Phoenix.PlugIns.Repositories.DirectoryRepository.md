# Class DirectoryRepository

Namespace: [Phoenix.PlugIns.Repositories](Phoenix.PlugIns.Repositories.md)  
Assembly: Phoenix.PlugIns.dll

A repository backed by a directory on the local computer.

```csharp
public class DirectoryRepository : IPlugInRepository, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DirectoryRepository](Phoenix.PlugIns.Repositories.DirectoryRepository.md)

#### Implements

[IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[DirectoryRepository(string, IServiceProvider, ILogger<DirectoryRepository>)](Phoenix.PlugIns.Repositories.DirectoryRepository.-ctor.md#Phoenix_PlugIns_Repositories_DirectoryRepository__ctor_System_String_System_IServiceProvider_Microsoft_Extensions_Logging_ILogger_Phoenix_PlugIns_Repositories_DirectoryRepository__)

Constructor

## Methods

[Dispose(bool)](Phoenix.PlugIns.Repositories.DirectoryRepository.Dispose.md#Phoenix_PlugIns_Repositories_DirectoryRepository_Dispose_System_Boolean_)

[Dispose()](Phoenix.PlugIns.Repositories.DirectoryRepository.Dispose.md#Phoenix_PlugIns_Repositories_DirectoryRepository_Dispose)

[GetChildrenAsync()](Phoenix.PlugIns.Repositories.DirectoryRepository.GetChildrenAsync.md#Phoenix_PlugIns_Repositories_DirectoryRepository_GetChildrenAsync)

Get children repositories of this repository.

[GetPlugInsAsync()](Phoenix.PlugIns.Repositories.DirectoryRepository.GetPlugInsAsync.md#Phoenix_PlugIns_Repositories_DirectoryRepository_GetPlugInsAsync)

Gets all plug-ins found directly in this level of the repository
