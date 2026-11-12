# Method GetVector
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetVector.md" download="VM.Post.API.OutputReader.OutputReader.GetVector.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetVector_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetVector_System_String_System_String_"></a> GetVector\(string, string\)

Gets vector results for a target entity and characteristic path using Dynamics analysis data.

For a complete operations, see [Result File Reader API Example - Get Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#get-vector).

```csharp
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path)
```

### Parameters

`target` string

Full name of the vector-displayable entity.

`path` string

Characteristic path used to read vector values.

### Returns

 IDictionary<string, [IVectorDisplayAnimationData](VM.Models.OutputReader.IVectorDisplayAnimationData.md)\>

Dictionary of vector display animation data, or `null` when `target` is not vector-displayable.

### Examples

```python
# Read vector data with the default Dynamics analysis result.
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The name of the characteristic.
characteristic_name = "Base Force"
# The vector animation data of the entity and characteristic.
vector_data = output_reader.GetVector(entity_name, characteristic_name)
```

### Remarks

This calls `GetVector(string, string, AnalysisResultType)` with `Dynamics`.

<Danger>
`target` and `path` must be valid for the Dynamics analysis result.
</Danger>

<Note>
This overload uses `AnalysisResultType.Dynamics` when no analysis-result type is supplied.
</Note>

## <a id="VM_Post_API_OutputReader_OutputReader_GetVector_System_String_System_String_VM_Models_AnalysisResultType_"></a> GetVector\(string, string, AnalysisResultType\)

Gets vector results for a target entity, characteristic path, and analysis result type.

```csharp
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics)
```

### Parameters

`target` string

Full name of the vector-displayable entity.

`path` string

Characteristic path used to read vector values.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Specifies the analysis result used to read vector data.

### Returns

 IDictionary<string, [IVectorDisplayAnimationData](VM.Models.OutputReader.IVectorDisplayAnimationData.md)\>

Dictionary of vector display animation data, or `null` when `target` is not vector-displayable.

### Examples

```python
# Read vector data from the selected analysis result type.
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The name of the characteristic.
characteristic_name = "Base Force"
# The vector animation data of the entity and characteristic.
vector_data = output_reader.GetVector(entity_name, characteristic_name, AnalysisResultType.Dynamics)
```

### Remarks

The selected analysis result is used with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to read vector display information.

<Danger>
`target` and `path` must be valid for `analysisResultType`.
</Danger>
