# Method GetContourCharacteristics
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md" download="VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The characteristics available for the contour of the entity.
characteristics = output_reader.GetContourCharacteristics(
    entity_name,
    ContourMappingType.FENode,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The entity is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-contourable entity produces an empty result.
