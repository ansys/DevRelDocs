#  Class PathGroup

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the path group.

```csharp
public class PathGroup : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PathGroup](VM.Managed.DAFUL.CPlacingConnector.PathGroup.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup__ctor"></a> PathGroup\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PathGroup" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PathGroup()
```

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_Information"></a> Information

Gets or sets the path list.

```csharp
public PathInformation[] Information { get; set; }
```

#### Property Value

 [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)\[\]

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_Items"></a> Items

Gets or sets the segment list.

```csharp
public ObjectBase[] Items { get; set; }
```

#### Property Value

 ObjectBase\[\]

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_AddInformation_VM_Managed_DAFUL_CPlacingConnector_PathInformation_"></a> AddInformation\(PathInformation\)

Add information

```csharp
public void AddInformation(PathInformation pathInformation)
```

#### Parameters

`pathInformation` [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)

The path information

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_AddItem_VM_Managed_ObjectBase_"></a> AddItem\(ObjectBase\)

Add segment

```csharp
public void AddItem(ObjectBase item)
```

#### Parameters

`item` ObjectBase

The segment

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_FindInformation_System_String_"></a> FindInformation\(string\)

Find information

```csharp
public PathInformation FindInformation(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path name

#### Returns

 [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_FindItemWithInformation_VM_Managed_DAFUL_CPlacingConnector_PathInformation_VM_Managed_Document_"></a> FindItemWithInformation\(PathInformation, Document\)

Find item with information

```csharp
public InstanceContainer FindItemWithInformation(PathInformation pathInformation, Document document)
```

#### Parameters

`pathInformation` [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)

The path information

`document` Document

The document

#### Returns

 InstanceContainer

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_FindPathWithInformation_VM_Managed_DAFUL_CPlacingConnector_PathInformation_VM_Managed_Document_"></a> FindPathWithInformation\(PathInformation, Document\)

Find path with information

```csharp
public Document3D FindPathWithInformation(PathInformation pathInformation, Document document)
```

#### Parameters

`pathInformation` [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)

The path information

`document` Document

The document

#### Returns

 Document3D

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_RemoveInformation_VM_Managed_DAFUL_CPlacingConnector_PathInformation_"></a> RemoveInformation\(PathInformation\)

Remove information

```csharp
public void RemoveInformation(PathInformation pathInformation)
```

#### Parameters

`pathInformation` [PathInformation](VM.Managed.DAFUL.CPlacingConnector.PathInformation.md)

The path information

### <a id="VM_Managed_DAFUL_CPlacingConnector_PathGroup_RemoveItem_VM_Managed_ObjectBase_"></a> RemoveItem\(ObjectBase\)

Remove segment

```csharp
public void RemoveItem(ObjectBase item)
```

#### Parameters

`item` ObjectBase

The segment

