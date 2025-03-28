# Interface IOperationsLineDataSeriesViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the line data series.

```python
public interface IOperationsLineDataSeriesViewModelBase : ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty, IOperationsBase
```

#### Implements

ILineDataSeriesViewModelBase, 
IHasSourceViewModel, 
IViewModel, 
IObservableObject, 
IDisposableObject, 
IEnabled, 
IExpanded, 
ISelected, 
IVisible, 
IThicknessProperty, 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsLineDataSeriesViewModelBase.py
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

# Get Page
page = applicationHandler.GetActivePage()

# Create PlotView
chartView = page.CreateChart("Chart")

# Documentation Example
# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')

# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Crank"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)
curves[0].SeriesName = "Rigid_Displacement_Magnitude"
curves[0].Thickness = 3
curves[0].Color = Colors.Blue
curves[0].LineStyle = LineStyleType.DashDotDot
curves[0].PointType = PointType.Square
curves[0].PointSize = 10
curves[0].SeriesType = SeriesType.Point

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### Color

Gets or sets the color of the line in the series.

```python
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the color of the line in the series.

### LineStyle

Gets or sets the style of the line.

```python
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the style of the line.
The available options are:
<ul><li><xref href="VM.Models.Post.LineStyleType.Solid" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dash" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDotDot" data-throw-if-not-resolved="false"></xref></li></ul>

### PointSize

Gets or sets the size of the points in the series.

```python
double PointSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the size of the points in the series.

### PointType

Gets or sets the type of the points in the series.

```python
PointType PointType { get; set; }
```

#### Property Value

 PointType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the type of the points in the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.PointType.Square" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Triangle" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Ellipse" data-throw-if-not-resolved="false"></xref></li></ul>

### SeriesName

Gets or sets the name of the series.

```python
string SeriesName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the name of the series.

### SeriesType

Gets or sets the type of the series.

```python
SeriesType SeriesType { get; set; }
```

#### Property Value

 SeriesType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the type of the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.SeriesType.Line" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Bar" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Point" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn100" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn" data-throw-if-not-resolved="false"></xref></li></ul>

### Thickness

Gets or sets the thickness of the series.

```python
int Thickness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](#VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase).

#### Remarks

Use this property to specify or retrieve the thickness of the series.


