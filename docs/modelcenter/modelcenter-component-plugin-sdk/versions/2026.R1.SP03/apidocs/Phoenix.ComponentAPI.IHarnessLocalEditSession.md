# Interface IHarnessLocalEditSession

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

Represents a "local edit" session that allows the OEM process to modify
a pacz for a live runner session.

```csharp
public interface IHarnessLocalEditSession : IDisposable, IHarnessSaveOperations

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable),
[IHarnessSaveOperations](Phoenix.ComponentAPI.IHarnessSaveOperations.md)

## Remarks

This class uses a commit/cancel paradigm. Changes you make will not take effect
until you call `Phoenix.ComponentAPI.IHarnessLocalEditSession.CommitChangesAsync`.

It is bad practice to not call one of `Phoenix.ComponentAPI.IHarnessLocalEditSession.CommitChangesAsync` or
`Phoenix.ComponentAPI.IHarnessLocalEditSession.CancelChangesAsync` before calling Dispose.

Note that calling `Phoenix.ComponentAPI.IHarnessLocalEditSession.CommitChangesAsync` can be very expensive.
It is up to the caller to only call it if any properties were actually changed.

Any of the operations inherited from `Phoenix.ComponentAPI.IHarnessSaveOperations` implicitly
call `Phoenix.ComponentAPI.IHarnessLocalEditSession.CommitChangesAsync` before performing the save operation.

## Properties

[Pacz](Phoenix.ComponentAPI.IHarnessLocalEditSession.Pacz.md#Phoenix_ComponentAPI_IHarnessLocalEditSession_Pacz)

Gets the current Pacz for editing

## Methods

[CancelChangesAsync()](Phoenix.ComponentAPI.IHarnessLocalEditSession.CancelChangesAsync.md#Phoenix_ComponentAPI_IHarnessLocalEditSession_CancelChangesAsync)

Cancels any local changes made, setting `Phoenix.ComponentAPI.IHarnessLocalEditSession.Pacz` back to
original values. The running component is not modified.

[CommitChangesAsync()](Phoenix.ComponentAPI.IHarnessLocalEditSession.CommitChangesAsync.md#Phoenix_ComponentAPI_IHarnessLocalEditSession_CommitChangesAsync)

Causes any changes made to `Phoenix.ComponentAPI.IHarnessLocalEditSession.Pacz` to be mirrored out to the
running component.
