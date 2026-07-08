#  Class ObjectEventCore

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event core for object.

```csharp
public class ObjectEventCore : IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IHistoryObjectSerializableDelegate
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectEventCore](VM.Managed.ObjectEventCore.md)

#### Derived

[ImportBuilderEventCore](VM.Managed.CAD.ImportBuilderEventCore.md)

#### Implements

IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
IHistoryObjectSerializableDelegate

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ObjectEventCore__ctor_VM_Managed_ObjectBase_"></a> ObjectEventCore\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.ObjectEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ObjectEventCore(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

Name of the object base.

### <a id="VM_Managed_ObjectEventCore__ctor"></a> ObjectEventCore\(\)

Initializes a new instance of the <xref href="VM.Managed.ObjectEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ObjectEventCore()
```

### <a id="VM_Managed_ObjectEventCore__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ObjectEventCore\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.ObjectEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ObjectEventCore(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

## Properties

### <a id="VM_Managed_ObjectEventCore_Container"></a> Container

Gets the container.

```csharp
public IOwned Container { get; }
```

#### Property Value

 IOwned

### <a id="VM_Managed_ObjectEventCore_Document"></a> Document

Gets the document.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_ObjectEventCore_IsChildExternable"></a> IsChildExternable

Gets a value indicating whether this instance's child is Externable.

```csharp
bool IsChildExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectEventCore_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectEventCore_Object"></a> Object

Gets the object.

```csharp
public ObjectBase Object { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_ObjectEventCore_Owner"></a> Owner

Gets the owner.

```csharp
public ObjectBase Owner { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

## Methods

### <a id="VM_Managed_ObjectEventCore_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectEventCore_Dispose"></a> Dispose\(\)

destroy a instance of the <xref href="VM.Managed.ObjectEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_ObjectEventCore_Finalize"></a> \~ObjectEventCore\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.ObjectEventCore" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~ObjectEventCore()
```

### <a id="VM_Managed_ObjectEventCore_GetInvocationDestroyTargetList"></a> GetInvocationDestroyTargetList\(\)

```csharp
public List<ObjectBase> GetInvocationDestroyTargetList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_ObjectEventCore_GetInvocationUpdateTargetList"></a> GetInvocationUpdateTargetList\(\)

```csharp
public List<ObjectBase> GetInvocationUpdateTargetList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_ObjectEventCore_GetObjectDataImpl_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectDataImpl\(SerializationInfo, StreamingContext\)

Serialization function for restore.

```csharp
virtual void GetObjectDataImpl(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### <a id="VM_Managed_ObjectEventCore_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets a updated objects.

```csharp
virtual List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_ObjectEventCore_RemoveInvocationDestroyTargetList_VM_Managed_ObjectBase_"></a> RemoveInvocationDestroyTargetList\(ObjectBase\)

```csharp
public void RemoveInvocationDestroyTargetList(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_ObjectEventCore_RemoveInvocationUpdateTargetList"></a> RemoveInvocationUpdateTargetList\(\)

```csharp
public void RemoveInvocationUpdateTargetList()
```

### <a id="VM_Managed_ObjectEventCore_ReplaceImpl_VM_Managed_ObjectEventCore_"></a> ReplaceImpl\(ObjectEventCore\)

Replace event core [implementation].

```csharp
protected virtual void ReplaceImpl(ObjectEventCore coreOld)
```

#### Parameters

`coreOld` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

The object EventCore.

### <a id="VM_Managed_ObjectEventCore_SetContainer_VM_Models_Pre_IOwned_System_Boolean_"></a> SetContainer\(IOwned, bool\)

```csharp
public virtual void SetContainer(IOwned obOwner, bool bBackup)
```

#### Parameters

`obOwner` IOwned

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectEventCore_SkipUpdateObjectImpl"></a> SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
virtual bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectEventCore_Swap_VM_Managed_ObjectEventCore_VM_Managed_ObjectEventCore_"></a> Swap\(ObjectEventCore, ObjectEventCore\)

```csharp
public static void Swap(ObjectEventCore coreOld, ObjectEventCore coreNew)
```

#### Parameters

`coreOld` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

`coreNew` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

