# Property RequiredFeatures

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## RequiredFeatures

Get the package features required by the component.

```csharp
[JsonProperty("requires", NullValueHandling = NullValueHandling.Ignore)]
IReadOnlyList<string> RequiredFeatures { get; }

```

### Property Value

[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
