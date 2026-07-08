# Namespace Phoenix.ComponentClient

### Namespaces

[Phoenix.ComponentClient.Impl](Phoenix.ComponentClient.Impl.md)

### Classes

[ClientFactory](Phoenix.ComponentClient.ClientFactory.md)

Static entry points for instantiating Harness Runner Clients.

These static methods are thread safe.

[OnFileDeleteFailureLogger](Phoenix.ComponentClient.OnFileDeleteFailureLogger.md)

This class sets up a static handler for `Phoenix.DotNetUtils.FileDeleter.OnFileDeleteFailure`
that prevents the exceptions from being thrown back to the application and instead
logs to a standard Microsoft.Extensions.Logging logger. It will remove itself as a handler
on dispose.
