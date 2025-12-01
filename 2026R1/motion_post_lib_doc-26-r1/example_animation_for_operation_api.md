# Animation
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Create an AnimationView corresponding to the Analysis type.
This example demonstrates how to create an animation view suitable for the analysis type and load animation frames.
```python
# OperationAPI_CreatingAnimationViewBasedonType.py
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


# result_file_path - Get the document from the result file path.
document = applicationHandler.GetDocument(result_file_path)

# This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(50)

viewCount = len(findViews)
if viewCount > 0 :
    page1 = applicationHandler.GetPage(findViews[0].GroupID)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)

    # Create an Animation View on the active page
    # This will create an animation view based on the eigenvalue analysis.
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, "EigenvalueAnimation")
    eigenval_analysis.Frame = 100
    
    # Get Sampling Times
    # This retrieves the sampling times from the eigenvalue analysis.
    times = eigenval_analysis.GetSamplingTimes()
    convertedtimes = list(times)

    # Set the target sampling time.
    eigenval_analysis.TargetSamplingTime = convertedtimes[0]

    # Get all instances of frequencies.
    frequencies = eigenval_analysis.GetFrequencies()

    # Get the frequency instance for the specified sampling time index.
    frequency = eigenval_analysis.GetFrequency(0)
    frequency.Enable = False

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Create a Coordinate System
This example demonstrates how to create a coordinate system.
The Coordinate system can be created from various entities in the result as below, and this example describes how to create the Coordinate System.
* Rigid Body
* FE Node
* Marker

```python
# -*- coding: utf-8 -*-
# OperationAPI_CreateACoordinateSystem.py
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
    animationview.CreateCoordinateSystem("Crank_CSYS", "Crank")

    # Get instance of entity
    # The GetViewModelByName method retrieves the target by its name.
    csys = animationview.GetViewModelByName("Crank_CSYS")

    # Set the transformation offset position and angle for the coordinate system.
    csys.TransformationOffsetPosition = Vector(0,10,0)
    csys.TransformationOffsetAngle = Vector(1,0,0)
    csys.TransformationOffsetRotationType = RotationTypes.FixedAngle
    csys.TransformationOffsetRotationAxis = RotationAxes.XYX
    csys.MarkerSize = 10

    # The CurrentCoordinateSystemType property indicates Type attribute as displayed in the user interface.
    # Accepted input values are defined by the GeneralMarkerType enumeration.
    # The GeneralMarkerType ρ property must be one of the following: CARTESIAN, CYLINDRICAL, SPHERICAL
    csys.CurrentCoordinateSystemType = GeneralMarkerType.CYLINDRICAL
    if csys.CurrentCoordinateSystemType == GeneralMarkerType.SPHERICAL:
        # The SphericalAxis1 property indicates Axis ρ. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis ρ property must be one of the following: X, Y, Z
        csys.SphericalAxis1 = CoordinateType.X
        # The SphericalAxis2 property indicates Axis Ø. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis Ø property must be one of the following: X, Y, Z
        csys.SphericalAxis2 = CoordinateType.Y
    elif csys.CurrentCoordinateSystemType == GeneralMarkerType.CYLINDRICAL:
        # The CylindricalAxisR property indicates Axis R. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis R property must be one of the following: X, Y, Z
        csys.CylindricalAxisR = CoordinateType.Z
        # The CylindricalAxisZ property indicates Axis Z. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis Z property must be one of the following: X, Y, Z    
        csys.CylindricalAxisZ = CoordinateType.X

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Create Node & Element
This example demonstrates how to create nodes and elements within a flexible body.
```python
# OperationAPI_CreatingANodeAndElement.py
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")

    # Create Node
    node = febody.CreateNode(754)
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Contour
This example demonstrates how to create a contour.
Contour is a good tool for analyzing a simulation result. Since scalar data, such as stress, is displayed with color corresponding to value, you can easily estimate where a problem is during an animation.
```python
# IOperationsContourViewModel.py
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

# result_file_path - Get the document from the result file path.
document = applicationHandler.GetDocument(result_file_path)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(10)

# It returns the objects available for contouring that correspond to the MappingType.
targetentities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
# targetentities - Set the entity as the target for export
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
# characteristic_path - The path to the characteristic for which the contour will be created.
# component_path - The path to the component for which the contour will be created.
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.FENode, "Displacement", "X")

# Set properties for the contour
contour.LegendColorScheme = ColorSchemeType.BLACK_TO_WHITE
contour.AutoRange = False
if contour.AutoRange == False:
    contour.Max = 4
    contour.Min = 1

contour.LegendFontColor = Colors.Red
contour.LogScale = True
contour.LegendVisibility = False
contour.Continuous = True
contour.Component = "Z"
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)

```

## Expression
This example demonstrates how to create a expression.
A Postprocessor Expression is similar to a Function Expression in the Motion Preprocessor. It represents a formula that can be written as a combination of functions of displacement, velocity, and acceleration between specified markers, and it also supports basic mathematical functions.
```python
# OperationAPI_CreatingAExpression.py
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # Creating a Expression
    expression = analysis.CreateExpression("expression")
    expression.Expression = "DM(\"Crank/CM\")"

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Image Capture
This example demonstrates how to capture the content on the screen as an image.
```python
# OperationAPI_ImageCapture.py
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]
    analysis.SetAnimationFrame(10)
    analysis.MoveToAnimationFrame(5) # MoveToAnimationFrame

    # output path
    output_dir = get_output_directory()
    export_filepath = combine_path(output_dir, r'Image.png')

    # Image Caputre
    animationview.ExportImage(export_filepath, ImageFormat.Png, 1920, 1080)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Recording
This example demonstrates how to record an animation as a video.
```python
# OperationAPI_Recording.py
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]

    # Sets a specified number of animation frames.
    # This will set the animation frame to the specified number.
    analysis.SetAnimationFrame(10)

    specs = animationview.GetViewSpecs()
    output_dir = get_output_directory()
    export_filepath = combine_path(output_dir, r'recording')

    # Recording Animation
    animationview.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10, specs)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Vector Display
This example demonstrates how to create a vector display.
Vector display is used to display the force vector in animation view. It is a useful tool for analyzing the magnitude or direction of a force. The force and torque of joint, force, and contact are available in the vector display.
```python
# OperationAPI_CreatingAVectorDisplay.py
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    entityName = "TJ_01"
    base_force_characteristic = "Base Force"
    base_torque_characteristic = "Base Torque"
    
    # Create Vector Display
    # entityName - The name of the target entity for the vector display.
    # base_force_characteristic - The name of the characteristic. Refer to the UI for Vector Display for available characteristics.
    vector = analysis.CreateVectorDisplay(entityName, base_force_characteristic)

    # Set properties for the vector display
    vector.IsLabel = True
    vector.IsVisible = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    vector.FullName = "TJ_VectorDisplay"
    vector.IsLog = False
    vector.Scale = 1000
    vector.SetCharacteristic(base_torque_characteristic)
    vector.Color = Colors.Blue

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## View Entity Management: Show, Hide, and Fit
This example demonstrates how to show, hide, or fit entities within the current Animation View.
```python
# -*- coding: utf-8 -*-
# OperationAPI_ViewEntityControl.py
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
animationView = page.GetActiveView()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
febody = animationView.GetViewModelByName("FEBody_01")

# Hides all entities except the specified ones. 
# In this case, we hide all entities except the FEBody_01.
# Input: febody.FullName 
# or Input: febody.ID
animationView.HideOthers(febody.ID)

# Fit the view to the current selection.
animationView.Fit()

# Show all entities in the view.
animationView.ShowAll()

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)

```