#  Class BearingDimensionTaperedRoller

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the attribute for tapered roller type bearing dimension.

```csharp
public class BearingDimensionTaperedRoller : BearingDimensionBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BearingDimensionBase](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md) ← 
[BearingDimensionTaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDimensionTaperedRoller.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller__ctor"></a> BearingDimensionTaperedRoller\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingDimensionTaperedRoller" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingDimensionTaperedRoller()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_ActionPoint"></a> ActionPoint

Gets or sets the action point.

```csharp
public ExpressionValueVariable ActionPoint { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_ConeRoundingRadius"></a> ConeRoundingRadius

Gets or sets the rounding radius of cone.

```csharp
public ExpressionValueVariable ConeRoundingRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_ConeShoulderDiameter"></a> ConeShoulderDiameter

Gets or sets the cone shoulder diameter.

```csharp
public ExpressionValueVariable ConeShoulderDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_ConeWidth"></a> ConeWidth

Gets or sets the width of cone.

```csharp
public ExpressionValueVariable ConeWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_ContactAngle"></a> ContactAngle

Gets or sets the contact angle.

```csharp
public ExpressionValueVariable ContactAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_CupRoundingRadius"></a> CupRoundingRadius

Gets or sets the rounding radius of cup.

```csharp
public ExpressionValueVariable CupRoundingRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_CupWidth"></a> CupWidth

Gets or sets the width of Cup.

```csharp
public ExpressionValueVariable CupWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_NumberOfRoller"></a> NumberOfRoller

Gets or sets the number of roller.

```csharp
public ExpressionValueVariable NumberOfRoller { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_RollerCenterPoint"></a> RollerCenterPoint

Gets or sets the roller center point.

```csharp
public ExpressionValueVariable RollerCenterPoint { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_RollerDiameter"></a> RollerDiameter

Gets or sets the roller diameter.

```csharp
public ExpressionValueVariable RollerDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_RollerLength"></a> RollerLength

Gets or sets the roller length.

```csharp
public ExpressionValueVariable RollerLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_RollerPitchDiameter"></a> RollerPitchDiameter

Gets or sets the roller pitch diameter.

```csharp
public ExpressionValueVariable RollerPitchDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_RollerTaperedAngle"></a> RollerTaperedAngle

Gets or sets the roller tapered angle.

```csharp
public ExpressionValueVariable RollerTaperedAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionTaperedRoller_GetBuilder_VM_Managed_DAFUL_GearTrain_Bearing_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Managed_TMatrix_System_Boolean_System_Boolean_VM_Managed_CAD_BuilderMultiSubtractSimple__"></a> GetBuilder\(Bearing, RacewayType, TMatrix, bool, bool, ref BuilderMultiSubtractSimple\)

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

