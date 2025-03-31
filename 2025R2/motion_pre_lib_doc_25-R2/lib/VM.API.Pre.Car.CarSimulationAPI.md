# Class CarSimulationAPI

Namespace: [VM.API.Pre.Car](VM.API.Pre.Car.md)  
Assembly: VM.API.Pre.Car.dll  

This class implements APIs for simulation in car.

```csharp
public static class CarSimulationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CarSimulationAPI](VM.API.Pre.Car.CarSimulationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ExportDFG\(TestRigDocument, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this TestRigDocument document, string targetPath)
```

#### Parameters

`document` TestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFG\(VehicleTestRigDocument, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this VehicleTestRigDocument document, string targetPath)
```

#### Parameters

`document` VehicleTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFG\(TireTestRigDocument, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this TireTestRigDocument document, string targetPath)
```

#### Parameters

`document` TireTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFG\(FourPostTestRigDocument, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this FourPostTestRigDocument document, string targetPath)
```

#### Parameters

`document` FourPostTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFG\(ShimmyJudderTestRigDocument, string\)

Export DFG file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this ShimmyJudderTestRigDocument document, string targetPath)
```

#### Parameters

`document` ShimmyJudderTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFS\(TestRigDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this TestRigDocument document, string targetPath)
```

#### Parameters

`document` TestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFS\(VehicleTestRigDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this VehicleTestRigDocument document, string targetPath)
```

#### Parameters

`document` VehicleTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFS\(TireTestRigDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this TireTestRigDocument document, string targetPath)
```

#### Parameters

`document` TireTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFS\(FourPostTestRigDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this FourPostTestRigDocument document, string targetPath)
```

#### Parameters

`document` FourPostTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFS\(ShimmyJudderTestRigDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this ShimmyJudderTestRigDocument document, string targetPath)
```

#### Parameters

`document` ShimmyJudderTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFSXML\(TestRigDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this TestRigDocument document, string targetPath)
```

#### Parameters

`document` TestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFSXML\(VehicleTestRigDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this VehicleTestRigDocument document, string targetPath)
```

#### Parameters

`document` VehicleTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFSXML\(TireTestRigDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this TireTestRigDocument document, string targetPath)
```

#### Parameters

`document` TireTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFSXML\(FourPostTestRigDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this FourPostTestRigDocument document, string targetPath)
```

#### Parameters

`document` FourPostTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### ExportDFSXML\(ShimmyJudderTestRigDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this ShimmyJudderTestRigDocument document, string targetPath)
```

#### Parameters

`document` ShimmyJudderTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### RunSimulation\(TestRigDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this TestRigDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` TestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### RunSimulation\(VehicleTestRigDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this VehicleTestRigDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` VehicleTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### RunSimulation\(TireTestRigDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this TireTestRigDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` TireTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### RunSimulation\(FourPostTestRigDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this FourPostTestRigDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` FourPostTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### RunSimulation\(ShimmyJudderTestRigDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this ShimmyJudderTestRigDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` ShimmyJudderTestRigDocument

The <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.


