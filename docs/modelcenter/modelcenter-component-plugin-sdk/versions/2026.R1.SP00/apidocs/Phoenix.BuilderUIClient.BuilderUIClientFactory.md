# Class BuilderUIClientFactory

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

```csharp
public static class BuilderUIClientFactory

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BuilderUIClientFactory](Phoenix.BuilderUIClient.BuilderUIClientFactory.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

[ConfigureServiceCollection(IServiceCollection)](Phoenix.BuilderUIClient.BuilderUIClientFactory.ConfigureServiceCollection.md#Phoenix_BuilderUIClient_BuilderUIClientFactory_ConfigureServiceCollection_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

[ConfigureServiceCollection<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection)](Phoenix.BuilderUIClient.BuilderUIClientFactory.ConfigureServiceCollection.md#Phoenix_BuilderUIClient_BuilderUIClientFactory_ConfigureServiceCollection__4_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

[ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])](Phoenix.BuilderUIClient.BuilderUIClientFactory.ConfigureWithDefaultRepositories.md#Phoenix_BuilderUIClient_BuilderUIClientFactory_ConfigureWithDefaultRepositories_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Reflection_Assembly_System_String___)

[ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection, Assembly, params string[])](Phoenix.BuilderUIClient.BuilderUIClientFactory.ConfigureWithDefaultRepositories.md#Phoenix_BuilderUIClient_BuilderUIClientFactory_ConfigureWithDefaultRepositories__4_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Reflection_Assembly_System_String___)

[GetClient()](Phoenix.BuilderUIClient.BuilderUIClientFactory.GetClient.md#Phoenix_BuilderUIClient_BuilderUIClientFactory_GetClient)

Retrieve a new instance of IHarnessBuilderUIClient. It will be pre-initialized and ready
to do work. If you use this method, you do not need to call ConfigureServiceCollection or
ConfigureWithDefaultRepositories.
