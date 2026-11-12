# Class PlotParametersEx
<a id="VM_Models_OutputReader_PlotParametersEx"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

Extends <xref href="VM.Models.OutputReader.PlotParameters" data-throw-if-not-resolved="false"></xref> with multiple targets and curve aggregation.

```csharp
public class PlotParametersEx : PlotParameters
```

#### Inheritance

object ← 
[PlotParameters](VM.Models.OutputReader.PlotParameters.md) ← 
[PlotParametersEx](VM.Models.OutputReader.PlotParametersEx.md)

#### Inherited Members

[PlotParameters.PlotDataType](VM.Models.OutputReader.PlotParameters.md\#VM\_Models\_OutputReader\_PlotParameters\_PlotDataType), 
[PlotParameters.Target](VM.Models.OutputReader.PlotParameters.md\#VM\_Models\_OutputReader\_PlotParameters\_Target), 
[PlotParameters.Paths](VM.Models.OutputReader.PlotParameters.md\#VM\_Models\_OutputReader\_PlotParameters\_Paths), 
[PlotParameters.CSYS](VM.Models.OutputReader.PlotParameters.md\#VM\_Models\_OutputReader\_PlotParameters\_CSYS)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_OutputReader_PlotParametersEx__ctor"></a> PlotParametersEx\(\)

```csharp
public PlotParametersEx()
```

## Properties

### <a id="VM_Models_OutputReader_PlotParametersEx_Sum"></a> Sum

Gets or sets whether curves with the same characteristic and component path are summed across targets.

```csharp
public bool Sum { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_OutputReader_PlotParametersEx_Targets"></a> Targets

Gets or sets the full names of the entities whose curve data is read.

```csharp
public IEnumerable<string> Targets { get; set; }
```

#### Property Value

 IEnumerable<string\>

