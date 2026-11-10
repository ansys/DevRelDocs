# Method GetContourResult
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetContourResult.md" download="VM.Post.API.OutputReader.OutputReader.GetContourResult.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a> GetContourResult\(IList<int\>, string, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Reads contour values for one entity and invokes a callback for each requested state.

For a complete operations, see [Result File Reader API Example - Get Contour](../document/result-file-reader/example/example_contour_for_result_file_reader_api.md#get-contour).

```csharp
public void GetContourResult(IList<int> stateids, string fullName, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

### Parameters

`stateids` IList<int\>

State IDs whose contour values are requested.

`fullName` string

Full name of the entity to read.

`type` [ContourMappingType](VM.Models.ContourMappingType.md)

Contour mapping type used to locate the result.

`path` string

Contour characteristic and optional component path.

`fncallback` Action<int, IList<double\[\]\>\>

Callback that receives each state ID and its contour value group.

`analysisType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Analysis result type used for the read. Defaults to `Dynamics`.

### Examples

```python
# Define the callback that receives contour values per state.
def write_result(state_id, result_groups):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_groups)}")
# The callback that receives the contour values of each state.
action = Action[Int32, IList[Array[Double]]](write_result)

# Select the entity and characteristic to read.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The characteristic/component path of the result.
characteristic_name = "Top Stress/X"

# Read contour values for one entity and each selected state.
state_ids = output_reader.GetStateIDArray()
output_reader.GetContourResult(
    state_ids,
    entity_name,
    ContourMappingType.FENode,
    characteristic_name,
    action,
    AnalysisResultType.Dynamics,
)
```

### Remarks

This overload delegates the read to the multiple-entity overload with one entity name. The callback receives one call for each requested state.

<Note>
Invalid state IDs, entity names, mapping types, or paths can cause the read to fail.
</Note>

### Exceptions

 ArgumentNullException

Thrown when `fncallback` is `null`.

## <a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a> GetContourResult\(IList<int\>, IList<string\>, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Reads contour values for multiple entities and invokes a callback for each requested state.

```csharp
public void GetContourResult(IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

### Parameters

`stateids` IList<int\>

State IDs whose contour values are requested.

`fullNames` IList<string\>

Full names of the entities to read.

`type` [ContourMappingType](VM.Models.ContourMappingType.md)

Contour mapping type used to locate the result.

`path` string

Contour characteristic and optional component path.

`fncallback` Action<int, IList<double\[\]\>\>

Callback that receives each state ID and its contour value group.

`analysisType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Analysis result type used for the read. Defaults to `Dynamics`.

### Examples

```python
# Build the entity name list.
# The full names of the entities whose surfaces generate the sound pressure.
body_names = List[str]()
# The name of the target finite-element body.
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Define the callback that receives contour values per state.
def write_result(state_id, result_groups):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_groups)}")
# The callback that receives the contour values of each state.
action = Action[Int32, IList[Array[Double]]](write_result)

# Select the characteristic to read.
# The characteristic/component path of the result.
characteristic_name = "Top Stress/X"

# Read contour values for multiple entities and each selected state.
state_ids = output_reader.GetStateIDArray()
output_reader.GetContourResult(
    state_ids,
    body_names,
    ContourMappingType.FENode,
    characteristic_name,
    action,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The method creates data states for `stateids`, reads the selected path, removes `null` result arrays from each group, and passes the remaining values to `fncallback`.

<Note>
Invalid state IDs, entity names, mapping types, or paths can cause the read to fail.
</Note>

### Exceptions

 ArgumentNullException

Thrown when `fncallback` is `null`.
