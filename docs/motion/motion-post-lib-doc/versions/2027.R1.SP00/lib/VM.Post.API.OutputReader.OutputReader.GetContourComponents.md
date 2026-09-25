# Method GetContourComponents
<a id="VM_Post_API_OutputReader_OutputReader_GetContourComponents_System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetContourComponents_System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_"></a> GetContourComponents\(string, ContourMappingType, string, AnalysisResultType\)

Gets contour component names available for an entity, mapping type, characteristic, and analysis result type.

```csharp
public IEnumerable<string> GetContourComponents(string entityName, ContourMappingType contourMappingType, string characteristicName, AnalysisResultType analysisResultType)
```

### Parameters

`entityName` string

Full name of the entity whose contour components are requested.

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Mapping type used to select contour data.

`characteristicName` string

Full name of the contour characteristic.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Analysis result type used to select contour data.

### Returns

 IEnumerable<string\>

Enumerable of component full names, or an empty enumerable when the entity is not contourable or no components are available.

### Examples

```python
# Read components for a contour characteristic.
entity_name = "FEBody_01"
characteristic_name = "Displacement"
components = output_reader.GetContourComponents(
    entity_name,
    ContourMappingType.FENode,
    characteristic_name,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The entity and components are queried with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A `null` component query is converted to an empty enumerable.
