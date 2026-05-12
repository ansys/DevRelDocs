#  Interface IOperationsCSYSViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the coordinate system view model.

```csharp
public interface IOperationsCSYSViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CurrentCoordinateSystemType"></a> CurrentCoordinateSystemType

Gets or sets the type of the coordinate system.

```csharp
GeneralMarkerType CurrentCoordinateSystemType { get; set; }
```

#### Property Value

 GeneralMarkerType

#### Examples

The following example demonstrates how to use the <code>CurrentCoordinateSystemType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.CurrentCoordinateSystemType = GeneralMarkerType.CARTESIAN;</code></pre>

#### Remarks

This property allows you to set the type of the coordinate system.
In the UI, this property is represented under the "Trajectory" category with the property name "Type".
The available options are:
<ul><li><xref href="VM.Models.Post.GeneralMarkerType.CARTESIAN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.GeneralMarkerType.CYLINDRICAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisR"></a> CylindricalAxisR

Gets or sets the Axis R value for a cylindrical coordinate system.

```csharp
CoordinateType CylindricalAxisR { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

The following example demonstrates how to use the <code>CylindricalAxisR</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.CurrentCoordinateSystemType = GeneralMarkerType.CYLINDRICAL;
csys.CylindricalAxisR = CoordinateType.Y;</code></pre>

#### Remarks

This property allows you to set the Axis R value for a cylindrical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis R".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisZ"></a> CylindricalAxisZ

Gets or sets the Axis Z value for a cylindrical coordinate system.

```csharp
CoordinateType CylindricalAxisZ { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

The following example demonstrates how to use the <code>CylindricalAxisZ</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.CurrentCoordinateSystemType = GeneralMarkerType.CYLINDRICAL;
csys.CylindricalAxisZ = CoordinateType.Y;</code></pre>

#### Remarks

This property allows you to set the Axis Z value for a cylindrical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.CYLINDRICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis Z".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_FullName"></a> FullName

Gets or sets the full name of the coordinate system.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.FullName = "CSYS1";</code></pre>

#### Remarks

Use this property to specify or retrieve the full name of the coordinate system.

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisible"></a> IsVisible

Gets or sets a value indicating whether the marker is visible.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisible</code> property for a marker:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisible = True;</code></pre>

#### Remarks

This property determines whether the marker is visible.
In the UI, this property is represented under the "Marker" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisibleLabel"></a> IsVisibleLabel

Gets or sets a value indicating whether the label is visible.

```csharp
bool IsVisibleLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisible</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisibleLabel = True;</code></pre>

#### Remarks

This property determines whether the label is visible.
In the UI, this property is represented under the "Label" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisibleLabelBackground"></a> IsVisibleLabelBackground

Gets or sets a value indicating whether the background color of the label is visible.

```csharp
bool IsVisibleLabelBackground { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisibleLabelBackground</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisibleLabel = True;
csys.IsVisibleLabelBackground = False</code></pre>

#### Remarks

This property determines whether the background color of the label is visible. It only works when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisible" data-throw-if-not-resolved="false"></xref> property is set to <code>true</code>.
In the UI, this property is represented under the "Label" category with the property name "Background Visibility".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisibleTrajectory"></a> IsVisibleTrajectory

Gets or sets a value indicating whether the trajectory is visible.

```csharp
bool IsVisibleTrajectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisibleTrajectory</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisibleTrajectory = True</code></pre>

#### Remarks

This property determines whether the trajectory is visible and subsequently whether the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TrajectoryColor" data-throw-if-not-resolved="false"></xref> property is applied.
In the UI, this property is represented under the "Trajectory" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_LabelBackGroundColor"></a> LabelBackGroundColor

Gets or sets the background color of the label.

```csharp
Color LabelBackGroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelBackGroundColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisibleLabel = True;
csys.LabelBackGroundColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the background color of the label. The background color is only displayed when both the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground" data-throw-if-not-resolved="false"></xref> properties are set to <code>true</code>.
In the UI, this property is represented under the "Label" category with the property name "Background Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_LabelTextColor"></a> LabelTextColor

Gets or sets the font color of the label.

```csharp
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelTextColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.IsVisibleLabel = True;
csys.LabelTextColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the font color of the label.
In the UI, this property is represented under the "Label" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_MarkerSize"></a> MarkerSize

Gets or sets the size of the marker.

```csharp
double MarkerSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>MarkerSize</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.MarkerSize = "20";</code></pre>

#### Remarks

This property allows you to set the size of the marker.

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_ParentInfo"></a> ParentInfo

Gets or sets the parent information of the coordinate system.

```csharp
string ParentInfo { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>ParentInfo</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.ParentInfo = "Rigid"</code></pre>

#### Remarks

Use this property to specify or retrieve the information about the parent that contains the coordinate system.

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis1"></a> SphericalAxis1

Gets or sets the Axis ρ value for a spherical coordinate system.

```csharp
CoordinateType SphericalAxis1 { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

The following example demonstrates how to use the <code>SphericalAxis1</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.CurrentCoordinateSystemType = GeneralMarkerType.SPHERICAL;
csys.SphericalAxis1 = CoordinateType.Y;</code></pre>

#### Remarks

This property allows you to set the Axis ρ value for a spherical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis ρ".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref>None</li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref>Each Part</li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref>Whole</li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis2"></a> SphericalAxis2

Gets or sets the Axis Ø value for a spherical coordinate system.

```csharp
CoordinateType SphericalAxis2 { get; set; }
```

#### Property Value

 CoordinateType

#### Examples

The following example demonstrates how to use the <code>SphericalAxis1</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.CurrentCoordinateSystemType = GeneralMarkerType.SPHERICAL;
csys.SphericalAxis2 = CoordinateType.Y;</code></pre>

#### Remarks

This property allows you to set the Axis Ø value for a spherical coordinate system. It is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType" data-throw-if-not-resolved="false"></xref> property is set to <xref href="VM.Models.Post.GeneralMarkerType.SPHERICAL" data-throw-if-not-resolved="false"></xref>.
In the UI, this property is represented under the "Transformation Information" category with the property name "Axis Ø".
The available options are:
<ul><li><xref href="VM.Models.Post.CoordinateType.X" data-throw-if-not-resolved="false"></xref>None</li><li><xref href="VM.Models.Post.CoordinateType.Y" data-throw-if-not-resolved="false"></xref>Each Part</li><li><xref href="VM.Models.Post.CoordinateType.Z" data-throw-if-not-resolved="false"></xref>Whole</li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TrajectoryColor"></a> TrajectoryColor

Gets or sets the trajectory color of the marker.

```csharp
Color TrajectoryColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>TrajectoryColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.TrajectoryColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the trajectory color of the marker. 
The trajectory color is only displayed when the <xref href="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory" data-throw-if-not-resolved="false"></xref> property is set to <code>true</code>.
In the UI, this property is represented under the "Trajectory" category with the property name "Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetAngle"></a> TransformationOffsetAngle

Gets or sets the offset angle vector relative to the reference orientation.

```csharp
Vector TransformationOffsetAngle { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>Orientation</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.TransformationOffsetAngle = Vector(1, 0, 0)</code></pre>

#### Remarks

This property adjusts the orientation by applying the specified angular offset to the reference orientation.
The offset can be applied using either the <xref href="VM.Models.Post.RotationTypes.EulerAngle" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Models.Post.RotationTypes.FixedAngle" data-throw-if-not-resolved="false"></xref> options,
which affect how the offset is calculated. Additionally, the offset is influenced by the chosen rotation type and rotation axis, resulting in different transformations based on these parameters.

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetPosition"></a> TransformationOffsetPosition

Gets or sets the offset position vector relative to a specified reference position.

```csharp
Vector TransformationOffsetPosition { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>Position</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
csys = animationView.CreateCoordinateSystem("CSYS");
csys.TransformationOffsetPosition = Vector(0,10,0);</code></pre>

#### Remarks

This property adjusts the position by applying the specified offset to the reference position, known as "Position." The offset is defined as a vector and can be used to translate the position in 3D space.

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationAxis"></a> TransformationOffsetRotationAxis

Gets or sets the rotation axis used for applying rotational transformations.

```csharp
RotationAxes TransformationOffsetRotationAxis { get; set; }
```

#### Property Value

 RotationAxes

#### Remarks

This property defines the axis around which rotational transformations are applied.
It allows you to specify whether the rotation should occur around the X, Y, or Z axis, or a combination of these axes,
depending on the requirements of the transformation.
The available options are:
<ul><li><xref href="VM.RotationAxes.XYX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XYZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XZX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.XZY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YXY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YXZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YZX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.YZY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZXY" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZXZ" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZYX" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.RotationAxes.ZYZ" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationType"></a> TransformationOffsetRotationType

Gets or sets the type of rotation used for applying rotational transformations.

```csharp
RotationTypes TransformationOffsetRotationType { get; set; }
```

#### Property Value

 RotationTypes

#### Remarks

This property determines how rotational transformations are applied by specifying the type of rotation.
It allows you to choose between different rotation types, such as Euler angles or fixed angles, depending on the requirements of the transformation process.
The available options are:
<ul><li><xref href="VM.Models.Post.RotationTypes.EulerAngle" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.RotationTypes.FixedAngle" data-throw-if-not-resolved="false"></xref></li></ul>

