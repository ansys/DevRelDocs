# Field AVERAGE_RUNTIME

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## AVERAGE_RUNTIME

The amount of time an average run of the PACZ takes to complete, in ISO-8601 duration format
(PnDTnHnMn.nS). Examples:

- "PT20.345S" – parses as "20.345 seconds"
- "PT15M" – parses as "15 minutes" (where a minute is 60 seconds)

If the value is missing, empty, whitespace, <=0, or not a valid ISO-8601 duration it is ignored.

It is optional and used in ModelCenter Cloud to help tune performance.

```csharp
public const string AVERAGE_RUNTIME = "avgRuntime"

```

### Field Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
