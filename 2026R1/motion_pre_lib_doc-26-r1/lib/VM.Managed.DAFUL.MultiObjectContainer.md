# Class MultiObjectContainer
<a id="VM_Managed_DAFUL_MultiObjectContainer"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class represents the container for MultiObject class

```csharp
public abstract class MultiObjectContainer : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MultiObjectContainer](VM.Managed.DAFUL.MultiObjectContainer.md)

#### Derived

[MultiObjectContainer1ToN](VM.Managed.DAFUL.MultiObjectContainer1ToN.md), 
[MultiObjectContainerChained](VM.Managed.DAFUL.MultiObjectContainerChained.md), 
[MultiObjectContainerNToN](VM.Managed.DAFUL.MultiObjectContainerNToN.md)

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

### <a id="VM_Managed_DAFUL_MultiObjectContainer__ctor"></a> MultiObjectContainer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected MultiObjectContainer()
```

### <a id="VM_Managed_DAFUL_MultiObjectContainer__ctor_System_Collections_ICollection_"></a> MultiObjectContainer\(ICollection\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContainer(ICollection collection)
```

#### Parameters

`collection` ICollection

The collection of action objects.

## Properties

### <a id="VM_Managed_DAFUL_MultiObjectContainer_Collection"></a> Collection

Gets the collection interface of this container.

```csharp
public ICollection<MultiObjectTarget> Collection { get; }
```

#### Property Value

 ICollection<[MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)\>

### <a id="VM_Managed_DAFUL_MultiObjectContainer_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
protected abstract int Count { get; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_MultiObjectContainer_ObjectBaseList"></a> ObjectBaseList

Gets or sets the object list.

```csharp
protected IList<ObjectBase> ObjectBaseList { get; }
```

#### Property Value

 IList<ObjectBase\>

### <a id="VM_Managed_DAFUL_MultiObjectContainer_ObjectList"></a> ObjectList

Gets or sets the object list.

```csharp
[Obsolete]
protected List<Link<ObjectBase, LinkContainer.None, LinkContainer.Update, LinkContainer.None>> ObjectList { get; set; }
```

#### Property Value

 List<Link<ObjectBase, LinkContainer.None, LinkContainer.Update, LinkContainer.None\>\>

### <a id="VM_Managed_DAFUL_MultiObjectContainer_Objects"></a> Objects

Gets or sets the action objects.

```csharp
public ObjectBase[] Objects { get; set; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_DAFUL_MultiObjectContainer_SwapActionBase"></a> SwapActionBase

Gets or sets a value indicating whether swap base and action object or not.

```csharp
public bool SwapActionBase { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_MultiObjectContainer_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through a collection.

```csharp
protected abstract IEnumerator<MultiObjectTarget> GetEnumerator()
```

#### Returns

 IEnumerator<[MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)\>

An <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> object that can be used to iterate through the collection.

### <a id="VM_Managed_DAFUL_MultiObjectContainer_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

`arg` LinkEventArgs

### <a id="VM_Managed_DAFUL_MultiObjectContainer_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

