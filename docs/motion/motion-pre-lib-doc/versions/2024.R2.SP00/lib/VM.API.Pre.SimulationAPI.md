# Class SimulationAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for simulation.

```csharp
public static class SimulationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SimulationAPI](VM.API.Pre.SimulationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ExportDFG\(DocumentAnalysis, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this DocumentAnalysis document, string targetPath)
```

#### Parameters

`document` DocumentAnalysis

The <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

### ExportDFS\(DocumentAnalysis, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this DocumentAnalysis document, string targetPath)
```

#### Parameters

`document` DocumentAnalysis

The <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

### ExportDFSXML\(DocumentAnalysis, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this DocumentAnalysis document, string targetPath)
```

#### Parameters

`document` DocumentAnalysis

The <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

### RunSimulation\(DocumentAnalysis, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this DocumentAnalysis document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` DocumentAnalysis

The <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

### SetDynamicNumericalDamping\(SubSystemDocument, double\)

Sets the dynamic numerical damping.

```csharp
public static void SetDynamicNumericalDamping(this SubSystemDocument subSystemDocument, double numericalDamping)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to set the dynamic numerical damping.

`numericalDamping` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of numerical damping.

### SetStaticNumericalDamping\(SubSystemDocument, double\)

Sets the static numerical damping.

```csharp
public static void SetStaticNumericalDamping(this SubSystemDocument subSystemDocument, double numericalDamping)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to set the static numerical damping.

`numericalDamping` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of numerical damping.

### SetThermalNumericalDamping\(SubSystemDocument, double\)

Sets the thermal numerical damping.

```csharp
public static void SetThermalNumericalDamping(this SubSystemDocument subSystemDocument, double numericalDamping)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to set the thermal numerical damping.

`numericalDamping` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of numerical damping.


