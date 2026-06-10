# Interface IHarnessBuilderUIBase

Namespace: [Phoenix.ComponentBuilderAPI](Phoenix.ComponentBuilderAPI.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

A base interface for the interface that a component builder UI must implement. Useful internally to handle
plug-ins generically without requiring knowing the type of runner being edited. Plug-Ins should always
implement `Phoenix.ComponentBuilderAPI.IHarnessBuilderUI`1`

```csharp
[PlugInInterfaceName("Phoenix::IHarnessBuilderUI")]
public interface IHarnessBuilderUIBase : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[HarnessType](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.HarnessType.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIBase_HarnessType)

Returns the Type object for the IHarnessRunner that this builder UI operates on.

## Methods

[ShowAsync()](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.ShowAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIBase_ShowAsync)

Request that the UI be shown.

[TrySaveAsync()](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.TrySaveAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIBase_TrySaveAsync)

Tells the UI to save any current work. If there are no change, this
function should return true immediately. If there are unsaved changes,
the user should be prompted to save their work with (yes, no, cancel) options.

If the plug-in writer does not wish to have this protection, just return true and
do nothing.

[WindowClosed](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.WindowClosed.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIBase_WindowClosed)

This event is raised any time the window is closed.
