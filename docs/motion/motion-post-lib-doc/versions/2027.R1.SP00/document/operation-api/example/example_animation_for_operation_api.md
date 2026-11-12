# Animation
<div align="right"><a href="/document/operation-api/example/example_animation_for_operation_api.md" download="example_animation_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create an AnimationView corresponding to the Analysis type.
This example demonstrates how to create an animation view suitable for the analysis type and load animation frames.

Running this example sets 50 animation frames for the Dynamics analysis result and creates an animation view named EigenvalueAnimation from the Eigenvalue analysis result.
It then sets the number of frames generated when a frequency is loaded to 100, selects the first sampling time, and enables the first frequency.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAnimationViewBasedonType.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)


# Get the document from the result file
document = application_handler.GetDocument(RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
# The number of animation frames.
frame_count = 50
dynamic_analysis.SetAnimationFrame(frame_count)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # The page that contains the animation view.
    page1 = application_handler.GetPage(find_views[0].GroupID)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)

    # Create an Animation View on the active page
    # This will create an animation view based on the eigenvalue analysis.
    # The name of the new animation view.
    animation_view_name = "EigenvalueAnimation"
    page1.CreateAnimation(eigenval_analysis, animation_view_name)
    eigenval_analysis.Frame = 100
    
    # Get Sampling Times
    # This retrieves the sampling times from the eigenvalue analysis.
    times = eigenval_analysis.GetSamplingTimes()
    # The sampling times as a Python list.
    converted_times = list(times)

    # Set the target sampling time.
    eigenval_analysis.TargetSamplingTime = converted_times[0]

    # Get the frequency instance for the specified sampling time index and enable its mode-shape animation.
    frequency = eigenval_analysis.GetFrequency(0)
    frequency.Enable = True
```

## Create a Coordinate System
This example demonstrates how to create a coordinate system.
The Coordinate system can be created from various entities in the result as below, and this example describes how to create the Coordinate System.
* Rigid Body
* FE Node
* Marker

Running this example creates a coordinate system named Crank_CSYS attached to Crank.
The coordinate system has a position offset of 10 along the Y axis, an angle offset, a marker size of 10, and the cylindrical coordinate type.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreateACoordinateSystem.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    animation_view = find_views[0]
    # Create a Coordinate System
    # The name of the new coordinate system.
    csys_name = "Crank_CSYS"
    # The full name of the parent entity that contains the coordinate system.
    parent_name = "Crank"
    # The coordinate system created in the analysis result.
    csys = animation_view.CreateCoordinateSystem(csys_name, parent_name)

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
```

## Create Node & Element
This example demonstrates how to create nodes and elements within a flexible body.

Running this example creates a node and an element in FEBody_01 for node 754 and element 2343, and changes their IDs to 755 and 2601.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingANodeAndElement.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # Get the document from the result file
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    # The name of the target finite-element body.
    entity_name = "FEBody_01"
    # The finite-element body with the specified name.
    febody = dynamic_analysis.GetViewModel(entity_name)

    # Create Node
    node = febody.CreateNode(754)
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)
```

## Contour
This example demonstrates how to create a contour.
Contour is a good tool for analyzing a simulation result. Since scalar data, such as stress, is displayed with color corresponding to value, the location of a problem is easy to estimate during an animation.

Running this example creates a contour of the Displacement characteristic with the X component, changes it to the Z component, and renames it FEBody_01_Contour_Z.
The contour also gets a black-to-white color scheme, a range of 1 to 4, a red legend font color, a logarithmic scale, a continuous display, and a hidden legend, and it is disabled at the end.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
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

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# Get the document from the result file
document = application_handler.GetDocument(RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
# The number of animation frames.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# It returns the objects available for contouring that correspond to the MappingType.
target_entities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
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
# The path to the characteristic for which the contour will be created.
characteristic_name = "Displacement"
# The path to the component for which the contour will be created.
component_name = "X"
# The contour created for the target entities.
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
# The name of the component to change to.
new_component_name = "Z"
contour.Component = new_component_name
Thread.CurrentThread.Join(3000)
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False
```

## Expression
This example demonstrates how to create, retrieve, plot, and remove a Python expression.
A Postprocessor Expression is similar to a Function Expression in the Motion Preprocessor. It represents a formula that can be written as a combination of functions of displacement, velocity, and acceleration between specified markers, and it also supports basic mathematical functions.

Running this example creates an expression of DM("Crank/CM"), plots it as a curve in a chart view named ExpressionChart, and removes the expression from the Dynamics analysis result.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAExpression.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # Get the document from the result file
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

    # Add the expression value as curve data.
    # The name of the new chart view.
    chart_name = "ExpressionChart"
    # The chart view created on the page.
    chart = page.CreateChart(chart_name)
    # The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
    curve_paths = List[str]()
    # Characteristic/component path of the curve to add, in "Characteristic/Component" format.
    curve_path = "Expression/Value"
    curve_paths.Add(curve_path)
    # The parameters that specify the target and curve paths of the plot.
    parameters = PlotParameters()
    parameters.Target = expression.FullName
    parameters.Paths = curve_paths
    chart.AddCurves(RESULT_FILE_PATH, parameters)

    # Remove the expression from the dynamic analysis result.
    dynamic_analysis.RemoveExpression(expression.FullName)
```

## Image Capture
This example demonstrates how to capture the content on the screen as an image.

Running this example sets 10 animation frames, moves the animation to frame 5, and saves an image of the animation view as chart_image.png in OUTPUT_DIR.
The image is a PNG file with a width of 1920 and a height of 1080.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_ImageCapture.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # Get the document from the result file
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animation_view = find_views[0]
    # The number of animation frames.
    frame_count = 10
    dynamic_analysis.SetAnimationFrame(frame_count)
    # The index of the animation frame to move to.
    frame_index = 5
    dynamic_analysis.MoveToAnimationFrame(frame_index) # MoveToAnimationFrame

    # OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
    # IMAGE_OUTPUT_FILENAME : output filename for the exported view image (e.g., chart_image.png)
    # The path of the exported image file.
    export_filepath = Path.Combine(OUTPUT_DIR, IMAGE_OUTPUT_FILENAME)

    # The width of the exported image.
    image_width = 1920
    # The height of the exported image.
    image_height = 1080
    animation_view.ExportImage(export_filepath, ImageFormat.Png, image_width, image_height)
```

## Following Camera
This example demonstrates how to make the camera follow a moving target.
The camera can track an entity's translation or rotation along the selected axes while the animation plays.

Running this example sets the camera to a starting viewpoint and makes the camera follow the translation of BD_02 along the X and Y axes.
It then sets 50 animation frames and records the animation as an MP4 video named following_camera_animation in OUTPUT_DIR.

This example uses the LogtudinalX_VibrationZ.dfr result file. You can get the LogtudinalX_VibrationZ.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_FollowingCamera.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# ANIMATION_RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\LogtudinalX_VibrationZ.dfr)
filepaths.Add(ANIMATION_RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get the document from the result file
document = application_handler.GetDocument(ANIMATION_RESULT_FILE_PATH)

# This retrieves the analysis result from the document.
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

# Create the animation view on the active page.
page = application_handler.GetActivePage()
# The first view of the page.
animation_view = page.GetViews()[0]

# Set the camera to a starting viewpoint before recording.
# The X coordinate of the camera position.
eye_x = 400
# The Y coordinate of the camera position.
eye_y = 85
# The Z coordinate of the camera position.
eye_z = 10
# The X coordinate of the point the camera looks at.
target_x = 0
# The Y coordinate of the point the camera looks at.
target_y = 85
# The Z coordinate of the point the camera looks at.
target_z = 10
# The X component of the camera up vector.
up_vector_x = 0
# The Y component of the camera up vector.
up_vector_y = 0
# The Z component of the camera up vector.
up_vector_z = 1
# The camera specification applied to the animation view.
view_spec = ViewSpec()
view_spec.Eye = Vector(eye_x, eye_y, eye_z)
view_spec.Target = Vector(target_x, target_y, target_z)
view_spec.UpVector = Vector(up_vector_x, up_vector_y, up_vector_z)
animation_view.SetViewSpec(view_spec)

# Select the entity that the camera follows.
# The target can be a body, a marker, a coordinate system, or a node.
# The full name of the entity that the camera follows.
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
# The number of animation frames.
frame_count = 50
dynamic_analysis.SetAnimationFrame(frame_count)

# OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# FOLLOWING_CAMERA_OUTPUT_NAME : output filename for the recorded animation, without a file extension (e.g., following_camera_animation)
# The path of the recorded animation file, without an extension.
export_filepath = Path.Combine(OUTPUT_DIR, FOLLOWING_CAMERA_OUTPUT_NAME)
# Record the loaded frames. Passing no viewSpecs keeps the current camera position for every
# frame, which the active camera tracking set up above updates as the target moves.
animation_view.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10)
```

## Recording
This example demonstrates how to record an animation as a video.

Running this example sets 100 animation frames and records them as an MP4 video named result_animation in OUTPUT_DIR.
The camera eye moves along the X axis from -300 to 300 while the frames are recorded.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_Recording.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # Get the document from the result file
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
    # The number of animation frames.
    frame_count = 100
    dynamic_analysis.SetAnimationFrame(frame_count)

    # OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
    # RECORDING_OUTPUT_NAME : output filename for the recorded animation, without a file extension (e.g., result_animation)
    # The path of the recorded animation file, without an extension.
    export_filepath = Path.Combine(OUTPUT_DIR, RECORDING_OUTPUT_NAME)
    # The camera specifications, one for each loaded animation frame.
    specs = animation_view.GetViewSpecs()
    # The X coordinate of the camera position at the first frame.
    start_eye_x = -300.0
    # The X coordinate of the camera position at the last frame.
    end_eye_x = 300.0
    for frame_index in range(frame_count):
        # The progress of the current frame within the recording range, from 0 to 1.
        progress = float(frame_index) / (frame_count - 1)
        # The X coordinate of the camera position at the current frame.
        eye_x = start_eye_x + (end_eye_x - start_eye_x) * progress
        specs[frame_index].Eye = Vector(eye_x, 0, 700)
        specs[frame_index].Target = Vector(0, 50, 0)
        specs[frame_index].UpVector = Vector(0, 1, 0)

    # Recording Animation
    animation_view.RecordingAnimation(export_filepath, RecordingType.MP4, RecordingRangeType.ActiveView, 10, specs)
```

## Vector Display
This example demonstrates how to create a vector display.
Vector display is used to display the force vector in animation view. It is a useful tool for analyzing the magnitude or direction of a force. The force and torque of joint, force, and contact are available in the vector display.

Running this example creates a vector display named TJ_VectorDisplay for TJ_01 with the Base Force characteristic, and then changes its characteristic to Base Torque.
The vector display is shown with a label, a scale of 1000, and a blue color.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAVectorDisplay.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

# The animation views that show the dynamic analysis result of the result file.
find_views = list()
for page in pages :
    # The views of the page.
    views = page.GetViews()
    # The animation views of the page.
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# The number of animation views found.
view_count = len(find_views)
if view_count > 0 :
    # Get the document from the result file
    document = application_handler.GetDocument(RESULT_FILE_PATH)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # The name of the vector displayable entity.
    entity_name = "TJ_01"
    # The name of the characteristic.
    characteristic_name = "Base Force"
    # The name of the characteristic to change to.
    new_characteristic_name = "Base Torque"
    
    # Create Vector Display
    # The vector display created for the entity and characteristic.
    vector = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)

    # Set properties for the vector display
    vector.IsLabel = True
    vector.IsVisible = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    # The name of the vector.
    vector_name = "TJ_VectorDisplay"
    vector.FullName = vector_name
    vector.IsLog = False
    vector.Scale = 1000
    vector.SetCharacteristic(new_characteristic_name)
    vector.Color = Colors.Blue
```

## View Entity Management: Show, Hide, and Fit
This example demonstrates how to show, hide, or fit entities within the current Animation View.

Running this example hides all entities except FEBody_01, fits the view to the visible entities, and then shows all entities again.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
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

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
animation_view = page.GetActiveView()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The finite-element body with the specified name.
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
```
