# Class PlotParameters
<a id="VM_Models_OutputReader_PlotParameters"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

Defines the result data source, target, paths, and coordinate system used to read curve data.

```csharp
public class PlotParameters
```

#### Inheritance

object ← 
[PlotParameters](VM.Models.OutputReader.PlotParameters.md)

#### Derived

[PlotParametersEx](VM.Models.OutputReader.PlotParametersEx.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_OutputReader_PlotParameters__ctor"></a> PlotParameters\(\)

```csharp
public PlotParameters()
```

## Properties

### <a id="VM_Models_OutputReader_PlotParameters_CSYS"></a> CSYS

Gets or sets the coordinate-system data used when reading the selected paths.

Set a coordinate-system marker object to read the selected paths relative to that marker.

```csharp
public object CSYS { get; set; }
```

#### Property Value

 object

#### Remarks

The coordinate-system value is applied when the selected result paths require coordinate-based data. When the value is not a coordinate-system marker object, the global inertia coordinate system is used.

### <a id="VM_Models_OutputReader_PlotParameters_Paths"></a> Paths

Gets or sets the characteristic and component paths to read from <xref href="VM.Models.OutputReader.PlotParameters.Target" data-throw-if-not-resolved="false"></xref>.

Each value combines a characteristic and component with a slash, such as <code>Displacement/Magnitude</code>.

```csharp
public IEnumerable<string> Paths { get; set; }
```

#### Property Value

 IEnumerable<string\>

#### Remarks

Each path combines a characteristic with a component returned by the plot-characteristic lookup operations.

### <a id="VM_Models_OutputReader_PlotParameters_PlotDataType"></a> PlotDataType

Gets or sets the result data source used to read curve values.

<xref href="VM.Models.PlotDataType.DEFAULT" data-throw-if-not-resolved="false"></xref> reads the standard result data, while <xref href="VM.Models.PlotDataType.PlotResult" data-throw-if-not-resolved="false"></xref> reads data prepared for plotting.

```csharp
public PlotDataType PlotDataType { get; set; }
```

#### Property Value

 PlotDataType

#### Remarks

The selected source determines which time and result data are used when the paths are read.

### <a id="VM_Models_OutputReader_PlotParameters_Target"></a> Target

Gets or sets the full name of the entity whose curve data is read.

The value identifies an entity available in the opened result document, such as <code>Crank</code> or a body component path such as <code>FEBody_01/Node/1</code>.

```csharp
public string Target { get; set; }
```

#### Property Value

 string

#### Remarks

The value must identify an entity available in the opened result document.

