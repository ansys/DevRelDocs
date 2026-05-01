# Method TrySaveAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## TrySaveAsync()

Tells the UI to save any current work. If there are no change, this
function should return true immediately. If there are unsaved changes,
the user should be prompted to save their work with (yes, no, cancel) options.

If the plug-in writer does not wish to have this protection, just return true and
do nothing.

```csharp
public virtual Task<bool> TrySaveAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

True if the user picks yes or no, false if they choose to cancel.
