# Method ExportAcousticRawDataToFile
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md" download="VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_ExportAcousticRawDataToFile_System_String_System_String_VM_Models_Post_BehaviorType_VM_Models_Post_ChartMathLib_FFTParameters_System_UInt32___"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportAcousticRawDataToFile_System_String_System_String_VM_Models_Post_BehaviorType_VM_Models_Post_ChartMathLib_FFTParameters_System_UInt32___"></a> ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters, uint\[\]\)

Exports acoustic raw data to a file.

The created file is a binary layout with a header block, a frequency array, then one data block per selected node.

The header holds:
- the selected node count as a 4-byte integer
- the frequency bin count as a 4-byte integer

The frequency array follows next, with one 8-byte value per frequency bin.

Each node block holds:
- the node ID as a 4-byte integer
- its X, Y, and Z position as three 8-byte values
- the X, Y, and Z axis Fast Fourier Transform (FFT) spectrum, in that order, with one real and one imaginary 8-byte value pair per frequency bin

The FFT spectrum for each node is calculated from <code class="paramref">behaviorType</code> using the settings in <code class="paramref">parameters</code>.

```csharp
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters, uint[] nodeIDs)
```

### Parameters

`filepath` string

Specifies the file path to export.

`fullName` string

Specifies the name of the entity.

`behaviorType` [BehaviorType](VM.Models.Post.BehaviorType.md)

Specifies the motion behavior used to calculate acoustic data.

`parameters` [FFTParameters](VM.Models.Post.ChartMathLib.FFTParameters.md)

Specifies the FFT parameters. For a description of the parameters, see [`FFTParameters`](VM.Models.Post.ChartMathLib.FFTParameters.md) in the API Reference.

`nodeIDs` uint\[\]

Specifies the ID array of the nodes.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# RFR_ACOUSTIC_NODE_IDS_OUTPUT_FILENAME : output filename for node-based acoustic data (e.g., acoustic_raw_data.bin)
# The path of the exported acoustic raw data file.
output_path = os.path.join(PATH, RFR_ACOUSTIC_NODE_IDS_OUTPUT_FILENAME)

# Select the target body.
# The name of the target finite-element body.
entity_name = "FEBody_01"

# Configure the FFT parameters and add the analysis states.
# The number of data points for the FFT.
fft_point_count = 128
# The FFT parameters.
parameters = FFTParameters()
parameters.WindowType = FFTWindowType.Rectangular
parameters.Points = fft_point_count
# The IDs of the states in the result file.
state_ids = output_reader.GetStateIDArray()
for state_id in state_ids:
    parameters.States.Add(state_id)

# Select the node IDs to export.
# The IDs of the nodes to export.
node_ids = [1, 2, 3]

# Export acoustic data for selected nodes.
output_reader.ExportAcousticRawDataToFile(
    output_path,
    entity_name,
    BehaviorType.Displacement,
    parameters,
    node_ids,
)
```

### Remarks

This method exports acoustic raw data to a specified file path for the selected node IDs.

<Danger>
A Dynamics analysis result and a finite-element body identified by <code class="paramref">fullName</code> must be available.
</Danger>

### Exceptions

 ArgumentException

Thrown when a node ID in `nodeIDs` is not present in the body.

## <a id="VM_Post_API_OutputReader_OutputReader_ExportAcousticRawDataToFile_System_String_System_String_VM_Models_Post_BehaviorType_VM_Models_Post_ChartMathLib_FFTParameters_"></a> ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters\)

Exports acoustic raw data to a file.

The created file uses the same binary layout as `ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters, uint[])`.

```csharp
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters)
```

### Parameters

`filepath` string

Specifies the file path to export.

`fullName` string

Specifies the name of the entity.

`behaviorType` [BehaviorType](VM.Models.Post.BehaviorType.md)

Specifies the motion behavior used to calculate acoustic data.

`parameters` [FFTParameters](VM.Models.Post.ChartMathLib.FFTParameters.md)

Specifies the FFT parameters. For a description of the parameters, see [`FFTParameters`](VM.Models.Post.ChartMathLib.FFTParameters.md) in the API Reference.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# RFR_ACOUSTIC_OUTER_SURFACE_OUTPUT_FILENAME : output filename for outer-surface acoustic data (e.g., acoustic_raw_data_outer_surface.bin)
# The path of the exported acoustic raw data file.
output_path = os.path.join(PATH, RFR_ACOUSTIC_OUTER_SURFACE_OUTPUT_FILENAME)

# Select the target body.
# The name of the target finite-element body.
entity_name = "FEBody_01"

# Configure the FFT parameters and add the analysis states.
# The number of data points for the FFT.
fft_point_count = 128
# The FFT parameters.
parameters = FFTParameters()
parameters.WindowType = FFTWindowType.Rectangular
parameters.Points = fft_point_count
# The IDs of the states in the result file.
state_ids = output_reader.GetStateIDArray()
for state_id in state_ids:
    parameters.States.Add(state_id)

# Export acoustic data for the visible outer surface.
output_reader.ExportAcousticRawDataToFile(
    output_path,
    entity_name,
    BehaviorType.Displacement,
    parameters,
)
```

### Remarks

This method exports acoustic raw data to a specified file path using every node on the entity's outer surface.

<Danger>
A Dynamics analysis result and a finite-element body identified by <code class="paramref">fullName</code> must be available.
</Danger>
