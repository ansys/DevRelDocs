# Constructor SchemaCompatibilityException

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## SchemaCompatibilityException()

Construct a new `Phoenix.Pacz.SchemaCompatibilityException`.
A default exception message will be supplied.

```csharp
public SchemaCompatibilityException()

```

## SchemaCompatibilityException(string)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified message.

```csharp
public SchemaCompatibilityException(string message)

```

### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message that will become the value of `System.Exception.Message`.

## SchemaCompatibilityException(Exception)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified inner exception.
A default exception message will be supplied.

```csharp
public SchemaCompatibilityException(Exception inner)

```

### Parameters

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The `System.Exception` that will become the value of `System.Exception.InnerException`

## SchemaCompatibilityException(string, Exception)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified inner exception and message.

```csharp
public SchemaCompatibilityException(string message, Exception inner)

```

### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message that will become the value of `System.Exception.Message`.

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The `System.Exception` that will become the value of `System.Exception.InnerException`
