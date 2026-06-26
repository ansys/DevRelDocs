# Event DebugDataUpdated

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## DebugDataUpdated

This event is raised any time debug information is updated by the CAM framework or the plug-in.
The CAM framework will supply some information at reserved keys, even if the plug-in never does.
The plug-in should supply data using appropriate display names as keys in the map.
See `Phoenix.ComponentAPI.DebugDataKeyConstants` for more information and utility functions for dealing with this map.
Implementations of this interface must never raise this event with a dictionary containing any value which is null.

```csharp
event EventHandler<IReadOnlyDictionary<string, string>> DebugDataUpdated

```

### Event Type

[EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>>
