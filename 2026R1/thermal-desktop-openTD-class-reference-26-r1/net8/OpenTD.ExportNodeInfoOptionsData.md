# <a id="OpenTD_ExportNodeInfoOptionsData"></a> Class ExportNodeInfoOptionsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sets options for the ThermalDesktop.ExportNodeInfo command, 
which can be used to get node info as a list (the default) or
write node info to the screen or to a file.

```csharp
public class ExportNodeInfoOptionsData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_ExportNodeInfoOptionsData__ctor"></a> ExportNodeInfoOptionsData\(\)

```csharp
public ExportNodeInfoOptionsData()
```

## Properties

### <a id="OpenTD_ExportNodeInfoOptionsData_Filename"></a> Filename

```csharp
public RootedPathname Filename { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

### <a id="OpenTD_ExportNodeInfoOptionsData_Format"></a> Format

```csharp
public string Format { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputComments"></a> OutputComments

```csharp
public bool OutputComments { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputDestination"></a> OutputDestination

```csharp
public ExportNodeInfoOptionsData.Destinations OutputDestination { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Destinations](OpenTD.ExportNodeInfoOptionsData.Destinations.md)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputLocation"></a> OutputLocation

```csharp
public ExportNodeInfoOptionsData.Locations OutputLocation { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Locations](OpenTD.ExportNodeInfoOptionsData.Locations.md)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputMeasureLocation"></a> OutputMeasureLocation

```csharp
public bool OutputMeasureLocation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputPostProcessedData"></a> OutputPostProcessedData

```csharp
public ExportNodeInfoOptionsData.Datasets OutputPostProcessedData { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Datasets](OpenTD.ExportNodeInfoOptionsData.Datasets.md)

### <a id="OpenTD_ExportNodeInfoOptionsData_OutputSurfaceArea"></a> OutputSurfaceArea

```csharp
public bool OutputSurfaceArea { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[ExportNodeInfo](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_ExportNodeInfo\_OpenTD\_ExportNodeInfoOptionsData\_)\([ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)\)

