#  Class ContactGeomBody<TProperty\>

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact geometry body.

```csharp
public abstract class ContactGeomBody<TProperty> : ContactGeom2Dot5D<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IContactGeometry2Dot5D, IContactGeometry2D, IContactGeometry where TProperty : Property, new()
```

#### Type Parameters

`TProperty` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<TProperty\> ← 
[ContactGeomBase<TProperty\>](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md) ← 
[ContactGeom2Dot5D<TProperty\>](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md) ← 
[ContactGeomBody<TProperty\>](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md)

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

[ContactGeom2Dot5D<TProperty\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<TProperty\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<TProperty\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_TargetGeometry), 
[ContactGeom2Dot5D<TProperty\>.MaxPenetration](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_MaxPenetration), 
[ContactGeom2Dot5D<TProperty\>.\_Geometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_\_Geometry), 
[ContactGeom2Dot5D<TProperty\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GeometryParentKey), 
[ContactGeomBase<TProperty\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ContactGeomBase<TProperty\>.FindLocal\(string\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_FindLocal\_System\_String\_), 
[ContactGeomBase<TProperty\>.ReferenceMarker](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_ReferenceMarker), 
[ContactGeomBase<TProperty\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_GeometryFullName), 
[ContactGeomBase<TProperty\>.HasLayerExplicitly](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_HasLayerExplicitly), 
Entity<TProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<TProperty\>.GetUnnamedObjectName\(object\), 
Entity<TProperty\>.FindLocal\(string\), 
Entity<TProperty\>.Property, 
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

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1__ctor"></a> ContactGeomBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomBody%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ContactGeomBody()
```

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1__ctor_System_String_"></a> ContactGeomBody\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomBody%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactGeomBody(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the 2D contact geometry .

## Properties

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_Geometry"></a> Geometry

Gets or sets the geometry.

```csharp
public ObjectBase Geometry { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_GeometryFullName"></a> GeometryFullName

Gets the full name of the geometry.

```csharp
public override string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_GeometryParentKey"></a> GeometryParentKey

Get geometry parent key

```csharp
public override ObjectBase.ConvertKey GeometryParentKey { get; }
```

#### Property Value

 ObjectBase.ConvertKey

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_TargetGeometry"></a> TargetGeometry

Gets or sets the target geometry.

```csharp
public override ObjectBase TargetGeometry { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirection\(ref VectorBase, ref VectorBase\)

Gets the point direction.

```csharp
public override bool GetPointDirection(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)

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

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Contact_ContactGeomBody_1_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

