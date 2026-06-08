# Constructor LicenseException

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## LicenseException()

Construct a new `Phoenix.ComponentAPI.LicenseException`.

```csharp
public LicenseException()

```

## LicenseException(string)

Construct a new `Phoenix.ComponentAPI.LicenseException` with a specified message.

```csharp
public LicenseException(string message)

```

### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message that will become the value of `System.Exception.Message`.

## LicenseException(Exception)

Construct a new `Phoenix.ComponentAPI.LicenseException` with a specified inner exception.
A default exception message will be supplied.

```csharp
public LicenseException(Exception inner)

```

### Parameters

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The `System.Exception` that will become the value of `System.Exception.InnerException`

## LicenseException(string, Exception)

Construct a new `Phoenix.ComponentAPI.LicenseException` with a specified inner exception and message.

```csharp
public LicenseException(string message, Exception inner)

```

### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message that will become the value of `System.Exception.Message`.

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The `System.Exception` that will become the value of `System.Exception.InnerException`
