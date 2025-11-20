# Class CheckedLink<T, TUpdate, TDestroy, TOwnerDestroy\>
<a id="VM_Managed_CheckedLink_4"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the Link that contains check property.

```csharp
public class CheckedLink<T, TUpdate, TDestroy, TOwnerDestroy> : Link<T, TUpdate, TDestroy, TOwnerDestroy>, ITypedLink<T>, ILink, IChangeReference where TUpdate : struct, ILinkContainerEvent.ILinkEventBuilder where TDestroy : struct, ILinkContainerEvent.ILinkEventBuilder where TOwnerDestroy : struct, ILinkContainerEvent.ILinkEventBuilder
```

#### Type Parameters

`T` 

`TUpdate` 

`TDestroy` 

`TOwnerDestroy` 

#### Inheritance

object ← 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>](VM.Managed.Link\-4.md) ← 
[CheckedLink<T, TUpdate, TDestroy, TOwnerDestroy\>](VM.Managed.CheckedLink\-4.md)

#### Implements

[ITypedLink<T\>](VM.Managed.ITypedLink\-1.md), 
[ILink](VM.Managed.ILink.md), 
[IChangeReference](VM.Managed.IChangeReference.md)

#### Inherited Members

[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.m\_obj](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_m\_obj), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.m\_objLinkOwner](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_m\_objLinkOwner), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.UnregisterEvent\(bool\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_UnregisterEvent\_System\_Boolean\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.RegisterEvent\(bool\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_RegisterEvent\_System\_Boolean\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.GetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_GetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.ClearBeforeDeserialize\(\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_ClearBeforeDeserialize), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.ClearBeforeSwap\(\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_ClearBeforeSwap), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Reserve\(LinkEventArgs\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Reserve\_VM\_Managed\_LinkEventArgs\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.SetModified\(\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_SetModified), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.GetChilds\(HashSet<ILinkContainer\>\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_GetChilds\_System\_Collections\_Generic\_HashSet\_VM\_Models\_Pre\_ILinkContainer\_\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.GetFirstDesignEntities\(\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_GetFirstDesignEntities), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.DestroyObject\(object, LinkEventArgs\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_DestroyObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Dispose\(bool\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Dispose\_System\_Boolean\_), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Dispose\(\)](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Dispose), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.LinkedObj](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_LinkedObj), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.FullName](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_FullName), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Name](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Name), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.IsReference](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_IsReference), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Object](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Object), 
[Link<T, TUpdate, TDestroy, TOwnerDestroy\>.Prototype](VM.Managed.Link\-4.md\#VM\_Managed\_Link\_4\_Prototype)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CheckedLink_4__ctor"></a> CheckedLink\(\)

```csharp
protected CheckedLink()
```

### <a id="VM_Managed_CheckedLink_4__ctor_VM_Models_Pre_ILinkContainer_"></a> CheckedLink\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.CheckedLink%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CheckedLink(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

### <a id="VM_Managed_CheckedLink_4__ctor_VM_Models_Pre_ILinkContainer__0_"></a> CheckedLink\(ILinkContainer, T\)

Initializes a new instance of the <xref href="VM.Managed.CheckedLink%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CheckedLink(ILinkContainer objParent, T obj)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

`obj` T

The linked object.

### <a id="VM_Managed_CheckedLink_4__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> CheckedLink\(SerializationInfo, StreamingContext\)

```csharp
protected CheckedLink(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` SerializationInfo

`context` StreamingContext

## Properties

### <a id="VM_Managed_CheckedLink_4_Checked"></a> Checked

Gets or sets the checked state.

```csharp
public bool Checked { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_CheckedLink_4_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
protected override void GetObjectData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` SerializationInfo

`context` StreamingContext

### <a id="VM_Managed_CheckedLink_4_OnResetLink"></a> OnResetLink\(\)

```csharp
protected virtual void OnResetLink()
```

