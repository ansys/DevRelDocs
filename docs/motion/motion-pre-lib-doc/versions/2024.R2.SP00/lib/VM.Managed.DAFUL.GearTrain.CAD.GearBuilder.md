# Class GearBuilder

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The gear builder

```csharp
public class GearBuilder : BuilderColorGeom, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IGearBuilder, IGTBuilder, IAddOnBearing
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
[GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md)

#### Derived

[AddedGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedGearBuilder.md), 
[GearBuilderForSolidBody](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForSolidBody.md)

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
[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md), 
[IAddOnBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddOnBearing.md)

#### Inherited Members

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

### GearBuilder\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.GearBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearBuilder()
```

## Properties

### BearingPoint

Gets or sets the bearing point.

```csharp
public PointBase BearingPoint { get; set; }
```

#### Property Value

 PointBase

### ConnectableEntity

Gets the ConnectableEntity.

```csharp
public IConnectable ConnectableEntity { get; }
```

#### Property Value

 IConnectable

### GearGeometryInformation

Gets or sets the gear geometry information.

```csharp
public virtual GearGeometryInfo GearGeometryInformation { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### IsDesigner

Gets or sets a value indicating whether this instance is designer.
Use SetDesigner() when this instance sets for undo/redo

```csharp
public bool IsDesigner { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MateAngle

Gets or sets the mate angle.
Use SetMateAngle() when this instance sets for undo/redo

```csharp
public double MateAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
public double OffsetToAxisDirection { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Position

Gets the position.

```csharp
public VectorBase Position { get; }
```

#### Property Value

 VectorBase

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

Gets or sets the rotation.
Use SetRotation() when this instance sets for undo/redo

```csharp
public OMatrix Rotation { get; set; }
```

#### Property Value

 OMatrix

### StartPoint

Gets or sets the start point.

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 PointBase

### TypeOfParent

Gets or sets the type of parent.
Use SetTypeOfParent() when this instance sets for undo/redo

```csharp
public GearBuilder.ParentType TypeOfParent { get; set; }
```

#### Property Value

 [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

## Methods

### CreateParameter\(\)

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 BuilderParamBase

### FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` BuilderParamBase

### GetLengthAndHeight\(ref double, ref double\)

Gets the height of the length and.

```csharp
public void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d.

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

Height of the d.

### GetOMatrixWithTwoDirection\(VectorBase, VectorBase\)

Gets the o matrix with two direction.

```csharp
public static OMatrix GetOMatrixWithTwoDirection(VectorBase vecZ, VectorBase vecRefer)
```

#### Parameters

`vecZ` VectorBase

The vec z.

`vecRefer` VectorBase

The vec refer.

#### Returns

 OMatrix

### Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### SetDesigner\(bool\)

Set designer flag.

```csharp
public void SetDesigner(bool bFlag)
```

#### Parameters

`bFlag` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The designer flag.

### SetMateAngle\(double\)

Set mate angle.

```csharp
public void SetMateAngle(double dMateAngle)
```

#### Parameters

`dMateAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mate angle.

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

### SetRotation\(OMatrix\)

Set rotation.

```csharp
public void SetRotation(OMatrix mat)
```

#### Parameters

`mat` OMatrix

The matrix.

### SetTypeOfParent\(ParentType\)

Set type of parent.

```csharp
public void SetTypeOfParent(GearBuilder.ParentType type)
```

#### Parameters

`type` [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

The type of parent.

### UpdateGearGeometry\(Section, bool\)

Sets the shaft radius.

```csharp
public bool UpdateGearGeometry(Section secFind, bool bDesigner)
```

#### Parameters

`secFind` [Section](VM.Managed.DAFUL.GearTrain.CAD.Section.md)

The sec find.

`bDesigner` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The designer flag.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateGeometry\(HiddenDocument, ParentType, double, ReferencePointType, Vector\)

Updates the geometry.

```csharp
public void UpdateGeometry(HiddenDocument hiddenDoc, GearBuilder.ParentType typeP, double dReferenceOffset, ReferencePointType typeRP, Vector vecBearingPoint)
```

#### Parameters

`hiddenDoc` HiddenDocument

The hidden document.

`typeP` [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

The type p.

`dReferenceOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d reference offset.

`typeRP` [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

The type rp.

`vecBearingPoint` Vector

The vec bearing point.


