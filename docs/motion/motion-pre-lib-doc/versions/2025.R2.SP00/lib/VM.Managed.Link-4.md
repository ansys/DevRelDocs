#  Class Link<T, TUpdate, TDestroy, TOwnerDestroy\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the linked object relationship with its container object.

```csharp
public class Link<T, TUpdate, TDestroy, TOwnerDestroy> : ITypedLink<T>, ILink, IChangeReference where TUpdate : struct, ILinkContainerEvent.ILinkEventBuilder where TDestroy : struct, ILinkContainerEvent.ILinkEventBuilder where TOwnerDestroy : struct, ILinkContainerEvent.ILinkEventBuilder
```

#### Type Parameters

`T` 

`TUpdate` 

`TDestroy` 

`TOwnerDestroy` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>](VM.Managed.Link\-4.md)

#### Implements

[ITypedLink<T\>](VM.Managed.ITypedLink\-1.md), 
[ILink](VM.Managed.ILink.md), 
[IChangeReference](VM.Managed.IChangeReference.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Link_4__ctor"></a> Link\(\)

```csharp
protected Link()
```

### <a id="VM_Managed_Link_4__ctor_VM_Models_Pre_ILinkContainer_"></a> Link\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Link(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

### <a id="VM_Managed_Link_4__ctor_VM_Models_Pre_ILinkContainer__0_"></a> Link\(ILinkContainer, T\)

Initializes a new instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Link(ILinkContainer objParent, T obj)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

`obj` T

The linked object.

### <a id="VM_Managed_Link_4__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> Link\(SerializationInfo, StreamingContext\)

```csharp
protected Link(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Fields

### <a id="VM_Managed_Link_4_m_obj"></a> m\_obj

```csharp
protected ObjectEventCore m_obj
```

#### Field Value

 [ObjectEventCore](VM.Managed.ObjectEventCore.md)

### <a id="VM_Managed_Link_4_m_objLinkOwner"></a> m\_objLinkOwner

```csharp
protected ILinkContainer m_objLinkOwner
```

#### Field Value

 ILinkContainer

## Properties

### <a id="VM_Managed_Link_4_FullName"></a> FullName

Gets the linked object's full name.

```csharp
public string FullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Link_4_IsReference"></a> IsReference

Gets a value indicating whether linked object is the reference.

```csharp
public bool IsReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Link_4_LinkedObj"></a> LinkedObj

Gets the object container that has a relation with this.

```csharp
override sealed ILinkContainer LinkedObj { get; }
```

#### Property Value

 ILinkContainer

### <a id="VM_Managed_Link_4_Name"></a> Name

Gets the linked object's name.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Link_4_Object"></a> Object

Gets or sets the linked object.

```csharp
public virtual T Object { get; set; }
```

#### Property Value

 T

### <a id="VM_Managed_Link_4_Prototype"></a> Prototype

Gets the linked object's prototype.

```csharp
public T Prototype { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_Link_4_ClearBeforeDeserialize"></a> ClearBeforeDeserialize\(\)

Disconnect the link relation before deserialize.

```csharp
virtual void ClearBeforeDeserialize()
```

### <a id="VM_Managed_Link_4_ClearBeforeSwap"></a> ClearBeforeSwap\(\)

Disconnect the link relation before undo/redo.

```csharp
virtual void ClearBeforeSwap()
```

### <a id="VM_Managed_Link_4_DestroyObject_System_Object_VM_Managed_LinkEventArgs_"></a> DestroyObject\(object, LinkEventArgs\)

Destroy this link

```csharp
virtual void DestroyObject(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The linked object.</p>

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

<p>The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.</p>

### <a id="VM_Managed_Link_4_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Link_4_Dispose"></a> Dispose\(\)

destroy a instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_Link_4_GetChilds_System_Collections_Generic_HashSet_VM_Models_Pre_ILinkContainer__"></a> GetChilds\(HashSet<ILinkContainer\>\)

```csharp
virtual void GetChilds(HashSet<ILinkContainer> A_0)
```

#### Parameters

`A_0` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<ILinkContainer\>

### <a id="VM_Managed_Link_4_GetFirstDesignEntities"></a> GetFirstDesignEntities\(\)

Get first design entities.

```csharp
virtual IEnumerable<IObject> GetFirstDesignEntities()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

### <a id="VM_Managed_Link_4_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
virtual void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_Link_4_RegisterEvent_System_Boolean_"></a> RegisterEvent\(bool\)

```csharp
protected virtual void RegisterEvent(bool bBackup)
```

#### Parameters

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Link_4_Reserve_VM_Managed_LinkEventArgs_"></a> Reserve\(LinkEventArgs\)

Reserve link.

```csharp
virtual bool Reserve(LinkEventArgs args)
```

#### Parameters

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The event argument.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if succeess to reserve, otherwise false.

### <a id="VM_Managed_Link_4_SetModified"></a> SetModified\(\)

set modified link for undo/redo

```csharp
virtual void SetModified()
```

### <a id="VM_Managed_Link_4_UnregisterEvent_System_Boolean_"></a> UnregisterEvent\(bool\)

```csharp
protected virtual void UnregisterEvent(bool bBackup)
```

#### Parameters

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### <a id="VM_Managed_Link_4_op_Implicit_VM_Managed_Link__0__1__2__3___VM_Managed_Linker__0_"></a> implicit operator Linker<T\>\(Link<T, TUpdate, TDestroy, TOwnerDestroy\>\)

```csharp
public static implicit operator Linker<T>(Link<T, TUpdate, TDestroy, TOwnerDestroy> lnk)
```

#### Parameters

`lnk` [Link](VM.Managed.Link\-4.md)<T, TUpdate, TDestroy, TOwnerDestroy\>

#### Returns

 [Linker](VM.Managed.Linker\-1.md)<T\>

