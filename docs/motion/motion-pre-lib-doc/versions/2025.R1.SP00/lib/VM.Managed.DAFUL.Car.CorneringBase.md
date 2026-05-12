#  Class CorneringBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The analysis base class for cornering

```csharp
public abstract class CorneringBase : FullCarAnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CorneringBase](VM.Managed.DAFUL.Car.CorneringBase.md)

#### Derived

[AnalysisBrakingInTurn](VM.Managed.DAFUL.Car.AnalysisBrakingInTurn.md), 
[AnalysisConstantRadiusCornering](VM.Managed.DAFUL.Car.AnalysisConstantRadiusCornering.md), 
[AnalysisCorneringWithSteerRelease](VM.Managed.DAFUL.Car.AnalysisCorneringWithSteerRelease.md), 
[AnalysisLiftOffTurnIn](VM.Managed.DAFUL.Car.AnalysisLiftOffTurnIn.md), 
[AnalysisPowerOffCornering](VM.Managed.DAFUL.Car.AnalysisPowerOffCornering.md)

#### Implements

IHasInitialVel

#### Inherited Members

[FullCarAnalysisBase.IsQuasiStaticStraightLineSetup](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_IsQuasiStaticStraightLineSetup), 
[FullCarAnalysisBase.RoadFile](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_RoadFile), 
[FullCarAnalysisBase.GearPositionType](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_GearPositionType), 
[FullCarAnalysisBase.TireRadiusPosition](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_TireRadiusPosition), 
[AnalysisBase.m\_pLnkContainer](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_m\_pLnkContainer), 
[AnalysisBase.SetModified\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_SetModified), 
[AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[AnalysisBase.GetConvertUnit\(LengthUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Models\_Pre\_LengthUnitType\_), 
[AnalysisBase.GetGravity\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetGravity), 
[AnalysisBase.GetConvertUnit\(VelocityUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[AnalysisBase.GetConvertUnit\(AccelerationUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_AccelerationUnitType\_), 
[AnalysisBase.IsSim](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_IsSim)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_CorneringBase__ctor"></a> CorneringBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.CorneringBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CorneringBase()
```

### <a id="VM_Managed_DAFUL_Car_CorneringBase__ctor_VM_Models_Pre_ILinkContainer_"></a> CorneringBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.CorneringBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CorneringBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_CorneringBase_DistanceUnitType"></a> DistanceUnitType

Gets or sets the distance unit.

```csharp
public LengthUnitType DistanceUnitType { get; set; }
```

#### Property Value

 LengthUnitType

### <a id="VM_Managed_DAFUL_Car_CorneringBase_EntityDistance"></a> EntityDistance

Gets or sets the entity distance.

```csharp
public double EntityDistance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_CorneringBase_InitialVelocityCornering"></a> InitialVelocityCornering

Gets or sets the initial velocity.

```csharp
public virtual double InitialVelocityCornering { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_CorneringBase_TimeOfSettle"></a> TimeOfSettle

Gets or sets the settle time.

```csharp
public double TimeOfSettle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_CorneringBase_TurnDirectionType"></a> TurnDirectionType

Gets or sets the turn direction.

```csharp
public TurnDirectionType TurnDirectionType { get; set; }
```

#### Property Value

 [TurnDirectionType](VM.Managed.DAFUL.Car.Analysis.Full.TurnDirectionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_CorneringBase_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

