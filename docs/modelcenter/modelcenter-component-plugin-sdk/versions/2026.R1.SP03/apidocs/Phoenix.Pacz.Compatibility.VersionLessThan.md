# Property VersionLessThan

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## VersionLessThan

Defines which older versions of the schema are incompatible.
It must be a 2 number dotted notation (such as '4.1').
If the client version is less than this property the warning will be applied.

```csharp
public string VersionLessThan { get; set; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
