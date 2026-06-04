#  Class ReferencePartSetFace

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the reference for face set in part.

```csharp
public class ReferencePartSetFace : ReferenceSetFace, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IBody, IContactableRigid3D, IContactableRigid, IContactable3D, IContactable, IBodyAnalysisType, IChainedSegmentConnector, IChainedSegmentContact, IArgument, IConnectable, IEntityRelation, IHasBody, IMarkerParent, IFaceSetInformation, IFaceInformation, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IGapTarget, IReferedTopologyset, ITopologyset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
[ReferenceSetFace](VM.Managed.DAFUL.ReferenceSetFace.md) ← 
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
[IGapTarget](VM.Managed.DAFUL.IGapTarget.md), 
IReferedTopologyset, 
ITopologyset

#### Inherited Members

[ReferenceSetFace.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[ReferenceSetFace.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetGeometryNavigatorInformation\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_), 
[ReferenceSetFace.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[ReferenceSetFace.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[ReferenceSetFace.GetDefaultMaxPenetration\(ref double, IReferencable\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetDefaultMaxPenetration\_System\_Double\_\_VM\_Managed\_IReferencable\_), 
[ReferenceSetFace.GetAnalysisType\(\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetAnalysisType), 
[ReferenceSetFace.GetParentBody\(\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetParentBody), 
[ReferenceSetFace.GetConnectableImpl\(\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetConnectableImpl), 
[ReferenceSetFace.IsOwner\(Reference\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_IsOwner\_VM\_Managed\_Reference\_), 
[ReferenceSetFace.GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetMinimumDistance\_VM\_Managed\_IFaceInformation\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_System\_Double\_), 
[ReferenceSetFace.GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetMinimumDistanceAndDirection\_VM\_Managed\_IFaceInformation\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_VM\_Managed\_VectorBase\_\_\_\_System\_Double\_), 
[ReferenceSetFace.GetPointAndConnectivity\(ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GetPointAndConnectivity\_VM\_Managed\_VectorBase\_\_\_\_System\_Int32\_\_\_\_System\_Int32\_\_\_\_VM\_Managed\_Reference\_System\_Double\_), 
[ReferenceSetFace.IsBaseGeometry](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_IsBaseGeometry), 
[ReferenceSetFace.IsActionGeometry](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_IsActionGeometry), 
[ReferenceSetFace.AnalysisType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_AnalysisType), 
[ReferenceSetFace.MaxPenetration](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_MaxPenetration), 
[ReferenceSetFace.HalfThickness](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_HalfThickness), 
[ReferenceSetFace.SurfaceSmoothingType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_SurfaceSmoothingType), 
[ReferenceSetFace.Connectable](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_Connectable), 
[ReferenceSetFace.IsRepresentedAsBSurface](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_IsRepresentedAsBSurface), 
[ReferenceSetFace.GeometryFullName](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GeometryFullName), 
[ReferenceSetFace.GeometryNameForMultiContact](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_GeometryNameForMultiContact), 
[ReferenceSetFace.ReferenceType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ReferenceType), 
[ReferenceSetFace.ArgumentType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ArgumentType), 
[ReferenceSetFace.ParentType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ParentType), 
[ReferenceSetFace.ReferenceFrameType](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ReferenceFrameType), 
[ReferenceSetFace.Center](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_Center), 
[ReferenceSetFace.ConnectableName](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ConnectableName), 
[ReferenceSetFace.ConnectableFullName](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ConnectableFullName), 
[ReferenceSetFace.ConnectablePostfixName](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ConnectablePostfixName), 
[ReferenceSetFace.ConnectablePosition](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ConnectablePosition), 
[ReferenceSetFace.ConnectableBody](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_ConnectableBody), 
[ReferenceSetFace.Body](VM.Managed.DAFUL.ReferenceSetFace.md\#VM\_Managed\_DAFUL\_ReferenceSetFace\_Body), 
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

### <a id="VM_Managed_DAFUL_ReferencePartSetFace__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferencePartSetFace\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferencePartSetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferencePartSetFace(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### <a id="VM_Managed_DAFUL_ReferencePartSetFace__ctor_VM_Managed_ObjectBase_"></a> ReferencePartSetFace\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferencePartSetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferencePartSetFace(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

## Methods

### <a id="VM_Managed_DAFUL_ReferencePartSetFace_GetAnalysisType"></a> GetAnalysisType\(\)

Gets the analysis type.

```csharp
protected override BodyAnalysisType GetAnalysisType()
```

#### Returns

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

The analysis type.

### <a id="VM_Managed_DAFUL_ReferencePartSetFace_GetConnectableImpl"></a> GetConnectableImpl\(\)

Gets the connectable [implementation].

```csharp
protected override IConnectable GetConnectableImpl()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_ReferencePartSetFace_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_ReferencePartSetFace_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

