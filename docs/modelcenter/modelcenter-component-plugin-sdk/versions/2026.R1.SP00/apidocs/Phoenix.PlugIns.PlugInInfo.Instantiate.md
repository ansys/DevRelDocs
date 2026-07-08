# Method Instantiate<T>

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## Instantiate<T>(IServiceProvider, string)

Instantiates a new instance of the plug-in

```csharp
public T Instantiate<T>(IServiceProvider serviceProvider, string relativeDir)

```

### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The system service provider for dependency injection

`relativeDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The directory that this metadata was read from

### Returns

T

A new instance of type T

### Type Parameters

`T`

The interface type for the plug-in
