# Class SectionGeometryTapered

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The Hollow Tapered Geometry Section

```csharp
public class SectionGeometryTapered : SectionGeometryBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md) ← 
[SectionGeometryTapered](VM.Managed.DAFUL.GearTrain.SectionGeometryTapered.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[SectionGeometryBase.InitChild\(\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_InitChild), 
[SectionGeometryBase.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_OnDeserialization\_System\_Object\_), 
[SectionGeometryBase.GetBuilder\(BuilderColor, VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetBuilder\_VM\_Managed\_CAD\_BuilderColor\_VM\_Managed\_VectorBase\_), 
[SectionGeometryBase.SplitSectionInfo\(HiddenShaftSetDocument, string, int\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_SplitSectionInfo\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_System\_String\_System\_Int32\_), 
[SectionGeometryBase.GetGeomInfo\(\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetGeomInfo), 
[SectionGeometryBase.GetLengthAndHeight\(ref double, ref double\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetLengthAndHeight\_System\_Double\_\_System\_Double\_\_), 
[SectionGeometryBase.GetSectionBuilder\(double, List<Vector\>\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetSectionBuilder\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_), 
[SectionGeometryBase.GetSectionPoint\(double, List<Vector\>, List<Vector\>\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetSectionPoint\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_), 
[SectionGeometryBase.GetNewStartPointWithEccentricity\(PointBase, VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetNewStartPointWithEccentricity\_VM\_Managed\_PointBase\_VM\_Managed\_VectorBase\_), 
[SectionGeometryBase.GetNewStartPointWithEccentricity\(VectorBase, VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetNewStartPointWithEccentricity\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[SectionGeometryBase.SamePositionVector\(VectorBase, VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_SamePositionVector\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[SectionGeometryBase.GetBottomAndTopPosition\(VectorBase, ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetBottomAndTopPosition\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[SectionGeometryBase.GetSectionName\(HiddenShaftSetDocument, string, int\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetSectionName\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_System\_String\_System\_Int32\_), 
[SectionGeometryBase.GetSectionBuilderCore\(double, List<Vector\>\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_GetSectionBuilderCore\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_), 
[SectionGeometryBase.InnerCreateParameter\(\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_InnerCreateParameter), 
[SectionGeometryBase.InnerFillParameter\(BuilderParamBase, BuilderColor, VectorBase\)](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_InnerFillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_VM\_Managed\_CAD\_BuilderColor\_VM\_Managed\_VectorBase\_), 
[SectionGeometryBase.Length](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_Length), 
[SectionGeometryBase.Eccentricity](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_Eccentricity), 
[SectionGeometryBase.TypeOfGeometry](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_SectionGeometryBase\_TypeOfGeometry), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### SectionGeometryTapered\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.SectionGeometryTapered" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SectionGeometryTapered()
```

## Properties

### EndRadius

Gets or sets the end radius.

```csharp
public ExpressionValueVariable EndRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StartRadius

Gets or sets the start radius.

```csharp
public ExpressionValueVariable StartRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TypeOfGeometry

Gets the type of geometry.

```csharp
public override SectionGeometryBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.GeometryType.md)

## Methods

### GetBuilder\(BuilderColor, VectorBase\)

Gets the builder.

```csharp
public override Builder GetBuilder(BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`color` BuilderColor

The color.

`vecOffsetDirection` VectorBase

The offset direction.

#### Returns

 Builder

### GetGeomInfo\(\)

Gets the geom information.

```csharp
public override double[] GetGeomInfo()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetLengthAndHeight\(ref double, ref double\)

Gets the start and end point.

```csharp
public override void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d.

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

Height of the d.

### InitChild\(\)

Initializes the child.

```csharp
public override void InitChild()
```

### InnerCreateParameter\(\)

```csharp
protected override BuilderParamBase InnerCreateParameter()
```

#### Returns

 BuilderParamBase

### InnerFillParameter\(BuilderParamBase, BuilderColor, VectorBase\)

```csharp
protected override void InnerFillParameter(BuilderParamBase parameter, BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`parameter` BuilderParamBase

`color` BuilderColor

`vecOffsetDirection` VectorBase

### SplitSectionInfo\(HiddenShaftSetDocument, string, int\)

Splits the section information.

```csharp
public override SectionInfo[] SplitSectionInfo(HiddenShaftSetDocument hiddenDoc, string strName, int nNumber)
```

#### Parameters

`hiddenDoc` [HiddenShaftSetDocument](VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument.md)

The hidden document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`nNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)\[\]


