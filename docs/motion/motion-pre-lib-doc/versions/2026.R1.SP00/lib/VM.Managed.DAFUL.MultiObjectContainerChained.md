# Class MultiObjectContainerChained
<a id="VM_Managed_DAFUL_MultiObjectContainerChained"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the Chained Multi Object Container

```csharp
public class MultiObjectContainerChained : MultiObjectContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MultiObjectContainer](VM.Managed.DAFUL.MultiObjectContainer.md) ← 
[MultiObjectContainerChained](VM.Managed.DAFUL.MultiObjectContainerChained.md)

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

[MultiObjectContainer.GetEnumerator\(\)](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_GetEnumerator), 
[MultiObjectContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[MultiObjectContainer.OnDeserialization\(object\)](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_OnDeserialization\_System\_Object\_), 
[MultiObjectContainer.SwapActionBase](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_SwapActionBase), 
[MultiObjectContainer.Collection](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_Collection), 
[MultiObjectContainer.Count](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_Count), 
[MultiObjectContainer.Objects](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_Objects), 
[MultiObjectContainer.ObjectList](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_ObjectList), 
[MultiObjectContainer.ObjectBaseList](VM.Managed.DAFUL.MultiObjectContainer.md\#VM\_Managed\_DAFUL\_MultiObjectContainer\_ObjectBaseList), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_MultiObjectContainerChained__ctor_System_Collections_ICollection_"></a> MultiObjectContainerChained\(ICollection\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectContainerChained" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainerChained(ICollection collection)
```

#### Parameters

`collection` ICollection

The collection of action objects.

### <a id="VM_Managed_DAFUL_MultiObjectContainerChained__ctor_System_Collections_ICollection_System_Boolean_"></a> MultiObjectContainerChained\(ICollection, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectContainerChained" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainerChained(ICollection collection, bool isClosed)
```

#### Parameters

`collection` ICollection

The collection of action objects.

`isClosed` bool

<code>true</code> if chained object makes closed loop; otherwise, <code>false</code>;

## Properties

### <a id="VM_Managed_DAFUL_MultiObjectContainerChained_ClosedState"></a> ClosedState

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.MultiObjectContainerChained" data-throw-if-not-resolved="false"></xref> is closed.
Use SetClosedState() when this instance sets for undo/redo

```csharp
public bool ClosedState { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_MultiObjectContainerChained_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
protected override int Count { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_MultiObjectContainerChained_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through a collection.

```csharp
protected override IEnumerator<MultiObjectTarget> GetEnumerator()
```

#### Returns

 IEnumerator<[MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)\>

An <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> object that can be used to iterate through the collection.

