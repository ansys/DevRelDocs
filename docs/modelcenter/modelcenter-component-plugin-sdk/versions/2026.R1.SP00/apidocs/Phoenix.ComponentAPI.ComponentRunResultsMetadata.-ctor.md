# Constructor ComponentRunResultsMetadata

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## ComponentRunResultsMetadata(RunStatus, Exception)

Constructor

```csharp
public ComponentRunResultsMetadata(RunStatus status, Exception error)

```

### Parameters

`status` [RunStatus](Phoenix.ComponentAPI.RunStatus.md)

The status of this run. The status must be valid for a result,
according to `Phoenix.ComponentAPI.ComponentRunResultsMetadata.IsValidStatus(Phoenix.ComponentAPI.RunStatus)`.

`error` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If status is Error, this should be an exception describing the error. Otherwise
it should contain null.

### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

If `status` is not valid for a result.
