# Class AnalysisSteadyBatch

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The handling steady batch analysis class

```csharp
public class AnalysisSteadyBatch : TireAnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md) ← 
[AnalysisSteadyBatch](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.md)

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

### AnalysisSteadyBatch\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadyBatch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSteadyBatch()
```

### AnalysisSteadyBatch\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadyBatch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSteadyBatch(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### AngleUnitType

Gets or sets the angle unit.

```csharp
public AngleUnitType AngleUnitType { get; set; }
```

#### Property Value

 [AngleUnitType](VM.Managed.DAFUL.Car.Analysis.AngleUnitType.md)

### CamberAngleInfo

Gets or sets the camber angle.

```csharp
public AnalysisInfo CamberAngleInfo { get; set; }
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

### IsCamberAngle

Gets or sets a value indicating whether [use camber angle].

```csharp
public bool IsCamberAngle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSlipAngle

Gets or sets a value indicating whether [use slip angle].

```csharp
public bool IsSlipAngle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSlipRatio

Gets or sets a value indicating whether [use slip ratio].

```csharp
public bool IsSlipRatio { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVerticalLoad

Gets or sets a value indicating whether [use vertical load].

```csharp
public bool IsVerticalLoad { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SlipAngleIncrement\_SlipRatio

Gets or sets the slip angle increment for slip ratio.

```csharp
public double SlipAngleIncrement_SlipRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SlipAngleIncrement\_VerticalLoad

Gets or sets the slip angle increment for vertical load.

```csharp
public double SlipAngleIncrement_VerticalLoad { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SlipAngleInfo

Gets or sets the slip angle.

```csharp
public AnalysisInfo SlipAngleInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### SlipRatioInfo

Gets or sets the slip ratio.

```csharp
public AnalysisInfo SlipRatioInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### TypeOfSimulation

Gets the type of simulation.

```csharp
public override TireAnalysisBase.SimulationType TypeOfSimulation { get; }
```

#### Property Value

 [TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md).[SimulationType](VM.Managed.DAFUL.Car.TireAnalysisBase.SimulationType.md)

### VelocityUnitType

Gets or sets the velocity unit.

```csharp
public VelocityUnitType VelocityUnitType { get; set; }
```

#### Property Value

 [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

### VerticalLoadIncrement\_CamberAngle

Gets or sets the vertical load increment for camber angle.

```csharp
public double VerticalLoadIncrement_CamberAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VerticalLoadIncrement\_SlipAngle

Gets or sets the vertical load increment for slip angle.

```csharp
public double VerticalLoadIncrement_SlipAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VerticalLoadInfo

Gets or sets the vertical load.

```csharp
public AnalysisInfo VerticalLoadInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

## Methods

### GetIncrement\(BatchType\)

Gets the increment.

```csharp
public double[] GetIncrement(AnalysisSteadyBatch.BatchType typeOfBatch)
```

#### Parameters

`typeOfBatch` [AnalysisSteadyBatch](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.md).[BatchType](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.BatchType.md)

The type of batch.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### GetTestRigMotionUSUBArgument\(BatchType, string\[\]\)

Gets the test rig motion USUB argument.

```csharp
public void GetTestRigMotionUSUBArgument(AnalysisSteadyBatch.BatchType type, string[] arParameter)
```

#### Parameters

`type` [AnalysisSteadyBatch](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.md).[BatchType](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.BatchType.md)

The type.

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar parameter.


