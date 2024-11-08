#  Class ReferenceFinder

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class to find the reference objects.

```csharp
public class ReferenceFinder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceFinder](VM.Managed.DAFUL.Operation.Util.ReferenceFinder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder__ctor"></a> ReferenceFinder\(\)

```csharp
public ReferenceFinder()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceConnectable_VM_Managed_InstanceContainer_VM_Managed_DAFUL_IConnectable_"></a> FindReferenceConnectable\(InstanceContainer, IConnectable\)

To find reference connectable from the instance container.

```csharp
public static ReferenceConnectable FindReferenceConnectable(InstanceContainer container, IConnectable prototype)
```

#### Parameters

`container` InstanceContainer

To find from the instance container.

`prototype` IConnectable

The prototype of reference connectable.

#### Returns

 ReferenceConnectable

The reference connectable.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceConnectableFromAllSubsystem_VM_Managed_Document3D_System_Collections_Generic_List_VM_Managed_DAFUL_ReferenceConnectable___"></a> FindReferenceConnectableFromAllSubsystem\(Document3D, ref List<ReferenceConnectable\>\)

To find reference connectable from subsystem.

```csharp
public static void FindReferenceConnectableFromAllSubsystem(Document3D activeDocument, ref List<ReferenceConnectable> lstReferenceConnectable)
```

#### Parameters

`activeDocument` Document3D

The active document.

`lstReferenceConnectable` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ReferenceConnectable\>

The reference connectables.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceContactable_VM_Managed_InstanceContainer_VM_Managed_DAFUL_IContactable_"></a> FindReferenceContactable\(InstanceContainer, IContactable\)

To find reference contactable(rigid 3D) from the instance container.

```csharp
public static IContactableRigid3D FindReferenceContactable(InstanceContainer container, IContactable prototype)
```

#### Parameters

`container` InstanceContainer

To find from the instance container.

`prototype` IContactable

The prototype of reference contactable.

#### Returns

 IContactableRigid3D

The reference contactable.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceDesignFrameFromAllSubsystem_VM_Managed_Document3D_System_Collections_Generic_List_VM_Managed_ReferenceDesignFrame___"></a> FindReferenceDesignFrameFromAllSubsystem\(Document3D, ref List<ReferenceDesignFrame\>\)

Finds the Reference design frame from all subsystem.

```csharp
public static void FindReferenceDesignFrameFromAllSubsystem(Document3D activeDocument, ref List<ReferenceDesignFrame> lstReferenceDF)
```

#### Parameters

`activeDocument` Document3D

The active document.

`lstReferenceDF` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ReferenceDesignFrame\>

The reference design frames.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceDesignPoint_VM_Managed_InstanceContainer_VM_Managed_DesignPoint_"></a> FindReferenceDesignPoint\(InstanceContainer, DesignPoint\)

To find reference design point from the instance container.

```csharp
public static ReferenceDesignPoint FindReferenceDesignPoint(InstanceContainer container, DesignPoint prototype)
```

#### Parameters

`container` InstanceContainer

To find from the instance container.

`prototype` DesignPoint

The prototype of reference connectable.

#### Returns

 ReferenceDesignPoint

The reference connectable.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceDesignPointFromAllSubsystem_VM_Managed_Document3D_System_Collections_Generic_List_VM_Managed_ReferenceDesignPoint___"></a> FindReferenceDesignPointFromAllSubsystem\(Document3D, ref List<ReferenceDesignPoint\>\)

Finds the Reference design point from all subsystem.

```csharp
public static void FindReferenceDesignPointFromAllSubsystem(Document3D activeDocument, ref List<ReferenceDesignPoint> lstReferenceDP)
```

#### Parameters

`activeDocument` Document3D

The active document.

`lstReferenceDP` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ReferenceDesignPoint\>

The reference design points.

### <a id="VM_Managed_DAFUL_Operation_Util_ReferenceFinder_FindReferenceDesignVariableFromAllSubsystem_VM_Managed_Document3D_System_Collections_Generic_List_VM_Managed_ReferenceDesignVariable___"></a> FindReferenceDesignVariableFromAllSubsystem\(Document3D, ref List<ReferenceDesignVariable\>\)

To find reference design variable from subsystem.

```csharp
public static void FindReferenceDesignVariableFromAllSubsystem(Document3D activeDocument, ref List<ReferenceDesignVariable> lstReferenceDV)
```

#### Parameters

`activeDocument` Document3D

The active document.

`lstReferenceDV` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ReferenceDesignVariable\>

The reference design variables.

