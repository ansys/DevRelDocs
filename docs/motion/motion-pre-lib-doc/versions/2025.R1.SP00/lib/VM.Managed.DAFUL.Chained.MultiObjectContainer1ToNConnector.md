#  Class MultiObjectContainer1ToNConnector

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class is to represent the 1-to-N Multi Object Connector.

```csharp
public class MultiObjectContainer1ToNConnector : MultiObjectContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
MultiObjectContainer ← 
[MultiObjectContainer1ToNConnector](VM.Managed.DAFUL.Chained.MultiObjectContainer1ToNConnector.md)

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

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainer1ToNConnector__ctor_System_Collections_ICollection_"></a> MultiObjectContainer1ToNConnector\(ICollection\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.MultiObjectContainer1ToNConnector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainer1ToNConnector(ICollection collection)
```

#### Parameters

`collection` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection)

The collection of objects.

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainer1ToNConnector__ctor_System_Collections_ICollection_System_Boolean_"></a> MultiObjectContainer1ToNConnector\(ICollection, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.MultiObjectContainer1ToNConnector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainer1ToNConnector(ICollection collection, bool isClosed)
```

#### Parameters

`collection` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection)

The collection of objects.

`isClosed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if chained object makes closed loop; otherwise, <code>false</code>;

## Properties

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainer1ToNConnector_ClosedState"></a> ClosedState

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.Chained.MultiObjectContainer1ToNConnector" data-throw-if-not-resolved="false"></xref> is closed.

```csharp
public bool ClosedState { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainer1ToNConnector_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
protected override int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Chained_MultiObjectContainer1ToNConnector_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through a collection.

```csharp
protected override IEnumerator<MultiObjectTarget> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<MultiObjectTarget\>

An <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> object that can be used to iterate through the collection.

