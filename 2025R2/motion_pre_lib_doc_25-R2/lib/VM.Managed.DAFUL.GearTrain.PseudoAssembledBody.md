#  Class PseudoAssembledBody

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The pseudo assembled body

```csharp
public class PseudoAssembledBody : AssembledBody, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IMarkerCreatable, IFacesetCreatable, IConnectableNotReference, IDrawIcon, IConnectableHasGeometry, IMassProp, IChainable, IChainedSegmentConnector, IHasBuilder, IBodyAnalysisType, IMFModalable, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IBody, ICustomFullName, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
InstanceContainer ← 
AssembledBody ← 
[PseudoAssembledBody](VM.Managed.DAFUL.GearTrain.PseudoAssembledBody.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IDocumentOwner, 
IReferencable, 
ITransformable, 
IVisible, 
IAssemblyOwner, 
IInterfaceTable, 
IGroup, 
IMultiChangable, 
IInstanceContainer, 
IMarkerCreatable, 
IFacesetCreatable, 
IConnectableNotReference, 
IDrawIcon, 
IConnectableHasGeometry, 
IMassProp, 
IChainable, 
IChainedSegmentConnector, 
IHasBuilder, 
IBodyAnalysisType, 
IMFModalable, 
ITemperatureComponent, 
IHeatGenerationComponent, 
IGeometricalComponent, 
IContactableGeometry2Dot5D, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
IBody, 
ICustomFullName, 
IHasMaterial

#### Inherited Members

AssembledBody.Initialize\(Unit.ConvertFactor\), 
AssembledBody.LinkRequestUpdate\(object, LinkEventArgs\), 
AssembledBody.LinkRequestDestroy\(object, LinkEventArgs\), 
AssembledBody.FixUp\(ObjectBase\), 
AssembledBody.OnDeserialization\(object\), 
AssembledBody.TransformImpl\(TMatrix\), 
AssembledBody.Redraw\(\), 
AssembledBody.GetUnnamedObjectName\(object\), 
AssembledBody.FindLocal\(string\), 
AssembledBody.GetNewEntityName\(string\), 
AssembledBody.GetArgumentList\(LinkedList<ObjectBase\>\), 
AssembledBody.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
AssembledBody.GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\), 
AssembledBody.GetPredefinedMarkerInfo\(XmlDocument, XmlElement, ReferencePartMarker\), 
AssembledBody.GetBuilder\(\), 
AssembledBody.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\), 
AssembledBody.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\), 
AssembledBody.GetLayerImpl\(\), 
AssembledBody.SetLayerImpl\(Layer\), 
AssembledBody.MakeReferenceImpl\(LinkedList<Reference\>\), 
AssembledBody.GetTargetListForUpdate\(\), 
AssembledBody.GetChildListImpl\(\), 
AssembledBody.PropertyOfAssembledBody, 
AssembledBody.\_MovingReferenceFrame, 
AssembledBody.MovingReferenceFrame, 
AssembledBody.ModalReferencePosition, 
AssembledBody.UseModalReferencePosition, 
AssembledBody.UseAdvancedOption, 
AssembledBody.UseTMovingReferenceFrame, 
AssembledBody.UseRMovingReferenceFrame, 
AssembledBody.TopologyEntityTypeName, 
AssembledBody.ParentType, 
AssembledBody.ReferenceFrameType, 
AssembledBody.ConnectableName, 
AssembledBody.ConnectableFullName, 
AssembledBody.ConnectablePostfixName, 
AssembledBody.ConnectablePosition, 
AssembledBody.ConnectableBody, 
AssembledBody.Body, 
AssembledBody.Geometry, 
AssembledBody.AnalysisType, 
AssembledBody.ModeArray, 
AssembledBody.DFMFPath, 
AssembledBody.LastModifiedTimeToDFMFFile, 
InstanceContainer.InitInterfaceTable\(\), 
InstanceContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
InstanceContainer.BindInterface\(\), 
InstanceContainer.BindInterface\(ObjectBase, ObjectBase\), 
InstanceContainer.BindInterface\(InstanceContainer.InterfaceTable\), 
InstanceContainer.Find\(string\), 
InstanceContainer.FindLocal\(string\), 
InstanceContainer.GetNewEntityName\(string\), 
InstanceContainer.GetNewEntityName\(string, bool, int\), 
InstanceContainer.GetNewEntityName\(string, bool, int, int\), 
InstanceContainer.GetUnnamedObjectName\(object\), 
InstanceContainer.MakeReferenceImpl\(LinkedList<Reference\>\), 
InstanceContainer.PostOpenDocumentAfterHookEvent\(\), 
InstanceContainer.TransformImpl\(TMatrix\), 
InstanceContainer.Redraw\(\), 
InstanceContainer.GetLayerImpl\(\), 
InstanceContainer.SetLayerImpl\(Layer\), 
InstanceContainer.IsDestroyContainer\(\), 
InstanceContainer.GetTargetListForUpdate\(\), 
InstanceContainer.ProcessDuplicateReferenceImpl\(Reference\), 
InstanceContainer.PostAddToDocument\(\), 
InstanceContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
InstanceContainer.GetChildListImpl\(\), 
InstanceContainer.OnDeserialization\(object\), 
InstanceContainer.Instance, 
InstanceContainer.InterfaceTableList, 
InstanceContainer.InterfaceTables, 
InstanceContainer.Layer, 
InstanceContainer.IsVisible, 
SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_GearTrain_PseudoAssembledBody__ctor"></a> PseudoAssembledBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PseudoAssembledBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PseudoAssembledBody()
```

### <a id="VM_Managed_DAFUL_GearTrain_PseudoAssembledBody__ctor_System_String_VM_Managed_Instance_"></a> PseudoAssembledBody\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PseudoAssembledBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PseudoAssembledBody(string strName, Instance instanceNodalBody)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`instanceNodalBody` Instance

The instance nodal body.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PseudoAssembledBody_InstanceContainer"></a> InstanceContainer

Gets or sets the instance container.

```csharp
public InstanceContainer InstanceContainer { get; set; }
```

#### Property Value

 InstanceContainer

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PseudoAssembledBody_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PseudoAssembledBody_TemperaryAssembledBodyGeometry_VM_Managed_Document_System_String_VM_Managed_TMatrix_"></a> TemperaryAssembledBodyGeometry\(Document, string, TMatrix\)

Temperaries the nodal body geometry.

```csharp
public static PseudoAssembledBody TemperaryAssembledBodyGeometry(Document meshDoc, string strName, TMatrix matT)
```

#### Parameters

`meshDoc` Document

The mesh document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`matT` TMatrix

The mat t.

#### Returns

 [PseudoAssembledBody](VM.Managed.DAFUL.GearTrain.PseudoAssembledBody.md)

