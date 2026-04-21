# Property InstanceFiles

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## InstanceFiles

Get the list of instance files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

```csharp
[JsonProperty("instanceFiles", NullValueHandling = NullValueHandling.Ignore)]
IUpdatableSet<IInstanceFile> InstanceFiles { get; set; }

```

### Property Value

[IUpdatableSet](Phoenix.PaczAPI.IUpdatableSet-1.md)<[IInstanceFile](Phoenix.PaczAPI.IInstanceFile.md)>
