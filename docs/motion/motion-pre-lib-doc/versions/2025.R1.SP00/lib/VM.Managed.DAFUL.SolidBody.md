#  Class SolidBody

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the solid body.

```csharp
public class SolidBody : BodyBase<SolidBodyProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IMarkerCreatable, IFacesetCreatable, ICurvesetCreatable, IConnectableNotReference, IReferencable, IConnectableHasGeometry, IBody, IInterface, ITemplateObject, IHasBuilder, IDrawIcon, ITransformable, IGeometryContainer, IMassProp, IChainedSegmentConnector, IArgument, ITransparentable, IMFModalable, IBodyAnalysisType, IAutoContactable, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<SolidBodyProperty\> ← 
[BodyBase<SolidBodyProperty\>](VM.Managed.DAFUL.BodyBase\-1.md) ← 
[SolidBody](VM.Managed.DAFUL.SolidBody.md)

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
[IMarkerCreatable](VM.Managed.DAFUL.IMarkerCreatable.md), 
[IFacesetCreatable](VM.Managed.DAFUL.IFacesetCreatable.md), 
[ICurvesetCreatable](VM.Managed.DAFUL.ICurvesetCreatable.md), 
[IConnectableNotReference](VM.Managed.DAFUL.IConnectableNotReference.md), 
IReferencable, 
[IConnectableHasGeometry](VM.Managed.DAFUL.IConnectableHasGeometry.md), 
IBody, 
IInterface, 
ITemplateObject, 
IHasBuilder, 
IDrawIcon, 
ITransformable, 
IGeometryContainer, 
IMassProp, 
IChainedSegmentConnector, 
IArgument, 
ITransparentable, 
[IMFModalable](VM.Managed.DAFUL.IMFModalable.md), 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IAutoContactable, 
[ITemperatureComponent](VM.Managed.DAFUL.ITemperatureComponent.md), 
[IHeatGenerationComponent](VM.Managed.DAFUL.IHeatGenerationComponent.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
[IContactableGeometry2Dot5D](VM.Managed.DAFUL.IContactableGeometry2Dot5D.md), 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
IEntityRelation, 
IHasBody, 
IHasMaterial

#### Inherited Members

[BodyBase<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BodyBase<SolidBodyProperty\>.GetGeomModelNavigatorInfo\(XmlDocument, XmlElement, BodyProperty, Body\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetGeomModelNavigatorInfo\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_VM\_Managed\_DAFUL\_BodyProperty\_VM\_Managed\_CAD\_Body\_), 
[BodyBase<SolidBodyProperty\>.GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetGeneralMarkerInfo\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_VM\_Managed\_DAFUL\_Marker\_), 
[BodyBase<SolidBodyProperty\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[BodyBase<SolidBodyProperty\>.FixUp\(ObjectBase\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_FixUp\_VM\_Managed\_ObjectBase\_), 
[BodyBase<SolidBodyProperty\>.GetArgumentList\(LinkedList<ObjectBase\>\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetArgumentList\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_ObjectBase\_\_), 
[BodyBase<SolidBodyProperty\>.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_OnUpdatePropertyImpl\_VM\_Managed\_Property\_VM\_Managed\_LinkEventArgs\_), 
[BodyBase<SolidBodyProperty\>.GetLayerImpl\(\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetLayerImpl), 
[BodyBase<SolidBodyProperty\>.SetLayerImpl\(Layer\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_SetLayerImpl\_VM\_Managed\_Layer\_), 
[BodyBase<SolidBodyProperty\>.GetTargetListForUpdate\(\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetTargetListForUpdate), 
[BodyBase<SolidBodyProperty\>.HasLayerExplicitly](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_HasLayerExplicitly), 
[BodyBase<SolidBodyProperty\>.ParentType](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ParentType), 
[BodyBase<SolidBodyProperty\>.ParentTypeImpl](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ParentTypeImpl), 
[BodyBase<SolidBodyProperty\>.ReferenceFrameType](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ReferenceFrameType), 
[BodyBase<SolidBodyProperty\>.ConnectableName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableName), 
[BodyBase<SolidBodyProperty\>.ConnectableFullName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableFullName), 
[BodyBase<SolidBodyProperty\>.ConnectablePostfixName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectablePostfixName), 
[BodyBase<SolidBodyProperty\>.ConnectablePosition](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectablePosition), 
[BodyBase<SolidBodyProperty\>.ConnectableBody](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableBody), 
[BodyBase<SolidBodyProperty\>.Body](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Body), 
[BodyBase<SolidBodyProperty\>.Layer](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Layer), 
[BodyBase<SolidBodyProperty\>.IsVisible](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_IsVisible), 
[BodyBase<SolidBodyProperty\>.ReferencableImpl](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ReferencableImpl), 
[BodyBase<SolidBodyProperty\>.Geometry](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Geometry), 
Entity<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<SolidBodyProperty\>.GetUnnamedObjectName\(object\), 
Entity<SolidBodyProperty\>.FindLocal\(string\), 
Entity<SolidBodyProperty\>.Property, 
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

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_SolidBody__ctor"></a> SolidBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SolidBody()
```

### <a id="VM_Managed_DAFUL_SolidBody__ctor_System_String_"></a> SolidBody\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SolidBody(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the solid body.

### <a id="VM_Managed_DAFUL_SolidBody__ctor_System_String_VM_Managed_CAD_Builder_"></a> SolidBody\(string, Builder\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SolidBody(string strName, Builder builder)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the solid body.

`builder` Builder

The builder.

## Fields

### <a id="VM_Managed_DAFUL_SolidBody_m_MeshFreeProperty"></a> m\_MeshFreeProperty

The SolidBody property object to use MeshFree Analysis

```csharp
[Obsolete]
protected MeshFreePropertyForSolidBody m_MeshFreeProperty
```

#### Field Value

 [MeshFreePropertyForSolidBody](VM.Managed.DAFUL.MeshFreePropertyForSolidBody.md)

## Properties

### <a id="VM_Managed_DAFUL_SolidBody_AnalysisType"></a> AnalysisType

Gets or sets the type of the analysis.

```csharp
public BodyAnalysisType AnalysisType { get; set; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_SolidBody_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_SolidBody_Connectable"></a> Connectable

Gets the connectable interface.

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_SolidBody_DFMFPath"></a> DFMFPath

Gets or sets the DFMF file path.

```csharp
public string DFMFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SolidBody_Geometry"></a> Geometry

Gets the geometry.

```csharp
public override List<Body> Geometry { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Body\>

### <a id="VM_Managed_DAFUL_SolidBody_HalfThickness"></a> HalfThickness

Gets or sets the half thickness [Not Implemented].

```csharp
public ExpressionValueVariable HalfThickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SolidBody_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_IsEditCM"></a> IsEditCM

Gets a value indicating whether this instance is edit CM.

```csharp
public virtual bool IsEditCM { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_IsInterface"></a> IsInterface

Gets or sets a value indicating whether this instance is interface.

```csharp
public bool IsInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_IsRepresentedAsBSurface"></a> IsRepresentedAsBSurface

Gets or sets a value indicating whether this instance is represented as Bsurface.

```csharp
public bool IsRepresentedAsBSurface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_LastModifiedTimeToDFMFFile"></a> LastModifiedTimeToDFMFFile

Gets or sets the last modified time to DFMF file.

```csharp
public string LastModifiedTimeToDFMFFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SolidBody_MaxPenetration"></a> MaxPenetration

Gets the max penetration [Not Implemented].

```csharp
public ExpressionValueVariable MaxPenetration { get; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SolidBody_MeshFreeProperty"></a> MeshFreeProperty

Gets or sets the SolidBody property to use MeshFree Analysis.

```csharp
[Obsolete]
public MeshFreePropertyForSolidBody MeshFreeProperty { get; set; }
```

#### Property Value

 [MeshFreePropertyForSolidBody](VM.Managed.DAFUL.MeshFreePropertyForSolidBody.md)

### <a id="VM_Managed_DAFUL_SolidBody_ModalReferencePosition"></a> ModalReferencePosition

Gets or sets the modal reference modal.

```csharp
public PointBase ModalReferencePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_SolidBody_ModeArray"></a> ModeArray

Gets or sets the modes.

```csharp
public ModeForMFModal[] ModeArray { get; set; }
```

#### Property Value

 [ModeForMFModal](VM.Managed.DAFUL.ModeForMFModal.md)\[\]

### <a id="VM_Managed_DAFUL_SolidBody_MovingReferenceFrame"></a> MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public IMarker MovingReferenceFrame { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_SolidBody_ParentTypeImpl"></a> ParentTypeImpl

Gets the parent type [implementation].

```csharp
protected override MarkerParentType ParentTypeImpl { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_SolidBody_ReferenceType"></a> ReferenceType

Gets the type of the array for argument.

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SolidBody_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the type of the surface smoothing [Not Implemented].

```csharp
public SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 [SurfaceSmoothing](VM.Managed.DAFUL.SurfaceSmoothing.md)

### <a id="VM_Managed_DAFUL_SolidBody_TopologyEntityTypeName"></a> TopologyEntityTypeName

Topology type name

```csharp
public override string TopologyEntityTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SolidBody_UseAdvancedOption"></a> UseAdvancedOption

Gets or sets use advanced option.

```csharp
public bool UseAdvancedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_UseModalReferencePosition"></a> UseModalReferencePosition

Gets or sets use modal reference modal.

```csharp
public bool UseModalReferencePosition { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_UseRMovingReferenceFrame"></a> UseRMovingReferenceFrame

Gets or sets use rotational modal reference modal.

```csharp
public bool UseRMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_UseTMovingReferenceFrame"></a> UseTMovingReferenceFrame

Gets or sets use translational modal reference modal.

```csharp
public bool UseTMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody__MovingReferenceFrame"></a> \_MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public Linker<IMarker> _MovingReferenceFrame { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_SolidBody_DoWorkAfterUpdateContents"></a> DoWorkAfterUpdateContents\(\)

After update contents, do work.

```csharp
public override void DoWorkAfterUpdateContents()
```

### <a id="VM_Managed_DAFUL_SolidBody_FindLocal_System_String_"></a> FindLocal\(string\)

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

### <a id="VM_Managed_DAFUL_SolidBody_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Fixes up.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The ob.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SolidBody_GetAnalysisLevelInfo_System_Collections_Generic_List_System_Double___System_Collections_Generic_List_System_UInt32___"></a> GetAnalysisLevelInfo\(ref List<double\>, ref List<uint\>\)

Get node distance and count for each analysis level

```csharp
public bool GetAnalysisLevelInfo(ref List<double> lstNodeDistance, ref List<uint> lstNodeCount)
```

#### Parameters

`lstNodeDistance` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

Node distance list

`lstNodeCount` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

Node count list

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it's successful.

### <a id="VM_Managed_DAFUL_SolidBody_GetBuilder"></a> GetBuilder\(\)

Gets the geometry.

```csharp
public ObjectBase[] GetBuilder()
```

#### Returns

 ObjectBase\[\]

geometry container

### <a id="VM_Managed_DAFUL_SolidBody_GetContactables"></a> GetContactables\(\)

Get contactable objects.

```csharp
public ObjectBase[] GetContactables()
```

#### Returns

 ObjectBase\[\]

The contactable objects.

### <a id="VM_Managed_DAFUL_SolidBody_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the geometry's default max penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The max penetration.

`reference` IReferencable

The reference [no use].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator.

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for geometry.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for geometry.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer [implementation].

```csharp
protected override Layer GetLayerImpl()
```

#### Returns

 Layer

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetMarkerArrayModelNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_Collections_NamedObjectDictionary_VM_Managed_DAFUL_Marker__"></a> GetMarkerArrayModelNavigatorInfo\(XmlDocument, XmlElement, NamedObjectDictionary<Marker\>\)

Gets the marker array information for model navigator.

```csharp
public bool GetMarkerArrayModelNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, NamedObjectDictionary<Marker> arMarker)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for marker array.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for marker array.

`arMarker` NamedObjectDictionary<[Marker](VM.Managed.DAFUL.Marker.md)\>

The marker array.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetMarkerModelNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_Marker_"></a> GetMarkerModelNavigatorInfo\(XmlDocument, XmlElement, Marker\)

Gets the marker information for model navigator.

```csharp
protected bool GetMarkerModelNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, Marker marker)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for marker.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for marker.

`marker` [Marker](VM.Managed.DAFUL.Marker.md)

The marker.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the geometry's point and direction.

```csharp
public bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference [no use].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the geometry's point and direction.

```csharp
public bool GetPointDirectionOnGeometry(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference [no use].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### <a id="VM_Managed_DAFUL_SolidBody_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_SolidBody_IsAutoContactable"></a> IsAutoContactable\(\)

Determines whether the specified auto contactable.

```csharp
public bool IsAutoContactable()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified auto contactable; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SolidBody_LinkRemovedFromDocument_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

Remove Anlaysis Type in the Analysis Setting to a document.

```csharp
protected override void LinkRemovedFromDocument(object objNotifier, RemoveFromDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` RemoveFromDocEventArgs

The <xref href="VM.Managed.AddToDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SolidBody_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SolidBody_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

### <a id="VM_Managed_DAFUL_SolidBody_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_SolidBody_PostAddToDocument"></a> PostAddToDocument\(\)

Call when post [add to document].

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Managed_DAFUL_SolidBody_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public void ReDraw()
```

### <a id="VM_Managed_DAFUL_SolidBody_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_SolidBody_ResetInvalidEntity"></a> ResetInvalidEntity\(\)

Reset invalid entity.

```csharp
public override void ResetInvalidEntity()
```

### <a id="VM_Managed_DAFUL_SolidBody_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Sets the layer [implementation].

```csharp
protected override void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

The layer.

### <a id="VM_Managed_DAFUL_SolidBody_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

