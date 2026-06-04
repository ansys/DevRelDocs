# Property ExternalFiles

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## ExternalFiles

Get the list of external files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

```csharp
public ISet<IExternalFile> ExternalFiles { get; set; }

```

### Property Value

[ISet](https://learn.microsoft.com/dotnet/api/system.collections.generic.iset-1)<[IExternalFile](Phoenix.PaczAPI.IExternalFile.md)>
