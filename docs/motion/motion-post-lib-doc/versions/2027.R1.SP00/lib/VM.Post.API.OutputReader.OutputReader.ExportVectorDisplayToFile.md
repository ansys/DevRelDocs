# Method ExportVectorDisplayToFile
<a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_Collections_Generic_IEnumerable_System_Object__System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_Collections_Generic_IEnumerable_System_Object__System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a> ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)

Exports vector results to a file.

```csharp
public void ExportVectorDisplayToFile(string filepath, int[] stateids, IEnumerable<object> targets, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

### Parameters

`filepath` string

Specifies the file path to export.

`stateids` int\[\]

Specifies the list of state IDs to time.

`targets` IEnumerable<object\>

Specifies the list of the entities.

`isIncludePosition` bool

Specifies whether to include position data.

`includeVector` bool

Specifies whether to include vector data.

`includeMagnitude` bool

Specifies whether to include magnitude data.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Specifies the type of analysis result.

### Examples

```python
# Get the state list.
state_ids = output_reader.GetStateIDArray()

# Create the vector definition to export.
vector_name = "ExampleVector"
entity_name = "TJ_01"
characteristic_name = "Base Force"
vector = output_reader.CreateVector(vector_name, entity_name, characteristic_name)

# Build the target list.
targets = List[IVectorDisplay]()
targets.Add(vector)

# Build the output file path.
# PATH : path to the folder where exported files are written
# RFR_VECTOR_TARGETS_OUTPUT_FILENAME : output filename for vector definitions
output_path = os.path.join(PATH, RFR_VECTOR_TARGETS_OUTPUT_FILENAME)

# Export data from created vector definitions.
include_header = True
include_position = True
include_components = True
output_reader.ExportVectorDisplayToFile(
    output_path,
    state_ids,
    targets,
    include_header,
    include_position,
    include_components,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The values in <code class="paramref">targets</code> are converted to vector display models before export.

### Exceptions

 InvalidCastException

Thrown when an object in <code class="paramref">targets</code> is not a vector display model.

## <a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_String_System_String_System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a> ExportVectorDisplayToFile\(string, int\[\], string, string, bool, bool, bool, AnalysisResultType\)

Exports vector results to a file.

```csharp
public void ExportVectorDisplayToFile(string filepath, int[] stateids, string target, string characteristic, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

### Parameters

`filepath` string

Specifies the file path to export.

`stateids` int\[\]

Specifies the list of state IDs to time.

`target` string

Specifies the list of the entities.

`characteristic` string

The name of the characteristic.

`isIncludePosition` bool

Specifies whether to include position data.

`includeVector` bool

Specifies whether to include vector data.

`includeMagnitude` bool

Specifies whether to include magnitude data.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Specifies the type of analysis result.

### Examples

```python
# Get the state list.
state_ids = output_reader.GetStateIDArray()

# Build the output file path.
# PATH : path to the folder where exported files are written
# RFR_VECTOR_TARGET_OUTPUT_FILENAME : output filename for target vector data
output_path = os.path.join(PATH, RFR_VECTOR_TARGET_OUTPUT_FILENAME)

# Export data directly from a target and characteristic path.
entity_name = "TJ_01"
characteristic_name = "Base Force"
include_header = True
include_position = True
include_components = True
output_reader.ExportVectorDisplayToFile(
    output_path,
    state_ids,
    entity_name,
    characteristic_name,
    include_header,
    include_position,
    include_components,
    AnalysisResultType.Dynamics,
)
```

### Remarks

The target entity must implement [`IVectorDisplayable`](VM.Models.Post.IVectorDisplayable.md) for vector results to be exported.

> [!IMPORTANT]
> A Dynamics analysis result must be available.

> [!NOTE]
> If the target entity cannot be resolved as an [`IVectorDisplayable`](VM.Models.Post.IVectorDisplayable.md), this overload performs no export.
