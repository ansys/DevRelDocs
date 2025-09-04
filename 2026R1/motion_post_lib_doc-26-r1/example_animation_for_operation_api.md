# Animation
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Create an AnimationView corresponding to the Analysis type.
This example demonstrates how to create an animation view suitable for the analysis type and load animation frames.
```python
# OperationAPI_CreatingAnimationViewBasedonType.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)


document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(50)

viewCount = len(findViews)
if viewCount > 0 :
    page1 = applicationHandler.GetPage(findViews[0].GroupID)

    # Types of Analyis Results
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, "EigenvalueAnimation")
    eigenval_analysis.Frame = 100
    
    times = eigenval_analysis.GetSamplingTimes()
    convertedtimes = list(times)
    eigenval_analysis.TargetSamplingTime = convertedtimes[0]
    frequencies = eigenval_analysis.GetFrequencies()
    frequency = eigenval_analysis.GetFrequency(0)
    frequency.Enable = False

# Close the Pages
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
# OperationAPI_CreatingContour.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)


document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(10)

# It returns the objects available for contouring that correspond to the MappingType.
targetentities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.FENode, "Displacement", "X")
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

# Close the Pages
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

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    # Name - Set the name of instance.
    # ParentInfo - Specifies The path of an parent entity.
    animationview.CreateCoordinateSystem("Crank_CSYS", "Crank")

    # Get instance of entity view model
    csys = animationview.GetViewModelByName("Crank_CSYS")
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

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    entity = "TJ_01"
    base_force_characteristic = "Base Force"
    base_torque_characteristic = "Base Torque"
    # Create Vector Display
    vector = analysis.CreateVectorDisplay(entity, base_force_characteristic)
    vector.IsLabel = True
    vector.IsVisible = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    vector.FullName = "TJ_VectorDisplay"
    vector.IsLog = False
    vector.Scale = 1000
    vector.SetCharacteristic(base_torque_characteristic)
    vector.Color = Colors.Blue

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Image Capture
This example demonstrates how to capture the content on the screen as an image.
```python
# OperationAPI_ImageCapture.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]
    analysis.SetAnimationFrame(10)
    analysis.MoveToAnimationFrame(5) # MoveToAnimationFrame

    # output path
    output_dir = get_output_directory()
    export_filepath = combine_path(output_dir, r'Image.png')

    # Image Caputre
    animationview.ExportImage(export_filepath, ImageFormat.Png, 1920, 1080)

# Close the Pages
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

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]
    analysis.SetAnimationFrame(10)

    specs = animationview.GetViewSpecs()
    output_dir = get_output_directory()
    export_filepath = combine_path(output_dir, r'recording')

    # Recording Animation
    animationview.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10, specs)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Expression
This example demonstrates how to create a expression.
A Postprocessor Expression is similar to a Function Expression in the Motion Preprocessor. It represents a formula that can be written as a combination of functions of displacement, velocity, and acceleration between specified markers, and it also supports basic mathematical functions.
```python
# OperationAPI_CreatingAExpression.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # Creating a Expression
    expression = analysis.CreateExpression("expression")
    expression.Expression = "DM(\"Crank/CM\")"

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Create Node & Element
This example demonstrates how to create nodes and elements within a flexible body.
```python
# OperationAPI_CreatingANodeAndElement.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
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
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")

    # Create Node
    node = febody.CreateNode(754)
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```