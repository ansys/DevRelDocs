# Method ExportVectorDisplayToFile
<a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_Collections_Generic_IEnumerable_System_Object__System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_Collections_Generic_IEnumerable_System_Object__System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a> ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)

Exports vector results to a file.

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

The created file is always a text table, and its column separator is chosen from the file extension of <code class="paramref">filepath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27,1
! Number of Step
251
! Number of Targets
1
! TJ_01/Base Force
! Components
! Position X,Position Y,Position Z,Vector Magnitude,Vector X,Vector Y,Vector Z
0
1
0,214.28284,12.5,0.00768469731232557,-0.00767627450122671,0,0.000359697878615526
0.0021
...
```

The first two header lines report the product title and the `! File Version` label. They are followed by the version-number line, then `! Number of Step` with the exported state count, and then `! Number of Targets` with the exported target count.

For each target, `! {target}/{characteristic}` names the exported data, and `! Components` precedes the column-name row. That column-name row lists the columns selected by <code class="paramref">isIncludePosition</code>, <code class="paramref">includeMagnitude</code>, and <code class="paramref">includeVector</code>, in the order `Position X/Y/Z`, then `Vector Magnitude`, then `Vector X/Y/Z`.

After the header, the file repeats one block per exported state.

Each state block begins with a single line that holds the state's time value.

The time line is then followed by one sub-block per target. A target sub-block begins with a single line that holds the number of data points for that target at that state, and that count line is followed by exactly that many value lines. Each value line holds one data point, with one value per column listed after `! Components`, in the same order.

In the example above, the time line `0` is followed by the count line `1`, which means the target has one data point at that state, so exactly one value line follows before the next state's time line `0.0021`.

A `.txt` path is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27	1
! Number of Step
251
...
```

The header block, component rows, and per-state result rows are identical to the `.csv` form, and only the separator differs, using a tab character between columns.

```csharp
public void ExportVectorDisplayToFile(string filepath, int[] stateids, IEnumerable<object> targets, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

### Parameters

`filepath` string

Specifies the file path to export. A `.csv` extension makes the table comma-separated. A `.txt` extension makes it a tab-separated text table.

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

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

The created file uses the same text table format as `ExportVectorDisplayToFile(string, int[], IEnumerable<object>, bool, bool, bool, AnalysisResultType)`.

```csharp
public void ExportVectorDisplayToFile(string filepath, int[] stateids, string target, string characteristic, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

### Parameters

`filepath` string

Specifies the file path to export. A `.csv` extension makes the table comma-separated. A `.txt` extension or no extension makes it a tab-separated text table.

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

<Danger>
A Dynamics analysis result must be available.
</Danger>

<Note>
If the target entity cannot be resolved as an [`IVectorDisplayable`](VM.Models.Post.IVectorDisplayable.md), this overload performs no export.
</Note>
