# Class AnalysisFourPostRideInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

This class is to represent the analysis information.

```csharp
public class AnalysisFourPostRideInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisFourPostRideInfo](VM.Managed.DAFUL.Car.AnalysisFourPostRideInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisFourPostRideInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRideInfo()
```

### AnalysisFourPostRideInfo\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRideInfo(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The lnk container.

## Fields

### m\_pLnkContainer

```csharp
protected ILinkContainer m_pLnkContainer
```

#### Field Value

 ILinkContainer

## Properties

### AccUnit

Gets or sets the acc unit.

```csharp
public SloverFunctionAccUnit AccUnit { get; set; }
```

#### Property Value

 SloverFunctionAccUnit

### Active\_Actuators

Gets or sets the active actuators.

```csharp
public ActiveActuators Active_Actuators { get; set; }
```

#### Property Value

 ActiveActuators

### Actuation\_Type

Gets or sets the ActuationType.

```csharp
public ActuationType Actuation_Type { get; set; }
```

#### Property Value

 ActuationType

### AmplitudeValue

Gets or sets the Amplitude.

```csharp
public double AmplitudeValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BasisForNumOfOutputSteps

Gets or sets the Basis For Number Of Output Steps.

```csharp
public BasisForNumOfOutputSteps BasisForNumOfOutputSteps { get; set; }
```

#### Property Value

 BasisForNumOfOutputSteps

### Calculated\_TimeLag

Gets or sets the Time Lag.

```csharp
public double Calculated_TimeLag { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Calculated\_Wheelbase

Gets or sets the Calculated Wheelbase.

```csharp
public double Calculated_Wheelbase { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DispUnit

Gets or sets the disp unit.

```csharp
public SloverFunctionDispUnit DispUnit { get; set; }
```

#### Property Value

 SloverFunctionDispUnit

### End\_Frequency

Gets or sets the end frequency.

```csharp
public double End_Frequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Excitation\_Mode

Gets or sets the excitation mode.

```csharp
public ExcitationMode Excitation_Mode { get; set; }
```

#### Property Value

 ExcitationMode

### ForceUnit

Gets or sets the force unit.

```csharp
public SloverFunctionForceUnit ForceUnit { get; set; }
```

#### Property Value

 SloverFunctionForceUnit

### Input\_Location

Gets or sets the input location.

```csharp
public InputLocation Input_Location { get; set; }
```

#### Property Value

 InputLocation

### Input\_Source

Gets or sets the input source.

```csharp
public InputSource Input_Source { get; set; }
```

#### Property Value

 InputSource

### LFront

Gets or sets the left front.

```csharp
public string LFront { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LRear

Gets or sets the left rear.

```csharp
public string LRear { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MinNo\_OutputStepsPerInput

Gets or sets the Min.No.OfOutputSteps Per Input

```csharp
public double MinNo_OutputStepsPerInput { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumOfOutputsSteps

Gets or sets the Number Of Output Steps

```csharp
public double NumOfOutputsSteps { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Output\_Frequency

Gets or sets the OutputFrequency

```csharp
public double Output_Frequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Output\_Interval

Gets or sets the Output Inverval

```csharp
public double Output_Interval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RFront

Gets or sets the right front.

```csharp
public string RFront { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RRear

Gets or sets the right rear.

```csharp
public string RRear { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Spline\_File

Gets or sets the spline file.

```csharp
public string Spline_File { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Start\_Frequency

Gets or sets the start frequency.

```csharp
public double Start_Frequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TargetValue\_Basis

Gets or sets the Target Value For Basis.

```csharp
public double TargetValue_Basis { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Vechile\_Speed

Gets or sets the VechileSpeed.

```csharp
public double Vechile_Speed { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VelUnit

Gets or sets the vel unit.

```csharp
public SloverFunctionVelUnit VelUnit { get; set; }
```

#### Property Value

 SloverFunctionVelUnit

## Methods

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


