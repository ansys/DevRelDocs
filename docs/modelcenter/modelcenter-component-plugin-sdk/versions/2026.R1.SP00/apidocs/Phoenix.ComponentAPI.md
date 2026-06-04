# Namespace Phoenix.ComponentAPI

### Classes

[BasicRunnerSessionOptions](Phoenix.ComponentAPI.BasicRunnerSessionOptions.md)

A basic runner session options class.
Instances of this class will be accepted by the default `Phoenix.ComponentAPI.IHarnessRunnerClient` implementations.

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

An immutable class that contains the information necessary to run a component.

[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)

An almost immutable class that contains the results of a run evaluation.

[DebugDataKeyConstants](Phoenix.ComponentAPI.DebugDataKeyConstants.md)

This class contains documentation about reserved keys used by the CAM framework to represent special data in
`Phoenix.ComponentAPI.IExecutionInstance.DebugDataUpdated` maps.

[LicenseException](Phoenix.ComponentAPI.LicenseException.md)

This exception type is used by the ILicenseProvider when there are errors.

### Structs

[ComponentRunResultsMetadata](Phoenix.ComponentAPI.ComponentRunResultsMetadata.md)

An immutable structure that contains metadata about a particular run.

### Interfaces

[IExecutionInstance](Phoenix.ComponentAPI.IExecutionInstance.md)

An instance of an execution context which allows the client to register for events,
query for available processes, and start the run.

[IHarnessBuilderUIClient](Phoenix.ComponentAPI.IHarnessBuilderUIClient.md)

This interface provides a client the ability to host builder UIs to create and
edit harnesses.

This interface is thread safe and asynchronous. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

[IHarnessBuilderUISession](Phoenix.ComponentAPI.IHarnessBuilderUISession.md)

This interface represents a single instance of a builder UI that can be used to create
or edit a harness.

Instances of this interface are typically not thread safe. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

[IHarnessLocalEditSession](Phoenix.ComponentAPI.IHarnessLocalEditSession.md)

Represents a "local edit" session that allows the OEM process to modify
a pacz for a live runner session.

[IHarnessRunner](Phoenix.ComponentAPI.IHarnessRunner.md)

The interface that a harness runner must implement. The implementing class should use the
following attributes:

- System.Runtime.InteropServices.GuidAttribute
- Phoenix.Plugins.PlugInTypesAttribute(typeof(IHarnessRunner))
- Phoenix.Plugins.PlugInDisplayName

A harness does not need to be thread safe and will never be called from more than one thread.

If the harness runner implements IDisposable, it will be disposed at an appropriate time.

[IHarnessRunnerClient](Phoenix.ComponentAPI.IHarnessRunnerClient.md)

This interface provides a client the ability to host and utilize pre-existing
harnesses within their program.

This interface is thread safe and asynchronous. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

[IHarnessRunnerHost](Phoenix.ComponentAPI.IHarnessRunnerHost.md)

The host object passed to harnesses to give them context for their run.

[IHarnessRunnerReloadable](Phoenix.ComponentAPI.IHarnessRunnerReloadable.md)

An implementation of `Phoenix.ComponentAPI.IHarnessRunner` may additionally implement this interface if reloading is expensive
and they wish to avoid the cost when a Builder UI makes a change. By default, the infrastructure will Dispose the
IHarnessRunner and create a new one anytime the user saves a change to the pacz.

[IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)

This interface represents an open session to a harness allowing execution of the
component.

Session objects are informational to the infrastructure. It is not guaranteed that
instances of the harness map one to one to session objects, though that will generally be
true.

Additionally, clients should not assume that input values are maintained between calls to
ExecuteAsync. Each call should send all input variable values.

This object is not thread safe. It uses the task-based asynchronous pattern.

[IHarnessSaveOperations](Phoenix.ComponentAPI.IHarnessSaveOperations.md)

Common save operations used from both
`Phoenix.ComponentAPI.IHarnessBuilderUISession` and
`Phoenix.ComponentAPI.IHarnessLocalEditSession`.

[ILicenseFeature](Phoenix.ComponentAPI.ILicenseFeature.md)

The interface for a checked out license feature.

[ILicenseProvider](Phoenix.ComponentAPI.ILicenseProvider.md)

The interface for checking out license features.

[IProcessInfo](Phoenix.ComponentAPI.IProcessInfo.md)

[IRunnerSessionOptions](Phoenix.ComponentAPI.IRunnerSessionOptions.md)

This interface is intended to be a "marker" interface for any runner session options type.
Session options are checked for validity at runtime; all `Phoenix.ComponentAPI.IHarnessRunnerClient`
implementations will accept any `Phoenix.ComponentAPI.IRunnerSessionOptions` object at compile time.
This comes from a desire to make it possible to write common code in OEM clients for various `Phoenix.ComponentAPI.IHarnessRunnerClient`
implementations, even if they require different options types, and then use factory / utility methods in that
code to ensure the correct options type is always passed.

When implementing a new `Phoenix.ComponentAPI.IHarnessRunnerClient` implementation, you should make it clear
to those attempting to use your client implementation what qualifies as an acceptable `Phoenix.ComponentAPI.IRunnerSessionOptions`
object. If options do not make sense for your client, you may choose to accept any object or even null.
It would also be a good idea to provide convenient ways of producing any argument object that is required.

### Enums

[RunStatus](Phoenix.ComponentAPI.RunStatus.md)

The status of a run
