# Method RequireValidStatus

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## RequireValidStatus(RunStatus, string)

Given a run status, check if it is a valid status for a run result.
If it is valid, return the provided status.
Otherwise, throw an `System.ArgumentOutOfRangeException`.

```csharp
public static RunStatus RequireValidStatus(RunStatus candidate, string paramName)

```

### Parameters

`candidate` [RunStatus](Phoenix.ComponentAPI.RunStatus.md)

The candidate status.

`paramName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the variable containing the status.

### Returns

[RunStatus](Phoenix.ComponentAPI.RunStatus.md)

The value of `candidate` if the status is valid.
