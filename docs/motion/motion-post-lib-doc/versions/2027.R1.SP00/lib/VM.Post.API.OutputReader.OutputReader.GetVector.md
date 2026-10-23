# Method GetVector
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
entity_name = "TJ_01"
characteristic_name = "Base Force"
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
entity_name = "TJ_01"
characteristic_name = "Base Force"
vector_data = output_reader.GetVector(entity_name, characteristic_name, AnalysisResultType.Dynamics)
```

### Remarks

The selected analysis result is used with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to read vector display information.

<Danger>
`target` and `path` must be valid for `analysisResultType`.
</Danger>

<a href="/lib/VM.Post.API.OutputReader.OutputReader.GetVector.md" download="VM.Post.API.OutputReader.OutputReader.GetVector.md">Download this page as Markdown</a>
