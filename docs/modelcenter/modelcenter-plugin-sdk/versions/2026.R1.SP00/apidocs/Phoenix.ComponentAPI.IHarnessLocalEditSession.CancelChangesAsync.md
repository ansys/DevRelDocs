# Method CancelChangesAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## CancelChangesAsync()

Cancels any local changes made, setting `Phoenix.ComponentAPI.IHarnessLocalEditSession.Pacz` back to
original values. The running component is not modified.

```csharp
Task CancelChangesAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion of the work
