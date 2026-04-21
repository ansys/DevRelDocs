# Method ConfigureServiceCollection

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## ConfigureServiceCollection(IServiceCollection)

In order to use this library, you must configure Microsoft Dependency
Injection with a provider for ILogger<>, and call this method during
app configuration.

```csharp
public static void ConfigureServiceCollection(IServiceCollection serviceCollection)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The IServiceCollection to setup
