# Class PaczFactory

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

The factory class for the Pacz library that can be used to
configure dependency injection.

```csharp
public static class PaczFactory

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PaczFactory](Phoenix.Pacz.PaczFactory.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

[LEGAL_PACJ_FILENAME](Phoenix.Pacz.PaczFactory.LEGAL_PACJ_FILENAME.md#Phoenix_Pacz_PaczFactory_LEGAL_PACJ_FILENAME)

Default .pacz configuration file name

[PACZ_SCHEMA_VERSION_MAJOR](Phoenix.Pacz.PaczFactory.PACZ_SCHEMA_VERSION_MAJOR.md#Phoenix_Pacz_PaczFactory_PACZ_SCHEMA_VERSION_MAJOR)

The major version of the .pacz schema that can be loaded.

[PACZ_SCHEMA_VERSION_MINOR](Phoenix.Pacz.PaczFactory.PACZ_SCHEMA_VERSION_MINOR.md#Phoenix_Pacz_PaczFactory_PACZ_SCHEMA_VERSION_MINOR)

The minor version of the .pacz schema that can be loaded.

## Methods

[ConfigureServiceCollection(IServiceCollection)](Phoenix.Pacz.PaczFactory.ConfigureServiceCollection.md#Phoenix_Pacz_PaczFactory_ConfigureServiceCollection_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

In order to use this library, you must configure Microsoft Dependency
Injection with a provider for ILogger<>, and call this method during
app configuration.
