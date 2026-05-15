# Property Properties

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## Properties

An arbitrary dictionary of values that allows a plug-in writer to store data
about the instance without needing to create additional files in the Pacz. Some
values have special meaning as defined in `Phoenix.PaczAPI.CommonProperties`.

```csharp
[JsonProperty("properties", NullValueHandling = NullValueHandling.Ignore)]
IReadOnlyDictionary<string, object> Properties { get; }

```

### Property Value

[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>
