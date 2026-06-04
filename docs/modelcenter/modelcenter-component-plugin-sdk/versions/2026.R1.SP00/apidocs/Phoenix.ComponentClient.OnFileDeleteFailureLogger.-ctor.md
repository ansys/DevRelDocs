# Constructor OnFileDeleteFailureLogger

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

## OnFileDeleteFailureLogger(ILogger<FileDeleter>)

Creates a new instance and sets up `Phoenix.DotNetUtils.FileDeleter.OnFileDeleteFailure`.

```csharp
public OnFileDeleteFailureLogger(ILogger<FileDeleter> logger)

```

### Parameters

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger-1)<FileDeleter>

The logger to log to. Must not be null

### Remarks

Usually you do not directly call this constructor, instead calling
`Phoenix.ComponentClient.OnFileDeleteFailureLogger.ConfigureServiceCollection(Microsoft.Extensions.DependencyInjection.IServiceCollection)`
