# Method AsReadOnly

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## AsReadOnly()

Returns a protected `Phoenix.PaczAPI.IReadOnlyComponentConfig` view of this object that cannot be typecasted back.

```csharp
public IReadOnlyComponentConfig AsReadOnly()

```

### Returns

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

A wrapper around this object. Disposing the returned object will dispose this object.
