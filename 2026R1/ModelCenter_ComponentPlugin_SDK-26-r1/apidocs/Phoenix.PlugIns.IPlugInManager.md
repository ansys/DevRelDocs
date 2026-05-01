# Interface IPlugInManager

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

The main interface for using plug-ins from your application. See documentation
on `Phoenix.PlugIns` for how to get an instance.

```csharp
public interface IPlugInManager

```

## Properties

[Count](Phoenix.PlugIns.IPlugInManager.Count.md#Phoenix_PlugIns_IPlugInManager_Count)

The number of plug-ins contained in this manager.

## Methods

[GetPlugInFor<T>(Guid)](Phoenix.PlugIns.IPlugInManager.GetPlugInFor.md#Phoenix_PlugIns_IPlugInManager_GetPlugInFor__1_System_Guid_)

Gets information about a particular plug-in.
Passthrough to `Phoenix.PlugIns.IPlugInManager.GetPlugInFor(System.String,System.Guid)` with
`Phoenix.PlugIns.PlugInInterfaceNameAttribute.GetNameOrDefault(System.Type)` on T.

[GetPlugInFor(string, Guid)](Phoenix.PlugIns.IPlugInManager.GetPlugInFor.md#Phoenix_PlugIns_IPlugInManager_GetPlugInFor_System_String_System_Guid_)

Gets information about a particular plug-in.

[GetViewFor<T>()](Phoenix.PlugIns.IPlugInManager.GetViewFor.md#Phoenix_PlugIns_IPlugInManager_GetViewFor__1)

Gets a hierarchical view of the plug-ins that implement a particular
interface.
Passthrough to `Phoenix.PlugIns.IPlugInManager.GetViewFor(System.String)` with
`Phoenix.PlugIns.PlugInInterfaceNameAttribute.GetNameOrDefault(System.Type)` on `T`.

[GetViewFor(string)](Phoenix.PlugIns.IPlugInManager.GetViewFor.md#Phoenix_PlugIns_IPlugInManager_GetViewFor_System_String_)

Gets a hierarchical view of the plug-ins that implement a particular interface.

[InstantiateAsync<T>(Guid)](Phoenix.PlugIns.IPlugInManager.InstantiateAsync.md#Phoenix_PlugIns_IPlugInManager_InstantiateAsync__1_System_Guid_)

Instantiates a particular plug-in

[ReReadAsync()](Phoenix.PlugIns.IPlugInManager.ReReadAsync.md#Phoenix_PlugIns_IPlugInManager_ReReadAsync)

Causes the manager to reread the plug-in catalog from disk
