# Property Blacklist

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## Blacklist

The blacklist name subsititution list.Allows variables from provider to
be ignored. The string value in the dictionary must be exactly one of
"AlwaysInclude", "AlwaysExclude", or "Hidden". May be null to indicate no blacklist.

```csharp
public IDictionary<string, string> Blacklist { get; protected set; }

```

### Property Value

[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>
