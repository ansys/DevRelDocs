# Class SegmentGroup
<a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup"></a>

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the segment group.

```csharp
public class SegmentGroup : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[SegmentGroup](VM.Managed.DAFUL.CPlacingConnector.SegmentGroup.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup__ctor"></a> SegmentGroup\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.SegmentGroup" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SegmentGroup()
```

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_Information"></a> Information

Gets or sets the segment information list.

```csharp
public SegmentInformation[] Information { get; set; }
```

#### Property Value

 [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)\[\]

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_Items"></a> Items

Gets or sets the segment list.

```csharp
public ObjectBase[] Items { get; set; }
```

#### Property Value

 ObjectBase\[\]

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_AddInformation_VM_Managed_DAFUL_CPlacingConnector_SegmentInformation_"></a> AddInformation\(SegmentInformation\)

Add information

```csharp
public void AddInformation(SegmentInformation segmentInformation)
```

#### Parameters

`segmentInformation` [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)

The segment information

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_AddItem_VM_Managed_ObjectBase_"></a> AddItem\(ObjectBase\)

Add segment

```csharp
public void AddItem(ObjectBase item)
```

#### Parameters

`item` ObjectBase

The segment

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_FindInformation_System_String_"></a> FindInformation\(string\)

Find information

```csharp
public SegmentInformation FindInformation(string strSegmentName)
```

#### Parameters

`strSegmentName` string

The segment name

#### Returns

 [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_FindItemWithInformation_VM_Managed_DAFUL_CPlacingConnector_SegmentInformation_VM_Managed_Document_"></a> FindItemWithInformation\(SegmentInformation, Document\)

Find item with information

```csharp
public InstanceContainer FindItemWithInformation(SegmentInformation segmentInformation, Document document)
```

#### Parameters

`segmentInformation` [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)

The segment information

`document` Document

The document

#### Returns

 [InstanceContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs)

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_FindSegmentWithInformation_VM_Managed_DAFUL_CPlacingConnector_SegmentInformation_VM_Managed_Document_"></a> FindSegmentWithInformation\(SegmentInformation, Document\)

Find segment with information

```csharp
public Document3D FindSegmentWithInformation(SegmentInformation segmentInformation, Document document)
```

#### Parameters

`segmentInformation` [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)

The segment information

`document` Document

The document

#### Returns

 Document3D

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_GetStiffnessWithTwoConnector_System_String_System_String_System_String_"></a> GetStiffnessWithTwoConnector\(string, string, string\)

Gets stiffness with two connector

```csharp
public VectorBase GetStiffnessWithTwoConnector(string strBaseSegmentName, string strActionSegmentName, string strStiffnessName)
```

#### Parameters

`strBaseSegmentName` string

The base segment name

`strActionSegmentName` string

The action segment name

`strStiffnessName` string

The stiffness name

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_RemoveInformation_VM_Managed_DAFUL_CPlacingConnector_SegmentInformation_"></a> RemoveInformation\(SegmentInformation\)

Remove information

```csharp
public void RemoveInformation(SegmentInformation segmentInformation)
```

#### Parameters

`segmentInformation` [SegmentInformation](VM.Managed.DAFUL.CPlacingConnector.SegmentInformation.md)

The segment information

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentGroup_RemoveItem_VM_Managed_ObjectBase_"></a> RemoveItem\(ObjectBase\)

Remove segment

```csharp
public void RemoveItem(ObjectBase item)
```

#### Parameters

`item` ObjectBase

The segment

