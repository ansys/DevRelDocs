#  Interface IOperationsAnimation

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface for Animation View related operations.

```csharp
public interface IOperationsAnimation : IView, IOperationsBase
```

#### Implements

[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_AnalysisResultType"></a> AnalysisResultType

Gets the type of analysis result for the currently created animation view.

```csharp
AnalysisResultType AnalysisResultType { get; }
```

#### Property Value

 AnalysisResultType

#### Examples

The following example demonstrates how to use the <code>AnalysisResultType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");</code></pre>

#### Remarks

The AnalysisResultType property is used to determine the type of analysis result associated with the currently created animation view.This type is one of several analysis types generated from the overall result.
The available options are:
<ul><li><xref href="VM.Models.AnalysisResultType.Dynamics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Eigenvalue" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Initial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.LinearStatics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Statics" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Thermal" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.ModeContribution" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.AnalysisResultType.Nothing" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_BottomColor"></a> BottomColor

Gets or sets the bottom color of the view's background.

```csharp
Color BottomColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>BottomColor</code> property:
<pre><code class="lang-csharp">import clr;
clr.AddReference("PresentationCore");
clr.AddReference("System");
clr.AddReference("System.Collections");

filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.BottomColor = Colors.Red;</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation.BottomColor" data-throw-if-not-resolved="false"></xref> property allows you to set the bottom color of the view's background.
In the UI, this property is represented under the "Background" category with the property name "Bottom Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_DocumentFilePath"></a> DocumentFilePath

Gets the file path that contains the information of the simulation results.

```csharp
string DocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>DocumentFilePath</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
print(animationView.DocumentFilePath);</code></pre>

#### Remarks

Use this property to retrieve the location of the file containing the simulation results. 
The file path is read-only and is determined by the simulation process.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleLogo"></a> IsVisibleLogo

Gets or sets a value indicating whether the logo is visible.

```csharp
bool IsVisibleLogo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisibleLogo</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.IsVisibleLogo = False;</code></pre>

#### Remarks

This flag determines whether the logo is shown or hidden. 
In the UI, this property is represented under the "Logo" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleNavigationCube"></a> IsVisibleNavigationCube

Gets or sets a value indicating whether the navigation cube is visible.

```csharp
bool IsVisibleNavigationCube { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisibleNavigationCube</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.IsVisibleNavigationCube = False;</code></pre>

#### Remarks

This flag determines whether the navigation cube is shown or hidden. 
In the UI, this property is represented under the "Navigation Cube" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleStateInfo"></a> IsVisibleStateInfo

Gets or sets a value indicating whether the state information is visible.

```csharp
bool IsVisibleStateInfo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisibleStateInfo</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.IsVisibleStateInfo = False;</code></pre>

#### Remarks

This flag determines whether the state information is shown or hidden. 
In the UI, this property is represented under the "StateInfo" category with the property name "Visible".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoHeight"></a> LogoHeight

Gets or sets the height of the logo image.

```csharp
uint LogoHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Examples

The following example demonstrates how to use the <code>LogoHeight</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.LogoHeight = 16;</code></pre>

#### Remarks

This property allows you to set the height of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "Height".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPath"></a> LogoPath

Gets or sets the file path of the logo image.

```csharp
string LogoPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>LogoPath</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.LogoPath = "/path/to/logo.png";</code></pre>

#### Remarks

This property allows you to set the file path of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "File Path".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPosition"></a> LogoPosition

Gets or sets the position of the logo.

```csharp
Layout LogoPosition { get; set; }
```

#### Property Value

 Layout

#### Examples

The following example demonstrates how to use the <code>LogoPosition</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.LogoPosition = Layout.TOP_RIGHT;</code></pre>

#### Remarks

This property allows you to set the position of the logo. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Logo" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoWidth"></a> LogoWidth

Gets or sets the width of the logo image.

```csharp
uint LogoWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Examples

The following example demonstrates how to use the <code>LogoWidth</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.LogoWidth = 32;</code></pre>

#### Remarks

This property allows you to set the width of the logo image.
In the UI, this property is represented under the "Logo" category with the property name "Width".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_NavigationCubePosition"></a> NavigationCubePosition

Gets or sets the position of the navigation cube.

```csharp
Layout NavigationCubePosition { get; set; }
```

#### Property Value

 Layout

#### Examples

The following example demonstrates how to use the <code>NavigationCubePosition</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.NavigationCubePosition = Layout.TOP_LEFT;</code></pre>

#### Remarks

This property allows you to set the position of the navigation cube. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Navigation Cube" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Opacity"></a> Opacity

Gets or sets the opacity of the logo.

```csharp
double Opacity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Opacity</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.Opacity = 100;</code></pre>

#### Remarks

This property allows you to set the opacity of the logo. Only values between 0 and 100 are valid.
In the UI, this property is represented under the "Logo" category with the property name "Transparency".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StateInfoPosition"></a> StateInfoPosition

Gets or sets the position of the state information.

```csharp
Layout StateInfoPosition { get; set; }
```

#### Property Value

 Layout

#### Examples

The following example demonstrates how to use the <code>StateInfoPosition</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.StateInfoPosition = Layout.TOP_LEFT;</code></pre>

#### Remarks

This property allows you to set the position of the state information. The available options are:
<ul><li><xref href="VM.Models.Post.Layout.TOP_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.TOP_RIGHT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_LEFT" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.Layout.BOTTOM_RIGHT" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "StateInfo" category with the property name "Layout".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TextColorStateInfo"></a> TextColorStateInfo

Gets or sets the font color of the state information.

```csharp
Color TextColorStateInfo { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>TextColorStateInfo</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.TextColorStateInfo = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the font color of the state information.
In the UI, this property is represented under the "StateInfo" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TopColor"></a> TopColor

Gets or sets the top color of the view's background.

```csharp
Color TopColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>TopColor</code> property:
<pre><code class="lang-csharp">import clr;
clr.AddReference("PresentationCore");
clr.AddReference("System");
clr.AddReference("System.Collections");
filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.TopColor = Colors.Red;</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation.TopColor" data-throw-if-not-resolved="false"></xref> property allows you to set the top color of the view's background.
In the UI, this property is represented under the "Background" category with the property name "Top Color".

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate system for analyzing a position on a body.

```csharp
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

The following example demonstrates how to use the <code>CreateCoordinateSystem</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationView.CreateCoordinateSystem("CSYS");</code></pre>

#### Remarks

This method creates a coordinate system with the specified name and assigns it to the given parent entity.
If the parent entity is not specified, the coordinate system is assigned to the default ground entity.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateSoundPressure_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Int32_System_Int32_System_Boolean_"></a> CreateSoundPressure\(IList<string\>, IList<string\>, double, double, double, double, double, double, int, int, bool\)

Creates sound pressure data based on the Rayleigh Integral for analyzing sound pressure generated by vibrations on the system surface.

```csharp
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

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> representing the sound pressure data series.

#### Examples

The following example demonstrates how to use the <code>CreateSoundPressure</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
animationview.CreateCoordinateSystem("Microphone", "Ground")
microphone = animationview.GetViewModelByName("Microphone")
microphone.Position = "0, 250, 0"
bodynames = List[str] (1)
bodynames.Add(r'Housing_01/FE_Housing')
microphoneNames = List[str] (1)
microphoneNames.Add(r'Microphone')
animationView.CreateSoundPressure(bodynames, microphoneNames, 10.0, 100.0, 3.0, 1.21E-09, 343000.0, 2000.0, 1, 100, False);</code></pre>

#### Remarks

This method uses the Rayleigh Integral to analyze the sound pressure generated by the vibrations on the system surface.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewModelByName_System_String_"></a> GetViewModelByName\(string\)

Retrieves an instance of an entity based on the provided name.

```csharp
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

The following example demonstrates how to use the <code>GetViewModelByName</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
rigidBody = animationview.GetViewModelByName("Rigid")</code></pre>

#### Remarks

This method searches for an entity with the given name and returns the corresponding instance. 
If no entity with the specified name is found, the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewSpecs"></a> GetViewSpecs\(\)

Retrieves an array of view specifications corresponding to the number of loaded animation frames.

```csharp
IViewSpec[] GetViewSpecs()
```

#### Returns

 [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IViewSpec" data-throw-if-not-resolved="false"></xref> instances that represent the positions of the animation camera for each frame,
or <code>null</code> if no frames are loaded.

#### Examples

The following example demonstrates how to use the <code>GetViewSpecs</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
dynamic_analysis.LoadAnimationFrames(50)
viewSpecs = animationview.GetViewSpecs()</code></pre>

#### Remarks

This method returns an array where each element corresponds to a specific frame in the loaded animation,
allowing for the configuration of the animation camera's position for each frame. If no frames are loaded,
the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_PlayAnimation"></a> PlayAnimation\(\)

Plays the loaded animation frames.

```csharp
void PlayAnimation()
```

#### Examples

The following example demonstrates how to use the <code>PlayAnimation</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
dynamic_analysis.LoadAnimationFrames(50)
animationview.PlayAnimation()</code></pre>

#### Remarks

This method starts the playback of the animation frames that have been loaded. If no frames are loaded, 
the method should handle this scenario appropriately, such as by displaying an error message or logging the issue.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RecordingAnimation_System_String_VM_Models_Post_RecordingType_VM_Models_Post_RecordingRangeType_System_Int32_VM_Operations_Post_Interfaces_IViewSpec___"></a> RecordingAnimation\(string, RecordingType, RecordingRangeType, int, IViewSpec\[\]\)

Records the loaded animation frames to a file.

```csharp
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

The following example demonstrates how to use the <code>RecordingAnimation</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
dynamic_analysis.LoadAnimationFrames(50)
viewSpecs = animationview.GetViewSpecs()
animationview.RecordingAnimation(r'D:\Test', RecordingType.MP4, RecordingRangeType.ActiveGroup, 10, specs)</code></pre>

#### Remarks

This method records the loaded animation frames to a specified file format. 
It supports different recording types and range options. The frame rate can be adjusted, 
and custom camera positions for each frame can be set through the <code class="paramref">viewSpecs</code> parameter.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetViewSpec_VM_Operations_Post_Interfaces_IViewSpec_"></a> SetViewSpec\(IViewSpec\)

Updates the camera information for the current animation frame position.

```csharp
void SetViewSpec(IViewSpec viewSpec)
```

#### Parameters

`viewSpec` [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)

The <xref href="VM.Operations.Post.Interfaces.IViewSpec" data-throw-if-not-resolved="false"></xref> instance containing the new camera information.

#### Examples

The following example demonstrates how to use the <code>SetViewSpec</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
dynamic_analysis.LoadAnimationFrames(50)
viewSpec = ViewSpec()
viewSpec.Eye = Vector(10,20,30);
viewSpec.Target = Vector(5, 10, 15);
viewSpec.UpVector = Vector(1, 0, 0);
animationview.SetViewSpec(viewSpec)</code></pre>

#### Remarks

This method updates the camera information for the current position in the animation frames using the provided <code class="paramref">viewSpec</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StopAnimation"></a> StopAnimation\(\)

Stops the currently playing animation.

```csharp
void StopAnimation()
```

#### Examples

The following example demonstrates how to use the <code>StopAnimation</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
animationView = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
dynamic_analysis.LoadAnimationFrames(50)
animationview.PlayAnimation()
animationview.StopAnimation()</code></pre>

#### Remarks

This method stops the playback of the animation frames that are currently playing. If no animation is currently playing,
the method should handle this scenario appropriately, such as by displaying an error message or logging the issue.

