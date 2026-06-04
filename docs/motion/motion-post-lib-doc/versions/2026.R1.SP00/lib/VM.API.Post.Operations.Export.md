# Class Export
<a id="VM_API_Post_Operations_Export"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

A utility class that provides methods for exporting various types of data.
This class is designed to be extended with additional export functionalities in the future.

```csharp
public static class Export
```

#### Inheritance

object ← 
[Export](VM.API.Post.Operations.Export.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# Export.py
# -*- coding: utf-8 -*-
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file - There may be multiple result files.
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
activeView = page.GetActiveView()

# Loading Animation - Use this only when the current Active View is an Animation View.
# This method is used to load the animation in the active view.
applicationHandler.LoadingAnimation()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
febody = activeView.GetViewModelByName("FEBody_01")

# Check if the FEBody is found
if febody is None:
    sys.exit(1)

# Set Ouput Path - The path where the output will be saved.
output_path = combine_path(get_output_directory(), "Displacement.txt")

# A boolean indicating whether to export the full frame or not.
# If True, the full frame will be exported; if False, only the current frame will be exported.
is_full_frame = True

# Set the febody fullname as the target for export
targetNames = List[str]()
targetNames.Add(febody.FullName)

# Set Contour Mapping Type
# ContourMappingType can be one of the following:
# - ContourMappingType.None - None
# - ContourMappingType.FENode - Node (Averaged across body)
# - ContourMappingType.FEElement - Element (Unaveraged)
# - ContourMappingType.FEElementNode - Node (Unaveraged)
# - ContourMappingType.FEMaterial - Node (Averaged within material)
# - ContourMappingType.BeamGroup - Beam Group
# - ContourMappingType.Contact - Contact
# - ContourMappingType.ChainedSystem - Chained System
# - ContourMappingType.Usersubroutine - Usersubroutine
contour_mapping_type = ContourMappingType.FENode

# Set Characteristic Path
characteristic_path = "Displacement"

# Set Component Path
component_path = "X"

# Combine Characteristic and Component Path
combined_characteristic_component_path = characteristic_path + "/" + component_path

# Export Contour Result to File - When the Animation View is the Active View
# result_file_path - The path to the result file.
# output_path - The path to the output file where the contour results will be saved.
# targetNames - The list of target names for which the contour results will be exported.
# is_full_frame - A boolean indicating whether to export the full frame or not.
# contour_mapping_type - The type of contour mapping to be used.
# characteristic_component_path - The path to the characteristic and component for which the contour results will be exported.
# AnalysisType - The default value is AnalysisResultType.Dynamics. If you want to change it, please set the AnalysisType.
# FileFormatType - The format of the output file. The default is FileFormatType.Text. The format type can be set to TXT or BINARY.
Export.ExportContourResultToFile(result_file_path, output_path, targetNames, is_full_frame, contour_mapping_type, combined_characteristic_component_path)

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Methods

### <a id="VM_API_Post_Operations_Export_ExportContourResultToFile_System_String_System_String_System_Collections_Generic_IList_System_String__System_Boolean_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results to a specified file.

```csharp
public static void ExportContourResultToFile(string documentFilePath, string resultFilePath, IList<string> targetEntities, bool fullFrame, ContourMappingType contourMappingType, string combinedPath, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.TXT)
```

#### Parameters

`documentFilePath` string

The file path where the document is located.

`resultFilePath` string

The file path where the fatigue results will be saved.

`targetEntities` IList<string\>

A list of target entities for which the contour results will be exported.

`fullFrame` bool

A boolean indicating whether to export the full frame or not.

`contourMappingType` ContourMappingType

The type of contour mapping to be applied during export.
Supported types:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`combinedPath` string

A combination of Characteristic and Component.

`analysisResultType` AnalysisResultType

The type of analysis result to be exported. Defaults to <xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref>.
Supported types:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

`formatType` FileFormatType

The file format type for the exported results. Defaults to <xref href="VM.Models.FileFormatType.TXT" data-throw-if-not-resolved="false"></xref>.
Supported types:
<ul><li><xref href="VM.Models.FileFormatType.TXT" data-throw-if-not-resolved="false"></xref>: Exports the results in plain text format.</li><li><xref href="VM.Models.FileFormatType.BINARY" data-throw-if-not-resolved="false"></xref>: Exports the results in binary format.</li></ul>

#### Examples

For an example that includes this property, see the [Export](VM.API.Post.Operations.Export.md).

#### Remarks

This method exports contour results for the specified target entities to a file in the desired format.
It requires the active slot view model to be an animation view model with available frames.

#### Exceptions

 Exception

Thrown when the active slot view model is not an animation view model.

