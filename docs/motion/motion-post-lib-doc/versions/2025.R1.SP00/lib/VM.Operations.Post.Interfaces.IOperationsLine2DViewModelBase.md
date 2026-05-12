#  Interface IOperationsLine2DViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the base interface for properties and methods that make up a 2D chart view.

```csharp
public interface IOperationsLine2DViewModelBase : IView, IOperationsBase
```

#### Implements

[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Background"></a> Background

Gets or sets the background color of the chart view.

```csharp
Color Background { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>Background</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.Background = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the background color of the chart view.
In the UI, this property is represented under the "Color" category with the property name "Back Ground".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_BorderColor"></a> BorderColor

Gets or sets the border color of the chart view.

```csharp
Color BorderColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>BorderColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.BorderColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the border color of the chart view.
In the UI, this property is represented under the "Color" category with the property name "Border Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartAxisType"></a> ChartAxisType

Gets or sets the axis type of the chart, indicating whether to display the chart's axis as single or multiple.

```csharp
ChartAxisType ChartAxisType { get; set; }
```

#### Property Value

 ChartAxisType

#### Examples

The following example demonstrates how to use the <code>ChartAxisType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.ChartAxisType = ChartAxisType.Single;</code></pre>

#### Remarks

This property allows you to set the axis type of the chart. It indicates whether the chart's axis is displayed as single or multiple.
In the UI, this property is represented under the "Axis" category with the property name "Axis Type".
The available options are:
<ul><li><xref href="VM.Models.Post.ChartAxisType.Single" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ChartAxisType.Multiple" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartTitle"></a> ChartTitle

Gets or sets the title of the chart view.

```csharp
string ChartTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>ChartTitle</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.ChartTitle = "Chart";</code></pre>

#### Remarks

This property allows you to set the title of the chart view.
In the UI, this property is represented under the "Chart" category with the property name "Title".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontColor"></a> FontColor

Gets or sets the font color of the chart view's title.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>FontColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the font color of the chart view's title.
In the UI, this property is represented under the "Chart" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontFace"></a> FontFace

Gets or sets the font face of the chart title.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

#### Examples

The following example demonstrates how to use the <code>FontFace</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontFace = FontFamily("Arial");</code></pre>

#### Remarks

This property allows you to set the font face of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Face".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontSize"></a> FontSize

Gets or sets the font size of the chart title.

```csharp
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>FontSize</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontSize = 12;</code></pre>

#### Remarks

This property allows you to set the font size of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontStyle"></a> FontStyle

Gets or sets the font style of the chart title.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

The following example demonstrates how to use the <code>FontStyle</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontStyle = FontStyles.Italic;</code></pre>

#### Remarks

This property allows you to set the font style of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Style".
The supported types are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontWeight"></a> FontWeight

Gets or sets the font weight of the chart title.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

The following example demonstrates how to use the <code>FontWeight</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontWeight = FontWeights.Normal;</code></pre>

#### Remarks

This property allows you to set the font weight of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Weight".
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a> AddCurves\(string, PlotParameters\)

Adds curves to the chart by reading data from the specified file path and using the given plot parameters.

```csharp
IOperationsLineDataSeriesViewModelBase[] AddCurves(string filepath, PlotParameters parameters)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the file containing the curve data.

`parameters` PlotParameters

The parameters used for plotting the curves, including target entity, data paths, coordinate system, and plot data type.
<ul><li><xref href="VM.Models.OutputReader.PlotParameters.Target" data-throw-if-not-resolved="false"></xref> - The target entity for plotting the curves.</li><li><xref href="VM.Models.OutputReader.PlotParameters.PlotDataType" data-throw-if-not-resolved="false"></xref> - Default or Plot Data.</li><li><xref href="VM.Models.OutputReader.PlotParameters.Paths" data-throw-if-not-resolved="false"></xref> - An Paths representing the paths to the data to be read. This is a combination of characteristic and component.</li><li><xref href="VM.Models.OutputReader.PlotParameters.CSYS" data-throw-if-not-resolved="false"></xref> - The coordinate system to be used.</li></ul>

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the added curves.

#### Examples

The following example demonstrates how to use the <code>AddCurves</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);</code></pre>

#### Remarks

This method reads data from the specified file path and adds curves to the chart using the provided plot parameters.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path where the curves will be saved.

#### Examples

The following example demonstrates how to use the <code>ExportAllCurves</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
chart.ExportAllCurves(r"D:\exportaAllCurves.txt");</code></pre>

#### Remarks

This method exports all data series contained in the chart without displaying a file save dialog. 
It accepts a file path as a parameter and saves the curves directly to that location. 
This method is recommended for use with the OperationAPI, especially for repetitive tasks or scenarios 
requiring automation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports all data series included in the chart.

```csharp
void ExportAllDataSeries()
```

#### Examples

The following example demonstrates how to use the <code>ExportAllDataSeries</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
chart.ExportAllDataSeries();</code></pre>

#### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, it is recommended to use the <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves(System.String)" data-throw-if-not-resolved="false"></xref> method, 
which does not display a file save dialog.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetAxis_System_String_"></a> GetAxis\(string\)

Retrieves an axis by its name.

```csharp
IOperationsAxisViewModelBase GetAxis(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the axis to be retrieved.

#### Returns

 [IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase" data-throw-if-not-resolved="false"></xref> representing the axis with the specified name,
or <code>null</code> if no such axis exists.

#### Examples

The following example demonstrates how to use the <code>GetAxis</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");</code></pre>

#### Remarks

This method searches for an axis with the given name and returns the corresponding instance.
If no axis with the specified name is found, the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurve_System_String_"></a> GetCurve\(string\)

Gets a curve from the chart by its name.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve to retrieve.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the curve with the specified name, or <code>null</code> if no such curve exists.

#### Examples

The following example demonstrates how to use the <code>GetCurve</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
curve = chart.GetCurve(curves[0].SeriesName)</code></pre>

#### Remarks

This method searches for and returns the curve with the given name from the chart. If no curve with the specified name is found, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveByID_System_String_"></a> GetCurveByID\(string\)

Gets a curve from the chart by its ID.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurveByID(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the curve to retrieve.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the curve with the specified ID, or <code>null</code> if no such curve exists.

#### Examples

The following example demonstrates how to use the <code>GetCurveByID</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
curve = chart.GetCurveByID(curves[0].ID)</code></pre>

#### Remarks

This method searches for and returns the curve with the given ID from the chart. If no curve with the specified ID is found, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveNameList"></a> GetCurveNameList\(\)

Gets a list of names of all curves in the chart view.

```csharp
IEnumerable<string> GetCurveNameList()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> containing the names of all curves currently in the chart view.

#### Examples

The following example demonstrates how to use the <code>GetCurveNameList</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
nameList = chart.GetCurveNameList();</code></pre>

#### Remarks

This method retrieves the names of all the curves that are currently displayed in the chart view.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a> GetCurves\(\)

Gets all the curves currently included in the chart view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> containing all the curves currently in the chart view.

#### Examples

The following example demonstrates how to use the <code>GetCurves</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
curvelist = chart.GetCurves();</code></pre>

#### Remarks

This method retrieves all the curves that are currently displayed in the chart view.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves_System_String_"></a> GetCurves\(string\)

Gets all curves from the chart view that contain the specified substring in their names.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

A substring to search for within the curve names.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

An <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> containing all curves that include the specified substring in their names.

#### Examples

The following example demonstrates how to use the <code>GetCurves</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
findCurves = chart.GetCurves("Magnitude");</code></pre>

#### Remarks

This method searches for and returns all curves whose names contain the specified substring.
If no such curves are found, an empty collection is returned.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetLastCurve"></a> GetLastCurve\(\)

Gets the most recently added curve from the chart view.

```csharp
IOperationsLineDataSeriesViewModelBase GetLastCurve()
```

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the last added curve, or <code>null</code> if no curves are present.

#### Examples

The following example demonstrates how to use the <code>GetLastCurve</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
lastCurve = chart.GetLastCurve();</code></pre>

#### Remarks

This method retrieves the curve that was added last to the chart view. If no curves have been added, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(string, List<INumericParameter\>\)

Imports curve data from an external file and adds the curves to the chart view.

```csharp
void ImportNumeric(string filepath, List<INumericParameter> targets)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the file containing the exported curves.

`targets` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<INumericParameter\>

A list of <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> objects that specify the parameters for the curves to be created.

#### Examples

The following example demonstrates how to use the <code>ImportNumeric</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str]();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
chart.ExportAllCurves(r"D:\exportaAllCurves.txt");
parameters = List[INumericParameter](2);
parameter = NumericParameter();
parameter.Name = r'Curve2 : X(Hz)';
parameter.TargetX = r'X(sec)';
parameter.TargetY = r'Y(Hz)';
parameters.Add(parameter);
chart.ImportNumeric(r"D:\exportaAllCurves.txt", parameters);</code></pre>

#### Remarks

This method reads curve data from the specified file and adds the corresponding curves to the chart view.
Each <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">targets</code> list contains the following properties:
<ul><li><span class="term">Name</span>The name of the curve to be created.</li><li><span class="term">TargetX</span>The path to the data for the X-axis.</li><li><span class="term">TargetY</span>The path to the data for the Y-axis.</li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_System_String_"></a> Remove\(string\)

Removes a curve from the chart by its name.

```csharp
void Remove(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The id of the curve to be removed.

#### Examples

The following example demonstrates how to use the <code>Remove</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
chart.Remove(curves[0].ID)</code></pre>

#### Remarks

This method deletes the curve with the specified name from the chart. If no curve with the given name exists, no action is taken.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_"></a> Remove\(IOperationsLineDataSeriesViewModelBase\)

Removes a curve from the chart by its instance.

```csharp
void Remove(IOperationsLineDataSeriesViewModelBase curve)
```

#### Parameters

`curve` [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve to be removed.

#### Examples

The following example demonstrates how to use the <code>Remove</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
chart.Remove(curves[0])</code></pre>

#### Remarks

This method deletes the specified curve instance from the chart. If the provided curve instance does not exist in the chart, no action is taken.

