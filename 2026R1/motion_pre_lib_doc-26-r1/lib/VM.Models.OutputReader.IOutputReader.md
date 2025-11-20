# Interface IOutputReader
<a id="VM_Models_OutputReader_IOutputReader"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

```csharp
public interface IOutputReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_OutputReader_IOutputReader_Close"></a> Close\(\)

```csharp
void Close()
```

### <a id="VM_Models_OutputReader_IOutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)

```csharp
void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, string target, ContourMappingType type, string path, AnalysisResultType analysisType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` string

`mode` FileMode

`stateids` IList<int\>

`target` string

`type` ContourMappingType

`path` string

`analysisType` AnalysisResultType

`formatType` FileFormatType

### <a id="VM_Models_OutputReader_IOutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)

```csharp
void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, IList<string> targets, ContourMappingType type, string path, AnalysisResultType analysisType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` string

`mode` FileMode

`stateids` IList<int\>

`targets` IList<string\>

`type` ContourMappingType

`path` string

`analysisType` AnalysisResultType

`formatType` FileFormatType

### <a id="VM_Models_OutputReader_IOutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a> GetCurves\(PlotParameters\)

```csharp
IDictionary<string, Point2D[]> GetCurves(PlotParameters parameters)
```

#### Parameters

`parameters` [PlotParameters](VM.Models.OutputReader.PlotParameters.md)

#### Returns

 IDictionary<string, [Point2D](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/Point2D.cs)\[\]\>

### <a id="VM_Models_OutputReader_IOutputReader_GetFlexibleBodyReferenceFrame_System_String_System_Boolean_"></a> GetFlexibleBodyReferenceFrame\(string, bool\)

```csharp
IList<double[]> GetFlexibleBodyReferenceFrame(string target, bool reCalculateOrientation = false)
```

#### Parameters

`target` string

`reCalculateOrientation` bool

#### Returns

 IList<double\[\]\>

### <a id="VM_Models_OutputReader_IOutputReader_GetGeometryNodes_System_String_"></a> GetGeometryNodes\(string\)

```csharp
double[] GetGeometryNodes(string path)
```

#### Parameters

`path` string

#### Returns

 double\[\]

### <a id="VM_Models_OutputReader_IOutputReader_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

```csharp
IList<double> GetReferenceTimeArray()
```

#### Returns

 IList<double\>

### <a id="VM_Models_OutputReader_IOutputReader_GetStateIDArray"></a> GetStateIDArray\(\)

```csharp
IList<int> GetStateIDArray()
```

#### Returns

 IList<int\>

### <a id="VM_Models_OutputReader_IOutputReader_GetVector_System_String_System_String_VM_Models_AnalysisResultType_"></a> GetVector\(string, string, AnalysisResultType\)

```csharp
IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path, AnalysisResultType analysisModelType = AnalysisResultType.Dynamics)
```

#### Parameters

`target` string

`path` string

`analysisModelType` AnalysisResultType

#### Returns

 IDictionary<string, [IVectorDisplayAnimationData](VM.Models.OutputReader.IVectorDisplayAnimationData.md)\>

