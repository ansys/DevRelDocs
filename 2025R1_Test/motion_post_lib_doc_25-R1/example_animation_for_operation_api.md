# Animation

The following sample code illustrates how to create a simple example.

* Refer to the 'operationapi.py' file in the 'Ansys installed path/Motion/Document/Postprocessor API for Python.zip' file.
* This example was created using the 'Ansys installed path/Motion/Document/Frequency Response Analysis.zip' file and 'Install_Path\Motion\Document\Pre and Post Processor.zip' file.

## Create an AnimationView corresponding to the Analysis type

This example demonstrates how to create an animation view suitable for the analysis type and load animation frames.

```
# Example_OperationAPI_CreateAnimation.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

suspension_filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')
fra_filepath = combine_path(install_path, r'Motion\Document\Frequency Response Analysis\Model1\Subsystem\Model1.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(suspension_filepath)
filepaths.Add(fra_filepath)
# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == suspension_filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)


document = applicationHandler.GetDocument(suspension_filepath)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.SetAnimationFrame(50)

viewCount = len(findViews)
if viewCount > 0 :
    page1 = applicationHandler.GetPage(findViews[0].GroupID)
    document = applicationHandler.GetDocument(fra_filepath)

    # Types of Analyis Results
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, "EigenvalueAnimation")
    eigenval_analysis.Frame = 100
    
    times = eigenval_analysis.GetSamplingTimes()
    convertedtimes = list(times)
    eigenval_analysis.TargetSamplingTime = convertedtimes[0]
    frequencies = eigenval_analysis.GetFrequencies();
    frequency = eigenval_analysis.GetFrequency(1);
    frequency.Enable = True
```

## Contour

This example demonstrates how to create a contour.
Contour is a good tool for analyzing a simulation result. Since scalar data, such as stress, is displayed with color corresponding to value, you can easily estimate where a problem is during an animation.

```
# Example_OperationAPI_CreateContour.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)


document = applicationHandler.GetDocument(filepath)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.SetAnimationFrame(50)

# It returns the objects available for contouring that correspond to the MappingType.
targetentities = dynamic_analysis.GetContourables(ContourMappingType.Contact)

# Create Contour
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.Contact, "Normal Force", "Average")
contour.LegendColorScheme = ColorSchemeType.BLACK_TO_WHITE
contour.AutoRange = False
if contour.AutoRange == False:
    contour.Max = 4
    contour.Min = 1
contour.LegendFontColor = Colors.Red
contour.LogScale = True
contour.LegendVisibility = False
contour.Continuous = True
contour.Component = "Sum"
contour.FullName = "Contact_Sum"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False
```

## Create a Coordinate System

This example demonstrates how to create a coordinate system.
The Coordinate system can be created from various entities in the result as below, and this example describes how to create the Coordinate System.

* Rigid Body
* FE Node
* Marker

```
# Example_OperationAPI_CreateCoordinatesystem.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    animationview = findViews[0]
    # Name - Set the name of instance.
    # ParentInfo - Specifies The path of an parent entity.
    animationview.CreateCoordinateSystem("Node_CSYS", "FEBody_01/Node/227")
    animationview.CreateCoordinateSystem("Rack_CSYS", "Rack")
    animationview.CreateCoordinateSystem("Rack_CM_CSYS", "Rack/CM")

    # Get instance of entity view model
    csys = animationview.GetViewModelByName("Rack_CSYS")
    csys.TransformationOffsetPosition = Vector(0,10,0)
    csys.TransformationOffsetAngle = Vector(1,0,0)
    csys.TransformationOffsetRotationType = RotationTypes.FixedAngle
    csys.TransformationOffsetRotationAxis = RotationAxes.XYX
    csys.MarkerSize = 10
```

## Vector Display

This example demonstrates how to create a vector display.
Vector display is used to display the force vector in animation view. It is a useful tool for analyzing the magnitude or direction of a force. The force and torque of joint, force, and contact are available in the vector display.

```
# Example_OperationAPI_CreateVectorDisplay.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(filepath)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # Create Vector Display
    vector = analysis.CreateVectorDisplay("TJ_01", "Base Force")
    vector.IsLabel = True
    vector.IsVisible = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    vector.FullName = "TJ_VectorDisplay"
    vector.IsLog = False
    vector.Scale = 1000
    vector.SetCharacteristic("Base Torque")
    vector.Color = Colors.Blue
```

## Image Capture

This example demonstrates how to capture the content on the screen as an image.

```
# Example_OperationAPI_CreateImageCapture.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(filepath)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]
    analysis.SetAnimationFrame(100)
    analysis.MoveToAnimationFrame(50) # MoveToAnimationFrame

    animationview.ExportImage(r'D:\Image.png', ImageFormat.Png, 1920, 1080)
```

## Recording

This example demonstrates how to record an animation as a video.

```
# Example_OperationAPI_CreateRecording.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(filepath)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    animationview = findViews[0]
    analysis.SetAnimationFrame(100)

    specs = animationview.GetViewSpecs()
    animationview.RecordingAnimation(r'D:\recording', RecordingType.MP4, RecordingRangeType.ActiveView, 10, specs)
```

## Expression

This example demonstrates how to create a expression.
A Postprocessor Expression is similar to a Function Expression in the Motion Preprocessor. It represents a formula that can be written as a combination of functions of displacement, velocity, and acceleration between specified markers, and it also supports basic mathematical functions.
* This example was created using the 'Install_Path\Motion\Document\Pre and Post Processor.zip' file.
  
```
# Example_OperationAPI_CreateExpression.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(filepath)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    expression = analysis.CreateExpression("expression")
    expression.Expression = "DM(\"Rack/CM\")"
```

## Create Node & Element

This example demonstrates how to create nodes and elements within a flexible body.

```
# Example_OperationAPI_CreateNodeElement.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(filepath)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")

    # Create Node
    node = febody.CreateNode(168)
    node.ChangeID(163)

    # Create Element
    element = febody.CreateElement(323)
    element.ChangeID(266)
```