#  Interface IOperationsAnimation

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface for Animation View related operations.

```python
public interface IOperationsAnimation : IView, IOperationsBase
```

#### Implements

[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsAnimation.py
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
    
    animationView.BottomColor = Colors.Red
    animationView.TopColor = Colors.Gray
    animationView.IsVisibleLogo = True
    animationView.IsVisibleNavigationCube = False
    animationView.IsVisibleStateInfo = False
    animationView.LogoHeight = 32
    animationView.LogoWidth = 32
    animationView.LogoPath = ""
    animationView.LogoPosition = Layout.BOTTOM_LEFT
    animationView.Opacity = 100
    animationView.StateInfoPosition = Layout.BOTTOM_LEFT
    animationView.TextColorStateInfo = Colors.Blue

    # Creating a CoordinateSystem
    animationview.CreateCoordinateSystem("Microphone", "Ground")

    microphone = animationview.GetViewModelByName("Microphone")
    microphone.TransformationOffsetPosition = Vector(0,300,0)

    bodynames = List[str](1)
    bodynames.Add(r'FEBody_01')
    microphoneNames = List[str](1)
    microphoneNames.Add(r'Microphone')

    # Creating a SoundPressure
    animationview.CreateSoundPressure(bodynames, microphoneNames, 10.0, 100.0, 3.0, 1.21E-09, 343000.0, 2000.0, 1, 10, False)

    document = applicationHandler.GetDocument(result_file_path)
    dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
    dynamic_analysis.SetAnimationFrame(11)

    # Following Camera
    # Translation
    animationview.Activate()
    animationview.IsFollowingCameraActive = True
    animationview.IsFollowingXAxis = True
    animationview.IsFollowingYAxis = False
    animationview.IsFollowingZAxis = False

    # Target Entity - Rigid(Body)
    animationview.SetFollowingCameraTarget("Crank")    

    # The output path is 'examples/Output'.
    output_dir = get_output_directory()

    # Following Camera - Recording Animation
    recording_path = combine_path(output_dir, r'AnimationRecording_Translation_Body')
    animationview.RecordingAnimation(recording_path, RecordingType.MP4, RecordingRangeType.ActiveGroup, 10)

    # Target Entity - Microphone(Coordinate System)
    animationview.SetFollowingCameraTarget("Microphone")

    # Following Camera - Recording Animation
    recording_path = combine_path(output_dir, r'AnimationRecording_Translation_Microphone')
    animationview.RecordingAnimation(recording_path, RecordingType.MP4, RecordingRangeType.ActiveGroup, 10)

    # Target Entity - Rigid/CM(Result Marker)
    animationview.SetFollowingCameraTarget("Crank/CM")

    # Following Camera - Recording Animation
    recording_path = combine_path(output_dir, r'AnimationRecording_Translation_CenterMarker')
    animationview.RecordingAnimation(recording_path, RecordingType.MP4, RecordingRangeType.ActiveGroup, 10)

    # Following Camera - Rotation
    animationView.TransformationType = TransformationType.Rotation
    animationview.IsFollowingRotXAxis = True
    animationview.IsFollowingRotYAxis = False
    animationview.IsFollowingRotZAxis = False

    # Target Entity - FEBody_01/Node/487(Node)
    animationview.SetFollowingCameraTarget("FEBody_01/Node/487")

    # Following Camera Recording Animation
    recording_path = combine_path(output_dir, r'AnimationRecording_Rotation')
    animationview.RecordingAnimation(recording_path, RecordingType.MP4, RecordingRangeType.ActiveGroup, 10)

    # Recording Animation
    viewSpecs = animationview.GetViewSpecs()

    recording_path = combine_path(output_dir, r'AnimationRecording')
    animationview.RecordingAnimation(recording_path, RecordingType.MP4, RecordingRangeType.ActiveGroup, 10, viewSpecs)

    # Move to Camera
    viewSpec = ViewSpec()
    viewSpec.Eye = Vector(10,20,30)
    viewSpec.Target = Vector(5, 10, 15)
    viewSpec.UpVector = Vector(1, 0, 0)
    
    animationview.SetViewSpec(viewSpec)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_AnalysisResultType"></a> AnalysisResultType

Gets the type of analysis result for the currently created animation view.

```python
AnalysisResultType AnalysisResultType { get; }
```

#### Property Value

 AnalysisResultType

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

The AnalysisResultType property is used to determine the type of analysis result associated with the currently created animation view.This type is one of several analysis types generated from the overall result.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_BottomColor"></a> BottomColor

Gets or sets the bottom color of the view's background.

```python
Color BottomColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation.BottomColor" data-throw-if-not-resolved="false"></xref> property allows you to set the bottom color of the view's background.
In the UI, this property is represented under the "Background" category with the property name "Bottom Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_DocumentFilePath"></a> DocumentFilePath

Gets the file path that contains the information of the simulation results.

```python
string DocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

Use this property to retrieve the location of the file containing the simulation results.
The file path is read-only and is determined by the simulation process.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingCameraActive"></a> IsFollowingCameraActive

Gets or sets a value that activates the following camera.

```python
bool IsFollowingCameraActive { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property enables or disables the camera's tracking behavior. When set to <code>true</code>,
the camera's viewpoint will follow the position and orientation of the target body during animation.
If set to <code>false</code>, the camera will remain stationary and will not track the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingRotXAxis"></a> IsFollowingRotXAxis

Gets or sets a value that determines whether the component follows the orientation of the target along the X-axis.

```python
bool IsFollowingRotXAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's orientation on the X-axis.
When set to <code>true</code>, the component will adjust its orientation to match the target's X-axis rotation.
When set to <code>false</code>, the component will not follow the X-axis rotation of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingRotYAxis"></a> IsFollowingRotYAxis

Gets or sets a value that determines whether the component follows the orientation of the target along the Y-axis.

```python
bool IsFollowingRotYAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's orientation on the Y-axis.
When set to <code>true</code>, the component will adjust its orientation to match the target's Y-axis rotation.
When set to <code>false</code>, the component will not follow the Y-axis rotation of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingRotZAxis"></a> IsFollowingRotZAxis

Gets or sets a value that determines whether the component follows the orientation of the target along the Z-axis.

```python
bool IsFollowingRotZAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's orientation on the Z-axis.
When set to <code>true</code>, the component will adjust its orientation to match the target's Z-axis rotation.
When set to <code>false</code>, the component will not follow the Z-axis rotation of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingXAxis"></a> IsFollowingXAxis

Gets or sets a value that determines whether the component follows the position of the target along the X-axis.

```python
bool IsFollowingXAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's position specifically on the X-axis.
When set to <code>true</code>, the component will move to match the target's X position.
When set to <code>false</code>, the component will not follow the X position of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingYAxis"></a> IsFollowingYAxis

Gets or sets a value that determines whether the component follows the position of the target along the Y-axis.

```python
bool IsFollowingYAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's position specifically on the Y-axis.
When set to <code>true</code>, the component will move to match the target's Y position.
When set to <code>false</code>, the component will not follow the Y position of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingZAxis"></a> IsFollowingZAxis

Gets or sets a value that determines whether the component follows the position of the target along the Z-axis.

```python
bool IsFollowingZAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property controls whether the component tracks the target's position specifically on the Z-axis.
When set to <code>true</code>, the component will move to match the target's Z position.
When set to <code>false</code>, the component will not follow the Z position of the target.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleLogo"></a> IsVisibleLogo

Gets or sets a value indicating whether the logo is visible.

```python
bool IsVisibleLogo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This flag determines whether the logo is shown or hidden.
In the UI, this property is represented under the "Logo" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleNavigationCube"></a> IsVisibleNavigationCube

Gets or sets a value indicating whether the navigation cube is visible.

```python
bool IsVisibleNavigationCube { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This flag determines whether the navigation cube is shown or hidden.
In the UI, this property is represented under the "Navigation Cube" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleStateInfo"></a> IsVisibleStateInfo

Gets or sets a value indicating whether the state information is visible.

```python
bool IsVisibleStateInfo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This flag determines whether the state information is shown or hidden.
In the UI, this property is represented under the "StateInfo" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoHeight"></a> LogoHeight

Gets or sets the height of the logo image.

```python
uint LogoHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the height of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "Height".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPath"></a> LogoPath

Gets or sets the file path of the logo image.

```python
string LogoPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the file path of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "File Path".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPosition"></a> LogoPosition

Gets or sets the position of the logo.

```python
Layout LogoPosition { get; set; }
```

#### Property Value

 Layout

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the position of the logo. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Logo" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoWidth"></a> LogoWidth

Gets or sets the width of the logo image.

```python
uint LogoWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the width of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "Width".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_NavigationCubePosition"></a> NavigationCubePosition

Gets or sets the position of the navigation cube.

```python
Layout NavigationCubePosition { get; set; }
```

#### Property Value

 Layout

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the position of the navigation cube. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Navigation Cube" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Opacity"></a> Opacity

Gets or sets the opacity of the logo.

```python
double Opacity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the opacity of the logo. Only values between 0 and 100 are valid.
In the UI, this property is represented under the "Logo" category with the property name "Transparency".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StateInfoPosition"></a> StateInfoPosition

Gets or sets the position of the state information.

```python
Layout StateInfoPosition { get; set; }
```

#### Property Value

 Layout

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the position of the state information. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "StateInfo" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TextColorStateInfo"></a> TextColorStateInfo

Gets or sets the font color of the state information.

```python
Color TextColorStateInfo { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This property allows you to set the font color of the state information.
In the UI, this property is represented under the "StateInfo" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TopColor"></a> TopColor

Gets or sets the top color of the view's background.

```python
Color TopColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation.TopColor" data-throw-if-not-resolved="false"></xref> property allows you to set the top color of the view's background.
In the UI, this property is represented under the "Background" category with the property name "Top Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TransformationType"></a> TransformationType

Gets or sets the transformation type that determines the following directions of the camera.

```python
TransformationType TransformationType { get; set; }
```

#### Property Value

 TransformationType

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType" data-throw-if-not-resolved="false"></xref> property is used to control whether the camera follows the target's translational or rotational direction.
- In <code>Translation</code> mode, the camera follows only the movement of the target and does not adjust to its rotation.
- In <code>Rotation</code> mode, the camera follows the target's rotation but also tracks its translational direction.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate system for analyzing a position on a body.

```python
IOperationsCSYSViewModel CreateCoordinateSystem(string name, string parentInfo = "Ground")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the coordinate system to be created.

`parentInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The parent entity for the coordinate system.
Define the parent body or node in coordinate system.
If not provided, the default value is <xref href="VM.Models.Post.NameService.GroundName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [IOperationsCSYSViewModel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel" data-throw-if-not-resolved="false"></xref> representing the created coordinate system.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method creates a coordinate system with the specified name and assigns it to the given parent entity.
If the parent entity is not specified, the coordinate system is assigned to the default ground entity.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateSoundPressure_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Int32_System_Int32_System_Boolean_"></a> CreateSoundPressure\(IList<string\>, IList<string\>, double, double, double, double, double, double, int, int, bool\)

Creates sound pressure data based on the Rayleigh Integral for analyzing sound pressure generated by vibrations on the system surface.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSoundPressure(IList<string> bodyNames, IList<string> coordinateNames, double coarseningRate, double maxAreaFactor, double maxAspectRatio, double airDensity, double soundVelocity, double frequency, int start, int end, bool isDeicbelScale)
```

#### Parameters

`bodyNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of entity names whose surfaces generate the sound pressure.

`coordinateNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of coordinate system names used in the analysis.

`coarseningRate` [double](https://learn.microsoft.com/dotnet/api/system.double)

Percentage of the number of nodes remaining in the sampling result with respect to the initial number of nodes.

`maxAreaFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

Maximum allowable area of each element generated by the sampling result. It sets the condition that the area of each element cannot be greater than (Max Area Factor) * (Average element area).

`maxAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

Maximum allowable aspect ratio of each element generated by the sampling result.

`airDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

Density of the air.

`soundVelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)

Speed of sound in air.

`frequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

The number of analysis results per second is determined as 10*analysis frequency.

`start` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start frame for the time range to be analyzed.

`end` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The end frame for the time range to be analyzed.

`isDeicbelScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The decibel scale.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of sound pressure data series.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method uses the Rayleigh Integral to analyze the sound pressure generated by the vibrations on the system surface.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewModelByName_System_String_"></a> GetViewModelByName\(string\)

Retrieves an instance of an entity based on the provided name.

```python
IEntityBaseViewModel GetViewModelByName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the entity to be retrieved.

#### Returns

 IEntityBaseViewModel

An instance of <xref href="VM.ViewModels.Post.IEntityBaseViewModel" data-throw-if-not-resolved="false"></xref> representing the entity with the specified name,
or <code>null</code> if no such entity exists.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method searches for an entity with the given name and returns the corresponding instance.
If no entity with the specified name is found, the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewSpecs"></a> GetViewSpecs\(\)

Retrieves an array of view specifications corresponding to the number of loaded animation frames.

```python
IViewSpec[] GetViewSpecs()
```

#### Returns

 [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IViewSpec" data-throw-if-not-resolved="false"></xref> instances that represent the positions of the animation camera for each frame,
or <code>null</code> if no frames are loaded.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method returns an array where each element corresponds to a specific frame in the loaded animation,
allowing for the configuration of the animation camera's position for each frame. If no frames are loaded,
the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_PlayAnimation"></a> PlayAnimation\(\)

Plays the loaded animation frames.

```python
void PlayAnimation()
```

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method starts the playback of the animation frames that have been loaded. If no frames are loaded,
the method should handle this scenario appropriately, such as by displaying an error message or logging the issue.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RecordingAnimation_System_String_VM_Models_Post_RecordingType_VM_Models_Post_RecordingRangeType_System_Int32_VM_Operations_Post_Interfaces_IViewSpec___"></a> RecordingAnimation\(string, RecordingType, RecordingRangeType, int, IViewSpec\[\]\)

Records the loaded animation frames to a file.

```python
void RecordingAnimation(string filePath, RecordingType recordingType, RecordingRangeType rangeType, int frameRate = 10, IViewSpec[] viewSpecs = null)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path where the recording will be saved.

`recordingType` RecordingType

The format in which the recording will be saved. Supported types are AVI, WMV1, WMV2, MP4, and GIF.

`rangeType` RecordingRangeType

The range of the recording. Supported options are <xref href="VM.Models.Post.RecordingRangeType.ActiveView" data-throw-if-not-resolved="false"></xref>
for the currently active view, and <xref href="VM.Models.Post.RecordingRangeType.ActiveGroup" data-throw-if-not-resolved="false"></xref>
for the page containing the active view.

`frameRate` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The frame rate of the recording. The default value is 10 frames per second.

`viewSpecs` [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IViewSpec" data-throw-if-not-resolved="false"></xref> instances for setting the camera position for each frame.
If <code>null</code>, the camera position will not change and will remain at the existing position.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method records the loaded animation frames to a specified file format.
It supports different recording types and range options. The frame rate can be adjusted,
and custom camera positions for each frame can be set through the <code class="paramref">viewSpecs</code> parameter.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetFollowingCameraTarget_System_String_"></a> SetFollowingCameraTarget\(string\)

Sets the target body for the camera. The camera's position and orientation will follow those of the target body.

```python
void SetFollowingCameraTarget(string targetName)
```

#### Parameters

`targetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The names of the target entity. The target entities are Body, Marker, Node.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This function allows the camera to track and maintain the same position and orientation as the target body.
It is useful for situations where the camera needs to follow an object, such as in a third-person perspective or object tracking scenario.
If the target body is a ResultMarker and its <code>IsVisible</code> property is <code>false</code>, it will automatically be set to <code>true</code> to ensure visibility when being tracked by the camera.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetViewSpec_VM_Operations_Post_Interfaces_IViewSpec_"></a> SetViewSpec\(IViewSpec\)

Updates the camera information for the current animation frame position.

```python
void SetViewSpec(IViewSpec viewSpec)
```

#### Parameters

`viewSpec` [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)

The <xref href="VM.Operations.Post.Interfaces.IViewSpec" data-throw-if-not-resolved="false"></xref> instance containing the new camera information.

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method updates the camera information for the current position in the animation frames using the provided <code class="paramref">viewSpec</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StopAnimation"></a> StopAnimation\(\)

Stops the currently playing animation.

```python
void StopAnimation()
```

#### Examples

For an example that includes this property, see the [Interface IOperationsAnimation](#VM_Operations_Post_Interfaces_IOperationsAnimation).

#### Remarks

This method stops the playback of the animation frames that are currently playing. If no animation is currently playing,
the method should handle this scenario appropriately, such as by displaying an error message or logging the issue.


