# Interface IExtractedPacz

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Extends a `Phoenix.PaczAPI.IReadOnlyExtractedPacz` with the ability to change
the `Phoenix.PaczAPI.IComponentConfig` object. This configuration will be stored
in memory and would only be saved via the `Phoenix.PaczAPI.IPaczWriter` interface.

```csharp
public interface IExtractedPacz : IReadOnlyExtractedPacz, IDisposable

```

#### Implements

[IReadOnlyExtractedPacz](Phoenix.PaczAPI.IReadOnlyExtractedPacz.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[Config](Phoenix.PaczAPI.IExtractedPacz.Config.md#Phoenix_PaczAPI_IExtractedPacz_Config)

The in-memory copy of the configuration from the `Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`
