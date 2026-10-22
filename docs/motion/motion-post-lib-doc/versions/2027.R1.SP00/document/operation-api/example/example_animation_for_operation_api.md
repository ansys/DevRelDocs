# Animation
The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create an AnimationView corresponding to the Analysis type.
This example demonstrates how to create an animation view suitable for the analysis type and load animation frames.
```python
# Example_OperationAPI_CreatingAnimationViewBasedonType.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)


# RESULT_FILE_PATH : Get the document from the result file path.
document = application_handler.GetDocument(RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
frame_count = 50
dynamic_analysis.SetAnimationFrame(frame_count)

view_count = len(find_views)
if view_count > 0 :
    page1 = application_handler.GetPage(find_views[0].GroupID)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)

    # Create an Animation View on the active page
    # This will create an animation view based on the eigenvalue analysis.
    animation_view_name = "EigenvalueAnimation"
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, animation_view_name)
    eigenval_analysis.Frame = 100
    
    # Get Sampling Times
    # This retrieves the sampling times from the eigenvalue analysis.
    times = eigenval_analysis.GetSamplingTimes()
    converted_times = list(times)

    # Set the target sampling time.
    eigenval_analysis.TargetSamplingTime = converted_times[0]

    # Get the frequency instance for the specified sampling time index and enable its mode-shape animation.
    frequency = eigenval_analysis.GetFrequency(0)
    frequency.Enable = True

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Create a Coordinate System
This example demonstrates how to create a coordinate system.
The Coordinate system can be created from various entities in the result as below, and this example describes how to create the Coordinate System.
* Rigid Body
* FE Node
* Marker

```python
# Example_OperationAPI_CreateACoordinateSystem.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    animation_view = find_views[0]
    # Create a Coordinate System
    # Name : Set the name of instance.
    # ParentInfo : Specifies The path of an parent entity.
    csys_name = "Crank_CSYS"
    parent_name = "Crank"
    animation_view.CreateCoordinateSystem(csys_name, parent_name)

    # Get instance of entity
    # The GetViewModelByName method retrieves the target by its name.
    csys = animation_view.GetViewModelByName("Crank_CSYS")

    # Set the transformation offset position and angle for the coordinate system.
    csys.TransformationOffsetPosition = Vector(0,10,0)
    csys.TransformationOffsetAngle = Vector(1,0,0)
    csys.TransformationOffsetRotationType = RotationTypes.FixedAngle
    csys.TransformationOffsetRotationAxis = RotationAxes.XYX
    csys.MarkerSize = 10

    # The CurrentCoordinateSystemType property indicates Type attribute as displayed in the user interface.
    # Accepted input values are defined by the GeneralMarkerType enumeration.
    # The CurrentCoordinateSystemType property must be one of the following: CARTESIAN, CYLINDRICAL, SPHERICAL
    csys.CurrentCoordinateSystemType = GeneralMarkerType.CYLINDRICAL
    if csys.CurrentCoordinateSystemType == GeneralMarkerType.SPHERICAL:
        # The SphericalAxis1 property indicates Axis rho. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis rho property must be one of the following: X, Y, Z
        csys.SphericalAxis1 = CoordinateType.X
        # The SphericalAxis2 property indicates Axis phi. Accepted input values are defined by the CoordinateType enumeration.
        # The Axis phi property must be one of the following: X, Y, Z
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
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Create Node & Element
This example demonstrates how to create nodes and elements within a flexible body.
```python
# Example_OperationAPI_CreatingANodeAndElement.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    # RESULT_FILE_PATH : Get the document from the result file path.
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    entity_name = "FEBody_01"
    febody = dynamic_analysis.GetViewModel(entity_name)

    # Create Node
    node = febody.CreateNode(754)
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Contour
This example demonstrates how to create a contour.
Contour is a good tool for analyzing a simulation result. Since scalar data, such as stress, is displayed with color corresponding to value, the location of a problem is easy to estimate during an animation.
```python
# Example_OperationAPI_CreatingContour.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *
from System.Threading import Thread

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# RESULT_FILE_PATH : Get the document from the result file path.
document = application_handler.GetDocument(RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# It returns the objects available for contouring that correspond to the MappingType.
target_entities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
# target_entities : Set the entity as the target
# Set Contour Mapping Type
# ContourMappingType can be one of the following:
# - ContourMappingType.None : None
# - ContourMappingType.FENode : Node (Averaged across body)
# - ContourMappingType.FEElement : Element (Unaveraged)
# - ContourMappingType.FEElementNode : Node (Unaveraged)
# - ContourMappingType.FEMaterial : Node (Averaged within material)
# - ContourMappingType.BeamGroup : Beam Group
# - ContourMappingType.Contact : Contact
# - ContourMappingType.ChainedSystem : Chained System
# - ContourMappingType.Usersubroutine : Usersubroutine
# characteristic_path : The path to the characteristic for which the contour will be created.
# component_path : The path to the component for which the contour will be created.
characteristic_name = "Displacement"
component_name = "X"
contour = dynamic_analysis.CreateContour(target_entities, ContourMappingType.FENode, characteristic_name, component_name)

# Contour data is generated on a background task; let it finish before changing properties.
Thread.CurrentThread.Join(3000)

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
new_component_name = "Z"
contour.Component = new_component_name
Thread.CurrentThread.Join(3000)
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False
# Closing disposes the model, so let any background contour update finish first.
Thread.CurrentThread.Join(3000)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Expression
This example demonstrates how to create, retrieve, plot, and remove a Python expression.
A Postprocessor Expression is similar to a Function Expression in the Motion Preprocessor. It represents a formula that can be written as a combination of functions of displacement, velocity, and acceleration between specified markers, and it also supports basic mathematical functions.
```python
# Example_OperationAPI_CreatingAExpression.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    # RESULT_FILE_PATH : Get the document from the result file path.
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # Creating a Expression
    expression = dynamic_analysis.CreateExpression("expression")
    expression.Expression = 'DM("Crank/CM")'

    # Get the expression and add its value as curve data.
    expression = dynamic_analysis.GetExpression(expression.FullName)
    chart_name = "ExpressionChart"
    chart = page.CreateChart(chart_name)
    curve_paths = List[str]()
    # curve_path : characteristic/component path of the curve to add, in "Characteristic/Component" format
    curve_path = "Expression/Value"
    curve_paths.Add(curve_path)
    parameters = PlotParameters()
    parameters.Target = expression.FullName
    parameters.Paths = curve_paths
    curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

    # Remove the expression from the dynamic analysis result.
    dynamic_analysis.RemoveExpression(expression.FullName)

# Close the Page
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Image Capture
This example demonstrates how to capture the content on the screen as an image.
```python
# Example_OperationAPI_ImageCapture.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    # RESULT_FILE_PATH : Get the document from the result file path.
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animation_view = find_views[0]
    frame_count = 10
    dynamic_analysis.SetAnimationFrame(frame_count)
    frame_index = 5
    dynamic_analysis.MoveToAnimationFrame(frame_index) # MoveToAnimationFrame

    # OUTPUT_DIR : path to the folder where exported files are written
    # IMAGE_OUTPUT_FILENAME : output filename for the exported view image
    export_filepath = Path.Combine(OUTPUT_DIR, IMAGE_OUTPUT_FILENAME)

    image_width = 1920
    image_height = 1080
    animation_view.ExportImage(export_filepath, ImageFormat.Png, image_width, image_height)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Following Camera
This example demonstrates how to make the camera follow a moving target.
The camera can track an entity's translation or rotation along the selected axes while the animation plays.
```python
# Example_OperationAPI_FollowingCamera.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# ANIMATION_RESULT_FILE_PATH : .dfr result file path
filepaths.Add(ANIMATION_RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# ANIMATION_RESULT_FILE_PATH : Get the document from the result file path.
document = application_handler.GetDocument(ANIMATION_RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

# Create the animation view on the active page.
page = application_handler.GetActivePage()
animation_view = page.GetViews()[0]

# Set the camera to a starting viewpoint before recording.
eye_x = 400
eye_y = 85
eye_z = 10
target_x = 0
target_y = 85
target_z = 10
up_vector_x = 0
up_vector_y = 0
up_vector_z = 1
view_spec = ViewSpec()
view_spec.Eye = Vector(eye_x, eye_y, eye_z)
view_spec.Target = Vector(target_x, target_y, target_z)
view_spec.UpVector = Vector(up_vector_x, up_vector_y, up_vector_z)
animation_view.SetViewSpec(view_spec)

# Select the entity that the camera follows.
# The target can be a body, a marker, a coordinate system, or a node.
target_full_name = "BD_02"
animation_view.SetFollowingCameraTarget(target_full_name)


# Turn camera tracking on so the camera follows the selected target.
animation_view.IsFollowingCameraActive = True

# Follow the target's translation along the enabled axes.
animation_view.TransformationType = TransformationType.Translation
animation_view.IsFollowingXAxis = True
animation_view.IsFollowingYAxis = True
animation_view.IsFollowingZAxis = False

# Sets a specified number of animation frames.
# This will set the animation frame to the specified number.
frame_count = 50
dynamic_analysis.SetAnimationFrame(frame_count)

# OUTPUT_DIR : path to the folder where exported files are written
# FOLLOWING_CAMERA_OUTPUT_NAME : output filename for the recorded animation, without a file extension
export_filepath = Path.Combine(OUTPUT_DIR, FOLLOWING_CAMERA_OUTPUT_NAME)
# Record the loaded frames. Passing no viewSpecs keeps the current camera position for every
# frame, which the active camera tracking set up above updates as the target moves.
animation_view.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10)

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(ANIMATION_RESULT_FILE_PATH)
```

## Recording
This example demonstrates how to record an animation as a video.
```python
# Example_OperationAPI_Recording.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    # RESULT_FILE_PATH : Get the document from the result file path.
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animation_view = find_views[0]

    # Sets a specified number of animation frames.
    # This will set the animation frame to the specified number.
    frame_count = 100
    dynamic_analysis.SetAnimationFrame(frame_count)

    # OUTPUT_DIR : path to the folder where exported files are written
    # RECORDING_OUTPUT_NAME : output filename for the recorded animation, without a file extension
    export_filepath = Path.Combine(OUTPUT_DIR, RECORDING_OUTPUT_NAME)
    specs = animation_view.GetViewSpecs()
    start_eye_x = -300.0
    end_eye_x = 300.0
    for frame_index in range(frame_count):
        progress = float(frame_index) / (frame_count - 1)
        eye_x = start_eye_x + (end_eye_x - start_eye_x) * progress
        specs[frame_index].Eye = Vector(eye_x, 0, 700)
        specs[frame_index].Target = Vector(0, 50, 0)
        specs[frame_index].UpVector = Vector(0, 1, 0)

    # Recording Animation
    animation_view.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10, specs)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Vector Display
This example demonstrates how to create a vector display.
Vector display is used to display the force vector in animation view. It is a useful tool for analyzing the magnitude or direction of a force. The force and torque of joint, force, and contact are available in the vector display.
```python
# Example_OperationAPI_CreatingAVectorDisplay.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

view_count = len(find_views)
if view_count > 0 :
    # RESULT_FILE_PATH : Get the document from the result file path.
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    entity_name = "TJ_01"
    characteristic_name = "Base Force"
    new_characteristic_name = "Base Torque"
    
    # Create Vector Display
    # entity_name : The name of the target entity for the vector display.
    # characteristic_name : The name of the characteristic. Refer to the UI for Vector Display for available characteristics.
    vector = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)

    # Set properties for the vector display
    vector.IsLabel = True
    vector.IsVisible = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    vector_name = "TJ_VectorDisplay"
    vector.FullName = vector_name
    vector.IsLog = False
    vector.Scale = 1000
    vector.SetCharacteristic(new_characteristic_name)
    vector.Color = Colors.Blue

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## View Entity Management: Show, Hide, and Fit
This example demonstrates how to show, hide, or fit entities within the current Animation View.
```python
# -*- coding: utf-8 -*-
# Example_OperationAPI_ViewEntityControl.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
animation_view = page.GetActiveView()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
entity_name = "FEBody_01"
febody = animation_view.GetViewModelByName(entity_name)

# Hides all entities except the specified ones. 
# In this case, we hide all entities except the FEBody_01.
# Input: febody.FullName 
# or Input: febody.ID
animation_view.HideOthers(febody.ID)

# Fit the view to the current selection.
animation_view.Fit()

# Show all entities in the view.
animation_view.ShowAll()

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

<a href="/document/operation-api/example/example_animation_for_operation_api.md" download="example_animation_for_operation_api.md">Download this page as Markdown</a>
