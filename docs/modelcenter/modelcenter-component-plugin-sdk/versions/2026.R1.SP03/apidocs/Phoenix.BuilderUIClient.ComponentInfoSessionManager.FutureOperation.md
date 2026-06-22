# Enum ComponentInfoSessionManager.FutureOperation

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

Flag passed to `Phoenix.BuilderUIClient.ComponentInfoSessionManager.TrySavingExistingSessionAsync(Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation,Phoenix.ComponentAPI.IHarnessRunnerSession,System.Boolean,System.Boolean)` to help determine if the current session can be
reused and saving is not required.

```csharp
public enum ComponentInfoSessionManager.FutureOperation

```

## Fields

`BuilderUI = 3`

`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenBuilderUIForComponent(Phoenix.ComponentAPI.IHarnessRunnerSession)` or `Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenExistingBuilderUI(Phoenix.ComponentAPI.IHarnessBuilderUISession)` will be called after the save.

`Load = 1`

`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponent(Phoenix.ComponentAPI.IHarnessRunnerSession)` will be called after the save.

`LocalEdit = 2`

`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponentWithLocalEditSession(Phoenix.ComponentAPI.IHarnessRunnerSession)` will be called after the save.

`Unload = 0`

`Phoenix.BuilderUIClient.ComponentInfoSessionManager.UnloadComponent` will be called after the save.
