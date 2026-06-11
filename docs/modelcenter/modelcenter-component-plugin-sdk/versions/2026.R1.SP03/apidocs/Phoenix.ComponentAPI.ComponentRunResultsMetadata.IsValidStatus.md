# Method IsValidStatus

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## IsValidStatus(RunStatus)

Given a status, check if it is a valid status for a component run result.
The valid statuses are those that indicate that the run is complete -
`Phoenix.ComponentAPI.RunStatus.SUCCESS`, `Phoenix.ComponentAPI.RunStatus.FAILED`, `Phoenix.ComponentAPI.RunStatus.CANCELED`.

```csharp
public static bool IsValidStatus(RunStatus candidate)

```

### Parameters

`candidate` [RunStatus](Phoenix.ComponentAPI.RunStatus.md)

The candidate status.

### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if the status is valid for a component run result, false otherwise.
