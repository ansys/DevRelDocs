#  Class MultiObjectContainerMToN

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class represents the container for MultiObject class

```csharp
public class MultiObjectContainerMToN : MultiObjectContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
MultiObjectContainer ← 
[MultiObjectContainerMToN](VM.Managed.DAFUL.Chained.MultiObjectContainerMToN.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

MultiObjectContainer.GetEnumerator\(\), 
MultiObjectContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
MultiObjectContainer.OnDeserialization\(object\), 
MultiObjectContainer.SwapActionBase, 
MultiObjectContainer.Collection, 
MultiObjectContainer.Count, 
MultiObjectContainer.Objects, 
MultiObjectContainer.ObjectList, 
MultiObjectContainer.ObjectBaseList, 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN__ctor_System_Collections_ICollection_"></a> MultiObjectContainerMToN\(ICollection\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.MultiObjectContainerMToN" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainerMToN(ICollection collection)
```

#### Parameters

`collection` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection)

The collection of objects.

## Properties

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_BaseObjectCollection"></a> BaseObjectCollection

Gets or sets the object list.

```csharp
protected IList<ObjectBase> BaseObjectCollection { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_BaseObjectList"></a> BaseObjectList

Gets or sets the object list.

```csharp
[Obsolete]
protected List<Link<ObjectBase, LinkContainer.None, LinkContainer.Update, LinkContainer.None>> BaseObjectList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Link<ObjectBase, LinkContainer.None, LinkContainer.Update, LinkContainer.None\>\>

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_BaseObjects"></a> BaseObjects

Gets or sets the Base objects.

```csharp
public ObjectBase[] BaseObjects { get; set; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
protected override int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_NumberOfBackward"></a> NumberOfBackward

Gets and sets the number of backward segment.

```csharp
public int NumberOfBackward { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_NumberOfForward"></a> NumberOfForward

Gets and sets the number of forward segment.

```csharp
public int NumberOfForward { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through a collection.

```csharp
protected override IEnumerator<MultiObjectTarget> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<MultiObjectTarget\>

An <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> object that can be used to iterate through the collection.

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainerMToN_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

