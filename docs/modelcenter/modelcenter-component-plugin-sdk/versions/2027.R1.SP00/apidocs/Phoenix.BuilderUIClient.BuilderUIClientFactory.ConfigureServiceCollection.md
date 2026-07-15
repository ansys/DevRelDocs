# Method ConfigureServiceCollection

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ConfigureServiceCollection(IServiceCollection)

```csharp
public static void ConfigureServiceCollection(IServiceCollection serviceCollection)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

## ConfigureServiceCollection<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection)

```csharp
public static void ConfigureServiceCollection<HarnessRunnerClientType, HarnessRunnerClientImpl, HarnessBuilderUIClientType, HarnessBuilderUIClientImpl>(IServiceCollection serviceCollection) where HarnessRunnerClientType : class where HarnessRunnerClientImpl : class, HarnessRunnerClientType where HarnessBuilderUIClientType : class where HarnessBuilderUIClientImpl : class, HarnessBuilderUIClientType

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

### Type Parameters

`HarnessRunnerClientType`

`HarnessRunnerClientImpl`

`HarnessBuilderUIClientType`

`HarnessBuilderUIClientImpl`
