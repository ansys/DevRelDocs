# Class AnalysisFourPostRideInfo
<a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

This class is to represent the analysis information.

```csharp
public class AnalysisFourPostRideInfo
```

#### Inheritance

object ← 
[AnalysisFourPostRideInfo](VM.Managed.DAFUL.Car.AnalysisFourPostRideInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo__ctor"></a> AnalysisFourPostRideInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRideInfo()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisFourPostRideInfo\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRideInfo(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The lnk container.

## Fields

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_m_pLnkContainer"></a> m\_pLnkContainer

```csharp
protected ILinkContainer m_pLnkContainer
```

#### Field Value

 ILinkContainer

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_AccUnit"></a> AccUnit

Gets or sets the acc unit.

```csharp
public SloverFunctionAccUnit AccUnit { get; set; }
```

#### Property Value

 SloverFunctionAccUnit

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Active_Actuators"></a> Active\_Actuators

Gets or sets the active actuators.

```csharp
public ActiveActuators Active_Actuators { get; set; }
```

#### Property Value

 ActiveActuators

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Actuation_Type"></a> Actuation\_Type

Gets or sets the ActuationType.

```csharp
public ActuationType Actuation_Type { get; set; }
```

#### Property Value

 ActuationType

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_AmplitudeValue"></a> AmplitudeValue

Gets or sets the Amplitude.

```csharp
public double AmplitudeValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_BasisForNumOfOutputSteps"></a> BasisForNumOfOutputSteps

Gets or sets the Basis For Number Of Output Steps.

```csharp
public BasisForNumOfOutputSteps BasisForNumOfOutputSteps { get; set; }
```

#### Property Value

 BasisForNumOfOutputSteps

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Calculated_TimeLag"></a> Calculated\_TimeLag

Gets or sets the Time Lag.

```csharp
public double Calculated_TimeLag { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Calculated_Wheelbase"></a> Calculated\_Wheelbase

Gets or sets the Calculated Wheelbase.

```csharp
public double Calculated_Wheelbase { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_DispUnit"></a> DispUnit

Gets or sets the disp unit.

```csharp
public SloverFunctionDispUnit DispUnit { get; set; }
```

#### Property Value

 SloverFunctionDispUnit

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_End_Frequency"></a> End\_Frequency

Gets or sets the end frequency.

```csharp
public double End_Frequency { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Excitation_Mode"></a> Excitation\_Mode

Gets or sets the excitation mode.

```csharp
public ExcitationMode Excitation_Mode { get; set; }
```

#### Property Value

 ExcitationMode

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_ForceUnit"></a> ForceUnit

Gets or sets the force unit.

```csharp
public SloverFunctionForceUnit ForceUnit { get; set; }
```

#### Property Value

 SloverFunctionForceUnit

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Input_Location"></a> Input\_Location

Gets or sets the input location.

```csharp
public InputLocation Input_Location { get; set; }
```

#### Property Value

 InputLocation

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Input_Source"></a> Input\_Source

Gets or sets the input source.

```csharp
public InputSource Input_Source { get; set; }
```

#### Property Value

 InputSource

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_LFront"></a> LFront

Gets or sets the left front.

```csharp
public string LFront { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_LRear"></a> LRear

Gets or sets the left rear.

```csharp
public string LRear { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_MinNo_OutputStepsPerInput"></a> MinNo\_OutputStepsPerInput

Gets or sets the Min.No.OfOutputSteps Per Input

```csharp
public double MinNo_OutputStepsPerInput { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_NumOfOutputsSteps"></a> NumOfOutputsSteps

Gets or sets the Number Of Output Steps

```csharp
public double NumOfOutputsSteps { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Output_Frequency"></a> Output\_Frequency

Gets or sets the OutputFrequency

```csharp
public double Output_Frequency { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Output_Interval"></a> Output\_Interval

Gets or sets the Output Inverval

```csharp
public double Output_Interval { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_RFront"></a> RFront

Gets or sets the right front.

```csharp
public string RFront { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_RRear"></a> RRear

Gets or sets the right rear.

```csharp
public string RRear { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Spline_File"></a> Spline\_File

Gets or sets the spline file.

```csharp
public string Spline_File { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Start_Frequency"></a> Start\_Frequency

Gets or sets the start frequency.

```csharp
public double Start_Frequency { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_TargetValue_Basis"></a> TargetValue\_Basis

Gets or sets the Target Value For Basis.

```csharp
public double TargetValue_Basis { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_Vechile_Speed"></a> Vechile\_Speed

Gets or sets the VechileSpeed.

```csharp
public double Vechile_Speed { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_VelUnit"></a> VelUnit

Gets or sets the vel unit.

```csharp
public SloverFunctionVelUnit VelUnit { get; set; }
```

#### Property Value

 SloverFunctionVelUnit

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_SetModified"></a> SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```

