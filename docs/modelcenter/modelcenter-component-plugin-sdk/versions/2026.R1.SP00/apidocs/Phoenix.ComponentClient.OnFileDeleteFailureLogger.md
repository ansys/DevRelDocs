# Class OnFileDeleteFailureLogger

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

This class sets up a static handler for `Phoenix.DotNetUtils.FileDeleter.OnFileDeleteFailure`
that prevents the exceptions from being thrown back to the application and instead
logs to a standard Microsoft.Extensions.Logging logger. It will remove itself as a handler
on dispose.

```csharp
public class OnFileDeleteFailureLogger : AbstractDisposable, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[OnFileDeleteFailureLogger](Phoenix.ComponentClient.OnFileDeleteFailureLogger.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

`Phoenix.ComponentClient.OnFileDeleteFailureLogger.ConfigureServiceCollection(Microsoft.Extensions.DependencyInjection.IServiceCollection)` for a common pattern
of how to set this up in your application.

## Constructors

[OnFileDeleteFailureLogger(ILogger<FileDeleter>)](Phoenix.ComponentClient.OnFileDeleteFailureLogger.-ctor.md#Phoenix_ComponentClient_OnFileDeleteFailureLogger__ctor_Microsoft_Extensions_Logging_ILogger_Phoenix_DotNetUtils_FileDeleter__)

Creates a new instance and sets up `Phoenix.DotNetUtils.FileDeleter.OnFileDeleteFailure`.

## Methods

[ConfigureServiceCollection(IServiceCollection)](Phoenix.ComponentClient.OnFileDeleteFailureLogger.ConfigureServiceCollection.md#Phoenix_ComponentClient_OnFileDeleteFailureLogger_ConfigureServiceCollection_Microsoft_Extensions_DependencyInjection_IServiceCollection_)

Sets up the IServiceCollection with a singleton instance of this class that will
be cleaned up when the IServiceProvider is Disposed. Note, after using this function
you still need to cause the lazy load to happen by calling
serviceProvider.GetRequiredService<OnFileDeleteFailureLogger>().

[Dispose(bool)](Phoenix.ComponentClient.OnFileDeleteFailureLogger.Dispose.md#Phoenix_ComponentClient_OnFileDeleteFailureLogger_Dispose_System_Boolean_)

Standard disposal.
