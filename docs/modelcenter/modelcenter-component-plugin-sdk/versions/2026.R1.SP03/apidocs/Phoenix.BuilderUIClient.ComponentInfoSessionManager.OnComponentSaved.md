# Property OnComponentSaved

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## OnComponentSaved

Event handler in the class that creates this session manager to use to subscribe to the
`Phoenix.ComponentAPI.IHarnessBuilderUISession.ComponentChanged` event for builder UIs. This event is fired
when the open component is saved from the builder UI or from the Edit Component UI.
Can be null if no event handler is needed.

```csharp
public EventHandler OnComponentSaved { set; }

```

### Property Value

[EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)
