# Interface IOperationsLineDataSeriesViewModelBase
<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the line data series.

```csharp
public interface IOperationsLineDataSeriesViewModelBase : ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty
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
IThicknessProperty

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsLineDataSeriesViewModelBase.py
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chartView = page.CreateChart("Chart")

# Documentation Example
# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
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
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Color"></a> Color

Gets or sets the color of the line in the series.

```csharp
Color Color { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the color of the line in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_LineStyle"></a> LineStyle

Gets or sets the style of the line.

```csharp
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the style of the line.
The available options are:
<ul><li><xref href="VM.Models.Post.LineStyleType.Solid" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dash" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDotDot" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointSize"></a> PointSize

Gets or sets the size of the points in the series.

```csharp
double PointSize { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the size of the points in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointType"></a> PointType

Gets or sets the type of the points in the series.

```csharp
PointType PointType { get; set; }
```

#### Property Value

 PointType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the type of the points in the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.PointType.Square" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Triangle" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Ellipse" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesName"></a> SeriesName

Gets or sets the name of the series.

```csharp
string SeriesName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the name of the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesType"></a> SeriesType

Gets or sets the type of the series.

```csharp
SeriesType SeriesType { get; set; }
```

#### Property Value

 SeriesType

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the type of the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.SeriesType.Line" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Bar" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Point" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn100" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Thickness"></a> Thickness

Gets or sets the thickness of the series.

```csharp
int Thickness { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the thickness of the series.

