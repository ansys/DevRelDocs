# Class SlidingBearingBuilder

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Sliding Bearing Builder

```csharp
public class SlidingBearingBuilder : SlidingBearingBuilderBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IPostDeserialized, ISlidingBuilder, IGTBuilder
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
[SlidingBearingBuilder](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilder.md)

#### Derived

[AddedSlidingBearingBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedSlidingBearingBuilder.md)

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

### SlidingBearingBuilder\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilder()
```

### SlidingBearingBuilder\(SBGeometryInfo\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilder(SBGeometryInfo info)
```

#### Parameters

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The information.

## Properties

### ConnectableEntity

Gets the ConnectableEntity.

```csharp
public IConnectable ConnectableEntity { get; }
```

#### Property Value

 IConnectable

### OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
public override double OffsetToAxisDirection { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ReferenceOffset

Gets or sets the reference offset.
Use SetReferenceOffset() when this instance sets for undo/redo

```csharp
public double ReferenceOffset { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ReferencePoint

Gets or sets the reference point.
Use SetReferencePoint() when this instance sets for undo/redo

```csharp
public ReferencePointType ReferencePoint { get; set; }
```

#### Property Value

 [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

### Rotation

Gets the rotation.

```csharp
public OMatrix Rotation { get; set; }
```

#### Property Value

 OMatrix

### StartAngle

Gets or sets the start angle.
Use SetStartAngle() when this instance sets for undo/redo

```csharp
public double StartAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StartPoint

Gets the start point.

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 PointBase

## Methods

### CalculateRotation\(Vector, Vector, double\)

Calculates rotation.

```csharp
protected TMatrix CalculateRotation(Vector vecPos, Vector vecDir, double dAngle)
```

#### Parameters

`vecPos` Vector

The position.

`vecDir` Vector

The direction.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The angle.

#### Returns

 TMatrix

### CreateGeometryInHiddenDoc\(HiddenDocument, SBGeometryInfo, double, ReferencePointType, double\)

Creates geometries in hidden document.

```csharp
public static SlidingBearingGeom CreateGeometryInHiddenDoc(HiddenDocument doc, SBGeometryInfo info, double dOffset, ReferencePointType typeRP, double dStartAngle)
```

#### Parameters

`doc` HiddenDocument

The hidden document.

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The sliding bearing information.

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset.

`typeRP` [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

The reference point type.

`dStartAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start angle.

#### Returns

 [SlidingBearingGeom](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingGeom.md)

Sliding bearing geometry.

### GetTransform\(\)

Gets the transform for sliding bearing in Designer.

```csharp
public override TMatrix GetTransform()
```

#### Returns

 TMatrix

### Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### SetReferenceOffset\(double\)

Set reference offset.

```csharp
public void SetReferenceOffset(double dOffset)
```

#### Parameters

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The reference offset.

### SetReferencePoint\(ReferencePointType\)

Set reference point.

```csharp
public void SetReferencePoint(ReferencePointType type)
```

#### Parameters

`type` [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

The reference point.

### SetStartAngle\(double\)

Set start angle.

```csharp
public void SetStartAngle(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The angle.


