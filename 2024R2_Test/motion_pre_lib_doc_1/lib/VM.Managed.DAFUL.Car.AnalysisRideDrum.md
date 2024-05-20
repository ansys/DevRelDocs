# Class AnalysisRideDrum

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The ride drum analysis class

```csharp
public class AnalysisRideDrum : TireAnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md) ← 
[AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

#### Implements

IHasInitialVel

#### Inherited Members

[TireAnalysisBase.GetConvertUnitToMMKS\(VelocityUnitType\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetConvertUnitToMMKS\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[TireAnalysisBase.GetTestRigMotionUSUBArgumentCore\(string, string, AnalysisInfo, string\[\]\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetTestRigMotionUSUBArgumentCore\_System\_String\_System\_String\_VM\_Managed\_DAFUL\_Car\_AnalysisInfo\_System\_String\_\_\_), 
[TireAnalysisBase.TypeOfSimulation](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_TypeOfSimulation), 
[TireAnalysisBase.InitialVelocity](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_InitialVelocity), 
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

### AnalysisRideDrum\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisRideDrum" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisRideDrum()
```

### AnalysisRideDrum\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisRideDrum" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisRideDrum(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### CleatShape

Gets or sets the cleat shape.

```csharp
public CleatShape CleatShape { get; set; }
```

#### Property Value

 [CleatShape](VM.Managed.DAFUL.Car.CleatShape.md)

### Cleat\_StartingAngle

Gets or sets the cleat starting angle.

```csharp
public double Cleat_StartingAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DiameterValue

Gets or sets the diameter.

```csharp
public double DiameterValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DrumInfo

Gets or sets the drum.

```csharp
public AnalysisInfo DrumInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### InitialVelocity

Gets the initial velocity.

```csharp
protected override double InitialVelocity { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Number\_Cleats

Gets or sets the number of cleats.

```csharp
public uint Number_Cleats { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.


