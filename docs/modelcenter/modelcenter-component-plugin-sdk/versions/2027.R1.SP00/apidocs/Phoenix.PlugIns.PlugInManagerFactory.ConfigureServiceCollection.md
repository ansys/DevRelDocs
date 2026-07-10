# Method ConfigureServiceCollection

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## ConfigureServiceCollection(IServiceCollection)

Configures a service collection to correctly load an IPlugInManager. Most users
will prefer to use ConfigureWithDefaultRepositories(IServiceCollection, Assembly)
which also configures the default repositories that the PlugInManager will use. Use of
ConfigureServiceCollection means the consumer will need to configure dependency injection with
an appropriate IPlugInRepository.

```csharp
public static void ConfigureServiceCollection(IServiceCollection serviceCollection)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to configure
