# Property CustomMetadata

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## CustomMetadata

Get the variable custom metadata which allows for arbitrary
storage of name/value pairs with the variable.

```csharp
[JsonProperty(PropertyName = "metaData", NullValueHandling = NullValueHandling.Ignore)]
public IReadOnlyDictionary<string, string> CustomMetadata { get; set; }

```

### Property Value

[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>
