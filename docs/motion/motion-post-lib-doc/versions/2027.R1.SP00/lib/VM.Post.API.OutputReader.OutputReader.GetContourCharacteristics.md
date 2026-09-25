# Method GetContourCharacteristics
<a id="VM_Post_API_OutputReader_OutputReader_GetContourCharacteristics_System_String_VM_Models_ContourMappingType_VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetContourCharacteristics_System_String_VM_Models_ContourMappingType_VM_Models_AnalysisResultType_"></a> GetContourCharacteristics\(string, ContourMappingType, AnalysisResultType\)

Gets contour characteristic names available for an entity and mapping type.

```csharp
public IEnumerable<string> GetContourCharacteristics(string entityName, ContourMappingType contourMappingType, AnalysisResultType analysisResultType)
```

### Parameters

`entityName` string

Full name of the entity whose contour characteristics are requested.

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Mapping type used to select contour data.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Analysis result type used to select contour data.

### Returns

 IEnumerable<string\>

Enumerable of characteristic full names, or an empty enumerable when the entity is not contourable.

### Examples

```python
# Read contour characteristics for a finite-element body.
entity_name = "FEBody_01"
characteristics = output_reader.GetContourCharacteristics(
    entity_name,
    ContourMappingType.FENode,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The entity is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-contourable entity produces an empty result.
