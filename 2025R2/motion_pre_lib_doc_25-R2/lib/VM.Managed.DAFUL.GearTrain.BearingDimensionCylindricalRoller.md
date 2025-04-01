# Class BearingDimensionCylindricalRoller

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the attribute for cylindrical roller type bearing dimension.

```csharp
public class BearingDimensionCylindricalRoller : BearingDimensionBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BearingDimensionBase](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md) ← 
[BearingDimensionCylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDimensionCylindricalRoller.md)

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

[BearingDimensionBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BearingDimensionBase.GetBuilder\(Bearing, RacewayGeometryInfo.RacewayType, TMatrix, bool, bool, ref BuilderMultiSubtractSimple\)](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_GetBuilder\_VM\_Managed\_DAFUL\_GearTrain\_Bearing\_VM\_Managed\_DAFUL\_GearTrain\_RacewayGeometryInfo\_RacewayType\_VM\_Managed\_TMatrix\_System\_Boolean\_System\_Boolean\_VM\_Managed\_CAD\_BuilderMultiSubtractSimple\_\_), 
[BearingDimensionBase.Bore](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_Bore), 
[BearingDimensionBase.OuterDiameter](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_OuterDiameter), 
[BearingDimensionBase.Width](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_Width), 
[BearingDimensionBase.EstimateDetails](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDimensionBase\_EstimateDetails), 
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

### BearingDimensionCylindricalRoller\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingDimensionCylindricalRoller" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingDimensionCylindricalRoller()
```

## Properties

### InnerRacewayShoulderDiameter

Gets or sets the inner raceway shoulder diameter.

```csharp
public ExpressionValueVariable InnerRacewayShoulderDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NumberOfRoller

Gets or sets the number of roller.

```csharp
public ExpressionValueVariable NumberOfRoller { get; set; }
```

#### Property Value

 ExpressionValueVariable

### OuterRacewayShoulderBore

Gets or sets the outer raceway shoulder bore.

```csharp
public ExpressionValueVariable OuterRacewayShoulderBore { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RollerDiameter

Gets or sets the roller diameter.

```csharp
public ExpressionValueVariable RollerDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RollerLength

Gets or sets the roller length.

```csharp
public ExpressionValueVariable RollerLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RollerPitchDiameter

Gets or sets the roller pitch diameter.

```csharp
public ExpressionValueVariable RollerPitchDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RoundingRadius

Gets or sets the rounding radius.

```csharp
public ExpressionValueVariable RoundingRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### GetBuilder\(Bearing, RacewayType, TMatrix, bool, bool, ref BuilderMultiSubtractSimple\)

Gets the builder.

```csharp
public override void GetBuilder(Bearing bearing, RacewayGeometryInfo.RacewayType type, TMatrix matTransf, bool bTruncated, bool bReverse, ref BuilderMultiSubtractSimple builder)
```

#### Parameters

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The owner bearing.

`type` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md).[RacewayType](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.RacewayType.md)

The raceway type.

`matTransf` TMatrix

The transformation.

`bTruncated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The truncated falg.

`bReverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The reverse direction falg.

`builder` BuilderMultiSubtractSimple

The builder.


