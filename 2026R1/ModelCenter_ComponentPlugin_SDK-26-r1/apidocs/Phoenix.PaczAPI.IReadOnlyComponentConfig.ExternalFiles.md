# Property ExternalFiles

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## ExternalFiles

Get the list of external files associated with this component. Null will
never be returned.

```csharp
[JsonProperty("externalFiles", NullValueHandling = NullValueHandling.Ignore)]
IEnumerable<IExternalFile> ExternalFiles { get; }

```

### Property Value

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IExternalFile](Phoenix.PaczAPI.IExternalFile.md)>
