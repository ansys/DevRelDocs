# Method AsReadOnly

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## AsReadOnly()

Returns a protected `Phoenix.PaczAPI.IReadOnlyComponentConfig` view of this object that cannot be typecasted back.

```csharp
IReadOnlyComponentConfig AsReadOnly()

```

### Returns

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

A wrapper around this object. Disposing the returned object will dispose this object.
