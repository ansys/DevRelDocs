# Analysis
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Fatigue Analysis
This example demonstrates Fatigue Analysis.
**The example assumes that the material has already been defined.** If you are running it for the first time, you need to create the material in advance.
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

## Sound Pressure
Sound pressure analysis (SPA) can be used to analyze the sound pressure generated by the vibration of the system surface based on "Rayleigh Integral". this example describes how to create the Sound Pressure.
* Before the analysis, the bodies that are the source of sound pressure must be defined as FE or EasyFlex bodies in the preprocessor.
* The coordinate systems must be created to define the microphone positions which are the target positions for sound pressure calculation.
```python
# OperationAPI_CreatingASoundPressure.py
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

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    animationview = findViews[0]

    # Create a Coordinate System
    # Name - Set the name of instance.
    # ParentInfo - Specifies The path of an parent entity.
    animationview.CreateCoordinateSystem("Microphone", "Ground")

    # Get instance of entity
    # The GetViewModelByName method retrieves the target by its name.
    microphone = animationview.GetViewModelByName("Microphone")
    microphone.TransformationOffsetPosition = Vector(0,300,0)

    bodynames = List[str](1)
    bodynames.Add(r'FEBody_01')
    microphoneNames = List[str](1)
    microphoneNames.Add(r'Microphone')

    # Creates sound pressure data based on the Rayleigh Integral for analyzing sound pressure generated by vibrations on the system surface.
    # bodyNames - The list of entity names whose surfaces generate the sound pressure.</param>
    # coordinateNames - The list of coordinate system names used in the analysis.</param>
    # coarseningRate - Percentage of the number of nodes remaining in the sampling result with respect to the initial number of nodes.</param>
    # maxAreaFactor - Maximum allowable area of each element generated by the sampling result. It sets the condition that the area of each element cannot be greater than (Max Area Factor) * (Average element area).</param>
    # maxAspectRatio - Maximum allowable aspect ratio of each element generated by the sampling result.</param>
    # airDensity - Density of the air.</param>
    # soundVelocity - Speed of sound in air.</param>
    # frequency - The number of analysis results per second is determined as 10*analysis frequency.</param>
    # start - The start frame for the time range to be analyzed.</param>
    # end - The end frame for the time range to be analyzed.</param>
    # isDeicbelScale - The decibel scale.</param>
    animationview.CreateSoundPressure(bodynames, microphoneNames, 10.0, 100.0, 3.0, 1.21E-09, 343000.0, 2000.0, 1, 10, False)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```