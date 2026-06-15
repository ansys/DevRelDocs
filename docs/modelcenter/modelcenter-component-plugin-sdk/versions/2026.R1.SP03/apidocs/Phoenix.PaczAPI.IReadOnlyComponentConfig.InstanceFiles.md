# Property InstanceFiles

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## InstanceFiles

Get the list of instance files associated with this component. Null will
never be returned.

```csharp
[JsonProperty("instanceFiles", NullValueHandling = NullValueHandling.Ignore)]
IEnumerable<IInstanceFile> InstanceFiles { get; }

```

### Property Value

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IInstanceFile](Phoenix.PaczAPI.IInstanceFile.md)>
