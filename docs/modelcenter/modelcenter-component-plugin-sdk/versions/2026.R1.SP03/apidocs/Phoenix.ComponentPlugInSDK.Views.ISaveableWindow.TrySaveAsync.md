# Method TrySaveAsync

Namespace: [Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## TrySaveAsync()

Request that window be saved. If there are no unsaved changes, this function
can simply do nothing and return true. If there are unsaved changes, the user
should be presented with Yes/No/Cancel options.

```csharp
Task<bool> TrySaveAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

A task that returns true if the user explicity did or did not save, false
if it was canceled
