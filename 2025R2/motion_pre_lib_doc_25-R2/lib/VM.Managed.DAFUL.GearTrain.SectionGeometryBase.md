# Class SectionGeometryBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The Section GeometryBase

```csharp
public abstract class SectionGeometryBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md)

#### Derived

[RackSectionGeometry](VM.Managed.DAFUL.GearTrain.CAD.RackSectionGeometry.md), 
[SectionGeometryCircular](VM.Managed.DAFUL.GearTrain.SectionGeometryCircular.md), 
[SectionGeometryHollowCircular](VM.Managed.DAFUL.GearTrain.SectionGeometryHollowCircular.md), 
[SectionGeometryHollowTapered](VM.Managed.DAFUL.GearTrain.SectionGeometryHollowTapered.md), 
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

### SectionGeometryBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.SectionGeometryBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SectionGeometryBase()
```

## Properties

### Eccentricity

Gets or sets the eccentricity.

```csharp
public virtual Variable Eccentricity { get; set; }
```

#### Property Value

 Variable

### Length

Gets or sets the length.

```csharp
public virtual Variable Length { get; set; }
```

#### Property Value

 Variable

### TypeOfGeometry

Gets the type of geometry.

```csharp
public abstract SectionGeometryBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.GeometryType.md)

## Methods

### GetBottomAndTopPosition\(VectorBase, ref VectorBase, ref VectorBase\)

Gets the bottom and top position.

```csharp
public void GetBottomAndTopPosition(VectorBase vecOffsetDirection, ref VectorBase vecTop, ref VectorBase vecBottom)
```

#### Parameters

`vecOffsetDirection` VectorBase

The offset direction.

`vecTop` VectorBase

The vec top.

`vecBottom` VectorBase

The vec bottom.

### GetBuilder\(BuilderColor, VectorBase\)

Gets the builder.

```csharp
public abstract Builder GetBuilder(BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`color` BuilderColor

The color.

`vecOffsetDirection` VectorBase

The offset direction.

#### Returns

 Builder

### GetFactorForLength\(\)

```csharp
protected double GetFactorForLength()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetGeomInfo\(\)

Gets the geom information.

```csharp
public abstract double[] GetGeomInfo()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetLengthAndHeight\(ref double, ref double\)

Gets the start and end point.

```csharp
public virtual void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d.

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

Height of the d.

### GetNewStartPointWithEccentricity\(PointBase, VectorBase\)

Get new start point with eccentricity

```csharp
public PointBase GetNewStartPointWithEccentricity(PointBase ptStartPoint, VectorBase vecEccentricDirection)
```

#### Parameters

`ptStartPoint` PointBase

The old start point

`vecEccentricDirection` VectorBase

The eccentric direction

#### Returns

 PointBase

### GetNewStartPointWithEccentricity\(VectorBase, VectorBase\)

Get new start point with eccentricity

```csharp
public VectorBase GetNewStartPointWithEccentricity(VectorBase vecStartPoint, VectorBase vecEccentricDirection)
```

#### Parameters

`vecStartPoint` VectorBase

The old start point

`vecEccentricDirection` VectorBase

The eccentric direction

#### Returns

 VectorBase

### GetSectionBuilder\(double, List<Vector\>\)

Gets the section builder.

```csharp
public virtual Builder[] GetSectionBuilder(double dSegLen, List<Vector> lstGearSection)
```

#### Parameters

`dSegLen` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d seg.

`lstGearSection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

The LST gear section.

#### Returns

 Builder\[\]

### GetSectionBuilderCore\(double, List<Vector\>\)

Gets the section builder core.

```csharp
protected List<Vector> GetSectionBuilderCore(double dSegLen, List<Vector> lstSection)
```

#### Parameters

`dSegLen` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d seg.

`lstSection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

The LST section.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### GetSectionName\(HiddenShaftSetDocument, string, int\)

Gets the name of the section.

```csharp
protected string[] GetSectionName(HiddenShaftSetDocument hiddenDoc, string strName, int nNum)
```

#### Parameters

`hiddenDoc` [HiddenShaftSetDocument](VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument.md)

The hidden document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### GetSectionPoint\(double, List<Vector\>, List<Vector\>\)

Gets the section point.

```csharp
public Vector[] GetSectionPoint(double dSegLen, List<Vector> lstDoubleSection, List<Vector> lstSingleSection)
```

#### Parameters

`dSegLen` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d seg.

`lstDoubleSection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

The LST double section.

`lstSingleSection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

The LST single section.

#### Returns

 Vector\[\]

### InitChild\(\)

Initializes the child.

```csharp
public virtual void InitChild()
```

### InnerCreateParameter\(\)

```csharp
protected abstract BuilderParamBase InnerCreateParameter()
```

#### Returns

 BuilderParamBase

### InnerFillParameter\(BuilderParamBase, BuilderColor, VectorBase\)

```csharp
protected abstract void InnerFillParameter(BuilderParamBase parameter, BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`parameter` BuilderParamBase

`color` BuilderColor

`vecOffsetDirection` VectorBase

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### SamePositionVector\(VectorBase, VectorBase\)

Whether vectors is same

```csharp
public static bool SamePositionVector(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` VectorBase

first vector.

`vec2` VectorBase

second vector.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SplitSectionInfo\(HiddenShaftSetDocument, string, int\)

Splits the section information.

```csharp
public abstract SectionInfo[] SplitSectionInfo(HiddenShaftSetDocument hiddenDoc, string strName, int nNumber)
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


