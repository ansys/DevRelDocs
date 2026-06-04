# Property Options

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## Options

An arbitrary string/value map of options. Refer to your SDK documentation for available
options that can be set.

```csharp
[JsonProperty("options", NullValueHandling = NullValueHandling.Ignore)]
public IReadOnlyDictionary<string, string> Options { get; }

```

### Property Value

[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>
