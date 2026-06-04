# Property Config

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## Config

The current config file from the local extraction folder

```csharp
IReadOnlyComponentConfig Config { get; }

```

### Property Value

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

### Remarks

`Phoenix.PaczAPI.IReadOnlyComponentConfig` is `System.IDisposable`, but the caller should not
dispose the returned value as it is owned by this instance of IExtractedPacz and will be disposed
when IReadOnlyExtractedPacz is disposed.
