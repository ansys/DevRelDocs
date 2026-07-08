# Method ConfigureServiceCollection

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

## ConfigureServiceCollection(IServiceCollection)

Sets up the IServiceCollection with a singleton instance of this class that will
be cleaned up when the IServiceProvider is Disposed. Note, after using this function
you still need to cause the lazy load to happen by calling
serviceProvider.GetRequiredService<OnFileDeleteFailureLogger>().

```csharp
public static void ConfigureServiceCollection(IServiceCollection serviceCollection)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to configure

### Remarks

In order to not add depenency injection dependencies to Phoenix.DotNetUtils,
`Phoenix.DotNetUtils.FileDeleter.OnFileDeleteFailure` is static. If you have a single application
with multiple IServiceProviders in it, all event handlers will be called for all providers for
all delete failures.
