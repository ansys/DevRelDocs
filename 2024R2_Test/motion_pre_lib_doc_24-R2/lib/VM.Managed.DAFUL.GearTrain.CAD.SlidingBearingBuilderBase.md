# Class SlidingBearingBuilderBase

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Sliding Bearing Builder Base

```csharp
public class SlidingBearingBuilderBase : BuilderMultiSubtractSimple, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IPostDeserialized
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
[SlidingBearingBuilderBase](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase.md)

#### Derived

[SlidingBearingBuilder](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilder.md), 
[SlidingBearingBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderForRBEInFE.md)

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
IPostDeserialized

#### Inherited Members

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

### SlidingBearingBuilderBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilderBase()
```

### SlidingBearingBuilderBase\(SBGeometryInfo\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.SlidingBearingBuilderBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SlidingBearingBuilderBase(SBGeometryInfo info)
```

#### Parameters

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The information.

## Properties

### GeomInfo

Gets or sets the geom information.

```csharp
public SBGeometryInfo GeomInfo { get; set; }
```

#### Property Value

 [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

### OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
public virtual double OffsetToAxisDirection { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Radius

Gets the radius.

```csharp
protected double Radius { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` BuilderParamBase

### GetCenterPosition\(\)

Gets center position.

```csharp
public virtual VectorBase GetCenterPosition()
```

#### Returns

 VectorBase

### GetTransform\(\)

Gets the transform.

```csharp
public virtual TMatrix GetTransform()
```

#### Returns

 TMatrix

The transform.

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

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### RebuildGeometry\(\)

Rebuilds the geometry.

```csharp
public void RebuildGeometry()
```

### RebuildGeometry\(BuilderMultiSubtractSimple, SBGeometryInfo, double\)

Rebuilds the geometry.

```csharp
public static BuilderMultiSubtractSimple RebuildGeometry(BuilderMultiSubtractSimple builder, SBGeometryInfo info, double dRadius)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The geom info.

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

#### Returns

 BuilderMultiSubtractSimple

### RebuildGeometry\(BuilderMultiSubtractSimple, SBGeometryInfo, double, bool\)

Rebuilds the geometry.

```csharp
public static BuilderMultiSubtractSimple RebuildGeometry(BuilderMultiSubtractSimple builder, SBGeometryInfo info, double dRadius, bool bUseDSDL)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The geom info.

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`bUseDSDL` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The DSDL use flag.

#### Returns

 BuilderMultiSubtractSimple

### SetTransformForBuilders\(TMatrix\)

Set Transform for Builders.

```csharp
protected void SetTransformForBuilders(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The Transform Matrix.

### SetTransformForBuilders\(BuilderMultiSubtractSimple, TMatrix, SBGeometryInfo, double\)

Set Transform for Builders.

```csharp
public static void SetTransformForBuilders(BuilderMultiSubtractSimple builder, TMatrix matT, SBGeometryInfo info, double dRadius)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`matT` TMatrix

The Transform Matrix.

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The geom info.

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

### UpdateGeometry\(\)

Updates the geometry.

```csharp
public virtual void UpdateGeometry()
```


