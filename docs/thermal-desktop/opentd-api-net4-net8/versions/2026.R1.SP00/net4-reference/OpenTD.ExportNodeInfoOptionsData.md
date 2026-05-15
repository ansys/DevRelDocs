# Class ExportNodeInfoOptionsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sets options for the ThermalDesktop.ExportNodeInfo command, 
which can be used to get node info as a list (the default) or
write node info to the screen or to a file.

```csharp
[DataContract]
public class ExportNodeInfoOptionsData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### ExportNodeInfoOptionsData\(\)

```csharp
public ExportNodeInfoOptionsData()
```

## Properties

### Filename

```csharp
[DataMember]
public RootedPathname Filename { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

### Format

```csharp
[DataMember]
public string Format { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputComments

```csharp
[DataMember]
public bool OutputComments { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputDestination

```csharp
[DataMember]
public ExportNodeInfoOptionsData.Destinations OutputDestination { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Destinations](OpenTD.ExportNodeInfoOptionsData.Destinations.md)

### OutputLocation

```csharp
[DataMember]
public ExportNodeInfoOptionsData.Locations OutputLocation { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Locations](OpenTD.ExportNodeInfoOptionsData.Locations.md)

### OutputMeasureLocation

```csharp
public bool OutputMeasureLocation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputPostProcessedData

```csharp
[DataMember]
public ExportNodeInfoOptionsData.Datasets OutputPostProcessedData { get; set; }
```

#### Property Value

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md).[Datasets](OpenTD.ExportNodeInfoOptionsData.Datasets.md)

### OutputSurfaceArea

```csharp
[DataMember]
public bool OutputSurfaceArea { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[ExportNodeInfo](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_ExportNodeInfo\_OpenTD\_ExportNodeInfoOptionsData\_)\([ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)\)


