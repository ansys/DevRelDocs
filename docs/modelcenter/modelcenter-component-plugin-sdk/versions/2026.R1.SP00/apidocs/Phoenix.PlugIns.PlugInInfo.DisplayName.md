# Property DisplayName

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## DisplayName

A map of language to a human readible display name for the plug-in. Entries may be of
the form languageCode2-countryCode2, languageCode2, or an empty string. The languageCode2
must be an ISO 639-1 two-letter country code. The countryCode2 must be an ISO 3166 two-letter
subculture code (usually a country identifier). When choosing which name to display, the
system will first try to match the user's languageCode2-countryCode2 combination, then
just the languageCode2, then it will try to use the entry with an empty key, then it will
try to use 'en', lastly falling back on the name of the implementing class. Tests are
always case insensitive.

```csharp
[JsonProperty("displayName", NullValueHandling = NullValueHandling.Ignore)]
public IReadOnlyDictionary<string, string> DisplayName { get; }

```

### Property Value

[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>
