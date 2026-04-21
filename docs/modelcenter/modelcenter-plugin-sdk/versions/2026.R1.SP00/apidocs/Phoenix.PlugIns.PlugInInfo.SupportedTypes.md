# Property SupportedTypes

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## SupportedTypes

A list of unique string identifiers that
define what types of plug-in this class implements. The plug-in framework is generic to
allow for future types. The currently implemented types are
'Phoenix::IHarnessRunner' and 'Phoenix::IHarnessBuilderUI'.

```csharp
[JsonProperty("supportedTypes")]
[JsonRequired]
public IEnumerable<string> SupportedTypes { get; }

```

### Property Value

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
