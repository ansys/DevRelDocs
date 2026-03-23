# Class NodalBody

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the nodal body.

```csharp
public class NodalBody : InstanceContainer, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IEntityRelation, IMarkerParent, IModalBody, IBodyAnalysisType, IBody, ITemplateObject, IMassProp, IChainable, IChangableAssembly, INodalOutputContainer, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IAutoContactableFlex, IAutoContactable, IHasMesh, IPostDeserialized, IHasMaterials, INodalBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
InstanceContainer ← 
[NodalBody](VM.Managed.DAFUL.FE.NodalBody.md)

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
[IModalBody](VM.Managed.DAFUL.FE.IModalBody.md), 
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

### NodalBody\(string, string, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NodalBody(string strName, string strMeshFilePath, TransformBase transf)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the nodal body.

`strMeshFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The nodal body file path.

`transf` TransformBase

The transformation.

### NodalBody\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NodalBody(string strName, Instance instanceNodalBody)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the nodal body.

`instanceNodalBody` Instance

The instance nodal body.

### NodalBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NodalBody()
```

## Properties

### AnalysisType

Gets or sets the type of body.

```csharp
BodyAnalysisType AnalysisType { get; set; }
```

#### Property Value

 BodyAnalysisType

### BodyType

Gets or sets the type of body.

```csharp
[Obsolete]
public virtual FlexibleBodyType BodyType { get; set; }
```

#### Property Value

 [FlexibleBodyType](VM.Managed.DAFUL.FE.FlexibleBodyType.md)

### ChangedDocument

Gets the document.

```csharp
Document ChangedDocument { get; }
```

#### Property Value

 Document

### FilePath

Gets or sets the file path.

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitVel

Gets or sets the initial velocity.

```csharp
public BodyPropertyBase.InitialVelocity InitVel { get; set; }
```

#### Property Value

 BodyPropertyBase.InitialVelocity

### IsModalBody

Gets a value indicating whether is modal body.

```csharp
public bool IsModalBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LargeDeformation

Gets or sets the flag of large deformation.

```csharp
public bool LargeDeformation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MassCenter

Gets the mass center.

```csharp
public Vector MassCenter { get; }
```

#### Property Value

 Vector

### MassCenterImpl

Gets the massCenter.

```csharp
Vector MassCenterImpl { get; }
```

#### Property Value

 Vector

### MassValue

Gets the mass value.

```csharp
public double MassValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MeshList

Gets the mesh container.

```csharp
public List<Mesh> MeshList { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Mesh](VM.Managed.DAFUL.FE.Mesh.md)\>

### ModalMassCenter

Gets the mass center for modal.

```csharp
public Vector ModalMassCenter { get; }
```

#### Property Value

 Vector

### ModalMassValue

Gets the mass for modal.

```csharp
public double ModalMassValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ModalMomentOfInertiaValue

Gets the inertial for modal.

```csharp
public _MomentOfInertia ModalMomentOfInertiaValue { get; }
```

#### Property Value

 [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

### MomentOfInertiaValue

Gets the moment of inertia value.

```csharp
public _MomentOfInertia MomentOfInertiaValue { get; }
```

#### Property Value

 [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

### MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public IMarker MovingReferenceFrame { get; set; }
```

#### Property Value

 IMarker

### NumberOfEdgeset

Gets the number of edgeset.

```csharp
public int NumberOfEdgeset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfElement

Gets the number of element.

```csharp
public int NumberOfElement { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfElementset

Gets the number of elementset.

```csharp
public int NumberOfElementset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfFrequency

Gets the number of frequency.

```csharp
public int NumberOfFrequency { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfNode

Gets the number of node.

```csharp
public int NumberOfNode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfNodeset

Gets the number of nodeset.

```csharp
public int NumberOfNodeset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfPatchset

Gets the number of patchset.

```csharp
public int NumberOfPatchset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfProperty

Gets the number of property.

```csharp
public int NumberOfProperty { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentType

Gets the type of the parent.

```csharp
MarkerParentType ParentType { get; }
```

#### Property Value

 MarkerParentType

### ReferenceFrameType

Gets the type of the reference frame.

```csharp
MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 MarkerReferenceFrameType

### ReferenceMarker

Gets or sets the reference marker.

```csharp
public InvisibleMarker ReferenceMarker { get; set; }
```

#### Property Value

 InvisibleMarker

### TopologyEntityTypeName

Get the object type name

```csharp
public override string TopologyEntityTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseAdvancedOption

```csharp
public bool UseAdvancedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseRMovingReferenceFrame

```csharp
public bool UseRMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseTMovingReferenceFrame

```csharp
public bool UseTMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### \_MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public Linker<IMarker> _MovingReferenceFrame { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### ChangeNodalModal\(BodyAnalysisType\)

Change Nodal or Modal.

```csharp
public void ChangeNodalModal(BodyAnalysisType type)
```

#### Parameters

`type` BodyAnalysisType

The flexible body type.

### Create\(SubSystemDocument, string, MeshDocument, TransformBase\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref>.

```csharp
public static NodalBody Create(SubSystemDocument docToAdd, string strBodyName, MeshDocument meshDocument, TransformBase transformMesh)
```

#### Parameters

`docToAdd` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshDocument` [MeshDocument](VM.Managed.DAFUL.FE.MeshDocument.md)

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

`transformMesh` TransformBase

The <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref> for the new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

### Create\(SubSystemDocument, string, MeshDocument\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> with identity transformation.

```csharp
public static NodalBody Create(SubSystemDocument docToAdd, string strBodyName, MeshDocument meshDocument)
```

#### Parameters

`docToAdd` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshDocument` [MeshDocument](VM.Managed.DAFUL.FE.MeshDocument.md)

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

#### Returns

 [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

### FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetContactables\(\)

Gets  the contactable list.

```csharp
public virtual ObjectBase[] GetContactables()
```

#### Returns

 ObjectBase\[\]

the contactable list.

### GetElementInformation\(\)

Get element information.

```csharp
public NodalBody.ElementInformation[] GetElementInformation()
```

#### Returns

 [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[ElementInformation](VM.Managed.DAFUL.FE.NodalBody.ElementInformation.md)\[\]

### GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public virtual bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument information.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\)

Gets the mass property.

```csharp
virtual void GetMassPropImpl(ref double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`vecCenterPosition` VectorBase

The center position.

`vecOrientation` OMatrix

The orientation.

`arTensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetMeshesImpl\(\)

Gets the meshes.

```csharp
virtual ObjectBase[] GetMeshesImpl()
```

#### Returns

 ObjectBase\[\]

The builders.

### GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlRootEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlRootEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetNodePositions\(\)

Get node position.

```csharp
public NodalBody.NodeInformation[] GetNodePositions()
```

#### Returns

 [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[NodeInformation](VM.Managed.DAFUL.FE.NodalBody.NodeInformation.md)\[\]

### GetNodePositionsForMesh\(Mesh, int\)

```csharp
public VectorBase GetNodePositionsForMesh(Mesh mesh, int nIndex)
```

#### Parameters

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 VectorBase

### GetNodePositionsForMesh\(Mesh\)

Get node position for mesh.

```csharp
public VectorBase[] GetNodePositionsForMesh(Mesh mesh)
```

#### Parameters

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner mesh.

#### Returns

 VectorBase\[\]

### GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction.

```csharp
public virtual bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### InitBodyType\(BodyAnalysisType, bool\)

Initialize body type.

```csharp
public void InitBodyType(BodyAnalysisType type, bool bUpdateNavi)
```

#### Parameters

`type` BodyAnalysisType

The flexible body type.

`bUpdateNavi` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Update Navigator.

### InitBodyType\(BodyAnalysisType\)

Initialize body type.

```csharp
public void InitBodyType(BodyAnalysisType type)
```

#### Parameters

`type` BodyAnalysisType

The flexible body type.

### InitInterfaceTable\(\)

Initialize the interface table.

```csharp
public override void InitInterfaceTable()
```

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### IsAutoContactable\(\)

Determines whether the specified auto contactable.

```csharp
public virtual bool IsAutoContactable()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified auto contactable; otherwise, <code>false</code>.

### IsDestroyContainer\(\)

Determines whether is [destroy container].

```csharp
public override bool IsDestroyContainer()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [destroy container]; otherwise, <code>false</code>.

### IsOnlyLinearMaterial\(ObjectBase\)

Determines whether refer linear material only.

```csharp
public static bool IsOnlyLinearMaterial(ObjectBase obNodalBody)
```

#### Parameters

`obNodalBody` ObjectBase

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance refer only linear material; otherwise, <code>false</code>.

### IsReadDFN\(\)

Get indicates dfn file has been read.

```csharp
public bool IsReadDFN()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if read; otherwise, <code>false</code>.

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### PostOpenDocumentAfterHookEvent\(\)

Call when post [open document] after hook event.

```csharp
public override void PostOpenDocumentAfterHookEvent()
```

### ProcessDuplicateReferenceImpl\(Reference\)

Process for duplicated reference

```csharp
protected override void ProcessDuplicateReferenceImpl(Reference refer)
```

#### Parameters

`refer` Reference

The reference.

### ReAssembly\(\)

```csharp
public virtual void ReAssembly()
```

### ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### Redraw\(\)

Redraw.

```csharp
public override void Redraw()
```

### RemoveDuplicatedReference\(\)

Remove duplicated reference

```csharp
void RemoveDuplicatedReference()
```

### SetBodyAnalysisType\(BodyAnalysisType\)

```csharp
public void SetBodyAnalysisType(BodyAnalysisType type)
```

#### Parameters

`type` BodyAnalysisType

### SetMassPropImpl\(double, VectorBase, OMatrix, double\[\], bool\)

Sets the mass property.

```csharp
virtual void SetMassPropImpl(double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`vecCenterPosition` VectorBase

The center position.

`vecOrientation` OMatrix

The orientation.

`arTensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetNodeElementInformation\(NodeInformation\[\], ElementInformation\[\]\)

Set node and element information.

```csharp
public bool SetNodeElementInformation(NodalBody.NodeInformation[] arNodePos, NodalBody.ElementInformation[] arEleInfo)
```

#### Parameters

`arNodePos` [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[NodeInformation](VM.Managed.DAFUL.FE.NodalBody.NodeInformation.md)\[\]

The node information.

`arEleInfo` [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[ElementInformation](VM.Managed.DAFUL.FE.NodalBody.ElementInformation.md)\[\]

The element information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### SetNodePositions\(Vector\[\], OMatrix\[\]\)

Set node position for mesh.

```csharp
public bool SetNodePositions(Vector[] arvecPos, OMatrix[] armatOri)
```

#### Parameters

`arvecPos` Vector\[\]

The position array .

`armatOri` OMatrix\[\]

The orientation.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### SetNodePositions\(string\)

Set node position for mesh.

```csharp
public bool SetNodePositions(string strDFNPath)
```

#### Parameters

`strDFNPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dfn file path.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### TransformImpl\(TMatrix\)

Transforms [implementation].

```csharp
protected override void TransformImpl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The mat T.

### WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


