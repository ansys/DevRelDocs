# Property ExternalFiles

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ExternalFiles

Get the list of external files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

```csharp
[JsonProperty("externalFiles", NullValueHandling = NullValueHandling.Ignore)]
ISet<IExternalFile> ExternalFiles { get; set; }

```

### Property Value

[ISet](https://learn.microsoft.com/dotnet/api/system.collections.generic.iset-1)<[IExternalFile](Phoenix.PaczAPI.IExternalFile.md)>
