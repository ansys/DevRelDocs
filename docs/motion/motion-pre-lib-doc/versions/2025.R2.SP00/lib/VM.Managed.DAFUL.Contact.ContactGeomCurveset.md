#  Class ContactGeomCurveset

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact geometry 2.5D.

```csharp
public class ContactGeomCurveset : ContactGeom2Dot5D<PropertyContactGeomCurveset>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IContactGeometry2Dot5D, IContactGeometry2D, IContactGeometry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyContactGeomCurveset\> ← 
[ContactGeomBase<PropertyContactGeomCurveset\>](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md) ← 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md) ← 
[ContactGeomCurveset](VM.Managed.DAFUL.Contact.ContactGeomCurveset.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
IEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
[IContactGeometry2Dot5D](VM.Managed.DAFUL.Contact.IContactGeometry2Dot5D.md), 
IContactGeometry2D, 
IContactGeometry

#### Inherited Members

[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_TargetGeometry), 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.MaxPenetration](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_MaxPenetration), 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.\_Geometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_\_Geometry), 
[ContactGeom2Dot5D<PropertyContactGeomCurveset\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GeometryParentKey), 
[ContactGeomBase<PropertyContactGeomCurveset\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ContactGeomBase<PropertyContactGeomCurveset\>.FindLocal\(string\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_FindLocal\_System\_String\_), 
[ContactGeomBase<PropertyContactGeomCurveset\>.ReferenceMarker](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_ReferenceMarker), 
[ContactGeomBase<PropertyContactGeomCurveset\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_GeometryFullName), 
[ContactGeomBase<PropertyContactGeomCurveset\>.HasLayerExplicitly](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_HasLayerExplicitly), 
Entity<PropertyContactGeomCurveset\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyContactGeomCurveset\>.GetUnnamedObjectName\(object\), 
Entity<PropertyContactGeomCurveset\>.FindLocal\(string\), 
Entity<PropertyContactGeomCurveset\>.Property, 
EntityBase.Initialize\(Unit.ConvertFactor\), 
EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\), 
EntityBase.OnDeserializationForAttribute\(\), 
EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
EntityBase.LinkRequestDestroying\(object, LinkEventArgs\), 
EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
EntityBase.FixUp\(ObjectBase\), 
EntityBase.FindLocal\(string\), 
EntityBase.WriteTemplateImpl\(XmlWriter\), 
EntityBase.ReadTemplateImpl\(XmlReader\), 
EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
EntityBase.OnDeserialization\(object\), 
EntityBase.Name, 
EntityBase.FullName, 
EntityBase.NonSymmetricName, 
EntityBase.DisplayName, 
EntityBase.IsEnabled, 
EntityBase.Comment, 
EntityBase.HasLayerExplicitly, 
EntityBase.UntypedProperty, 
EntityBase.IsFileProperty, 
EntityBase.Layer, 
EntityBase.IsVisible, 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset__ctor"></a> ContactGeomCurveset\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomCurveset" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ContactGeomCurveset()
```

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset__ctor_System_String_"></a> ContactGeomCurveset\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomCurveset" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactGeomCurveset(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the contact geometry .

## Properties

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_CurvesetList"></a> CurvesetList

Gets or sets the curveset link container.

```csharp
public IContactableRigid2D[] CurvesetList { get; set; }
```

#### Property Value

 IContactableRigid2D\[\]

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GeometryFullName"></a> GeometryFullName

Gets the full name of the geometry.

```csharp
public override string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GeometryParentKey"></a> GeometryParentKey

Get geometry parent key

```csharp
public override ObjectBase.ConvertKey GeometryParentKey { get; }
```

#### Property Value

 ObjectBase.ConvertKey

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_ParentBody"></a> ParentBody

Gets or sets the geometry.

```csharp
public ObjectBase ParentBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_TargetGeometry"></a> TargetGeometry

Gets or sets the target geometry.

```csharp
public override ObjectBase TargetGeometry { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset__CurvesetList"></a> \_CurvesetList

Gets or sets the curveset link container.

```csharp
public Linker<IContactableRigid2D>[] _CurvesetList { get; set; }
```

#### Property Value

 Linker<IContactableRigid2D\>\[\]

## Methods

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_AddCurveset_VM_Managed_DAFUL_IContactableRigid2D_"></a> AddCurveset\(IContactableRigid2D\)

Adds the curveset.

```csharp
public void AddCurveset(IContactableRigid2D cs)
```

#### Parameters

`cs` IContactableRigid2D

The curveset.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetCurvesetsIncludeSlice_System_Int32_System_Boolean_"></a> GetCurvesetsIncludeSlice\(int, bool\)

Gets or sets the curveset include slice link container.

```csharp
public IContactableRigid2D[] GetCurvesetsIncludeSlice(int nSlice, bool bOrigin)
```

#### Parameters

`nSlice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of slice.

`bOrigin` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The original geometry position.

#### Returns

 IContactableRigid2D\[\]

The curveset include slice link container.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetCurvesetsIncludeSlice_System_Boolean_"></a> GetCurvesetsIncludeSlice\(bool\)

Gets or sets the curveset include slice link container.

```csharp
public IContactableRigid2D[] GetCurvesetsIncludeSlice(bool bOrigin)
```

#### Parameters

`bOrigin` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The original geometry position.

#### Returns

 IContactableRigid2D\[\]

The curveset include slice link container.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [base].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirection\(ref VectorBase, ref VectorBase\)

Gets the normal origin point and direction.

```csharp
public override bool GetPointDirection(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The normal origin point.

`direction` VectorBase

The normal direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)

Gets the normal origin point and direction.

```csharp
public override bool GetPointDirectionOnGeometry(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The normal origin point.

`direction` VectorBase

The normal direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetPoints_VM_Managed_DAFUL_IContactableRigid2D_"></a> GetPoints\(IContactableRigid2D\)

Get Points with sorting.

```csharp
public VectorBase[] GetPoints(IContactableRigid2D icurve)
```

#### Parameters

`icurve` IContactableRigid2D

The curveset.

#### Returns

 VectorBase\[\]

The curveset points with sorting.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_GetPointsAboutOrigin_VM_Managed_DAFUL_IContactableRigid2D_"></a> GetPointsAboutOrigin\(IContactableRigid2D\)

Get Points with sorting.

```csharp
public VectorBase[] GetPointsAboutOrigin(IContactableRigid2D icurve)
```

#### Parameters

`icurve` IContactableRigid2D

The curveset.

#### Returns

 VectorBase\[\]

The curveset points with sorting.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomCurveset_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink link, object objNotifier, EventArgs args)
```

#### Parameters

`link` ILink

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

