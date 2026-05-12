#  Class ReferenceSetFace

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the reference for face set.

```csharp
public class ReferenceSetFace : Reference, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IBody, IContactableRigid3D, IContactableRigid, IContactable3D, IContactable, IBodyAnalysisType, IReferedTopologyset, ITopologyset, IChainedSegmentConnector, IChainedSegmentContact, IArgument, IConnectable, IEntityRelation, IHasBody, IMarkerParent, IFaceSetInformation, IFaceInformation, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IGapTarget
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
[ReferenceSetFace](VM.Managed.DAFUL.ReferenceSetFace.md)

#### Derived

[ReferencePartSetFace](VM.Managed.DAFUL.ReferencePartSetFace.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IReferencable, 
INamed, 
INavigatorItem, 
IVisible, 
IReferenceAutoContactable, 
IAutoContactable, 
IBody, 
[IContactableRigid3D](VM.Managed.DAFUL.IContactableRigid3D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable3D](VM.Managed.DAFUL.IContactable3D.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IReferedTopologyset, 
ITopologyset, 
IChainedSegmentConnector, 
IChainedSegmentContact, 
IArgument, 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
IEntityRelation, 
IHasBody, 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
IFaceSetInformation, 
IFaceInformation, 
[ITemperatureComponent](VM.Managed.DAFUL.ITemperatureComponent.md), 
[IConvectionComponent](VM.Managed.DAFUL.IConvectionComponent.md), 
[IHeatFlowComponent](VM.Managed.DAFUL.IHeatFlowComponent.md), 
[IHeatFluxComponent](VM.Managed.DAFUL.IHeatFluxComponent.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
[IGapTarget](VM.Managed.DAFUL.IGapTarget.md)

#### Inherited Members

Reference.LinkAddedToDocument\(object, AddToDocEventArgs\), 
Reference.SetModified\(ModifiedResult.ModifiedType\), 
Reference.SetModified\(\), 
Reference.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Reference.GetContactables\(\), 
Reference.IsAutoContactable\(\), 
Reference.IsOwner\(Reference\), 
Reference.LinkRequestUpdate\(object, LinkEventArgs\), 
Reference.LinkRequestDestroy\(object, LinkEventArgs\), 
Reference.GetTransform\(Unit\), 
Reference.GetFullTransform\(Unit\), 
Reference.GetTotalSubSystemName\(Document3D, ObjectBase\), 
Reference.GetTotalSubSystemNameCore\(Document3D, Document3D, ref Stack<string\>, ref ValueType\), 
Reference.IsVisible, 
Reference.Layer, 
Reference.FullTransformationInKernel, 
Reference.FullTransformation, 
Reference.Transformation, 
Reference.Prototype, 
Reference.Object, 
Reference.OwnerInstance, 
Reference.ClearChildInfoBeforeDeserialize, 
Reference.NonSymmetricName, 
Reference.FullName, 
Reference.Name, 
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

### <a id="VM_Managed_DAFUL_ReferenceSetFace__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferenceSetFace\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferenceSetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferenceSetFace(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### <a id="VM_Managed_DAFUL_ReferenceSetFace__ctor_VM_Managed_ObjectBase_"></a> ReferenceSetFace\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferenceSetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferenceSetFace(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

## Properties

### <a id="VM_Managed_DAFUL_ReferenceSetFace_AnalysisType"></a> AnalysisType

Gets the analysis type.

```csharp
public BodyAnalysisType AnalysisType { get; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_ReferenceSetFace_Body"></a> Body

Gets the body.

```csharp
public virtual IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_ReferenceSetFace_Center"></a> Center

Gets the center position of the object.

```csharp
public TMatrix Center { get; }
```

#### Property Value

 TMatrix

### <a id="VM_Managed_DAFUL_ReferenceSetFace_Connectable"></a> Connectable

Gets the connectable.

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ConnectableBody"></a> ConnectableBody

Gets the connectable body.

```csharp
public ObjectBase ConnectableBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public string ConnectableFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public string ConnectableName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ConnectablePosition"></a> ConnectablePosition

Sets the connectable position.

```csharp
public Vector ConnectablePosition { set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public string ConnectablePostfixName { set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_HalfThickness"></a> HalfThickness

Gets or sets the half thickness.

```csharp
public Variable HalfThickness { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_ReferenceSetFace_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_IsRepresentedAsBSurface"></a> IsRepresentedAsBSurface

Gets or sets a value indicating whether this instance is represented as B-surface.

```csharp
public bool IsRepresentedAsBSurface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_MaxPenetration"></a> MaxPenetration

Gets the maximum penetration.

```csharp
public Variable MaxPenetration { get; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ParentType"></a> ParentType

Gets the type of the marker's parent.

```csharp
public MarkerParentType ParentType { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ReferenceFrameType"></a> ReferenceFrameType

Gets the type of the marker's reference frame.

```csharp
public MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 [MarkerReferenceFrameType](VM.Managed.DAFUL.MarkerReferenceFrameType.md)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the type of the surface smoothing.

```csharp
public SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 [SurfaceSmoothing](VM.Managed.DAFUL.SurfaceSmoothing.md)

## Methods

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetAnalysisType"></a> GetAnalysisType\(\)

Gets the analysis type.

```csharp
protected virtual BodyAnalysisType GetAnalysisType()
```

#### Returns

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

The analysis type.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetConnectableImpl"></a> GetConnectableImpl\(\)

Gets the connectable [implementation].

```csharp
protected virtual IConnectable GetConnectableImpl()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The maximum penetration.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument information.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetMinimumDistance_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_System_Double_"></a> GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)

Get minimum distance

```csharp
public virtual double GetMinimumDistance(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, double dLengthFactor)
```

#### Parameters

`compare_info` IFaceInformation

The compare information

`mat` TMatrix

The transformation matrix

`compare_mat` TMatrix

The transformation matrix to compare

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetMinimumDistanceAndDirection_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_VM_Managed_VectorBase____System_Double_"></a> GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)

Get minimum distance and direction

```csharp
public virtual double GetMinimumDistanceAndDirection(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, ref VectorBase[] arDirection, double dLengthFactor)
```

#### Parameters

`compare_info` IFaceInformation

The compare information

`mat` TMatrix

The transformation matrix

`compare_mat` TMatrix

The transformation matrix to compare

`arDirection` VectorBase\[\]

Directions

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetParentBody"></a> GetParentBody\(\)

Gets the parent body.

```csharp
public ReferenceBody GetParentBody()
```

#### Returns

 ReferenceBody

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetPointAndConnectivity_VM_Managed_VectorBase____System_Int32____System_Int32____VM_Managed_Reference_System_Double_"></a> GetPointAndConnectivity\(ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)

Get point and connectivity

```csharp
public virtual void GetPointAndConnectivity(ref VectorBase[] arPt, ref int[] arConnectivity, ref int[] arNumOfConnectivity, Reference reference, double dLengthFactor)
```

#### Parameters

`arPt` VectorBase\[\]

The array of points

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The array of connectivities

`arNumOfConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The number of connectivities

`reference` Reference

The reference

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetFace_IsOwner_VM_Managed_Reference_"></a> IsOwner\(Reference\)

Determines whether the specified owner.

```csharp
public override bool IsOwner(Reference owner)
```

#### Parameters

`owner` Reference

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified owner; otherwise, <code>false</code>.

