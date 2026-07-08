# Class GearTrainSimulationAPI
<a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for simulation.

```csharp
public static class GearTrainSimulationAPI
```

#### Inheritance

object ← 
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

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFG file. If null, the active document will be used.

`targetPath` string

The file path to export DFG file exclude file extension.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportDFS_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> ExportDFS\(GearTrainDocument, string\)

Export DFS file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFS(this GearTrainDocument document, string targetPath)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFS file. If null, the active document will be used.

`targetPath` string

The file path to export DFS file exclude file extension.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportDFSXML_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> ExportDFSXML\(GearTrainDocument, string\)

Export DFSXML file

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportDFSXML(this GearTrainDocument document, string targetPath)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting DFSXML file. If null, the active document will be used.

`targetPath` string

The file path to export DFSXML file exclude file extension.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_ExportMotionFiles_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> ExportMotionFiles\(GearTrainDocument, string, bool, bool, bool, bool\)

Export motion files.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "targetPath" })]
public static void ExportMotionFiles(this GearTrainDocument document, string targetPath, bool writeDFS, bool writeXML, bool writeDFG, bool includeReferenceFiles)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for exporting motion files. If null, the active document will be used.

`targetPath` string

The file path to export motion files exclude file extension.

`writeDFS` bool

The flag for whether to write on dfs or not.

`writeXML` bool

The flag for whether to write on dfsxml or not.

`writeDFG` bool

The flag for whether to write on dfg or not.

`includeReferenceFiles` bool

The flag for whether to include reference files or not.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'targetPath' arguments are empty.

### <a id="VM_API_Pre_GearTrain_GearTrainSimulationAPI_RunSimulation_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> RunSimulation\(GearTrainDocument, SimulationParameter\)

Run simulation.

```csharp
[NotNull(new string[] { "document" })]
public static void RunSimulation(this GearTrainDocument document, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`simulationParameter` [SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs).[SimulationParameter](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs)

The simulation parameter.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

