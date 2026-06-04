# Class CombiningRepository

Namespace: [Phoenix.PlugIns.Repositories](Phoenix.PlugIns.Repositories.md)  
Assembly: Phoenix.PlugIns.dll

This IPlugInRepository combines multiple inner repositories, making them appear
as if they are intersected together. Sub-repositories are combined. If a repository
contains conflicting plug-ins, a warning is logged and one is chosen randomly.

```csharp
public class CombiningRepository : IPlugInRepository, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CombiningRepository](Phoenix.PlugIns.Repositories.CombiningRepository.md)

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

[CombiningRepository(IEnumerable<IPlugInRepository>, ILogger<CombiningRepository>)](Phoenix.PlugIns.Repositories.CombiningRepository.-ctor.md#Phoenix_PlugIns_Repositories_CombiningRepository__ctor_System_Collections_Generic_IEnumerable_Phoenix_PlugIns_IPlugInRepository__Microsoft_Extensions_Logging_ILogger_Phoenix_PlugIns_Repositories_CombiningRepository__)

Constructor

## Methods

[Dispose(bool)](Phoenix.PlugIns.Repositories.CombiningRepository.Dispose.md#Phoenix_PlugIns_Repositories_CombiningRepository_Dispose_System_Boolean_)

[Dispose()](Phoenix.PlugIns.Repositories.CombiningRepository.Dispose.md#Phoenix_PlugIns_Repositories_CombiningRepository_Dispose)

[GetChildrenAsync()](Phoenix.PlugIns.Repositories.CombiningRepository.GetChildrenAsync.md#Phoenix_PlugIns_Repositories_CombiningRepository_GetChildrenAsync)

Get children repositories of this repository.

[GetPlugInsAsync()](Phoenix.PlugIns.Repositories.CombiningRepository.GetPlugInsAsync.md#Phoenix_PlugIns_Repositories_CombiningRepository_GetPlugInsAsync)

Gets all plug-ins found directly in this level of the repository
