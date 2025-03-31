# Class HousingNodalBody

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Housing NodalBody

```csharp
public class HousingNodalBody : NodalBody, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IEntityRelation, IMarkerParent, IModalBody, IBodyAnalysisType, IBody, ITemplateObject, IMassProp, IChainable, IChangableAssembly, INodalOutputContainer, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IAutoContactableFlex, IAutoContactable, IHasMesh, IPostDeserialized, IHasMaterials, INodalBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
InstanceContainer ← 
NodalBody ← 
[HousingNodalBody](VM.Managed.DAFUL.GearTrain.HousingNodalBody.md)

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

### HousingNodalBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HousingNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HousingNodalBody()
```

### HousingNodalBody\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HousingNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HousingNodalBody(string strName, Instance instanceNodalBody)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`instanceNodalBody` Instance

The instance nodal body.

### HousingNodalBody\(string, string, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HousingNodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HousingNodalBody(string strName, string strMeshFilePath, TransformBase transf)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`strMeshFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string mesh file path.

`transf` TransformBase

The transf.

## Methods

### ReAssembly\(\)

Res the assembly.

```csharp
public override void ReAssembly()
```

### ReAssemblyCore\(\)

Res the assembly core.

```csharp
public void ReAssemblyCore()
```


