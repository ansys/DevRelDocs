#  Class LinkDictionaryCollection<T, TValue\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public class LinkDictionaryCollection<T, TValue> : LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue>>, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, ILinkCollection, IPostDeserialized where T : class, ObjectBase
```

#### Type Parameters

`T` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md) ← 
[LinkDictionaryCollection<T, TValue\>](VM.Managed.Collections.LinkDictionaryCollection\-2.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Inherited Members

[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_raise\_CollectionChanged\_System\_Object\_System\_Collections\_Specialized\_NotifyCollectionChangedEventArgs\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.GetObjectDataImpl\(SerializationInfo, StreamingContext\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_GetObjectDataImpl\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.IsSerializableEvent\(Delegate\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_IsSerializableEvent\_System\_Delegate\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.ContainsPtrKey\(UIntPtr\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_ContainsPtrKey\_System\_UIntPtr\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Add\(T, TValue\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Add\_\_0\_\_1\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.ContainsKey\(T\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_ContainsKey\_\_0\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Remove\(T\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Remove\_\_0\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.TryGetValue\(T, ref TValue\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_TryGetValue\_\_0\_\_1\_\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Clear\(\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Clear), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.IsExternable](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_IsExternable), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.IsReadOnly](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_IsReadOnly), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Count](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Count), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Values](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Values), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.Keys](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Keys), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.this\[T\]](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_Item\_\_0\_), 
[LinkDictionaryCollectionBase<T, TValue, TValue, LinkDictionaryValueSimpleConverter<TValue\>\>.CollectionChanged](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md\#VM\_Managed\_Collections\_LinkDictionaryCollectionBase\_4\_CollectionChanged), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
LinkableBase.OnDeserialization\(object\), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Collections_LinkDictionaryCollection_2__ctor"></a> LinkDictionaryCollection\(\)

```csharp
public LinkDictionaryCollection()
```

### <a id="VM_Managed_Collections_LinkDictionaryCollection_2__ctor_VM_Models_Pre_IOwned_"></a> LinkDictionaryCollection\(IOwned\)

```csharp
public LinkDictionaryCollection(IOwned owner)
```

#### Parameters

`owner` IOwned

### <a id="VM_Managed_Collections_LinkDictionaryCollection_2__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> LinkDictionaryCollection\(SerializationInfo, StreamingContext\)

```csharp
protected LinkDictionaryCollection(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

