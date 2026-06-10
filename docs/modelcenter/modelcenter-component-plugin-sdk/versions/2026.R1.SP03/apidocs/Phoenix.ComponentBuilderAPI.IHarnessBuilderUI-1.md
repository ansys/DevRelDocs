# Interface IHarnessBuilderUI<RUNNER>

Namespace: [Phoenix.ComponentBuilderAPI](Phoenix.ComponentBuilderAPI.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

The interface that a component builder UI must implement. The implementing class should use the
following attributes:

- `System.Runtime.InteropServices.GuidAttribute`
- `Phoenix.PlugIns.PlugInTypesAttribute`(typeof(IHarnessBuilderUI))
- `Phoenix.PlugIns.PlugInDisplayNameAttribute`

A builder UI does not need to be thread safe and will never be called from more than one thread.

If the constructor for an implementation of this interface accepts an ILogger<>, an appropriate
logger will be passed in.

If a builder UI implements IDisposable, it will be diposed at an appropriate time.

```csharp
[PlugInInterfaceName("Phoenix::IHarnessBuilderUI")]
public interface IHarnessBuilderUI<RUNNER> : IHarnessBuilderUIBase, IDisposable where RUNNER : IHarnessRunner

```

#### Type Parameters

`RUNNER`

The type of IHarnessRunner that this builder edits.

#### Implements

[IHarnessBuilderUIBase](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Methods

[ConstructAsync(IHarnessBuilderUIHost<RUNNER>)](Phoenix.ComponentBuilderAPI.IHarnessBuilderUI-1.ConstructAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUI_1_ConstructAsync_Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost__0__)

Will always be called first to allow the object to instantiate itself.
