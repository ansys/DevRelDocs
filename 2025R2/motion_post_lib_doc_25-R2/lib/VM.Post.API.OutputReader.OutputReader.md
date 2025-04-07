#  Class OutputReader

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

Represents the API class for reading result files.

```python
public class OutputReader : IOutputReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutputReader](VM.Post.API.OutputReader.OutputReader.md)

#### Implements

IOutputReader

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># OutputReader.py
import clr, os, sys
from pathlib import Path

current_dir = Path(__file__).resolve().parent

external_modules_path = Path(current_dir, r'../../Modules').resolve()
sys.path.append('{0}'.format(external_modules_path))

from ResultFileReaderAPI import *

# Import result file
outputReader = OutputReader(get_result_file_path())

entities = outputReader.GetEntities(EntityType.Body)

print (f"File Path : {outputReader.Path}")
print (f"Version : {outputReader.Version}")

for entity in entities:
    print (f"Entity Name : {entity.FullName}")

# Close
outputReader.Close()
</code></pre>

## Remarks

This class provides methods to interact with and retrieve information from result files.

## Constructors

### <a id="VM_Post_API_OutputReader_OutputReader__ctor_System_String_"></a> OutputReader\(string\)

Initializes a new instance of the <xref href="VM.Post.API.OutputReader.OutputReader" data-throw-if-not-resolved="false"></xref> class, used to open the result file.

```python
public OutputReader(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result file.

#### Examples

For an example that includes this property, see the [OutputReader](VM.Post.API.OutputReader.OutputReader.md).

#### Remarks

This constructor opens the specified result file.

## Properties

### <a id="VM_Post_API_OutputReader_OutputReader_Path"></a> Path

Gets the file path to the Ansys Motion result file (.dfr).

```python
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [OutputReader](VM.Post.API.OutputReader.OutputReader.md).

#### Remarks

This property stores the file path to the Ansys Motion result file (.dfr).

### <a id="VM_Post_API_OutputReader_OutputReader_Version"></a> Version

Gets the product version.

```python
public string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [OutputReader](VM.Post.API.OutputReader.OutputReader.md).

#### Remarks

This property stores the version of the product.

## Methods

### <a id="VM_Post_API_OutputReader_OutputReader_Close"></a> Close\(\)

Closes the result file.

```python
public void Close()
```

#### Examples

For an example that includes this property, see the [OutputReader](VM.Post.API.OutputReader.OutputReader.md).

#### Remarks

This method closes the result file.

### <a id="VM_Post_API_OutputReader_OutputReader_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a new coordinate system marker with the specified name and optional parent.

```python
public GeneralMarker CreateCoordinateSystem(string newName, string parentFullName = "Ground")
```

#### Parameters

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the new coordinate system marker.

`parentFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full name of the parent marker. Defaults to <xref href="VM.Models.Post.NameService.GroundName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 GeneralMarker

A <xref href="VM.Models.Post.GeneralMarker" data-throw-if-not-resolved="false"></xref> representing the newly created coordinate system marker.

#### Examples

The following example demonstrates how to use the <code>CreateCoordinateSystem</code> method:
<pre><code class="lang-python">print ("===Creating Marker===")
ground_csys = outputReader.CreateCoordinateSystem("Ground_CSYS")
print(ground_csys.FullName)

rigid_csys = outputReader.CreateCoordinateSystem("Crank_CSYS", "Crank")
print(rigid_csys.FullName)

rigid_cm_csys = outputReader.CreateCoordinateSystem("Crank_CM_CSYS", "Crank/CM")
print(rigid_cm_csys.FullName)

nodal_node_csys = outputReader.CreateCoordinateSystem("FEBody_01_CSYS", "FEBody_01/Node/754")
print(nodal_node_csys.FullName)
</code></pre>

#### Remarks

This method creates a new coordinate system marker with the given name. If the parent full name is not provided,
it defaults to the ground marker name as defined by <xref href="VM.Models.Post.NameService.GroundName" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Post_API_OutputReader_OutputReader_CreateVector_System_String_System_String_System_String_"></a> CreateVector\(string, string, string\)

Creates a vector for a specified target entity and characteristic path.

```python
public IVectorDisplay CreateVector(string newName, string target, string path)
```

#### Parameters

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the new vector.

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the vector displayable entity.

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the characteristic on the vector display.

#### Returns

 IVectorDisplay

Returns an instance of the created vector.

#### Examples

The following example demonstrates how to use the <code>GetVector</code> method:
<pre><code class="lang-python">print ("===CreateVector===")
vector = outputReader.CreateVector("vector", "TJ_01", "Action Force")
print(f"Name : {vector.FullName}")    
print(f"Type : {vector.Type}")
print(f"Characteristic : {vector.Characteristic}")
characteristics = list(vector.Target.Characteristics)
for characteristic in characteristics:
    print(f"Target VectorDisplayType : {characteristic.VectorDisplayType}")
    print(f"Target CharacteristicName : {characteristic.CharacteristicName}")
</code></pre>

#### Remarks

This method creates a new vector. The method returns the instance of the newly created vector.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportAcousticRawDataToFile_System_String_System_String_VM_Models_Post_BehaviorType_VM_Models_Post_ChartMathLib_FFTParameters_System_UInt32___"></a> ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters, uint\[\]\)

Exports acoustic raw data to a file.

```python
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters, uint[] nodeIDs)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

`behaviorType` BehaviorType

Specifies the type of the target for Displacement, Velocity, or Acceleration.
The available options are:
<ul><li><xref href="VM.Models.Post.BehaviorType.Acceleration" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BehaviorType.Displacement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BehaviorType.Velocity" data-throw-if-not-resolved="false"></xref></li></ul>

`parameters` FFTParameters

Specifies the FFT parameters. For a description of the parameters, see <xref href="VM.Models.Post.ChartMathLib.FFTParameters" data-throw-if-not-resolved="false"></xref> in the API Reference.
<ul><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.WindowType" data-throw-if-not-resolved="false"></xref> - The window type of FFT.</li><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.States" data-throw-if-not-resolved="false"></xref> - An array of state IDs from the result file.</li><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.Points" data-throw-if-not-resolved="false"></xref> - The number of data points for FFT. </li></ul>

`nodeIDs` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

Specifies the ID array of the nodes.

#### Examples

The following example demonstrates how to use the <code>ExportAcousticRawDataToFile</code> method:
<pre><code class="lang-python">print("===ExportAcousticRawDataToFile===")
parameters = FFTParameters()
parameters.WindowType = FFTWindowType.Rectangular
parameters.Points = 128

for ids in stateids:
    parameters.States.Add(ids)

nodeIDs = [1,2,3]

accoustic_result_path = os.path.join(output_dir, r'AcousticRawDataToFile.txt')
outputReader.ExportAcousticRawDataToFile(accoustic_result_path, target, BehaviorType.Displacement, parameters, nodeIDs)

accoustic_without_nodeids_result_path = os.path.join(output_dir, r'AcousticWithoutNodeIDsRawDataToFile.txt')
outputReader.ExportAcousticRawDataToFile(accoustic_without_nodeids_result_path, target, BehaviorType.Displacement, parameters)
</code></pre>

#### Remarks

This method exports acoustic raw data to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportAcousticRawDataToFile_System_String_System_String_VM_Models_Post_BehaviorType_VM_Models_Post_ChartMathLib_FFTParameters_"></a> ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters\)

Exports acoustic raw data to a file.

```python
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

`behaviorType` BehaviorType

Specifies the type of behavior for Displacement, Velocity, or Acceleration.
The available options are:
<ul><li><xref href="VM.Models.Post.BehaviorType.Acceleration" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BehaviorType.Displacement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BehaviorType.Velocity" data-throw-if-not-resolved="false"></xref></li></ul>

`parameters` FFTParameters

Specifies the FFT parameters. For a description of the parameters, see <xref href="VM.Models.Post.ChartMathLib.FFTParameters" data-throw-if-not-resolved="false"></xref> in the API Reference.
<ul><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.WindowType" data-throw-if-not-resolved="false"></xref> - The window type of FFT.</li><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.States" data-throw-if-not-resolved="false"></xref> - An array of state IDs from the result file.</li><li><xref href="VM.Models.Post.ChartMathLib.FFTParameters.Points" data-throw-if-not-resolved="false"></xref> - The number of data points for FFT. </li></ul>

#### Examples

The following example demonstrates how to use the <code>ExportAcousticRawDataToFile</code> method:
<pre><code class="lang-python">print("===ExportAcousticRawDataToFile===")
parameters = FFTParameters()
parameters.WindowType = FFTWindowType.Rectangular
parameters.Points = 128

for ids in stateids:
    parameters.States.Add(ids)

nodeIDs = [1,2,3]

accoustic_result_path = os.path.join(output_dir, r'AcousticRawDataToFile.txt')
outputReader.ExportAcousticRawDataToFile(accoustic_result_path, target, BehaviorType.Displacement, parameters, nodeIDs)

accoustic_without_nodeids_result_path = os.path.join(output_dir, r'AcousticWithoutNodeIDsRawDataToFile.txt')
outputReader.ExportAcousticRawDataToFile(accoustic_without_nodeids_result_path, target, BehaviorType.Displacement, parameters)
</code></pre>

#### Remarks

This method exports acoustic raw data to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results to a file.

```python
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, string fullName, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode)

Specifies how the operating system should open a file.
The available options are:
<ul><li><xref href="System.IO.FileMode.Append" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.CreateNew" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Create" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.OpenOrCreate" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Open" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Truncate" data-throw-if-not-resolved="false"></xref></li></ul>

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the list of state IDs to time.

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entities.

`type` ContourMappingType

Specifies the type of the target for displaying contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

This is a combination of characteristic and component.

`analysisResultType` AnalysisResultType

Specifies the type of analysis result for displaying contour. The default value is <xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

`formatType` FileFormatType

Specifies the file format type. The default value is <xref href="VM.Models.FileFormatType.BINARY" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.FileFormatType.TXT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.FileFormatType.BINARY" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>ExportContourResultToFile</code> method:
<pre><code class="lang-python">print("===ExportContourResultToFile===")
# resultpath - Specifies the file path to export
# mode - Specifies how the operating system should open a file.
# stateids - Specifies the id list of the states to time.
# fullName - Specifies the names of the entities.
# type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
# path - Specifies the path of result to save.
# analysisResultType - Specifies the type of analysis result type for displaying contour.
# formatType - Specifies a file format type.

# State ID Array
stateids = outputReader.GetStateIDArray()
target = "FEBody_01"
path = "Top Stress/X"

# The output path is 'examples/Output'.
output_dir = get_output_directory()
nodal_result_path = os.path.join(output_dir, r'ContourResultToFile.txt')
outputReader.ExportContourResultToFile(nodal_result_path, FileMode.Create, stateids, target, ContourMappingType.FENode, path, analysisResultType = AnalysisResultType.Dynamics, formatType = FileFormatType.BINARY)
</code></pre>

#### Remarks

This method exports contour results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results to a file.

```python
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode)

Specifies how the operating system should open a file.
The available options are:
<ul><li><xref href="System.IO.FileMode.Append" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.CreateNew" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Create" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.OpenOrCreate" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Open" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.IO.FileMode.Truncate" data-throw-if-not-resolved="false"></xref></li></ul>

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the list of state IDs to time.

`fullNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the names of the entities.

`type` ContourMappingType

Specifies the type of the target for displaying contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

This is a combination of characteristic and component.

`analysisResultType` AnalysisResultType

Specifies the type of analysis result for displaying contour. The default value is <xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

`formatType` FileFormatType

Specifies the file format type. The default value is <xref href="VM.Models.FileFormatType.BINARY" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.FileFormatType.TXT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.FileFormatType.BINARY" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>ExportContourResultToFile</code> method:
<pre><code class="lang-python">print("===ExportContourResultToFile===")
# resultpath - Specifies the file path to export
# mode - Specifies how the operating system should open a file.
# stateids - Specifies the id list of the states to time.
# fullName - Specifies the names of the entities.
# type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
# path - Specifies the path of result to save.
# analysisResultType - Specifies the type of analysis result type for displaying contour.
# formatType - Specifies a file format type.

# State ID Array
stateids = outputReader.GetStateIDArray()
target = "FEBody_01"
path = "Top Stress/X"

# The output path is 'examples/Output'.
output_dir = get_output_directory()
nodal_result_path = os.path.join(output_dir, r'ContourResultToFile.txt')
outputReader.ExportContourResultToFile(nodal_result_path, FileMode.Create, stateids, target, ContourMappingType.FENode, path, analysisResultType = AnalysisResultType.Dynamics, formatType = FileFormatType.BINARY)
</code></pre>

#### Remarks

This method exports contour results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportMarkerToFile_System_String_System_Int32___VM_Models_Post_IResultMarker___"></a> ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)

Exports marker results to a file.

```python
public void ExportMarkerToFile(string filePath, int[] stateids, IResultMarker[] markers)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Specifies the list of state IDs to time.

`markers` IResultMarker\[\]

Specifies the list of the marker entities.

#### Examples

The following example demonstrates how to use the <code>ExportMarkerToFile</code> method:
<pre><code class="lang-python">print("===ExportMarkerToFile===")
# markers = List[IResultMarker](1)
# markers.Add(ground_csys)

# outputReader.ExportMarkerToFile(r'D:\MarkerToFile.txt', stateids, markers)
</code></pre>

#### Remarks

This method exports marker results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportModalBodyRawDataToFile_System_String_System_String_System_Boolean_System_Boolean_"></a> ExportModalBodyRawDataToFile\(string, string, bool, bool\)

Exports raw data about the FE modal body to a file.

```python
public void ExportModalBodyRawDataToFile(string filePath, string target, bool includeGeometry, bool includeModeShape)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

`includeGeometry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include geometry data.

`includeModeShape` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include mode shape data.

#### Examples

The following example demonstrates how to use the <code>ExportModalBodyRawDataToFile</code> method:
<pre><code class="lang-python">print("===ExportModalBodyRawDataToFile===")
# State ID Array
stateids = outputReader.GetStateIDArray()

modal_result_path = os.path.join(output_dir, r'ModalBodyRawDataToFile.txt')
outputReader.ExportModalBodyRawDataToFile(modal_result_path, "FEBody_01", True, True)
</code></pre>

#### Remarks

This method exports raw data about the FE modal body to a specified file path, including options to include geometry and mode shape data.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_Collections_Generic_IEnumerable_System_Object__System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a> ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)

Exports vector results to a file.

```python
public void ExportVectorDisplayToFile(string filepath, int[] stateids, IEnumerable<object> targets, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Specifies the list of state IDs to time.

`targets` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

Specifies the list of the entities.

`isIncludePosition` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include position data.

`includeVector` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include vector data.

`includeMagnitude` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include magnitude data.

`analysisResultType` AnalysisResultType

Specifies the type of analysis result.

#### Examples

The following example demonstrates how to use the <code>ExportVectorDisplayToFile</code> method:
<pre><code class="lang-python">print("===ExportVectorDisplayToFile===")
targets = List[IVectorDisplay]()

# target - Specifies the name of vector displayable entity
# path - Specifies characteristc on vector display
vector = outputReader.CreateVector("vector", target, "Base Force")
targets.Add(vector)

vector_result_path = os.path.join(output_dir, r'VectorDisplayToFile.txt')
outputReader.ExportVectorDisplayToFile(vector_result_path, stateids, targets, True, True, True, AnalysisResultType.Dynamics)

vectors_result_path = os.path.join(output_dir, r'VectorsDisplayToFile.txt')
outputReader.ExportVectorDisplayToFile(vectors_result_path, stateids, target, "Base Force", True, True, True, AnalysisResultType.Dynamics)
</code></pre>

#### Remarks

This method exports vector results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_ExportVectorDisplayToFile_System_String_System_Int32___System_String_System_String_System_Boolean_System_Boolean_System_Boolean_VM_Models_AnalysisResultType_"></a> ExportVectorDisplayToFile\(string, int\[\], string, string, bool, bool, bool, AnalysisResultType\)

Exports vector results to a file.

```python
public void ExportVectorDisplayToFile(string filepath, int[] stateids, string target, string characteristic, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Specifies the list of state IDs to time.

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the list of the entities.

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the characteristic.

`isIncludePosition` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include position data.

`includeVector` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include vector data.

`includeMagnitude` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include magnitude data.

`analysisResultType` AnalysisResultType

Specifies the type of analysis result.

#### Examples

The following example demonstrates how to use the <code>ExportVectorDisplayToFile</code> method:
<pre><code class="lang-python">print("===ExportVectorDisplayToFile===")
targets = List[IVectorDisplay]()

# target - Specifies the name of vector displayable entity
# path - Specifies characteristc on vector display
vector = outputReader.CreateVector("vector", target, "Base Force")
targets.Add(vector)

vector_result_path = os.path.join(output_dir, r'VectorDisplayToFile.txt')
outputReader.ExportVectorDisplayToFile(vector_result_path, stateids, targets, True, True, True, AnalysisResultType.Dynamics)

vectors_result_path = os.path.join(output_dir, r'VectorsDisplayToFile.txt')
outputReader.ExportVectorDisplayToFile(vectors_result_path, stateids, target, "Base Force", True, True, True, AnalysisResultType.Dynamics)
</code></pre>

#### Remarks

This method exports vector results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_GetAssemblyInfo_VM_Enums_Post_AssemblyType_"></a> GetAssemblyInfo\(AssemblyType\)

Retrieves an array of state IDs representing sequential states.

```python
public AssemblyInfo[] GetAssemblyInfo(AssemblyType assemblyType = AssemblyType.All)
```

#### Parameters

`assemblyType` AssemblyType

The available options are:
<ul><li><xref href="VM.Enums.Post.AssemblyType.All" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Enums.Post.AssemblyType.ASSEMBLY_PART" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Enums.Post.AssemblyType.ASSEMBLY_SUBSYSTEM" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Enums.Post.AssemblyType.Mechanical_Rigid_Part" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 AssemblyInfo\[\]

#### Examples

The following example demonstrates how to use the <code>CreateCoordinateSystem</code> method:
<pre><code class="lang-python">print ("===Assembly Info===")
assemblyInfo = outputReader.GetAssemblyInfo()
for assembly in assemblyInfo:
    print(assembly.FullName)
</code></pre>

### <a id="VM_Post_API_OutputReader_OutputReader_GetBodies_VM_Models_Post_BodyType_System_Boolean_"></a> GetBodies\(BodyType, bool\)

Retrieves the types and names of bodies based on the specified type and optional inclusion of dummy bodies.

```python
public IEnumerable<(BodyType, string)> GetBodies(BodyType type, bool includeDuymmy = false)
```

#### Parameters

`type` BodyType

Specifies the type of bodies to retrieve.
The available options are:
<ul><li><xref href="VM.Models.Post.BodyType.RIGID" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BodyType.NODAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BodyType.MODAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BodyType.GROUND" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BodyType.EF_NODAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.BodyType.EF_MODAL" data-throw-if-not-resolved="false"></xref></li></ul>

`includeDuymmy` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to include dummy bodies in the result.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\(BodyType, [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

An enumerable collection of tuples where each tuple contains a BodyType and its corresponding name.

#### Examples

The following example demonstrates how to use the <code>GetBodies</code> method:
<pre><code class="lang-python">print ("===Get Bodies===")
bodies = outputReader.GetBodies(BodyType.RIGID)
bodiesList = list(bodies)
for body in bodiesList:
    print(f"Body Type : {body.Item1}, Body Name : {body.Item2}")
</code></pre>

#### Remarks

This method retrieves information about bodies based on the specified type and includes optional dummy bodies if specified. 
The returned collection contains tuples where each tuple represents a body type and its associated name.

### <a id="VM_Post_API_OutputReader_OutputReader_GetBodiesNodeCount_System_Collections_Generic_IList_System_String__"></a> GetBodiesNodeCount\(IList<string\>\)

Gets the count of nodes for the specified bodies.

```python
public long GetBodiesNodeCount(IList<string> bodyNames)
```

#### Parameters

`bodyNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the list of names of the entities.

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

The count of nodes for the specified bodies.

#### Examples

The following example demonstrates how to use the <code>GetBodiesNodeCount</code> method:
<pre><code class="lang-python">print("===Bodies Node Count===")
entities = List[str]()
entities.Add(r'FEBody_01')
nodecount = outputReader.GetBodiesNodeCount(entities)
print(nodecount)
</code></pre>

#### Remarks

This method retrieves the count of nodes for the specified bodies.

### <a id="VM_Post_API_OutputReader_OutputReader_GetConnectors_System_String_"></a> GetConnectors\(string\)

Retrieves information about connectors associated with the specified body.

```python
public IList<(ConnectorType, ActionType, string)> GetConnectors(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the body to retrieve connector information for.

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<\(ConnectorType, ActionType, [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

A list of tuples containing the connector type, action type, and names of connectors such as joint, force, and contact.
The available connector type are:
<ul><li><xref href="VM.Models.Post.ConnectorType.Ball" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.BC" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.ConstantVelocity" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.CVCV" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Cylindrical" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Distance" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Fixed" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Inline" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Inplane" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Orientation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Parallel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Perpendicular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Plane" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.PTCV" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.PTS" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Revolute" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Screw" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Translational" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Universal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.CYTMC" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FTF2D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FTF3D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FTR2D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FTR3D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.GENERAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.MCTMC" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.NTSF" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.RTR2D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.RTR3D" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.SPTMC" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.TIE" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Beam" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Bush" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.ExternalForce" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FECload" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.FEPload" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Matrix" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.RScalar" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.RSpringDamper" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Tire" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.TScalar" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.TSpringDamper" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.Vector" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.EFBC" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.EFCLoad" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.EFPLoad" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.EFRBE" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ConnectorType.EFTie" data-throw-if-not-resolved="false"></xref></li></ul>
The available action type are:
<ul><li><xref href="VM.Models.Post.ActionType.Base" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ActionType.Action" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>GetConnectors</code> method:
<pre><code class="lang-python">print ("===GetConnectors===")
connectors = outputReader.GetConnectors("Crank")
connectorlist = list(connectors)

for connector in connectorlist:
    print (f"ConnectorType : {connector.Item1}")
    print (f"Action Type : {connector.Item2}")
    print (f"Name : {connector.Item3}")
</code></pre>

#### Remarks

This method retrieves and returns information about connectors associated with the body identified by the
<code class="paramref">name</code> parameter. The returned list includes tuples where each tuple consists of the connector type,
action type, and names of connectors such as joint, force, and contact.

### <a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a> GetContourResult\(IList<int\>, string, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Exports contour results to a file.

```python
public void GetContourResult(IList<int> stateids, string fullName, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

#### Parameters

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the list of state IDs to time.

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of an entity.

`type` ContourMappingType

Specifies the type of a target for displaying contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the path of the result file to save.

`fncallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

Specifies the callback function for getting contour results by report step.

`analysisType` AnalysisResultType

Specifies the type of analysis result for displaying contour. The default value is <xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>GetContourResult</code> method:
<pre><code class="lang-python">#print ("===GetContourResult===")
## resultpath - Specifies the file path to export
## mode - Specifies how the operating system should open a file.
## stateids - Specifies the id list of the states to time.
## fullName - Specifies the names of the entities.
## type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
## path - Specifies the path of result to save.
## analysisResultType - Specifies the type of analysis result type for displaying contour.
## formatType - Specifies a file format type.

## State ID Array
stateids = outputReader.GetStateIDArray()
target = "FEBody_01"
path = "Top Stress/X"

#contour_result_path = os.path.join(pathSource, r'ExportContourResultToFile.dfr')

# Call GetContourResult with the delegate
def python_action(stateid, resultGroup):
    print("State ID: {0}".format(stateid))
    for result in resultGroup:
        print(f"Array: {[x for x in result]}")

action = Action[Int32, IList[Array[Double]]](python_action)
outputReader.GetContourResult(stateids, target, ContourMappingType.FENode, path, action, AnalysisResultType.Dynamics)

</code></pre>

#### Remarks

This method exports contour results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_GetContourResult_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_Action_System_Int32_System_Collections_Generic_IList_System_Double_____VM_Models_AnalysisResultType_"></a> GetContourResult\(IList<int\>, IList<string\>, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Exports contour results to a file.

```python
public void GetContourResult(IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

#### Parameters

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the list of state IDs to time.

`fullNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the names of entities.

`type` ContourMappingType

Specifies the type of a target for displaying contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the path of the result file to save.

`fncallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

Specifies the callback function for getting contour results by report step.

`analysisType` AnalysisResultType

Specifies the type of analysis result for displaying contour. The default value is <xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref>.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>GetContourResult</code> method:
<pre><code class="lang-python">#print ("===GetContourResult===")
## resultpath - Specifies the file path to export
## mode - Specifies how the operating system should open a file.
## stateids - Specifies the id list of the states to time.
## fullName - Specifies the names of the entities.
## type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
## path - Specifies the path of result to save.
## analysisResultType - Specifies the type of analysis result type for displaying contour.
## formatType - Specifies a file format type.

## State ID Array
stateids = outputReader.GetStateIDArray()
target = "FEBody_01"
path = "Top Stress/X"

#contour_result_path = os.path.join(pathSource, r'ExportContourResultToFile.dfr')

# Call GetContourResult with the delegate
def python_action(stateid, resultGroup):
    print("State ID: {0}".format(stateid))
    for result in resultGroup:
        print(f"Array: {[x for x in result]}")

action = Action[Int32, IList[Array[Double]]](python_action)
outputReader.GetContourResult(stateids, target, ContourMappingType.FENode, path, action, AnalysisResultType.Dynamics)

</code></pre>

#### Remarks

This method exports contour results to a specified file path.

### <a id="VM_Post_API_OutputReader_OutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a> GetCurves\(PlotParameters\)

Retrieves plot data based on the specified plot parameters.

```python
public IDictionary<string, Point2D[]> GetCurves(PlotParameters parameters)
```

#### Parameters

`parameters` PlotParameters

For a description of parameter, see PlotParameters in the API Reference.
The parameters used for plotting the curves, including target entity, data paths, coordinate system, and plot data type.
<ul><li><xref href="VM.Models.OutputReader.PlotParameters.Target" data-throw-if-not-resolved="false"></xref> - The target entity for plotting the curves.</li><li><xref href="VM.Models.OutputReader.PlotParameters.PlotDataType" data-throw-if-not-resolved="false"></xref> - Default or Plot Data.</li><li><xref href="VM.Models.OutputReader.PlotParameters.Paths" data-throw-if-not-resolved="false"></xref> - An Paths representing the paths to the data to be read. This is a combination of characteristic and component.</li><li><xref href="VM.Models.OutputReader.PlotParameters.CSYS" data-throw-if-not-resolved="false"></xref> - The coordinate system to be used.</li></ul>

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

A dictionary containing plot data where each key represents the name or identifier of the curve,
and each value is an array of <xref href="VM.Point2D" data-throw-if-not-resolved="false"></xref> representing the plot points (x, y).
The name of plot, List of X and Y data point of plot

#### Examples

The following example demonstrates how to use the <code>GetCurves</code> method:
<pre><code class="lang-python">print ("===Plot Info===")
curvepaths = List[str]()

curve_paths = List[str]()
curve_paths.Add(r'Displacement/Magnitude')
			
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = "Crank"

curves = outputReader.GetCurves(parameters)

for curve in curves:
    print(curve.Key)
    for point in curve.Value:
        print(f"X : {point.X}, Y : {point.Y}")
</code></pre>

#### Remarks

This method retrieves and returns plot data based on the provided plot parameters.
It generates x and y coordinates for each curve specified in the parameters.

### <a id="VM_Post_API_OutputReader_OutputReader_GetEntities_VM_Models_Post_EntityType_"></a> GetEntities\(EntityType\)

Retrieves all entities of the specified type.

```python
public IEnumerable<EntityBase> GetEntities(EntityType entityType)
```

#### Parameters

`entityType` EntityType

The type of the entities to be retrieved.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<EntityBase\>

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> containing all entities of the specified type.

#### Examples

For an example that includes this property, see the [OutputReader](VM.Post.API.OutputReader.OutputReader.md).

#### Remarks

This method retrieves all entities that match the specified entity type.
The available options are:
<ul><li><xref href="VM.Models.Post.EntityType.Unknown" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Actuator" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.AssemblyInfo" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.AssemblyManager" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.BearingSet" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Body" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Constraint" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Contour" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.CSYS" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.EasyFlexEntity" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.DataElementSet" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Expression" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Element" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.ElementSet" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.FEProperty" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.FODEquation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Force" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Frequency" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.FrequencySequence" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.FrequencyTime" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.GearSet" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.InputChannel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.GearPair" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Marker" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Material" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.OutputChannel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Node" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.PythonExpression" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Request" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.SeaLevel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.ShaftSet" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.SInput" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.SODEquation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.SOutput" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.Spline" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.UserSubroutine" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.VariableEquation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.VehicleRoad" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.VectorDisplay" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.NamedSelection" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.EntityType.FatigueMaterial" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Post_API_OutputReader_OutputReader_GetFlexibleBodyReferenceFrame_System_String_System_Boolean_"></a> GetFlexibleBodyReferenceFrame\(string, bool\)

Gets the reference frame of a flexible body.

```python
public IList<double[]> GetFlexibleBodyReferenceFrame(string target, bool reCalculateOrientation = false)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the flexible body.

`reCalculateOrientation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Get the orientation from element reference frame instead of FE body reference frame

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

Postion and orientation array with the number of states.

#### Examples

The following example demonstrates how to use the <code>GetFlexibleBodyReferenceFrame</code> method:
<pre><code class="lang-python">print("===GetFlexibleBodyReferenceFrame===")

# State ID Array
stateids = outputReader.GetStateIDArray()
target = "FEBody_01"

referenceframes = outputReader.GetFlexibleBodyReferenceFrame(target)
position_base_force = []    
for i in range(len(referenceframes)):
    print("Index :", i)
    print(referenceframes[i][0])
    print(referenceframes[i][1])
    print(referenceframes[i][2])
    print(referenceframes[i][3])
    print(referenceframes[i][4])
    print(referenceframes[i][5])
    print(referenceframes[i][6])
    print(referenceframes[i][7])
    print(referenceframes[i][8])
    print(referenceframes[i][9])
    print(referenceframes[i][10])
    print(referenceframes[i][11])
</code></pre>

#### Remarks

This method retrieves the reference frame of the specified flexible body.

### <a id="VM_Post_API_OutputReader_OutputReader_GetFrequenciesInfoArray"></a> GetFrequenciesInfoArray\(\)

Retrieves information about all instances of frequencies.

```python
public IList<(string path, double time, double[] frequencies)> GetFrequenciesInfoArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [path](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.path), [double](https://learn.microsoft.com/dotnet/api/system.double) [time](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.time), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [frequencies](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.frequencies)\)\>

A list containing tuples where each tuple contains:
- <xref href="System.String" data-throw-if-not-resolved="false"></xref> path: The file path of the frequency instance.
- <xref href="System.Double" data-throw-if-not-resolved="false"></xref> time: The available sampling time.
- <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> frequencies: An array of doubles representing the frequencies for the specified sampling time index.

#### Examples

The following example demonstrates how to use the <code>GetFrequenciesInfoArray</code> method:
<pre><code class="lang-python">print ("===GetFrequenciesInfoArray===")
frequencies = outputReader.GetFrequenciesInfoArray()
frequencyInfoArray = list(frequencies)
for frequency in frequencyInfoArray:
    print (f"File Path : {frequency.Item1}")
    print(f"Sampling Time : {frequency.Item2}")
    indexes = list(frequency.Item3)
    print("Sampling Index :", *indexes, sep=',')
</code></pre>

#### Remarks

This method retrieves and returns information about all instances of frequencies,
including their file paths, available sampling times, and corresponding frequency arrays.

### <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfo_System_String_"></a> GetGeometryInfo\(string\)

Gets the geometry information for a specified entity.

```python
public IDataPart GetGeometryInfo(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

#### Returns

 IDataPart

An instance of <xref href="VM.Models.Post.IDataPart" data-throw-if-not-resolved="false"></xref> containing the geometry information.

#### Examples

The following example demonstrates how to use the <code>GetGeometryInfo</code> method:
<pre><code class="lang-python">print("===Geometry Info===")
nodal = outputReader.GetGeometryInfo("FEBody_01")
print(nodal.DummyNodes)
print(nodal.ElementCount)
print(nodal.ElementsNodeCount)
print(nodal.NodesCount)
print(nodal.PartIndex)
</code></pre>

#### Remarks

This method retrieves the geometry information for the specified entity.

### <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfoArray"></a> GetGeometryInfoArray\(\)

Gets an array of geometry information.

```python
public IEnumerable<BodyBase> GetGeometryInfoArray()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BodyBase\>

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> containing the geometry information.

#### Examples

The following example demonstrates how to use the <code>GetGeometryInfoArray</code> method:
<pre><code class="lang-python">print("===GeometryArray===")
geometries = outputReader.GetGeometryInfoArray()
geometry_list = list(geometries)
for geometry in geometry_list:
    print(geometry.FullName)
</code></pre>

#### Remarks

This method retrieves an array of geometry information for all entities.

### <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryNodes_System_String_"></a> GetGeometryNodes\(string\)

Gets the nodes of a specified geometry.

```python
public double[] GetGeometryNodes(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the path of the entity.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

An array of doubles representing the nodes of the geometry.

#### Examples

The following example demonstrates how to use the <code>GetGeometryNodes</code> method:
<pre><code class="lang-python">print("===Geometry Nodes===")
geometries = outputReader.GetGeometryNodes("FEBody_01")
for geometry_value in geometries:
    print(geometry_value)
</code></pre>

#### Remarks

This method retrieves the nodes of the specified geometry entity.

### <a id="VM_Post_API_OutputReader_OutputReader_GetMarkerInfo_System_String_"></a> GetMarkerInfo\(string\)

Gets the marker information including position, orientation, velocity, angular velocity, acceleration, and angular acceleration.

```python
public IList<double[]> GetMarkerInfo(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the marker.

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

A list of double arrays representing the marker values from the start state to the end state, stored sequentially.

#### Examples

The following example demonstrates how to use the <code>GetMarkerInfo</code> method:
<pre><code class="lang-python">print ("===Marker Info===")
marker_name = r'Crank/CM'
marker = outputReader.GetMarkerInfo(marker_name)

for marker_values in marker:
    for marker_value in marker_values:
        print(marker_value)
</code></pre>

#### Remarks

This method retrieves detailed information about the specified marker, including its position, orientation, velocity, angular velocity, acceleration, and angular acceleration.

### <a id="VM_Post_API_OutputReader_OutputReader_GetMarkerPosition_System_Collections_Generic_IList_System_String__"></a> GetMarkerPosition\(IList<string\>\)

Gets the marker positions for the specified list of marker names.

```python
public IDictionary<string, IList<double[]>> GetMarkerPosition(IList<string> names)
```

#### Parameters

`names` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the list of marker names to retrieve positions for.

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

A dictionary where each key is a marker name and the value is a list of double arrays representing marker positions from the start state to the end state, stored sequentially.

#### Examples

The following example demonstrates how to use the <code>GetMarkerPosition</code> method:
<pre><code class="lang-python">print ("===Marker Position===")

entities = List[str]()
entities.Add(marker_name)
markers = outputReader.GetMarkerPosition(entities)

marker_position = markers[marker_name]
for marker_values in marker_position:
    for marker_value in marker_values:
        print(marker_value)
</code></pre>

#### Remarks

This method retrieves the positions of markers identified by the provided list of names. Each entry in the dictionary corresponds to a marker name and contains its position values over time.

### <a id="VM_Post_API_OutputReader_OutputReader_GetModalModeCount_System_String_"></a> GetModalModeCount\(string\)

Retrieves the count of modes for the finite element modal body specified by its name.

```python
public int GetModalModeCount(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the entity representing the finite element modal body.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of modes available for the specified finite element modal body.

#### Examples

The following example demonstrates how to use the <code>GetModalModeCount</code> method:
<pre><code class="lang-python">print ("===Get Modal Mode Count===")
modecount = outputReader.GetModalModeCount("FEBody_01")
print (modecount)
</code></pre>

#### Remarks

This method retrieves and returns the count of modes available for the specified finite element modal body,
identified by its name passed as the <code class="paramref">target</code> parameter.

### <a id="VM_Post_API_OutputReader_OutputReader_GetNamedSelections"></a> GetNamedSelections\(\)

Gets the named selection information.

```python
public NamedSelection[] GetNamedSelections()
```

#### Returns

 NamedSelection\[\]

An array of <xref href="VM.Models.Post.EntityTypes.NamedSelection" data-throw-if-not-resolved="false"></xref> instances representing the named selections.

#### Examples

The following example demonstrates how to use the <code>GetNamedSelections</code> method:
<pre><code class="lang-python">print("===Named Selections===")
namedselections = outputReader.GetNamedSelections()
for namedselection in namedselections:
    print(namedselection.FullName)
</code></pre>

#### Remarks

This method retrieves the named selection information for the entities.

### <a id="VM_Post_API_OutputReader_OutputReader_GetOuterface_System_String_"></a> GetOuterface\(string\)

Gets the geometry connectivity of an outer face.

```python
public uint[] GetOuterface(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

An array of unsigned integers representing the geometry connectivity of the outer face.

#### Examples

The following example demonstrates how to use the <code>GetOuterface</code> method:
<pre><code class="lang-python">print("===Outerface===")
outerface = outputReader.GetOuterface("FEBody_01")
for outerface_value in outerface:
    print(outerface_value)
</code></pre>

#### Remarks

This method retrieves the geometry connectivity information for the outer face of the specified entity.
The connectivity is structured in a triangular patch form, allowing for efficient representation and manipulation of 3D surface geometries. Each set of three consecutive integers in the array represents a triangle in the patch.

### <a id="VM_Post_API_OutputReader_OutputReader_GetPreviousBodiesNodeCount_System_Collections_Generic_IList_System_String__System_String_"></a> GetPreviousBodiesNodeCount\(IList<string\>, string\)

Gets the count of nodes for the specified bodies before a certain entity.

```python
public long GetPreviousBodiesNodeCount(IList<string> bodyNames, string target)
```

#### Parameters

`bodyNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the list of names of the bodies.

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

The count of nodes for the previous bodies.

#### Examples

The following example demonstrates how to use the <code>GetPreviousBodiesNodeCount</code> method:
<pre><code class="lang-python">print("===Previous Bodies NodeCount===")
targets = List[str]()
targets.Add("FEBody_01")
nodeCount = outputReader.GetPreviousBodiesNodeCount(targets, "FEBody_01")

print(nodeCount)
</code></pre>

#### Remarks

This method retrieves the count of nodes for the specified bodies that are processed before the specified entity.

### <a id="VM_Post_API_OutputReader_OutputReader_GetPrimaryAnalysisResultType"></a> GetPrimaryAnalysisResultType\(\)

Retrieves the type of the primary analysis result.

```python
public AnalysisResultType GetPrimaryAnalysisResultType()
```

#### Returns

 AnalysisResultType

The type of the primary analysis result. If no primary analysis result is available,
returns <xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref>.
The available analysis are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

#### Examples

The following example demonstrates how to use the <code>GetPrimaryAnalysisResultType</code> method:
<pre><code class="lang-python">print ("===GetPrimaryAnalysisResultType===")
analysistype = outputReader.GetPrimaryAnalysisResultType()
print (analysistype)
</code></pre>

#### Remarks

This method retrieves and returns the type of the primary analysis result from the source data.
If the primary analysis result is not set or available, it returns <xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Post_API_OutputReader_OutputReader_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

Retrieves an array of reference times from the result report.

```python
public IList<double> GetReferenceTimeArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

A list of doubles representing time values from the start state to the end state sequentially.

#### Examples

The following example demonstrates how to use the <code>GetReferenceTimeArray</code> method:
<pre><code class="lang-python">print ("===Reference TimeArray===")
referenceTimeArray = outputReader.GetReferenceTimeArray()
for referenceTime in referenceTimeArray:
    print(referenceTime)
</code></pre>

#### Remarks

This method retrieves an array of time values that correspond to sequential states within the result report. The times
are stored in a list in sequential order.

### <a id="VM_Post_API_OutputReader_OutputReader_GetStateIDArray"></a> GetStateIDArray\(\)

Get id array of state

```python
public IList<int> GetStateIDArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

A list of integers representing state IDs from the start state to the end state sequentially.

#### Examples

The following example demonstrates how to use the <code>GetStateIDArray</code> method:
<pre><code class="lang-python">print ("===Get StateIDArray===")
stateIDs = outputReader.GetStateIDArray()
for ids in stateIDs:
    print(ids)
</code></pre>

#### Remarks

This method retrieves an array of state IDs that correspond to sequential states within the system. The IDs are
stored in a list in sequential order.

### <a id="VM_Post_API_OutputReader_OutputReader_GetUnits"></a> GetUnits\(\)

Retrieves units of results including type, unit, and factor.

```python
public Dictionary<string, KeyValuePair<string, double>> GetUnits()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

A dictionary where:
- The key is the type of the result.
- The value is a key-value pair where:
  - Key: The unit of the result.
  - Value: The factor associated with the unit.

#### Examples

The following example demonstrates how to use the <code>GetUnits</code> method:
<pre><code class="lang-python">print ("===GetUnits===")
units = outputReader.GetUnits()
for unit in units:
    print(f"Unit Symbol : {unit.Key}")    
    print(f"Unit : {unit.Value.Key}, Value : {unit.Value.Value}")
</code></pre>

#### Remarks

This method returns units associated with different types of results.
The dictionary contains entries where each key represents a type of result,
and each value is a key-value pair consisting of the unit and its corresponding factor.

### <a id="VM_Post_API_OutputReader_OutputReader_GetUnitsFromModeShapeFile_System_String_"></a> GetUnitsFromModeShapeFile\(string\)

Retrieves unit information from a dfmf file for a specified target.

```python
public Dictionary<string, KeyValuePair<string, double>> GetUnitsFromModeShapeFile(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the target entity for which unit information is retrieved.

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

A dictionary where:
- Key: Dimension of the result (e.g., length, time).
- Value: A key-value pair where:
  - Key: The unit string associated with the dimension.
  - Value: The scale factor for converting the unit.

#### Examples

The following example demonstrates how to use the <code>GetUnitsFromModeShapeFile</code> method:
<pre><code class="lang-python">print ("===GetUnitsFromModeShapeFile===")
units = outputReader.GetUnitsFromModeShapeFile("FEBody_01")
for unit in units:
    print(f"Unit Symbol : {unit.Key}")    
    print(f"Unit : {unit.Value.Key}, Value : {unit.Value.Value}")
</code></pre>

#### Remarks

This method retrieves unit information from a dfmf file specifically for mode shapes.
The dictionary contains entries where each key represents a dimension of the result (e.g., length, time),
and each value is a key-value pair consisting of the unit string and its corresponding scale factor.

### <a id="VM_Post_API_OutputReader_OutputReader_GetVector_System_String_System_String_"></a> GetVector\(string, string\)

Retrieves vector results for a specified target entity and characteristic path.

```python
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the vector displayable entity.

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the characteristic on the vector display.

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

A dictionary where:
- Key: String identifier associated with the vector data.
- Value: Object implementing <xref href="VM.Models.OutputReader.IVectorDisplayAnimationData" data-throw-if-not-resolved="false"></xref> interface, containing vector display animation data.

#### Examples

The following example demonstrates how to use the <code>GetVector</code> method:
<pre><code class="lang-python">print ("===GetVector===")
vectors = outputReader.GetVector("TJ_01", "Action Force")
for vector in vectors:
    print(f"Vector : {vector.Key}")
    animation_data = vector.Value

    positions = len(list(animation_data.Positions))
    for i in range(positions):
        first_positions = len(list(animation_data.Positions[i]))
        for j in range(first_positions):
            second_positions = list(animation_data.Positions[i][j])
            print("Positions :", *second_positions, sep=',')

    vectors = len(list(animation_data.Vectors))
    for i in range(vectors):
        first_vectors = len(list(animation_data.Vectors[i]))
        for j in range(first_vectors):
            second_vectors = list(animation_data.Vectors[i][j])
            print("Vectors :", *second_vectors, sep=',')
</code></pre>

#### Remarks

This method retrieves vector results for a specified entity and characteristic path.
The returned dictionary contains entries where each key represents a string identifier associated with the vector data,
and each value is an object that implements the <xref href="VM.Models.OutputReader.IVectorDisplayAnimationData" data-throw-if-not-resolved="false"></xref> interface,
containing animation data specific to the vector display.

### <a id="VM_Post_API_OutputReader_OutputReader_GetVector_System_String_System_String_VM_Models_AnalysisResultType_"></a> GetVector\(string, string, AnalysisResultType\)

Retrieves vector results for a specified target entity, characteristic path, and analysis result type.

```python
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the vector displayable entity.

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the characteristic on the vector display.

`analysisResultType` AnalysisResultType

Specifies the type of analysis result for the vector display.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

A dictionary where:
- Key: String identifier associated with the vector data.
- Value: Object implementing <xref href="VM.Models.OutputReader.IVectorDisplayAnimationData" data-throw-if-not-resolved="false"></xref> interface, containing vector display animation data.

#### Examples

The following example demonstrates how to use the <code>GetVector</code> method:
<pre><code class="lang-python">print ("===GetVector===")
vectors = outputReader.GetVector("TJ_01", "Action Force")
for vector in vectors:
    print(f"Vector : {vector.Key}")
    animation_data = vector.Value

    positions = len(list(animation_data.Positions))
    for i in range(positions):
        first_positions = len(list(animation_data.Positions[i]))
        for j in range(first_positions):
            second_positions = list(animation_data.Positions[i][j])
            print("Positions :", *second_positions, sep=',')

    vectors = len(list(animation_data.Vectors))
    for i in range(vectors):
        first_vectors = len(list(animation_data.Vectors[i]))
        for j in range(first_vectors):
            second_vectors = list(animation_data.Vectors[i][j])
            print("Vectors :", *second_vectors, sep=',')
</code></pre>

#### Remarks

This method retrieves vector results for a specified entity, characteristic path, and analysis result type.
The returned dictionary contains entries where each key represents a string identifier associated with the vector data,
and each value is an object that implements the <xref href="VM.Models.OutputReader.IVectorDisplayAnimationData" data-throw-if-not-resolved="false"></xref> interface,
containing animation data specific to the vector display.

### <a id="VM_Post_API_OutputReader_OutputReader_InterpolationAkimaSpline_System_Double___System_Double___System_Int32_System_Int32_System_Double_System_Double_"></a> InterpolationAkimaSpline\(double\[\], double\[\], int, int, double, double\)

Interpolates data series using the Akima spline method.

```python
public (InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)
```

#### Parameters

`X` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of x-values representing plot data.

`Y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of y-values representing plot data.

`NoOfPnt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points in the original data series.

`NoOfDesiredPnt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points desired in the interpolated data series.

`StartPnt` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start point for using the curve on the plot data.

`EndPnt` [double](https://learn.microsoft.com/dotnet/api/system.double)

The end point for using the curve on the plot data.

#### Returns

 \(InterpolationErrorType, [double](https://learn.microsoft.com/dotnet/api/system.double)\[\], [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\)

A tuple containing:
- An <xref href="VM.Models.Post.InterpolationErrorType" data-throw-if-not-resolved="false"></xref> indicating the interpolation error type.
<ul><li><xref href="VM.Models.Post.InterpolationErrorType.DUPLICATE_X" data-throw-if-not-resolved="false"></xref> - The target entity for plotting the curves.</li><li><xref href="VM.Models.Post.InterpolationErrorType.SUCCESS" data-throw-if-not-resolved="false"></xref> - Default or Plot Data.</li></ul>
- An array of x-values representing the interpolated data points.
- An array of y-values representing the interpolated data points.

#### Examples

The following example demonstrates how to use the <code>InterpolationAkimaSpline</code> method:
<pre><code class="lang-python">print ("===Interpolation===")
x = [1,2,3,4,5]
y = [1,2,3,4,5]
plot = outputReader.InterpolationAkimaSpline(x, y, 5, 100, 0.0, 10.0);
count = len(list(plot.Item2))
print(f"InterpolationErrorType : {plot.Item1}")

for index in range(count):
    print(f"X : {plot.Item2[index]}, Y : {plot.Item3[index]}")
</code></pre>

#### Remarks

This method interpolates the given data series using the Akima spline interpolation method.
It returns the interpolated x and y data points based on the specified parameters.


