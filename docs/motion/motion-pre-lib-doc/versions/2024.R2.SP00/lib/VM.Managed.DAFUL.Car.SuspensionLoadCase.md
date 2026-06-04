# Class SuspensionLoadCase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The suspension car load case class

```csharp
public class SuspensionLoadCase : LoadCaseBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LoadCaseBase](VM.Managed.DAFUL.Car.LoadCaseBase.md) ← 
[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md)

#### Inherited Members

[LoadCaseBase.Units](VM.Managed.DAFUL.Car.LoadCaseBase.md\#VM\_Managed\_DAFUL\_Car\_LoadCaseBase\_Units)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SuspensionLoadCase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.SuspensionLoadCase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SuspensionLoadCase()
```

### SuspensionLoadCase\(Unit\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.SuspensionLoadCase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SuspensionLoadCase(Unit unit)
```

#### Parameters

`unit` Unit

## Properties

### Analysis

Gets or sets the analysis.

```csharp
public SuspensionAnalysisBase Analysis { get; set; }
```

#### Property Value

 [SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md)

### Mode

Gets or sets the mode.

```csharp
public SuspensionLoadCase.SuspensionMode Mode { get; set; }
```

#### Property Value

 [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

## Methods

### CreateSimulation\(Configuration, ref SuspensionAnalysisConfigurationBase\)

Creates the simulation.

```csharp
public void CreateSimulation(Configuration configActive, ref SuspensionAnalysisConfigurationBase sac)
```

#### Parameters

`configActive` Configuration

The config

`sac` [SuspensionAnalysisConfigurationBase](VM.Managed.DAFUL.Car.SuspensionAnalysisConfigurationBase.md)

The sac.

### GetXmlData\(XmlWriter\)

Gets the XML data.

```csharp
public void GetXmlData(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### Initialize\(int, double, SuspensionAnalysisBase\)

Initializes the specified n step.

```csharp
public void Initialize(int nStep, double dTime, SuspensionAnalysisBase analysis)
```

#### Parameters

`nStep` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n step.

`dTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d time.

`analysis` [SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md)

The analysis.

### MakeSpline\(List<double\[\]\>\[\]\)

Makes the spline.

```csharp
public void MakeSpline(List<double[]>[] arSpl)
```

#### Parameters

`arSpl` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\[\]

The ar SPL.

### SetXmlData\(XmlReader\)

Sets the XML data.

```csharp
public void SetXmlData(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.


