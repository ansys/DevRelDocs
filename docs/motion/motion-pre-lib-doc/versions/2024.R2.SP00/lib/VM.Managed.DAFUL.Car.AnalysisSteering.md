# Class AnalysisSteering

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The steering analysis class

```csharp
public class AnalysisSteering : SuspensionAnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md) ← 
[AnalysisSteering](VM.Managed.DAFUL.Car.AnalysisSteering.md)

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

### AnalysisSteering\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSteering()
```

### AnalysisSteering\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSteering(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### CoordinateSystemType

Gets or sets the coordinate system.

```csharp
public CoordinateSystemType CoordinateSystemType { get; set; }
```

#### Property Value

 [CoordinateSystemType](VM.Managed.DAFUL.Car.Analysis.Suspension.CoordinateSystemType.md)

### LWFHeightValue

Gets or sets the height of the LWF.

```csharp
public double LWFHeightValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LowerSteeringLimitValue

Gets or sets the lower steering limit.

```csharp
public double LowerSteeringLimitValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RWFHeightValue

Gets or sets the height of the RWF.

```csharp
public double RWFHeightValue { get; set; }
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

### UpperSteeringLimitValue

Gets or sets the upper steering limit.

```csharp
public double UpperSteeringLimitValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

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


