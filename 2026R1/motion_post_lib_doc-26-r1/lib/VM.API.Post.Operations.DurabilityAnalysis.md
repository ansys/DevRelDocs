# Class DurabilityAnalysis
<a id="VM_API_Post_Operations_DurabilityAnalysis"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

Provides methods for performing durability analysis operations.

```csharp
public static class DurabilityAnalysis
```

#### Inheritance

object ← 
[DurabilityAnalysis](VM.API.Post.Operations.DurabilityAnalysis.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# DurabilityAnalysis.py
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

# Set array about result file
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

# Get the FEBody instance
# The GetViewModelByName method retrieves the target by its name.
febody = activeView.GetViewModelByName("FEBody_01")

# Get the Material instance
# The GetViewModelByName method retrieves the material by its name.
material = activeView.GetViewModelByName("2014_HV_O")

# Check if the FEBody and Material are found
if febody is None or material is None:
    sys.exit(1)

# Set the febody and material properties
febody.Material = material

# Set Analysis Type
# FatigueAnalysisType can be one of the following:
# - FatigueAnalysisType.SN - SN Curve
# - FatigueAnalysisType.EN - EN Curve
febody.AnalysisType = FatigueAnalysisType.SN

# Set Stress-Strain Combination
# StressStrainCombinationType can be one of the following:
# - StressStrainCombinationType.VonMises - VonMises
# - StressStrainCombinationType.Signed_VonMises - Signed VonMises
# - StressStrainCombinationType.Max_Principal - 1st Principal
# - StressStrainCombinationType.Min_Principal - 3rd Principal
# - StressStrainCombinationType.Max_ABS_Principal - Max Abs Principal
# - StressStrainCombinationType.Max_Shear - Max Shear
# - StressStrainCombinationType.Signed_Max_Shear - Signed Max Shear
# - StressStrainCombinationType.Average_Principal - Average Principal
febody.StressStrainCombination = StressStrainCombinationType.VonMises

# Set Mean Stress Correction
# - MeanStressCorrection.Neglect - Neglect
# - MeanStressCorrection.ModifiedGerber - Modified Gerber
# - MeanStressCorrection.GerberLocus - GerberLocus
# - MeanStressCorrection.Sodeberg - Sodeberg
# - MeanStressCorrection.DEelliptic - DEelliptic
febody.MeanStressCorrection = MeanStressCorrection.Neglect

# Fatigue analysis parameters
# DocumentFilePath - The path to the result file.
# ResultName - Name of the fatigue result. The result will be saved in the Fatigue folder under the result file directory.
# NoOfRepeatedLoad - Number of repeated loads
# Start - Start time
# End - End time
# AddTarget - Adds a target. The target value is the ID of the FEBody.
durabilityParameter = DurabilityAnalysisParameter()
durabilityParameter.DocumentFilePath = result_file_path
durabilityParameter.ResultName = "FEBbody_01_Fatigue"
durabilityParameter.NoOfRepeatedLoad = 1
durabilityParameter.Start = 1
durabilityParameter.End = 10
durabilityParameter.AddTarget(febody.ID)

# Run the fatigue analysis
DurabilityAnalysis.RunFatigueAnalysis(durabilityParameter)

# Run the fatigue analysis with contour
# DurabilityAnalysis.RunFatigueAnalysisAndGenerateContours(durabilityParameter)

# Output Path
life_cycle_path = combine_path(get_output_directory(), "Fatigue_Life_Cycle.txt")

# Set the febody fullname as the target for export
targetNames = List[str]()
targetNames.Add(febody.FullName)

# A boolean indicating whether to export the full frame or not.
# If True, the full frame will be exported; if False, only the current frame will be exported.
is_full_frame = True

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
contour_mapping_type = ContourMappingType.FEElement

# Set Characteristic Path
characteristic_path = "Fatigue"

# Set Component Path
component_path = "Life Cycle"

# Combine Characteristic and Component Path
characteristic_component_path = characteristic_path + "/" + component_path

# Set the fatigue path
# - DocumentFilePath: The path to the result file.
# - FatiguePath: The fatigue results are saved in the Fatigue folder under the result file directory. Specify the name of the result file inside this Fatigue folder.
DurabilityAnalysis.SetFatiguePath(result_file_path, "FEBbody_01_Fatigue")

# Export Contour Result to File
# result_file_path - The path to the result file.
# life_cycle_path - The path to the output file where the life cycle data will be saved.
# targetNames - The list of target names for which the contour results will be exported.
# is_full_frame - A boolean indicating whether to export the full frame or not.
# contour_mapping_type - The type of contour mapping to be used.
# characteristic_component_path - The path to the characteristic and component for which the contour results will be exported.
# AnalysisType - The default value is AnalysisResultType.Dynamics. If you want to change it, please set the AnalysisType.
# FileFormatType - The format of the output file. The default is FileFormatType.Text. The format type can be set to TXT or BINARY.
Export.ExportContourResultToFile(result_file_path, life_cycle_path, targetNames, is_full_frame, contour_mapping_type, characteristic_component_path)

# Close all open pages.
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Remarks

This class acts as a static API for executing fatigue analysis and managing related operations.

## Methods

### <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysis\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis using the specified parameters.

```csharp
public static bool RunFatigueAnalysis(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

The parameters required for the fatigue analysis.

#### Returns

 bool

True if the analysis is successful; otherwise, false.

#### Examples

For an example that includes this property, see the [DurabilityAnalysis](VM.API.Post.Operations.DurabilityAnalysis.md).

#### Remarks

This method delegates the fatigue analysis execution to the main view model handler.

#### Exceptions

 Exception

Thrown when the handler is not initialized.

### <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysisAndGenerateContours_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysisAndGenerateContours\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis and generates contours using the specified parameters.

```csharp
public static bool RunFatigueAnalysisAndGenerateContours(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

The parameters required for the fatigue analysis and contour generation.

#### Returns

 bool

True if the operation is successful; otherwise, false.

#### Examples

For an example that includes this property, see the [DurabilityAnalysis](VM.API.Post.Operations.DurabilityAnalysis.md).

#### Remarks

This method performs both fatigue analysis and contour generation by delegating to the main view model handler.

#### Exceptions

 Exception

Thrown when the handler is not initialized.

### <a id="VM_API_Post_Operations_DurabilityAnalysis_SetFatiguePath_System_String_System_String_"></a> SetFatiguePath\(string, string\)

Sets the fatigue path for a document.

```csharp
public static void SetFatiguePath(string documentFilePath, string fatigueFilePath)
```

#### Parameters

`documentFilePath` string

The file path of the document.

`fatigueFilePath` string

The name of the fatigue result.

#### Examples

For an example that includes this property, see the [DurabilityAnalysis](VM.API.Post.Operations.DurabilityAnalysis.md).

#### Remarks

This method retrieves the document using the provided file path and sets its fatigue name.

#### Exceptions

 Exception

Thrown when the document is not found.

