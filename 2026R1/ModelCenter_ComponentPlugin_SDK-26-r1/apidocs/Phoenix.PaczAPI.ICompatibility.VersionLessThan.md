# Property VersionLessThan

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## VersionLessThan

Defines which older versions of the schema are incompatible.
It must be a 2 number dotted notation (such as '4.1').
If the client version is less than this property the warning will be applied.

```csharp
[JsonProperty("versionLessThan")]
string VersionLessThan { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
