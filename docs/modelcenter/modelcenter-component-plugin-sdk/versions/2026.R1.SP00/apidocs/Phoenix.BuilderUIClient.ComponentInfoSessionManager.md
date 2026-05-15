# Class ComponentInfoSessionManager

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

Manager for the loading and switching between sessions in a ComponentInfoControl.
Provides methods to prompt the user for applying changes, and ensures proper cleanup and reuse of active edit
sessions.

```csharp
public class ComponentInfoSessionManager : AbstractDisposableAsync, IDisposableAndAsync, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
AbstractDisposableAsync ←
[ComponentInfoSessionManager](Phoenix.BuilderUIClient.ComponentInfoSessionManager.md)

#### Implements

IDisposableAndAsync,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposableAsync.Dispose(bool),
AbstractDisposableAsync.DisposeAsync(),
AbstractDisposableAsync.DisposeAsync(bool),
AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[ComponentInfoSessionManager(IComponentInfoControlViewModel, IHarnessBuilderUIClient, IServiceProvider)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.-ctor.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager__ctor_Phoenix_BuilderUIClient_IComponentInfoControlViewModel_Phoenix_ComponentAPI_IHarnessBuilderUIClient_System_IServiceProvider_)

Constructor.

## Fields

[OnTestRunRequested](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OnTestRunRequested.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OnTestRunRequested)

Event handler in the class that creates this session manager to use to subscribe to the
`Phoenix.ComponentAPI.IHarnessBuilderUISession.TestRunRequested` event for builder UIs. Can be null if
no event handler is needed.

## Properties

[OnComponentSaved](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OnComponentSaved.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OnComponentSaved)

Event handler in the class that creates this session manager to use to subscribe to the
`Phoenix.ComponentAPI.IHarnessBuilderUISession.ComponentChanged` event for builder UIs. This event is fired
when the open component is saved from the builder UI or from the Edit Component UI.
Can be null if no event handler is needed.

## Methods

[DisposeAsync(bool)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.DisposeAsync.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_DisposeAsync_System_Boolean_)

Derived classes must implement this method to do their dispose work.

[OpenBuilderUIForComponent(IHarnessRunnerSession)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenBuilderUIForComponent.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OpenBuilderUIForComponent_Phoenix_ComponentAPI_IHarnessRunnerSession_)

Loads a component into the control, and opens a builder UI session for it.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

[OpenComponent(IHarnessRunnerSession)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponent.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OpenComponent_Phoenix_ComponentAPI_IHarnessRunnerSession_)

Loads a component into the control. If there is any local edit session open for it, it is closed. Builder
sessions are not changed, and should remain open.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

[OpenComponentWithLocalEditSession(IHarnessRunnerSession)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponentWithLocalEditSession.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OpenComponentWithLocalEditSession_Phoenix_ComponentAPI_IHarnessRunnerSession_)

Loads a component into the control, and opens a local edit session for it.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

[OpenExistingBuilderUI(IHarnessBuilderUISession)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenExistingBuilderUI.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_OpenExistingBuilderUI_Phoenix_ComponentAPI_IHarnessBuilderUISession_)

Loads a component into the control that already has an existing builder UI session.
The builder session will now be managed by this object.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

[TrySavingExistingSessionAsync(FutureOperation, IHarnessRunnerSession, bool, bool)](Phoenix.BuilderUIClient.ComponentInfoSessionManager.TrySavingExistingSessionAsync.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_TrySavingExistingSessionAsync_Phoenix_BuilderUIClient_ComponentInfoSessionManager_FutureOperation_Phoenix_ComponentAPI_IHarnessRunnerSession_System_Boolean_System_Boolean_)

Checks the current builder or writer session for changes, prompts the user if they want to save and continue,
and if so, saves and closes that session. Call this before calls to
`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponentWithLocalEditSession(Phoenix.ComponentAPI.IHarnessRunnerSession)`, see `Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenBuilderUIForComponent(Phoenix.ComponentAPI.IHarnessRunnerSession)`,
`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenExistingBuilderUI(Phoenix.ComponentAPI.IHarnessBuilderUISession)`, and `Phoenix.BuilderUIClient.ComponentInfoSessionManager.UnloadComponent`.
Does nothing if it is determined the current sessions can be reused via the provided arguments.

[UnloadComponent()](Phoenix.BuilderUIClient.ComponentInfoSessionManager.UnloadComponent.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_UnloadComponent)

Unload the current component.

[_promptUserToSaveLocalEdit()](Phoenix.BuilderUIClient.ComponentInfoSessionManager._promptUserToSaveLocalEdit.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager__promptUserToSaveLocalEdit)

Show a dialog asking the user if they want to save the current changes or cancel the future operation.

[BuilderSessionDisposed](Phoenix.BuilderUIClient.ComponentInfoSessionManager.BuilderSessionDisposed.md#Phoenix_BuilderUIClient_ComponentInfoSessionManager_BuilderSessionDisposed)

Event fired after the manager disposes of the active builder UI session.
