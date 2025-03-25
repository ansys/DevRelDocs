# Interface IOperationsCSYSViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the coordinate system view model.

```python
public interface IOperationsCSYSViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsCSYSViewModel.py
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
    animationview.CreateCoordinateSystem("Crank_CM_CSYS", "Crank/CM")
    animationview.CreateCoordinateSystem("FEBody_01_CSYS", "FEBody_01/Node/487")

    # Get instance of entity view model
    csys = animationview.GetViewModelByName("Crank_CSYS")
    csys.FullName = "Crank_002_CSYS"
    csys.MarkerSize = 10
    csys.ParentInfo = "Crank_002"

    csys.TransformationOffsetPosition = Vector(0,10,0)
    csys.TransformationOffsetAngle = Vector(1,0,0)
    csys.TransformationOffsetRotationType = RotationTypes.FixedAngle
    csys.TransformationOffsetRotationAxis = RotationAxes.XYX

    if csys.IsVisibleLabel == True:
        csys.LabelTextColor = Colors.Red
        csys.IsVisibleLabelBackground = False
        csys.LabelBackGroundColor = Colors.Red

    if  csys.IsVisibleTrajectory == True:
        csys.TrajectoryColor = Colors.Red

    if csys.CurrentCoordinateSystemType == GeneralMarkerType.CYLINDRICAL:
        csys.CylindricalAxisR = CoordinateType.X
        csys.CylindricalAxisZ = CoordinateType.Y
    elif csys.CurrentCoordinateSystemType == GeneralMarkerType.SPHERICAL:
        csys.SphericalAxis1 = CoordinateType.X
        csys.SphericalAxis2 = CoordinateType.Y

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### CurrentCoordinateSystemType

Gets or sets the type of the coordinate system.

```python
GeneralMarkerType CurrentCoordinateSystemType { get; set; }
```

#### Property Value

 GeneralMarkerType

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the type of the coordinate system.
In the UI, this property is represented under the "Trajectory" category with the property name "Type".
The available options are:
<ul><li><xref href="VM.Models.Post.GeneralMarkerType.CARTESIAN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.GeneralMarkerType.CYLINDRICAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref></li></ul>

### CylindricalAxisR

Gets or sets the Axis R value for a cylindrical coordinate system.

```python
CoordinateType CylindricalAxisR { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the Axis R value for a cylindrical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis R".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref></li></ul>

### CylindricalAxisZ

Gets or sets the Axis Z value for a cylindrical coordinate system.

```python
CoordinateType CylindricalAxisZ { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the Axis Z value for a cylindrical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.CYLINDRICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis Z".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref></li></ul>

### FullName

Gets or sets the full name of the coordinate system.

```python
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

Use this property to specify or retrieve the full name of the coordinate system.

### IsVisible

Gets or sets a value indicating whether the marker is visible.

```python
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property determines whether the marker is visible.
In the UI, this property is represented under the "Marker" category with the property name "Visible".

### IsVisibleLabel

Gets or sets a value indicating whether the label is visible.

```python
bool IsVisibleLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property determines whether the label is visible.
In the UI, this property is represented under the "Label" category with the property name "Visible".

### IsVisibleLabelBackground

Gets or sets a value indicating whether the background color of the label is visible.

```python
bool IsVisibleLabelBackground { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property determines whether the background color of the label is visible. It only works when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisible" data-throw-if-not-resolved="false"></xref> property is set to <code>true</code>.
In the UI, this property is represented under the "Label" category with the property name "Background Visibility".

### IsVisibleTrajectory

Gets or sets a value indicating whether the trajectory is visible.

```python
bool IsVisibleTrajectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property determines whether the trajectory is visible and subsequently whether the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TrajectoryColor" data-throw-if-not-resolved="false"></xref> property is applied.
In the UI, this property is represented under the "Trajectory" category with the property name "Visible".

### LabelBackGroundColor

Gets or sets the background color of the label.

```python
Color LabelBackGroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the background color of the label. The background color is only displayed when both the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground" data-throw-if-not-resolved="false"></xref> properties are set to <code>true</code>.
In the UI, this property is represented under the "Label" category with the property name "Background Color".

### LabelTextColor

Gets or sets the font color of the label.

```python
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the font color of the label.
In the UI, this property is represented under the "Label" category with the property name "Font Color".

### MarkerSize

Gets or sets the size of the marker.

```python
double MarkerSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the size of the marker.

### ParentInfo

Gets or sets the parent information of the coordinate system.

```python
string ParentInfo { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

Use this property to specify or retrieve the information about the parent that contains the coordinate system.

### SphericalAxis1

Gets or sets the Axis ? value for a spherical coordinate system.

```python
CoordinateType SphericalAxis1 { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the Axis ? value for a spherical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis ?".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref>None</li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref>Each Part</li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref>Whole</li></ul>

### SphericalAxis2

Gets or sets the Axis Ø value for a spherical coordinate system.

```python
CoordinateType SphericalAxis2 { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the Axis Ø value for a spherical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis Ø".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref>None</li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref>Each Part</li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref>Whole</li></ul>

### TrajectoryColor

Gets or sets the trajectory color of the marker.

```python
Color TrajectoryColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property allows you to set the trajectory color of the marker.
The trajectory color is only displayed when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory" data-throw-if-not-resolved="false"></xref> property is set to <code>true</code>.
In the UI, this property is represented under the "Trajectory" category with the property name "Color".

### TransformationOffsetAngle

Gets or sets the offset angle vector relative to the reference orientation.

```python
Vector TransformationOffsetAngle { get; set; }
```

#### Property Value

 Vector

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property adjusts the orientation by applying the specified angular offset to the reference orientation.
The offset can be applied using either the <xref href="VM.Models.Post.RotationTypes.EulerAngle" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Models.Post.RotationTypes.FixedAngle" data-throw-if-not-resolved="false"></xref> options,
which affect how the offset is calculated. Additionally, the offset is influenced by the chosen rotation type and rotation axis, resulting in different transformations based on these parameters.

### TransformationOffsetPosition

Gets or sets the offset position vector relative to a specified reference position.

```python
Vector TransformationOffsetPosition { get; set; }
```

#### Property Value

 Vector

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property adjusts the position by applying the specified offset to the reference position, known as "Position." The offset is defined as a vector and can be used to translate the position in 3D space.

### TransformationOffsetRotationAxis

Gets or sets the rotation axis used for applying rotational transformations.

```python
RotationAxes TransformationOffsetRotationAxis { get; set; }
```

#### Property Value

 RotationAxes

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property defines the axis around which rotational transformations are applied.
It allows you to specify whether the rotation should occur around the X, Y, or Z axis, or a combination of these axes,
depending on the requirements of the transformation.
The available options are:
<ul><li><xref href="VM.RotationAxes.XYX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XYZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XZX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XZY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YXY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YXZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YZX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YZY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZXY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZXZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZYX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZYZ" data-throw-if-not-resolved="false"></xref></li></ul>

### TransformationOffsetRotationType

Gets or sets the type of rotation used for applying rotational transformations.

```python
RotationTypes TransformationOffsetRotationType { get; set; }
```

#### Property Value

 RotationTypes

#### Examples

For an example that includes this property, see the [Interface IOperationsCSYSViewModel](#VM_Operations_Post_Interfaces_IOperationsCSYSViewModel).

#### Remarks

This property determines how rotational transformations are applied by specifying the type of rotation.
It allows you to choose between different rotation types, such as Euler angles or fixed angles, depending on the requirements of the transformation process.
The available options are:
<ul><li><xref href="VM.Models.Post.RotationTypes.EulerAngle" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.RotationTypes.FixedAngle" data-throw-if-not-resolved="false"></xref></li></ul>


