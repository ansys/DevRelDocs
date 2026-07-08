# Class ClientFactory

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

Static entry points for instantiating Harness Runner Clients.

These static methods are thread safe.

```csharp
public static class ClientFactory

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ClientFactory](Phoenix.ComponentClient.ClientFactory.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

[ConfigureServiceCollection(IServiceCollection)](Phoenix.ComponentClient.ClientFactory.ConfigureServiceCollection.md#Phoenix_ComponentClient_ClientFactory_ConfigureServiceCollection_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

[ConfigureServiceCollection<HarnessRunnerClientType, HarnessRunnerClientImpl>(IServiceCollection)](Phoenix.ComponentClient.ClientFactory.ConfigureServiceCollection.md#Phoenix_ComponentClient_ClientFactory_ConfigureServiceCollection__2_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

[ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])](Phoenix.ComponentClient.ClientFactory.ConfigureWithDefaultRepositories.md#Phoenix_ComponentClient_ClientFactory_ConfigureWithDefaultRepositories_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Reflection_Assembly_System_String___)

[ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl>(IServiceCollection, Assembly, params string[])](Phoenix.ComponentClient.ClientFactory.ConfigureWithDefaultRepositories.md#Phoenix_ComponentClient_ClientFactory_ConfigureWithDefaultRepositories__2_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Reflection_Assembly_System_String___)

Configure Microsoft's Dependency Injection with the appropriate providers to instantiate IHarnessRunnerClient instances
and backs it with the default repositories as defined in
`Phoenix.PlugIns.PlugInManagerFactory.ConfigureWithDefaultRepositories(Microsoft.Extensions.DependencyInjection.IServiceCollection,System.Reflection.Assembly,System.String[])`

This method is intended to be a way for other `Phoenix.ComponentAPI.IHarnessRunnerClient` instances
to register themselves while sharing the same code as the default implementations.

[GetClient()](Phoenix.ComponentClient.ClientFactory.GetClient.md#Phoenix_ComponentClient_ClientFactory_GetClient)

Retrieve a new instance of IHarnessRunnerClient. It will be pre-initialized and ready
to do work. If you use this method, you do not need to call ConfigureServiceCollection or
ConfigureWithDefaultRepositories.
