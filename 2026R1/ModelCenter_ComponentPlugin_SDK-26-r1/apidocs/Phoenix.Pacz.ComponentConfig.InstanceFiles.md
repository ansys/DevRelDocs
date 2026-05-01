# Property InstanceFiles

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## InstanceFiles

Get the list of instance files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

```csharp
public IUpdatableSet<IInstanceFile> InstanceFiles { get; set; }

```

### Property Value

[IUpdatableSet](Phoenix.PaczAPI.IUpdatableSet-1.md)<[IInstanceFile](Phoenix.PaczAPI.IInstanceFile.md)>
