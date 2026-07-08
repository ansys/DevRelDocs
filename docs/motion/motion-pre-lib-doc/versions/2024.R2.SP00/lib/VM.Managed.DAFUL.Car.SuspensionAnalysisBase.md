# Class SuspensionAnalysisBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The suspension car analysis base class

```csharp
public abstract class SuspensionAnalysisBase : AnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md)

#### Derived

[AnalysisParallelTravel](VM.Managed.DAFUL.Car.AnalysisParallelTravel.md), 
[AnalysisRollVertical](VM.Managed.DAFUL.Car.AnalysisRollVertical.md), 
[AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md), 
[AnalysisSteering](VM.Managed.DAFUL.Car.AnalysisSteering.md)

#### Inherited Members

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

### SuspensionAnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SuspensionAnalysisBase()
```

### SuspensionAnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SuspensionAnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### SteeringFunctionArgument

Gets the steering function argument.

```csharp
public virtual string SteeringFunctionArgument { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SteeringInputType

Gets or sets the steering input.

```csharp
public SteeringInputType SteeringInputType { get; set; }
```

#### Property Value

 [SteeringInputType](VM.Managed.DAFUL.Car.Analysis.Suspension.SteeringInputType.md)

### Vertical

Gets or sets the vertical.

```csharp
public VerticalType Vertical { get; set; }
```

#### Property Value

 [VerticalType](VM.Managed.DAFUL.Car.Analysis.Suspension.VerticalType.md)

### VerticalModeForSetup

Gets or sets the vertical mode for setup.

```csharp
public VerticalModeForSetupType VerticalModeForSetup { get; set; }
```

#### Property Value

 [VerticalModeForSetupType](VM.Managed.DAFUL.Car.Analysis.Suspension.VerticalModeForSetupType.md)

## Methods

### GetDataForLoadCase\(int, Dictionary<Column, double\[\]\>, SuspensionMode\)

Gets the data for load case.

```csharp
public virtual void GetDataForLoadCase(int nStep, Dictionary<SuspensionLoadCase.Column, double[]> dicCol, SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`nStep` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The step.

`dicCol` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[Column](VM.Managed.DAFUL.Car.SuspensionLoadCase.Column.md), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

The column information.

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### GetXmlData\(XmlWriter\)

Gets the XML data.

```csharp
public virtual void GetXmlData(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### SetDataForLoadCase\(SuspensionMode\)

Sets the data for load case.

```csharp
public virtual void SetDataForLoadCase(SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### SetXmlData\(XmlReader\)

Sets the XML data.

```csharp
public virtual void SetXmlData(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.


