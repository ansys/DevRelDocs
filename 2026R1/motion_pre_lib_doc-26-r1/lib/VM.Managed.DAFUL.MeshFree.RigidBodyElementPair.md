# Class RigidBodyElementPair
<a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair"></a>

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the [pair rigid body element] in mesh free.

```csharp
public class RigidBodyElementPair : RigidBodyElementSingle, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IReferencable, IPartMarkerParent, ITransformable, IChainedSegmentConnector, IReportable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<PropertyRigidBodyElementSingle\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[RigidBodyElementSingle](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md) ← 
[RigidBodyElementPair](VM.Managed.DAFUL.MeshFree.RigidBodyElementPair.md)

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
IDraw, 
IDrawIcon, 
IDrawChangeFacet, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
IReferencable, 
IPartMarkerParent, 
ITransformable, 
IChainedSegmentConnector, 
IReportable

#### Inherited Members

[RigidBodyElementSingle.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[RigidBodyElementSingle.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[RigidBodyElementSingle.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_GetUnnamedObjectName\_System\_Object\_), 
[RigidBodyElementSingle.FindLocal\(string\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_FindLocal\_System\_String\_), 
[RigidBodyElementSingle.IsConnectedConnector\(\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_IsConnectedConnector), 
[RigidBodyElementSingle.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[RigidBodyElementSingle.OnDeserialization\(object\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_OnDeserialization\_System\_Object\_), 
[RigidBodyElementSingle.DrawbleCore\(ObjectBase\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_DrawbleCore\_VM\_Managed\_ObjectBase\_), 
[RigidBodyElementSingle.Draw\(Canvas\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[RigidBodyElementSingle.ReDraw\(\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ReDraw), 
[RigidBodyElementSingle.GetChildListImpl\(\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_GetChildListImpl), 
[RigidBodyElementSingle.GetConnectorList\(List<ObjectBase\>\)](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_GetConnectorList\_System\_Collections\_Generic\_List\_VM\_Managed\_ObjectBase\_\_), 
[RigidBodyElementSingle.RBEBaseComponent](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_RBEBaseComponent), 
[RigidBodyElementSingle.\_RBEBaseComponent](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_\_RBEBaseComponent), 
[RigidBodyElementSingle.MasterPoint](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_MasterPoint), 
[RigidBodyElementSingle.HasLayerExplicitly](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_HasLayerExplicitly), 
[RigidBodyElementSingle.Hide](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_Hide), 
[RigidBodyElementSingle.ParentType](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ParentType), 
[RigidBodyElementSingle.ReferenceFrameType](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ReferenceFrameType), 
[RigidBodyElementSingle.Center](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_Center), 
[RigidBodyElementSingle.ConnectableName](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ConnectableName), 
[RigidBodyElementSingle.ConnectableFullName](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ConnectableFullName), 
[RigidBodyElementSingle.ConnectablePostfixName](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ConnectablePostfixName), 
[RigidBodyElementSingle.ConnectablePosition](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ConnectablePosition), 
[RigidBodyElementSingle.ConnectableBody](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_ConnectableBody), 
[RigidBodyElementSingle.Body](VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle.md\#VM\_Managed\_DAFUL\_MeshFree\_RigidBodyElementSingle\_Body), 
[Entity<PropertyRigidBodyElementSingle\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyRigidBodyElementSingle\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyRigidBodyElementSingle\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyRigidBodyElementSingle\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair__ctor"></a> RigidBodyElementPair\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementPair" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RigidBodyElementPair()
```

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair__ctor_System_String_"></a> RigidBodyElementPair\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementPair" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RigidBodyElementPair(string strName)
```

#### Parameters

`strName` string

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_RBEActionComponent"></a> RBEActionComponent

Gets or sets the rbe action component.

```csharp
public IGeometricalComponent RBEActionComponent { get; set; }
```

#### Property Value

 IGeometricalComponent

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair__RBEActionComponent"></a> \_RBEActionComponent

Gets or sets the rbe action component.

```csharp
public Linker<IGeometricalComponent> _RBEActionComponent { get; set; }
```

#### Property Value

 Linker<IGeometricalComponent\>

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public override void Draw(Canvas canvas)
```

#### Parameters

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

The canvas has icon information.

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_DrawbleCore_VM_Managed_ObjectBase_"></a> DrawbleCore\(ObjectBase\)

Drawble.

```csharp
protected override bool DrawbleCore(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The target object.

#### Returns

 bool

<code>true</code> if this instance is drawable; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for object.

`xmlEle` XmlElement

The XmlElement for object.

`bHasChild` bool

if set to <code>true</code> [has child].

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The ob unnamed.

#### Returns

 string

### <a id="VM_Managed_DAFUL_MeshFree_RigidBodyElementPair_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

