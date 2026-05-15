# Field TIMEOUT

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## TIMEOUT

How long to let the component run before canceling the run, in ISO-8601 duration format
(PnDTnHnMn.nS). Examples:

- "PT20.345S" – parses as "20.345 seconds"
- "PT15M" – parses as "15 minutes" (where a minute is 60 seconds)

The value is optional. If the value is present and non-empty, but <=0 or not a valid
ISO-8601 duration it is an error.

```csharp
public const string TIMEOUT = "phx:timeout"

```

### Field Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
