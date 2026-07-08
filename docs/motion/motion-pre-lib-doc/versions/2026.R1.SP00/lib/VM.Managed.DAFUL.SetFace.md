# Class SetFace
<a id="VM_Managed_DAFUL_SetFace"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the face set.

```csharp
public class SetFace : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContactableRigid3D, IContactableRigid, IContactable3D, IContactable, IBodyAnalysisType, IObjectSet, IReferencable, ITemplateObject, IChainedSegmentConnector, IChainedSegmentContact, IArgument, IMultiChangable, IFaceSetComponent, ITopologyset, IConnectable, IEntityRelation, IHasBody, IMarkerParent, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IFaceSetInformation, IFaceInformation, IGapTarget, IPostDeserialized, IPostOpenDocumentForFaceset
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[SetFace](VM.Managed.DAFUL.SetFace.md)

#### Derived

[PartSetFace](VM.Managed.DAFUL.PartSetFace.md), 
[SetPointBase](VM.Managed.DAFUL.SetPointBase.md)

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
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem, 
[IContactableRigid3D](VM.Managed.DAFUL.IContactableRigid3D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable3D](VM.Managed.DAFUL.IContactable3D.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IObjectSet, 
IReferencable, 
ITemplateObject, 
IChainedSegmentConnector, 
IChainedSegmentContact, 
IArgument, 
IMultiChangable, 
[IFaceSetComponent](VM.Managed.DAFUL.IFaceSetComponent.md), 
ITopologyset, 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
IEntityRelation, 
IHasBody, 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
[ITemperatureComponent](VM.Managed.DAFUL.ITemperatureComponent.md), 
[IConvectionComponent](VM.Managed.DAFUL.IConvectionComponent.md), 
[IHeatFlowComponent](VM.Managed.DAFUL.IHeatFlowComponent.md), 
[IHeatFluxComponent](VM.Managed.DAFUL.IHeatFluxComponent.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IFaceSetInformation, 
IFaceInformation, 
[IGapTarget](VM.Managed.DAFUL.IGapTarget.md), 
IPostDeserialized, 
IPostOpenDocumentForFaceset

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_SetFace__ctor"></a> SetFace\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetFace()
```

### <a id="VM_Managed_DAFUL_SetFace__ctor_System_String_"></a> SetFace\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetFace(string strName)
```

#### Parameters

`strName` string

Name of the face set.

## Properties

### <a id="VM_Managed_DAFUL_SetFace_AnalysisType"></a> AnalysisType

Gets the analysis type.

```csharp
public virtual BodyAnalysisType AnalysisType { get; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_SetFace_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_SetFace_AttribType"></a> AttribType

Gets the attribute type of face set.

```csharp
public AttributeFacesetTypeBase.FacesetType AttribType { get; }
```

#### Property Value

 [AttributeFacesetTypeBase](VM.Managed.DAFUL.AttributeFacesetTypeBase.md).[FacesetType](VM.Managed.DAFUL.AttributeFacesetTypeBase.FacesetType.md)

### <a id="VM_Managed_DAFUL_SetFace_AutomaticSelectionGeometryType"></a> AutomaticSelectionGeometryType

Gets or sets a value indicating whether geometry type determined automatically.

```csharp
public bool AutomaticSelectionGeometryType { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_SetFace_Center"></a> Center

Gets the center position of the object.

```csharp
public TMatrix Center { get; }
```

#### Property Value

 TMatrix

### <a id="VM_Managed_DAFUL_SetFace_Connectable"></a> Connectable

Gets the connectable.

```csharp
public virtual IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_SetFace_ConnectableBody"></a> ConnectableBody

Gets the connectable body.

```csharp
public ObjectBase ConnectableBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_SetFace_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public string ConnectableFullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public string ConnectableName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_ConnectablePosition"></a> ConnectablePosition

Sets the connectable position.

```csharp
public Vector ConnectablePosition { set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_SetFace_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public string ConnectablePostfixName { set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_FaceList"></a> FaceList

Gets the face link list.

```csharp
public IList<Face> FaceList { get; }
```

#### Property Value

 IList<Face\>

### <a id="VM_Managed_DAFUL_SetFace_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_GeometryType"></a> GeometryType

Gets or sets a geometry type.

```csharp
public GeometryType GeometryType { get; set; }
```

#### Property Value

 [GeometryType](VM.Managed.DAFUL.GeometryType.md)

### <a id="VM_Managed_DAFUL_SetFace_HalfThickness"></a> HalfThickness

Gets or sets the half thickness.

```csharp
public ExpressionValueVariable HalfThickness { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_SetFace_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_IsFacetingForGeometryRepresentation"></a> IsFacetingForGeometryRepresentation

Gets or sets a value indicating whether this instance is faceting for geometry representation.

```csharp
public bool IsFacetingForGeometryRepresentation { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_IsRepresentedAsBSurface"></a> IsRepresentedAsBSurface

Gets or sets a value indicating whether this instance is represented as B-surface.

```csharp
public bool IsRepresentedAsBSurface { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_IsSphereTreatedAsSurface"></a> IsSphereTreatedAsSurface

Gets a value indicating whether the geometry type is sphere and it will be ignored.

```csharp
public bool IsSphereTreatedAsSurface { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetFace_MaxPenetration"></a> MaxPenetration

Gets the maximum penetration.

```csharp
public ExpressionValueVariable MaxPenetration { get; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_SetFace_ParentBody"></a> ParentBody

Gets or sets the parent body.

```csharp
public ObjectBase ParentBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_SetFace_ParentType"></a> ParentType

Gets the type of the marker's parent.

```csharp
public MarkerParentType ParentType { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_SetFace_ReferenceFrameType"></a> ReferenceFrameType

Gets the type of the marker's reference frame.

```csharp
public MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 [MarkerReferenceFrameType](VM.Managed.DAFUL.MarkerReferenceFrameType.md)

### <a id="VM_Managed_DAFUL_SetFace_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetFace_SphereRadius"></a> SphereRadius

Gets or sets the radius of sphere.

```csharp
public ExpressionValueVariable SphereRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_SetFace_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the type of the surface smoothing.

```csharp
public SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 [SurfaceSmoothing](VM.Managed.DAFUL.SurfaceSmoothing.md)

### <a id="VM_Managed_DAFUL_SetFace_TopologyList"></a> TopologyList

Gets or sets the topology list.

```csharp
public TopologyList<Face> TopologyList { get; set; }
```

#### Property Value

 [TopologyList](VM.Managed.DAFUL.TopologyList\-1.md)<Face\>

## Methods

### <a id="VM_Managed_DAFUL_SetFace_AddFace_VM_Managed_CAD_Face_"></a> AddFace\(Face\)

Adds the face to topology list.

```csharp
public virtual void AddFace(Face face)
```

#### Parameters

`face` Face

The face.

### <a id="VM_Managed_DAFUL_SetFace_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetFace_GetCADBody"></a> GetCADBody\(\)

<p>Gets the cad body from parent body.</p>

```csharp
public Body GetCADBody()
```

#### Returns

 Body

### <a id="VM_Managed_DAFUL_SetFace_GetCount"></a> GetCount\(\)

Gets the face's count.

```csharp
public int GetCount()
```

#### Returns

 int

The face's count.

### <a id="VM_Managed_DAFUL_SetFace_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` double

The maximum penetration.

`reference` IReferencable

The reference.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetFace_GetElementKey_System_Int32_"></a> GetElementKey\(int\)

Gets the element(face) key.

```csharp
public UIntPtr GetElementKey(int nIndex)
```

#### Parameters

`nIndex` int

The Index.

#### Returns

 UIntPtr

The element(face) key.

### <a id="VM_Managed_DAFUL_SetFace_GetElementType"></a> GetElementType\(\)

Gets the type of the element(face).

```csharp
public Type GetElementType()
```

#### Returns

 Type

The type of the element(face).

### <a id="VM_Managed_DAFUL_SetFace_GetFacetModifiedTimeAttribute"></a> GetFacetModifiedTimeAttribute\(\)

```csharp
public AttributeFacetModifiedTime GetFacetModifiedTimeAttribute()
```

#### Returns

 [AttributeFacetModifiedTime](VM.Managed.DAFUL.AttributeFacetModifiedTime.md)

### <a id="VM_Managed_DAFUL_SetFace_GetFacetOption"></a> GetFacetOption\(\)

Gets the facet option.

```csharp
public FacetOption GetFacetOption()
```

#### Returns

 [FacetOption](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/FacetOption.cs)

The facet option

### <a id="VM_Managed_DAFUL_SetFace_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument information.

`xmlEle` XmlElement

The XmlElement information.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetFace_GetMinimumDistance_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_System_Double_"></a> GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)

Gets minimum distance

```csharp
public virtual double GetMinimumDistance(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, double dLengthFactor)
```

#### Parameters

`compare_info` IFaceInformation

The compare information

`mat` TMatrix

The transform

`compare_mat` TMatrix

The compare entity transform

`dLengthFactor` double

The length factor.

#### Returns

 double

### <a id="VM_Managed_DAFUL_SetFace_GetMinimumDistanceAndDirection_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_VM_Managed_VectorBase____System_Double_"></a> GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)

Gets minimum distance and direction

```csharp
public virtual double GetMinimumDistanceAndDirection(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, ref VectorBase[] arDirection, double dLengthFactor)
```

#### Parameters

`compare_info` IFaceInformation

The compare information

`mat` TMatrix

The transform

`compare_mat` TMatrix

The compare entity transform

`arDirection` VectorBase\[\]

The direction array

`dLengthFactor` double

The length factor.

#### Returns

 double

### <a id="VM_Managed_DAFUL_SetFace_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Managed_DAFUL_SetFace_GetPointAndConnectivity_VM_Models_Pre_FacetOption_VM_Managed_VectorBase____System_Int32____System_Int32____VM_Managed_Reference_System_Double_"></a> GetPointAndConnectivity\(FacetOption, ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)

Gets point and connectivity

```csharp
public virtual void GetPointAndConnectivity(FacetOption facetOptions, ref VectorBase[] arPt, ref int[] arConnectivity, ref int[] arNumOfConnectivity, Reference reference, double dLengthFactor)
```

#### Parameters

`facetOptions` [FacetOption](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/FacetOption.cs)

The facet options.

`arPt` VectorBase\[\]

The points

`arConnectivity` int\[\]

The connectivity

`arNumOfConnectivity` int\[\]

The number of connectivity

`reference` Reference

The reference entity

`dLengthFactor` double

The length factor.

### <a id="VM_Managed_DAFUL_SetFace_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction. (using facet information)

```csharp
public bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetFace_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction. (using geometry information)

```csharp
public bool GetPointDirectionOnGeometry(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetFace_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets the target list for update.

```csharp
public override List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 List<IEventProvider\>

### <a id="VM_Managed_DAFUL_SetFace_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_SetFace_IsContactableWithNormalVector_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> IsContactableWithNormalVector\(VectorBase, VectorBase\)

wherther it is contactable or not

```csharp
public static bool IsContactableWithNormalVector(VectorBase targetDirection, VectorBase toolDirection)
```

#### Parameters

`targetDirection` VectorBase

target direction

`toolDirection` VectorBase

tool direction

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SetFace_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SetFace_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SetFace_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected virtual void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

The container.

### <a id="VM_Managed_DAFUL_SetFace_PostAddToDocument"></a> PostAddToDocument\(\)

Call when post [add to document].

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Managed_DAFUL_SetFace_PostRemoveFromDocument_VM_Managed_Document_"></a> PostRemoveFromDocument\(Document\)

Call when post [remove from document].
<param name="document">The document</param>

```csharp
public override void PostRemoveFromDocument(Document document)
```

#### Parameters

`document` Document

### <a id="VM_Managed_DAFUL_SetFace_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

### <a id="VM_Managed_DAFUL_SetFace_RemoveAllFace"></a> RemoveAllFace\(\)

Removes all face from topology list.

```csharp
public void RemoveAllFace()
```

### <a id="VM_Managed_DAFUL_SetFace_RemoveFace_VM_Managed_CAD_Face_"></a> RemoveFace\(Face\)

Removes the face from topology list.

```csharp
public void RemoveFace(Face face)
```

#### Parameters

`face` Face

The face.

### <a id="VM_Managed_DAFUL_SetFace_ResetInvalidEntity"></a> ResetInvalidEntity\(\)

Reset invalid entity.

```csharp
public override void ResetInvalidEntity()
```

### <a id="VM_Managed_DAFUL_SetFace_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

