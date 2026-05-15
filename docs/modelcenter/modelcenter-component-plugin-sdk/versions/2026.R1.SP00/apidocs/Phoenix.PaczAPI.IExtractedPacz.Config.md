# Property Config

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## Config

The in-memory copy of the configuration from the `Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`

```csharp
IComponentConfig Config { get; set; }

```

### Property Value

[IComponentConfig](Phoenix.PaczAPI.IComponentConfig.md)

### Remarks

`Phoenix.PaczAPI.IComponentConfig` is `System.IDisposable`, but the caller should not
dispose the returned value as it is owned by this instance of IExtractedPacz and will be disposed
when IExtractedPacz is disposed.
