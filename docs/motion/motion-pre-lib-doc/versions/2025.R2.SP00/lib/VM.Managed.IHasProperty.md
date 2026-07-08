#  Interface IHasProperty

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This interface is to represent object that has property.

```csharp
public interface IHasProperty
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IHasProperty_EntityRequestPropertyUpdate"></a> EntityRequestPropertyUpdate

EntityRequestPropertyUpdate

```csharp
EventHandler<LinkEventArgs> EntityRequestPropertyUpdate { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<LinkEventArgs\>

## Methods

### <a id="VM_Managed_IHasProperty_ClearPropertyBeforeDeserialize_VM_Managed_ObjectBase_"></a> ClearPropertyBeforeDeserialize\(ObjectBase\)

ClearPropertyBeforeDeserialize

```csharp
void ClearPropertyBeforeDeserialize(ObjectBase objPropert)
```

#### Parameters

`objPropert` ObjectBase

### <a id="VM_Managed_IHasProperty_RegisterPropertyEvent_VM_Managed_ObjectBase_System_Boolean_"></a> RegisterPropertyEvent\(ObjectBase, bool\)

RegisterPropertyEvent

```csharp
void RegisterPropertyEvent(ObjectBase objProperty, bool bBackup)
```

#### Parameters

`objProperty` ObjectBase

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_IHasProperty_UnregisterPropertyEvent_VM_Managed_ObjectBase_System_Boolean_"></a> UnregisterPropertyEvent\(ObjectBase, bool\)

UnregisterPropertyEvent

```csharp
void UnregisterPropertyEvent(ObjectBase objProperty, bool bBackup)
```

#### Parameters

`objProperty` ObjectBase

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

