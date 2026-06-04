# Class PlugInManagerFactory

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

Entrypoint for configuring Microsoft Dependency Injection to create instances
of `Phoenix.PlugIns.IPlugInManager`. See the `Phoenix.PlugIns` documentation for example
code.

```csharp
public class PlugInManagerFactory

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PlugInManagerFactory](Phoenix.PlugIns.PlugInManagerFactory.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

[ConfigureServiceCollection(IServiceCollection)](Phoenix.PlugIns.PlugInManagerFactory.ConfigureServiceCollection.md#Phoenix_PlugIns_PlugInManagerFactory_ConfigureServiceCollection_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

Configures a service collection to correctly load an IPlugInManager. Most users
will prefer to use ConfigureWithDefaultRepositories(IServiceCollection, Assembly)
which also configures the default repositories that the PlugInManager will use. Use of
ConfigureServiceCollection means the consumer will need to configure dependency injection with
an appropriate IPlugInRepository.

[ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])](Phoenix.PlugIns.PlugInManagerFactory.ConfigureWithDefaultRepositories.md#Phoenix_PlugIns_PlugInManagerFactory_ConfigureWithDefaultRepositories_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Reflection_Assembly_System_String___)

Configures a service collection to correctly load an IPlugInManager, using the
default locations for locating plug-ins. The default locations in descending order
of priority are:

- %APPDATA%\Phoenix Integration\Plug-Ins
- %PROGRAMDATA%\Phoenix Integration\Plug-Ins
- [AssemblyLocation]\Plug-Ins
