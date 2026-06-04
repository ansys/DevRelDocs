# Method ConfigureWithDefaultRepositories

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

## ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])

```csharp
public static void ConfigureWithDefaultRepositories(IServiceCollection serviceCollection, Assembly callingAssembly, params string[] additionalFolders)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`callingAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`additionalFolders` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

## ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl>(IServiceCollection, Assembly, params string[])

Configure Microsoft's Dependency Injection with the appropriate providers to instantiate IHarnessRunnerClient instances
and backs it with the default repositories as defined in
`Phoenix.PlugIns.PlugInManagerFactory.ConfigureWithDefaultRepositories(Microsoft.Extensions.DependencyInjection.IServiceCollection,System.Reflection.Assembly,System.String[])`

This method is intended to be a way for other `Phoenix.ComponentAPI.IHarnessRunnerClient` instances
to register themselves while sharing the same code as the default implementations.

```csharp
public static void ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl>(IServiceCollection serviceCollection, Assembly callingAssembly, params string[] additionalFolders) where HarnessRunnerClientType : class where HarnessRunnerClientImpl : class, HarnessRunnerClientType

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`callingAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`additionalFolders` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

### Type Parameters

`HarnessRunnerClientType`

The type for which `HarnessRunnerClientType`
should be considered an implementation. This allows different `Phoenix.ComponentAPI.IHarnessRunnerClient` implementations
to be registered in DI using different marker interfaces.

`HarnessRunnerClientImpl`

The type of harness runner client to provide.
