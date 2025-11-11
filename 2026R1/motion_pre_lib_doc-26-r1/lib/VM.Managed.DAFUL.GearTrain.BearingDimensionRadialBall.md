# Class BearingDimensionRadialBall
<a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the attribute for radial ball type bearing dimension.

```csharp
public class BearingDimensionRadialBall : BearingDimensionBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[BearingDimensionBase](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md) ← 
[BearingDimensionRadialBall](VM.Managed.DAFUL.GearTrain.BearingDimensionRadialBall.md)

#### Derived

[BearingDimensionAngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDimensionAngularContactBall.md)

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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall__ctor"></a> BearingDimensionRadialBall\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingDimensionRadialBall" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingDimensionRadialBall()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_BallDiameter"></a> BallDiameter

Gets or sets the ball diameter.

```csharp
public ExpressionValueVariable BallDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_BallPitchDiameter"></a> BallPitchDiameter

Gets or sets the ball pitch diameter.

```csharp
public ExpressionValueVariable BallPitchDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_InnerRacewayGrooveRadius"></a> InnerRacewayGrooveRadius

Gets or sets the inner raceway groove radius.

```csharp
public ExpressionValueVariable InnerRacewayGrooveRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_InnerRacewayShoulderDiameter"></a> InnerRacewayShoulderDiameter

Gets or sets the inner raceway shoulder diameter.

```csharp
public ExpressionValueVariable InnerRacewayShoulderDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_NumberOfBall"></a> NumberOfBall

Gets or sets the number of ball.

```csharp
public ExpressionValueVariable NumberOfBall { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_OuterRacewayGrooveRadius"></a> OuterRacewayGrooveRadius

Gets or sets the outer raceway groove radius.

```csharp
public ExpressionValueVariable OuterRacewayGrooveRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_OuterRacewayShoulderBore"></a> OuterRacewayShoulderBore

Gets or sets the outer raceway shoulder bore.

```csharp
public ExpressionValueVariable OuterRacewayShoulderBore { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceC2"></a> RadialInternalClearanceC2

Gets the C2 type radial internal clearance.

```csharp
public double RadialInternalClearanceC2 { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceC3"></a> RadialInternalClearanceC3

Gets the C3 type radial internal clearance.

```csharp
public double RadialInternalClearanceC3 { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceC4"></a> RadialInternalClearanceC4

Gets the C4 type radial internal clearance.

```csharp
public double RadialInternalClearanceC4 { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceC5"></a> RadialInternalClearanceC5

Gets the C5 type radial internal clearance.

```csharp
public double RadialInternalClearanceC5 { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceCN"></a> RadialInternalClearanceCN

Gets the CN type radial internal clearance.

```csharp
public double RadialInternalClearanceCN { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceType"></a> RadialInternalClearanceType

Gets or sets the type of radial internal clearance.

```csharp
public BearingDimensionRadialBall.enRadialInternalClearanceType RadialInternalClearanceType { get; set; }
```

#### Property Value

 [BearingDimensionRadialBall](VM.Managed.DAFUL.GearTrain.BearingDimensionRadialBall.md).[enRadialInternalClearanceType](VM.Managed.DAFUL.GearTrain.BearingDimensionRadialBall.enRadialInternalClearanceType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RadialInternalClearanceUser"></a> RadialInternalClearanceUser

Gets the user input type radial internal clearance.

```csharp
public ExpressionValueVariable RadialInternalClearanceUser { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_RoundingRadius"></a> RoundingRadius

Gets or sets the rounding radius.

```csharp
public ExpressionValueVariable RoundingRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_GetBuilder_VM_Managed_DAFUL_GearTrain_Bearing_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Managed_TMatrix_System_Boolean_System_Boolean_VM_Managed_CAD_BuilderMultiSubtractSimple__"></a> GetBuilder\(Bearing, RacewayType, TMatrix, bool, bool, ref BuilderMultiSubtractSimple\)

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

`bTruncated` bool

The truncated falg.

`bReverse` bool

The reverse direction falg.

`builder` BuilderMultiSubtractSimple

The builder.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionRadialBall_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The update event information.

