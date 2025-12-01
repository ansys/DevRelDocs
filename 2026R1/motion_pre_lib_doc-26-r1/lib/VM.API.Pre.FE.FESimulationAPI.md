# Class FESimulationAPI
<a id="VM_API_Pre_FE_FESimulationAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to convert shell to solid.

```csharp
public static class FESimulationAPI
```

#### Inheritance

object ← 
[FESimulationAPI](VM.API.Pre.FE.FESimulationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_FESimulationAPI_ExportDFGForComponentEigenvalue_VM_Models_Pre_IDocument_VM_API_Pre_Obj_System_String_"></a> ExportDFGForComponentEigenvalue\(IDocument, Obj, string\)

Export DFG for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFGForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export dfg for component eigenvalue.

`target` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The target to export dfg for component eigenvalue.

`resultPath` string

The result path to export dfg for component eigenvalue.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'target' arguments are empty.

### <a id="VM_API_Pre_FE_FESimulationAPI_ExportDFSForComponentEigenvalue_VM_Models_Pre_IDocument_VM_API_Pre_Obj_System_String_"></a> ExportDFSForComponentEigenvalue\(IDocument, Obj, string\)

Export DFS for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFSForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export dfs for component eigenvalue.

`target` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The target to export dfs for component eigenvalue.

`resultPath` string

The result path to export dfs for component eigenvalue.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'target' arguments are empty.

### <a id="VM_API_Pre_FE_FESimulationAPI_ExportDFSXMLForComponentEigenvalue_VM_Models_Pre_IDocument_VM_API_Pre_Obj_System_String_"></a> ExportDFSXMLForComponentEigenvalue\(IDocument, Obj, string\)

Export XML for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFSXMLForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export xml for component eigenvalue.

`target` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The target to export xml for component eigenvalue.

`resultPath` string

The result path to export xml for component eigenvalue.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'target' arguments are empty.

### <a id="VM_API_Pre_FE_FESimulationAPI_RunSimulationForComponentEigenvalue_VM_Models_Pre_IDocument_VM_API_Pre_Obj_System_String_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> RunSimulationForComponentEigenvalue\(IDocument, Obj, string, SimulationParameter\)

Run simulation for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void RunSimulationForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` IDocument

The document to simulate for component eigenvalue.

`target` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The target to simulate for component eigenvalue.

`resultPath` string

The result path to simulate for component eigenvalue.

`simulationParameter` [SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs).[SimulationParameter](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs)

The simulation parameter.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'target' arguments are empty.

