# Namespace Phoenix.ComponentBuilderAPI

### Namespaces

[Phoenix.ComponentBuilderAPI.Extensions](Phoenix.ComponentBuilderAPI.Extensions.md)

### Interfaces

[IHarnessBuilderUI<RUNNER>](Phoenix.ComponentBuilderAPI.IHarnessBuilderUI-1.md)

The interface that a component builder UI must implement. The implementing class should use the
following attributes:

- `System.Runtime.InteropServices.GuidAttribute`
- `Phoenix.PlugIns.PlugInTypesAttribute`(typeof(IHarnessBuilderUI))
- `Phoenix.PlugIns.PlugInDisplayNameAttribute`

A builder UI does not need to be thread safe and will never be called from more than one thread.

If the constructor for an implementation of this interface accepts an ILogger<>, an appropriate
logger will be passed in.

If a builder UI implements IDisposable, it will be diposed at an appropriate time.

[IHarnessBuilderUIBase](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIBase.md)

A base interface for the interface that a component builder UI must implement. Useful internally to handle
plug-ins generically without requiring knowing the type of runner being edited. Plug-Ins should always
implement `Phoenix.ComponentBuilderAPI.IHarnessBuilderUI`1`

[IHarnessBuilderUIHost<RUNNER>](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.md)

A context object passed to builder UIs.
