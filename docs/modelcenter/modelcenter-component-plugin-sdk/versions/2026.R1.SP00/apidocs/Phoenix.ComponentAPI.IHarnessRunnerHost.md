# Interface IHarnessRunnerHost

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

The host object passed to harnesses to give them context for their run.

```csharp
public interface IHarnessRunnerHost : ILicenseProvider, IDisposable

```

#### Implements

[ILicenseProvider](Phoenix.ComponentAPI.ILicenseProvider.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[ComponentDirectory](Phoenix.ComponentAPI.IHarnessRunnerHost.ComponentDirectory.md#Phoenix_ComponentAPI_IHarnessRunnerHost_ComponentDirectory)

This property contains the directory where the pacz is extracted to.

[ExtractedPacz](Phoenix.ComponentAPI.IHarnessRunnerHost.ExtractedPacz.md#Phoenix_ComponentAPI_IHarnessRunnerHost_ExtractedPacz)

This property contains the IPacz object for the current harness. The
plug-in is not responsible for disposing the returned object.

[Logger](Phoenix.ComponentAPI.IHarnessRunnerHost.Logger.md#Phoenix_ComponentAPI_IHarnessRunnerHost_Logger)

Get a logger to use when writing messages.

[Metadata](Phoenix.ComponentAPI.IHarnessRunnerHost.Metadata.md#Phoenix_ComponentAPI_IHarnessRunnerHost_Metadata)

Arbitrary metadata about the context can be stored here. Some well known keys
will be put here include:

- TODO: Lookup what MCD and MCRE provide by default to consider what we want going forward.

[RunDirectory](Phoenix.ComponentAPI.IHarnessRunnerHost.RunDirectory.md#Phoenix_ComponentAPI_IHarnessRunnerHost_RunDirectory)

This property contains the directory used for running for the component. The behavior of
this field is controlled by Phoenix.PaczAPI.IComponentConfig.RunFolderPreference. If
set to PerRun this will be a new temporary folder on each call to run the harness. If set
to PerProcess, it will be a new temporary folder for each instance.

## Methods

[UpdateDebugData(Dictionary<string, string>)](Phoenix.ComponentAPI.IHarnessRunnerHost.UpdateDebugData.md#Phoenix_ComponentAPI_IHarnessRunnerHost_UpdateDebugData_System_Collections_Generic_Dictionary_System_String_System_String__)

Plug-in implementations may supply custom debugging data for the debugging UI by calling this method.

To add debug information to display to the user, supply a string-to-string map
where keys are a display label for the value.
The keys supplied become "permanent." You may remove a key from the debug display
by passing the key in question with a null value.

Note that the host application may not display debugging data until a run is requested.
