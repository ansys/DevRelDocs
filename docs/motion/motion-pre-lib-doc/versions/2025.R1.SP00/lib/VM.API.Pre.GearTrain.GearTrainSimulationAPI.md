#  Class GearTrainSimulationAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for simulation.

```csharp
public static class GearTrainSimulationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GearTrainSimulationAPI](VM.API.Pre.GearTrain.GearTrainSimulationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportDFG_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> ExportDFG\(GearTrainDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFG(this GearTrainDocument document, string targetPath)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFG file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportDFS_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> ExportDFS\(GearTrainDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this GearTrainDocument document, string targetPath)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFS file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportDFSXML_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> ExportDFSXML\(GearTrainDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this GearTrainDocument document, string targetPath)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path to export DFSXML file exclude file extension.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_RunSimulation_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> RunSimulation\(GearTrainDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this GearTrainDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

