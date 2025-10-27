# Class ContactGeomSphere
<a id="VM_Managed_DAFUL_Contact_ContactGeomSphere"></a>

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact geometry sphere.

```csharp
public class ContactGeomSphere : ContactGeomBody<PropertyContactGeomSphere>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IContactGeometry2Dot5D, IContactGeometry2D, IContactGeometry
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<PropertyContactGeomSphere\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[ContactGeomBase<PropertyContactGeomSphere\>](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md) ← 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md) ← 
[ContactGeomBody<PropertyContactGeomSphere\>](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md) ← 
[ContactGeomSphere](VM.Managed.DAFUL.Contact.ContactGeomSphere.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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

[ContactGeomBody<PropertyContactGeomSphere\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[ContactGeomBody<PropertyContactGeomSphere\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ContactGeomBody<PropertyContactGeomSphere\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ContactGeomBody<PropertyContactGeomSphere\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeomBody<PropertyContactGeomSphere\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeomBody<PropertyContactGeomSphere\>.Geometry](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_Geometry), 
[ContactGeomBody<PropertyContactGeomSphere\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GeometryParentKey), 
[ContactGeomBody<PropertyContactGeomSphere\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_GeometryFullName), 
[ContactGeomBody<PropertyContactGeomSphere\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeomBody\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBody\_1\_TargetGeometry), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.GetPointDirection\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.TargetGeometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_TargetGeometry), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.MaxPenetration](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_MaxPenetration), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.\_Geometry](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_\_Geometry), 
[ContactGeom2Dot5D<PropertyContactGeomSphere\>.GeometryParentKey](VM.Managed.DAFUL.Contact.ContactGeom2Dot5D\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeom2Dot5D\_1\_GeometryParentKey), 
[ContactGeomBase<PropertyContactGeomSphere\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ContactGeomBase<PropertyContactGeomSphere\>.FindLocal\(string\)](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_FindLocal\_System\_String\_), 
[ContactGeomBase<PropertyContactGeomSphere\>.ReferenceMarker](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_ReferenceMarker), 
[ContactGeomBase<PropertyContactGeomSphere\>.GeometryFullName](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_GeometryFullName), 
[ContactGeomBase<PropertyContactGeomSphere\>.HasLayerExplicitly](VM.Managed.DAFUL.Contact.ContactGeomBase\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactGeomBase\_1\_HasLayerExplicitly), 
[Entity<PropertyContactGeomSphere\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyContactGeomSphere\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyContactGeomSphere\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyContactGeomSphere\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.HasLayerExplicitly](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsFileProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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

### <a id="VM_Managed_DAFUL_Contact_ContactGeomSphere__ctor"></a> ContactGeomSphere\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomSphere" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ContactGeomSphere()
```

### <a id="VM_Managed_DAFUL_Contact_ContactGeomSphere__ctor_System_String_"></a> ContactGeomSphere\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactGeomSphere" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactGeomSphere(string strName)
```

#### Parameters

`strName` string

Name of the 2D contact geometry .

