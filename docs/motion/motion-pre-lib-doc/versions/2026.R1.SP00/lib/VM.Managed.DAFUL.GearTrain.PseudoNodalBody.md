# Class PseudoNodalBody
<a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The pseudo nodalbody

```csharp
public class PseudoNodalBody : NodalBody, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IEntityRelation, IMarkerParent, IModalBody, IBodyAnalysisType, IBody, ITemplateObject, IMassProp, IChainable, IChangableAssembly, INodalOutputContainer, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IAutoContactableFlex, IAutoContactable, IHasMesh, IPostDeserialized, IHasMaterials, INodalBody
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[InstanceContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs) ← 
NodalBody ← 
[PseudoNodalBody](VM.Managed.DAFUL.GearTrain.PseudoNodalBody.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
IEntityRelation, 
IMarkerParent, 
IModalBody, 
IBodyAnalysisType, 
IBody, 
ITemplateObject, 
IMassProp, 
IChainable, 
IChangableAssembly, 
INodalOutputContainer, 
ITemperatureComponent, 
IHeatGenerationComponent, 
IGeometricalComponent, 
IAutoContactableFlex, 
IAutoContactable, 
IHasMesh, 
IPostDeserialized, 
IHasMaterials, 
INodalBody

#### Inherited Members

NodalBody.GetNodePositionsForMesh\(Mesh, int\), 
NodalBody.GetNodePositionsForMesh\(Mesh\), 
NodalBody.SetNodePositions\(Vector\[\], OMatrix\[\]\), 
NodalBody.SetNodePositions\(string\), 
NodalBody.SetNodeElementInformation\(NodalBody.NodeInformation\[\], NodalBody.ElementInformation\[\]\), 
NodalBody.GetNodePositions\(\), 
NodalBody.GetElementInformation\(\), 
NodalBody.InitBodyType\(BodyAnalysisType, bool\), 
NodalBody.InitBodyType\(BodyAnalysisType\), 
NodalBody.Redraw\(\), 
NodalBody.IsDestroyContainer\(\), 
NodalBody.ChangeNodalModal\(BodyAnalysisType\), 
NodalBody.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\), 
NodalBody.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\), 
NodalBody.IsReadDFN\(\), 
NodalBody.Initialize\(Unit.ConvertFactor\), 
NodalBody.InitInterfaceTable\(\), 
NodalBody.FixUp\(ObjectBase\), 
NodalBody.FindLocal\(string\), 
NodalBody.PostOpenDocumentAfterHookEvent\(\), 
NodalBody.ReAssembly\(\), 
NodalBody.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
NodalBody.OnDeserialization\(object\), 
NodalBody.TransformImpl\(TMatrix\), 
NodalBody.WriteTemplateImpl\(XmlWriter\), 
NodalBody.ReadTemplateImpl\(XmlReader\), 
NodalBody.GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\), 
NodalBody.SetMassPropImpl\(double, VectorBase, OMatrix, double\[\], bool\), 
NodalBody.GetMeshesImpl\(\), 
NodalBody.ProcessDuplicateReferenceImpl\(Reference\), 
NodalBody.LinkRequestUpdate\(object, LinkEventArgs\), 
NodalBody.RemoveDuplicatedReference\(\), 
NodalBody.SetBodyAnalysisType\(BodyAnalysisType\), 
NodalBody.GetContactables\(\), 
NodalBody.IsAutoContactable\(\), 
NodalBody.IsOnlyLinearMaterial\(ObjectBase\), 
NodalBody.Create\(SubSystemDocument, string, MeshDocument, TransformBase\), 
NodalBody.Create\(SubSystemDocument, string, MeshDocument\), 
NodalBody.LargeDeformation, 
NodalBody.InitVel, 
NodalBody.NumberOfFrequency, 
NodalBody.NumberOfElementset, 
NodalBody.NumberOfEdgeset, 
NodalBody.NumberOfNodeset, 
NodalBody.NumberOfPatchset, 
NodalBody.NumberOfProperty, 
NodalBody.NumberOfElement, 
NodalBody.NumberOfNode, 
NodalBody.TopologyEntityTypeName, 
NodalBody.AnalysisType, 
NodalBody.BodyType, 
NodalBody.UseRMovingReferenceFrame, 
NodalBody.UseTMovingReferenceFrame, 
NodalBody.UseAdvancedOption, 
NodalBody.MovingReferenceFrame, 
NodalBody.\_MovingReferenceFrame, 
NodalBody.ReferenceMarker, 
NodalBody.MeshList, 
NodalBody.ModalMassCenter, 
NodalBody.ModalMomentOfInertiaValue, 
NodalBody.ModalMassValue, 
NodalBody.IsModalBody, 
NodalBody.MassCenterImpl, 
NodalBody.MassCenter, 
NodalBody.MomentOfInertiaValue, 
NodalBody.MassValue, 
NodalBody.ChangedDocument, 
NodalBody.FilePath, 
NodalBody.ReferenceFrameType, 
NodalBody.ParentType, 
NodalBody.SupportSetMassImpl, 
[InstanceContainer.InitInterfaceTable\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.LinkRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.BindInterface\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.BindInterface\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.BindInterface\(InstanceContainer.InterfaceTable\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.Find\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetNewEntityName\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetNewEntityName\(string, bool, int\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetNewEntityName\(string, bool, int, int\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.MakeReferenceImpl\(LinkedList<Reference\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.PostOpenDocumentAfterHookEvent\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.TransformImpl\(TMatrix\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.Redraw\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetLayerImpl\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.SetLayerImpl\(Layer\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.IsDestroyContainer\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetTargetListForUpdate\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.ProcessDuplicateReferenceImpl\(Reference\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.PostAddToDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.LinkRequestDestroy\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.GetChildListImpl\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.Instance](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.InterfaceTableList](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.InterfaceTables](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[InstanceContainer.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs), 
[SubEntity.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody__ctor"></a> PseudoNodalBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PseudoNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PseudoNodalBody()
```

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody__ctor_System_String_VM_Managed_Instance_"></a> PseudoNodalBody\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PseudoNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PseudoNodalBody(string strName, Instance instanceNodalBody)
```

#### Parameters

`strName` string

Name of the string.

`instanceNodalBody` Instance

The instance nodal body.

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody__ctor_System_String_System_String_VM_Managed_TransformBase_"></a> PseudoNodalBody\(string, string, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PseudoNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PseudoNodalBody(string strName, string strMeshFilePath, TransformBase transf)
```

#### Parameters

`strName` string

Name of the string.

`strMeshFilePath` string

The string mesh file path.

`transf` TransformBase

The transf.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody_InstanceContainer"></a> InstanceContainer

Gets or sets the instance container.

```csharp
public InstanceContainer InstanceContainer { get; set; }
```

#### Property Value

 [InstanceContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody_ReAssembly"></a> ReAssembly\(\)

Res the assembly.

```csharp
public override void ReAssembly()
```

### <a id="VM_Managed_DAFUL_GearTrain_PseudoNodalBody_TemperaryNodalBodyGeometry_VM_Managed_Document_System_String_VM_Managed_TMatrix_"></a> TemperaryNodalBodyGeometry\(Document, string, TMatrix\)

Temeraries the nodal body geometry.

```csharp
public static PseudoNodalBody TemperaryNodalBodyGeometry(Document meshDoc, string strName, TMatrix matT)
```

#### Parameters

`meshDoc` Document

The mesh document.

`strName` string

Name of the string.

`matT` TMatrix

The mat t.

#### Returns

 [PseudoNodalBody](VM.Managed.DAFUL.GearTrain.PseudoNodalBody.md)

