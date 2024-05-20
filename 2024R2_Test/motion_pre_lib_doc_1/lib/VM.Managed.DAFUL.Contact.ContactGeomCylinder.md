# Class ContactGeomCylinder

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact geometry cylinder.

```csharp
public class ContactGeomCylinder : ContactGeomBody<PropertyContactGeomCylinder>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IContactGeometry2Dot5D, IContactGeometry2D, IContactGeometry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyContactGeomCylinder\> ← 
[ContactGeomBase<PropertyContactGeomCylinder\>](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md) ← 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md) ← 
[ContactGeomBody<PropertyContactGeomCylinder\>](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md) ← 
[ContactGeomCylinder](VM.Managed.DAFUL.Contact.ContactGeomCylinder.md)

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

[ContactGeomBody<PropertyContactGeomCylinder\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[ContactGeomBody<PropertyContactGeomCylinder\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ContactGeomBody<PropertyContactGeomCylinder\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ContactGeomBody<PropertyContactGeomCylinder\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeomBody<PropertyContactGeomCylinder\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeomBody<PropertyContactGeomCylinder\>.Geometry](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_Geometry), 
[ContactGeomBody<PropertyContactGeomCylinder\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GeometryParentKey), 
[ContactGeomBody<PropertyContactGeomCylinder\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GeometryFullName), 
[ContactGeomBody<PropertyContactGeomCylinder\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_TargetGeometry), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_TargetGeometry), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.MaxPenetration](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_MaxPenetration), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.\_Geometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_\_Geometry), 
[ContactGeom2Dot5D<PropertyContactGeomCylinder\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GeometryParentKey), 
[ContactGeomBase<PropertyContactGeomCylinder\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ContactGeomBase<PropertyContactGeomCylinder\>.FindLocal\(string\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_FindLocal\_System\_String\_), 
[ContactGeomBase<PropertyContactGeomCylinder\>.ReferenceMarker](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_ReferenceMarker), 
[ContactGeomBase<PropertyContactGeomCylinder\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_GeometryFullName), 
[ContactGeomBase<PropertyContactGeomCylinder\>.HasLayerExplicitly](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_HasLayerExplicitly), 
Entity<PropertyContactGeomCylinder\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyContactGeomCylinder\>.GetUnnamedObjectName\(object\), 
Entity<PropertyContactGeomCylinder\>.FindLocal\(string\), 
Entity<PropertyContactGeomCylinder\>.Property, 
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

### ContactGeomCylinder\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomCylinder" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ContactGeomCylinder()
```

### ContactGeomCylinder\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomCylinder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactGeomCylinder(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the 2D contact geometry .


