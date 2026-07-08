# Property Config

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## Config

The metadata found at the root of the Pacz.

```csharp
IReadOnlyComponentConfig Config { get; }

```

### Property Value

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

### Remarks

If this config references variables that are of type File, the `Phoenix.PaczAPI.IRuntimeVariable.DefaultValue`
for those file variables will be available, but the contents will be missing. This is for performance and
convenience of the API. If you need the config to include the file variable default values, you must call to
extract the pacz and then get the `Phoenix.PaczAPI.IReadOnlyExtractedPacz.Config` property.
