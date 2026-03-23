# Class AnalysisStaticLoad

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The static load analysis class

```csharp
public class AnalysisStaticLoad : SuspensionAnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md) ← 
[AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md)

#### Inherited Members

[SuspensionAnalysisBase.GetDataForLoadCase\(int, Dictionary<SuspensionLoadCase.Column, double\[\]\>, SuspensionLoadCase.SuspensionMode\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_GetDataForLoadCase\_System\_Int32\_System\_Collections\_Generic\_Dictionary\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_Column\_System\_Double\_\_\_\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_SuspensionMode\_), 
[SuspensionAnalysisBase.SetDataForLoadCase\(SuspensionLoadCase.SuspensionMode\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SetDataForLoadCase\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_SuspensionMode\_), 
[SuspensionAnalysisBase.GetXmlData\(XmlWriter\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_GetXmlData\_System\_Xml\_XmlWriter\_), 
[SuspensionAnalysisBase.SetXmlData\(XmlReader\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SetXmlData\_System\_Xml\_XmlReader\_), 
[SuspensionAnalysisBase.SteeringFunctionArgument](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SteeringFunctionArgument), 
[SuspensionAnalysisBase.SteeringInputType](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SteeringInputType), 
[SuspensionAnalysisBase.VerticalModeForSetup](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_VerticalModeForSetup), 
[SuspensionAnalysisBase.Vertical](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_Vertical), 
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

### AnalysisStaticLoad\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisStaticLoad()
```

### AnalysisStaticLoad\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisStaticLoad(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### AligningTorqueInfo

Gets or sets the aligning torque.

```csharp
public AnalysisStaticLoad.AligningTorque AligningTorqueInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[AligningTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.AligningTorque.md)

### BrakingForceInfo

Gets or sets the braking force.

```csharp
public AnalysisStaticLoad.BrakingForce BrakingForceInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[BrakingForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.BrakingForce.md)

### CoordSystem

Gets or sets the coordinate system.

```csharp
public CoordinateSystemType CoordSystem { get; set; }
```

#### Property Value

 [CoordinateSystemType](VM.Managed.DAFUL.Car.Analysis.Suspension.CoordinateSystemType.md)

### CorneringForceInfo

Gets or sets the cornering force.

```csharp
public AnalysisStaticLoad.CorneringForce CorneringForceInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[CorneringForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.CorneringForce.md)

### DamageForceInfo

Gets or sets the damage force.

```csharp
public AnalysisStaticLoad.DamageForce DamageForceInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[DamageForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageForce.md)

### DamageRadiusInfo

Gets or sets the damage radius.

```csharp
public AnalysisStaticLoad.DamageRadius DamageRadiusInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[DamageRadius](VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageRadius.md)

### OverturningTorqueInfo

Gets or sets the overturning torque.

```csharp
public AnalysisStaticLoad.OverturningTorque OverturningTorqueInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[OverturningTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.OverturningTorque.md)

### RollResTorqueInfo

Gets or sets the roll res torque.

```csharp
public AnalysisStaticLoad.RollResTorque RollResTorqueInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[RollResTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.RollResTorque.md)

### SteerLimit\_Lower

Gets or sets the steer lower limit.

```csharp
public double SteerLimit_Lower { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SteerLimit\_Upper

Gets or sets the steer upper limit.

```csharp
public double SteerLimit_Upper { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SteeringFunctionArgument

Gets the steering function argument.

```csharp
public override string SteeringFunctionArgument { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TractionForceInfo

Gets or sets the traction force.

```csharp
public AnalysisStaticLoad.TractionForce TractionForceInfo { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[TractionForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.TractionForce.md)

### Vertical\_Input

Gets or sets the vertical input.

```csharp
public AnalysisStaticLoad.VerticalInputType Vertical_Input { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[VerticalInputType](VM.Managed.DAFUL.Car.AnalysisStaticLoad.VerticalInputType.md)

### Vertical\_Len

Gets or sets the vertical length.

```csharp
public AnalysisStaticLoad.VerticalLength Vertical_Len { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md).[VerticalLength](VM.Managed.DAFUL.Car.AnalysisStaticLoad.VerticalLength.md)

## Methods

### GetDataForLoadCase\(int, Dictionary<Column, double\[\]\>, SuspensionMode\)

Gets the data for load case.

```csharp
public override void GetDataForLoadCase(int nStep, Dictionary<SuspensionLoadCase.Column, double[]> dicCol, SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`nStep` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The step.

`dicCol` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[Column](VM.Managed.DAFUL.Car.SuspensionLoadCase.Column.md), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

The column information.

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### GetXmlData\(XmlWriter\)

Gets the XML data.

```csharp
public override void GetXmlData(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### SetDataForLoadCase\(SuspensionMode\)

Sets the data for load case.

```csharp
public override void SetDataForLoadCase(SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### SetXmlData\(XmlReader\)

Sets the XML data.

```csharp
public override void SetXmlData(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.


