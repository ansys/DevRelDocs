# Method GetContourResult
<a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a> GetContourResult\(IList<int\>, string, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Reads contour values for one entity and invokes a callback for each requested state.

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
def write_result(state_id, result_group):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_group)}")
action = Action[Int32, IList[Array[Double]]](write_result)

# Select the entity and characteristic to read.
entity_name = "FEBody_01"
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

> [!NOTE]
> Invalid state IDs, entity names, mapping types, or paths can cause the read to fail.

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
body_names = List[str]()
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Define the callback that receives contour values per state.
def write_result(state_id, result_group):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_group)}")
action = Action[Int32, IList[Array[Double]]](write_result)

# Select the characteristic to read.
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

> [!NOTE]
> Invalid state IDs, entity names, mapping types, or paths can cause the read to fail.

### Exceptions

 ArgumentNullException

Thrown when `fncallback` is `null`.
