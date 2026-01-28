#  Class SlidingBearingBuilderForRBEInFE

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Sliding Bearing Builder For RBE In FE

```csharp
public class SlidingBearingBuilderForRBEInFE : SlidingBearingBuilderBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IPostDeserialized, ISlidingBuilder, IGTBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
BuilderBoolean ← 
BuilderMulti ← 
BuilderMultiSubtract ← 
BuilderMultiSubtractSimple ← 
[SlidingBearingBuilderBase](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md) ← 
[SlidingBearingBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderForRBEInFE.md)

#### Derived

[AddedSlidingBearingBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.AddedSlidingBearingBuilderForRBEInFE.md), 
[SlidingBearingBuilderForRBEInMeshFree](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderForRBEInMeshFree.md)

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
[IGeometryBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGeometryBuilder.md), 
IPostDeserialized, 
[ISlidingBuilder](VM.Managed.DAFUL.GearTrain.CAD.ISlidingBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md)

#### Inherited Members

[SlidingBearingBuilderBase.GetTransform\(\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_GetTransform), 
[SlidingBearingBuilderBase.GetCenterPosition\(\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_GetCenterPosition), 
[SlidingBearingBuilderBase.FillParameter\(BuilderParamBase\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[SlidingBearingBuilderBase.SetTransformForBuilders\(TMatrix\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_SetTransformForBuilders\_VM\_Managed\_TMatrix\_), 
[SlidingBearingBuilderBase.SetTransformForBuilders\(BuilderMultiSubtractSimple, TMatrix, SBGeometryInfo, double\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_SetTransformForBuilders\_VM\_Managed\_CAD\_BuilderMultiSubtractSimple\_VM\_Managed\_TMatrix\_VM\_Managed\_DAFUL\_GearTrain\_SBGeometryInfo\_System\_Double\_), 
[SlidingBearingBuilderBase.UpdateGeometry\(\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_UpdateGeometry), 
[SlidingBearingBuilderBase.RebuildGeometry\(\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_RebuildGeometry), 
[SlidingBearingBuilderBase.RebuildGeometry\(BuilderMultiSubtractSimple, SBGeometryInfo, double\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_RebuildGeometry\_VM\_Managed\_CAD\_BuilderMultiSubtractSimple\_VM\_Managed\_DAFUL\_GearTrain\_SBGeometryInfo\_System\_Double\_), 
[SlidingBearingBuilderBase.RebuildGeometry\(BuilderMultiSubtractSimple, SBGeometryInfo, double, bool\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_RebuildGeometry\_VM\_Managed\_CAD\_BuilderMultiSubtractSimple\_VM\_Managed\_DAFUL\_GearTrain\_SBGeometryInfo\_System\_Double\_System\_Boolean\_), 
[SlidingBearingBuilderBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SlidingBearingBuilderBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SlidingBearingBuilderBase.DeleteCondition\(object\)](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_DeleteCondition\_System\_Object\_), 
[SlidingBearingBuilderBase.GeomInfo](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_GeomInfo), 
[SlidingBearingBuilderBase.Radius](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_Radius), 
[SlidingBearingBuilderBase.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_SlidingBearingBuilderBase\_OffsetToAxisDirection), 
BuilderMultiSubtractSimple.GetSchema\(\), 
BuilderMultiSubtractSimple.ReadXml\(XmlReader\), 
BuilderMultiSubtractSimple.WriteXml\(XmlWriter\), 
BuilderMultiSubtractSimple.OnDeserialization\(object\), 
BuilderMultiSubtract.CreateParameter\(\), 
BuilderMultiSubtract.FillParameter\(BuilderParamBase\), 
BuilderMulti.AddBuilder\(ICollection<Builder\>\), 
BuilderMulti.AddBuilder\(Builder\), 
BuilderMulti.Clear\(\), 
BuilderMulti.CheckValidationAboutBuild\(\), 
BuilderMulti.SetTransform\(TMatrix\), 
BuilderMulti.GetBodyType\(\), 
BuilderMulti.GetUnnamedObjectName\(object\), 
BuilderMulti.FindLocal\(string\), 
BuilderMulti.Contains\(Type\), 
BuilderMulti.CopyFilePathWhenImportBuilder\(Builder\), 
BuilderMulti.FillParameter\(BuilderParamBase\), 
BuilderMulti.OnDeserializationImpl\(ref List<Child<Builder, ObjectBase.Update\>\>\), 
BuilderMulti.ReadXmlImpl\(XmlReader\), 
BuilderMulti.WriteXmlImpl\(XmlWriter\), 
BuilderMulti.MultiType, 
BuilderMulti.Builders, 
BuilderBoolean.ReplaceBuild\(Builder, Builder\), 
BuilderColorGeom.m\_color, 
BuilderColorGeom.CheckValidationAboutBuild\(\), 
BuilderColorGeom.OnDeserialization\(object\), 
BuilderColorGeom.FillParameter\(BuilderParamBase\), 
BuilderColorGeom.Color, 
BuilderColorGeom.DrawingColor, 
BuilderTransform.SetTransform\(TMatrix\), 
BuilderTransform.IsParameterized, 
Builder.CheckValidationAboutBuild\(\), 
Builder.CheckCircularReference\(ObjectBase\), 
Builder.ChangeDataForCircularReference\(\), 
Builder.GetUnnamedObjectName\(object\), 
Builder.FindLocal\(string\), 
Builder.CopyFilePathWhenImportBuilder\(Builder\), 
Builder.Contains\(Type\), 
Builder.GetBodyType\(\), 
Builder.ReplaceData\(string, object\), 
Builder.GetNameAttribute\(string, ref List<string\>\), 
Builder.AddUneditableAttribute\(\), 
Builder.GetParentBody\(\), 
Builder.Clone\(\), 
Builder.Initialize\(Unit.ConvertFactor\), 
Builder.OnDeserialization\(object\), 
Builder.CreateParameter\(\), 
Builder.FillParameter\(BuilderParamBase\), 
Builder.LinkRequestUpdate\(object, LinkEventArgs\), 
Builder.PostWorkWhenFailedToGetXmlString\(\), 
Builder.GetFilledParameter\(\), 
Builder.GetXmlString\(\), 
Builder.GetFactorForLength\(\), 
Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\), 
Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\), 
Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\), 
Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\), 
Builder.GetUnitScale\(\), 
Builder.InitialKernelLengthUnit, 
Builder.IsExternable, 
Builder.Uneditable, 
Builder.TypeOfBuilder, 
Builder.Transparency, 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE__ctor"></a> SlidingBearingBuilderForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilderForRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE__ctor_VM_Managed_DAFUL_GearTrain_SBGeometryInfo_"></a> SlidingBearingBuilderForRBEInFE\(SBGeometryInfo\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilderForRBEInFE(SBGeometryInfo info)
```

#### Parameters

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The information.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_ConnectableEntity"></a> ConnectableEntity

Gets the ConnectableEntity.

```csharp
public IConnectable ConnectableEntity { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_OffsetToAxisDirection"></a> OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
public override double OffsetToAxisDirection { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_ParentConnectable"></a> ParentConnectable

Gets or sets the parent connectable.

```csharp
public IConnectable ParentConnectable { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_Position"></a> Position

Gets the position.

```csharp
public VectorBase Position { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_Rotation"></a> Rotation

Gets or sets the rotation.
Use SetRotation() when this instance sets for undo/redo

```csharp
public OMatrix Rotation { get; set; }
```

#### Property Value

 OMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_StartPoint"></a> StartPoint

Gets or sets the start point.

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE__ParentConnectable"></a> \_ParentConnectable

Gets or sets the parent connectable.

```csharp
public Linker<IConnectable> _ParentConnectable { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_CreateGeometryInFE_VM_Managed_DAFUL_HiddenDocument_VM_Managed_DAFUL_GearTrain_SBGeometryInfo_VM_Managed_DAFUL_IConnectable_System_Boolean_"></a> CreateGeometryInFE\(HiddenDocument, SBGeometryInfo, IConnectable, bool\)

Creates geometries in hidden document.

```csharp
public static SlidingBearingGeom CreateGeometryInFE(HiddenDocument doc, SBGeometryInfo info, IConnectable rbe, bool bAddDoc)
```

#### Parameters

`doc` HiddenDocument

The hidden document.

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The sliding bearing information.

`rbe` IConnectable

The RBE.

`bAddDoc` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for adding to document.

#### Returns

 [SlidingBearingGeom](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingGeom.md)

Sliding bearing geometry.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_DeleteCondition_System_Object_"></a> DeleteCondition\(object\)

```csharp
protected override bool DeleteCondition(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_GetCenterPosition"></a> GetCenterPosition\(\)

Gets center position.

```csharp
public override VectorBase GetCenterPosition()
```

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_GetTransform"></a> GetTransform\(\)

Gets the transform sliding bearing in FE Desinger.

```csharp
public override TMatrix GetTransform()
```

#### Returns

 TMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_SlidingBearingBuilderForRBEInFE_SetRotation_VM_Managed_OMatrix_"></a> SetRotation\(OMatrix\)

Set rotation.

```csharp
public void SetRotation(OMatrix mat)
```

#### Parameters

`mat` OMatrix

The matrix.

