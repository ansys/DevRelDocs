# Class MultiObjectContactGeometryFinderByName
<a id="VM_Managed_DAFUL_Contact_MultiObjectContactGeometryFinderByName"></a>

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class implements that find proper contact geometry from <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> by name.

```csharp
public class MultiObjectContactGeometryFinderByName : MultiObjectContactGeometryFinderBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MultiObjectContactGeometryFinderBase](VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderBase.md) ← 
[MultiObjectContactGeometryFinderByName](VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderByName.md)

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

[MultiObjectContactGeometryFinderBase.GetContactGeometry\(ObjectBase\)](VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderBase.md\#VM\_Managed\_DAFUL\_Contact\_MultiObjectContactGeometryFinderBase\_GetContactGeometry\_VM\_Managed\_ObjectBase\_), 
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

### <a id="VM_Managed_DAFUL_Contact_MultiObjectContactGeometryFinderByName__ctor"></a> MultiObjectContactGeometryFinderByName\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderByName" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContactGeometryFinderByName()
```

### <a id="VM_Managed_DAFUL_Contact_MultiObjectContactGeometryFinderByName__ctor_VM_Models_Pre_IOwned_"></a> MultiObjectContactGeometryFinderByName\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderByName" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContactGeometryFinderByName(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Contact_MultiObjectContactGeometryFinderByName_ContactGeometryName"></a> ContactGeometryName

Gets or sets the name of the contact geometry in the assembled body.

```csharp
public string ContactGeometryName { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Contact_MultiObjectContactGeometryFinderByName_GetContactGeometry_VM_Managed_ObjectBase_"></a> GetContactGeometry\(ObjectBase\)

Get contact geometry from the object.

```csharp
public override ObjectBase GetContactGeometry(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object to fing contact geometry.

#### Returns

 ObjectBase

