# Class Link<T, TUpdate, TDestroy, TOwnerDestroy\>

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

### Link\(\)

```csharp
protected Link()
```

### Link\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Link(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

### Link\(ILinkContainer, T\)

Initializes a new instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Link(ILinkContainer objParent, T obj)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

`obj` T

The linked object.

### Link\(SerializationInfo, StreamingContext\)

```csharp
protected Link(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Fields

### m\_obj

```csharp
protected ObjectEventCore m_obj
```

#### Field Value

 [ObjectEventCore](VM.Managed.ObjectEventCore.md)

### m\_objLinkOwner

```csharp
protected ILinkContainer m_objLinkOwner
```

#### Field Value

 ILinkContainer

## Properties

### FullName

Gets the linked object's full name.

```csharp
public string FullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsReference

Gets a value indicating whether linked object is the reference.

```csharp
public bool IsReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkedObj

Gets the object container that has a relation with this.

```csharp
override sealed ILinkContainer LinkedObj { get; }
```

#### Property Value

 ILinkContainer

### Name

Gets the linked object's name.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Object

Gets or sets the linked object.

```csharp
public virtual T Object { get; set; }
```

#### Property Value

 T

### Prototype

Gets the linked object's prototype.

```csharp
public T Prototype { get; }
```

#### Property Value

 T

## Methods

### ClearBeforeDeserialize\(\)

Disconnect the link relation before deserialize.

```csharp
virtual void ClearBeforeDeserialize()
```

### ClearBeforeSwap\(\)

Disconnect the link relation before undo/redo.

```csharp
virtual void ClearBeforeSwap()
```

### DestroyObject\(object, LinkEventArgs\)

Destroy this link

```csharp
virtual void DestroyObject(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The linked object.</p>

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

<p>The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.</p>

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

destroy a instance of the <xref href="VM.Managed.Link%604" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### GetChilds\(HashSet<ILinkContainer\>\)

```csharp
virtual void GetChilds(HashSet<ILinkContainer> A_0)
```

#### Parameters

`A_0` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<ILinkContainer\>

### GetFirstDesignEntities\(\)

Get first design entities.

```csharp
virtual IEnumerable<IObject> GetFirstDesignEntities()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

### GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
virtual void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### RegisterEvent\(bool\)

```csharp
protected virtual void RegisterEvent(bool bBackup)
```

#### Parameters

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Reserve\(LinkEventArgs\)

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

### SetModified\(\)

set modified link for undo/redo

```csharp
virtual void SetModified()
```

### UnregisterEvent\(bool\)

```csharp
protected virtual void UnregisterEvent(bool bBackup)
```

#### Parameters

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### implicit operator Linker<T\>\(Link<T, TUpdate, TDestroy, TOwnerDestroy\>\)

```csharp
public static implicit operator Linker<T>(Link<T, TUpdate, TDestroy, TOwnerDestroy> lnk)
```

#### Parameters

`lnk` [Link](VM.Managed.Link\-4.md)<T, TUpdate, TDestroy, TOwnerDestroy\>

#### Returns

 [Linker](VM.Managed.Linker\-1.md)<T\>


