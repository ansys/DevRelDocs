# Class Tie

Namespace: [VM.Managed.DAFUL.MeshFree.Contact](VM.Managed.DAFUL.MeshFree.Contact.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the tie in mesh free.

```csharp
[Obsolete]
public class Tie : TieBase<PropertyTie>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IGenerable, IReportable, IFlip, IEntityRelation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyTie\> ← 
TieBase<PropertyTie\> ← 
[Tie](VM.Managed.DAFUL.MeshFree.Contact.Tie.md)

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
IDraw, 
IDrawIcon, 
IDrawChangeFacet, 
IGenerable, 
IReportable, 
IFlip, 
IEntityRelation

#### Inherited Members

TieBase<PropertyTie\>.Initialize\(Unit.ConvertFactor\), 
TieBase<PropertyTie\>.GetUnnamedObjectName\(object\), 
TieBase<PropertyTie\>.FindLocal\(string\), 
TieBase<PropertyTie\>.OnDeserialization\(object\), 
TieBase<PropertyTie\>.LinkRequestUpdate\(object, LinkEventArgs\), 
TieBase<PropertyTie\>.Draw\(Canvas\), 
TieBase<PropertyTie\>.ReDraw\(\), 
TieBase<PropertyTie\>.ReplaceEntityImpl\(Document, IGenerable\), 
TieBase<PropertyTie\>.BaseGeom, 
TieBase<PropertyTie\>.ActionGeom, 
TieBase<PropertyTie\>.NameOfBaseBody, 
TieBase<PropertyTie\>.NameOfActionBody, 
TieBase<PropertyTie\>.HasLayerExplicitly, 
TieBase<PropertyTie\>.Hide, 
TieBase<PropertyTie\>.GenerableImpl, 
TieBase<PropertyTie\>.CanSwitchImpl, 
Entity<PropertyTie\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyTie\>.GetUnnamedObjectName\(object\), 
Entity<PropertyTie\>.FindLocal\(string\), 
Entity<PropertyTie\>.Property, 
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

[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_), 
[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer, string\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_System\_String\_), 
[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer, string, VectorBase\[\], uint\[\], VectorBase\[\], uint\[\]\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_System\_String\_VM\_Managed\_VectorBase\_\_\_System\_UInt32\_\_\_VM\_Managed\_VectorBase\_\_\_System\_UInt32\_\_\_), 
[BodyHelper.GenerateMeshInfo\(IAttributeContainer, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\], bool\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_GenerateMeshInfo\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_MeshFreeMeshType\_\_VM\_Managed\_VectorBase\_\_\_\_System\_UInt32\_\_\_\_VM\_Managed\_VectorBase\_\_\_\_System\_UInt32\_\_\_\_System\_Boolean\_), 
[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BodyHelper.GetMeshFreeDefaultMaxFacetSize\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_GetMeshFreeDefaultMaxFacetSize\_VM\_Managed\_IAttributeContainer\_), 
[BodyHelper.UpdateMeshFreeNodePropertyAndMaxFacetSize\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_UpdateMeshFreeNodePropertyAndMaxFacetSize\_VM\_Managed\_IAttributeContainer\_)

## Constructors

### Tie\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.Contact.Tie" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tie()
```

### Tie\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.Contact.Tie" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tie(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### GenerableImpl

Gets a value indicating whether this instance is generable.

```csharp
protected override bool GenerableImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### LinkRequestUpdate\(object, LinkEventArgs\)

Tie for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### ReplaceEntityImpl\(Document, IGenerable\)

Replace entity

```csharp
protected override void ReplaceEntityImpl(Document doc, IGenerable generableNew)
```

#### Parameters

`doc` Document

The document.

`generableNew` IGenerable

The new generable entity.


