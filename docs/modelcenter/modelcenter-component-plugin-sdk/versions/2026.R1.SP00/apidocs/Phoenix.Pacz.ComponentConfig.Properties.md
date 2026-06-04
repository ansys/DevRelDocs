# Property Properties

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## Properties

An arbitrary dictionary of values that allows a plug-in writer to store data
about the instance without needing to create additional files in the Pacz. Some
values have special meaning as defined in `Phoenix.PaczAPI.CommonProperties`. The
system will ensure this is never null.

```csharp
public IDictionary<string, object> Properties { get; set; }

```

### Property Value

[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>
