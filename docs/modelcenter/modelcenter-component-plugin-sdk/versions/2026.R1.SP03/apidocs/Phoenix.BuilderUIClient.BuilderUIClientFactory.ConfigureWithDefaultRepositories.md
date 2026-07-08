# Method ConfigureWithDefaultRepositories

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])

```csharp
public static void ConfigureWithDefaultRepositories(IServiceCollection serviceCollection, Assembly callingAssembly, params string[] additionalFolders)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`callingAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`additionalFolders` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

## ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection, Assembly, params string[])

```csharp
public static void ConfigureWithDefaultRepositories<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection serviceCollection, Assembly callingAssembly, params string[] additionalFolders) where HarnessRunnerClientType : class where HarnessRunnerClientImpl : class, HarnessRunnerClientType where HarnessBuilderUIClientType : class where HarnessBuilderUIClientImpl : class, HarnessBuilderUIClientType

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`callingAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`additionalFolders` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

### Type Parameters

`HarnessRunnerClientType`

`HarnessRunnerClientImpl`

`HarnessBuilderUIClientType`

`HarnessBuilderUIClientImpl`
