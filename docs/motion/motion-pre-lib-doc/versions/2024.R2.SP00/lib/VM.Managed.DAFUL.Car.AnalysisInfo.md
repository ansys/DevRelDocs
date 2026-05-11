# Class AnalysisInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

This struct is to represent the analysis information.

```csharp
public class AnalysisInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisInfo()
```

### AnalysisInfo\(ILinkContainer\)

Initializes the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisInfo(ILinkContainer lnkContainer)
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

### Final\_CamberAngle

Gets or sets the final camber angle.

```csharp
public double Final_CamberAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Final\_SlipAngle

Gets or sets the final slip angle.

```csharp
public double Final_SlipAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Final\_SlipRatio

Gets or sets the final slip ratio.

```csharp
public double Final_SlipRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Final\_Velocity

Gets or sets the final velocity.

```csharp
public double Final_Velocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Final\_VerticalLoad

Gets or sets the final vertical load.

```csharp
public double Final_VerticalLoad { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitVelocity

Gets or sets the initial velocity.

```csharp
public double InitVelocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitVerticalLoad

Gets or sets the initial vertical load.

```csharp
public double InitVerticalLoad { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Initial\_CamberAngle

Gets or sets the initial camber angle.

```csharp
public double Initial_CamberAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Initial\_SlipAngle

Gets or sets the initial slip angle.

```csharp
public double Initial_SlipAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Initial\_SlipRatio

Gets or sets the initial slip ratio.

```csharp
public double Initial_SlipRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LongitudinalSlipType

Gets or sets the longitudinal slip.

```csharp
public LongtudinalSlip LongitudinalSlipType { get; set; }
```

#### Property Value

 [LongtudinalSlip](VM.Managed.DAFUL.Car.Analysis.Full.LongtudinalSlip.md)

### VelocityUnitType

Gets or sets the velocity unit.

```csharp
public VelocityUnitType VelocityUnitType { get; set; }
```

#### Property Value

 [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

## Methods

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


