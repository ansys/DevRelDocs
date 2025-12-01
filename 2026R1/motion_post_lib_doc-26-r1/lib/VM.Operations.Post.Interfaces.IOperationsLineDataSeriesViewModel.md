# Interface IOperationsLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the line data series.

```csharp
public interface IOperationsLineDataSeriesViewModel : IOperationsLineDataSeriesViewModelBase, ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty
```

#### Implements

[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md), 
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
# IOperationsLineDataSeriesViewModel.py
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
curves[0].SourceX = curves[0].CreateLineDataSeries(result_file_path, r'Crank', r'Displacement',r'Y',r'Inertia')
curves[0].SourceY = curves[0].CreateLineDataSeries(result_file_path, r'Crank', r'Displacement',r'Y',r'Inertia')

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceX"></a> SourceX

Gets or sets the source X instance of the series.

```csharp
ILineDataSeriesAxisViewModel SourceX { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the source X instance of the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceY"></a> SourceY

Gets or sets the source Y instance of the series.

```csharp
ILineDataSeriesAxisViewModel SourceY { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the source Y instance of the series.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string\)

Creates information of Axis for data series. It is used for modifying information of axis for data series.

```csharp
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string fullTarget, string characteristic, string component, string csys)
```

#### Parameters

`filepath` string

The path of the result to access.

`fullTarget` string

The name of the target entity.

`characteristic` string

The name of the characteristic.

`component` string

The name of the component.

`csys` string

The name of the coordinate system.

#### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel" data-throw-if-not-resolved="false"></xref> representing the created axis information for the data series.

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md).

#### Remarks

This method creates axis information for a data series, allowing for the modification of axis information for the data series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string, string, string\)

Creates information of Axis for data series. It is used for modifying information of axis for data series.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged.", true)]
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string parent, string fullTarget, string subTarget, string characteristic, string component, string csys)
```

#### Parameters

`filepath` string

The path of the result to access.

`parent` string

The parent entity. If the entity does not have a parent, it should be <xref href="System.String.Empty" data-throw-if-not-resolved="false"></xref>.

`fullTarget` string

The name of the target entity.

`subTarget` string

The name of the child item such as node, element, or marker. If there is no child item, it should be <xref href="System.String.Empty" data-throw-if-not-resolved="false"></xref>.

`characteristic` string

The name of the characteristic.

`component` string

The name of the component.

`csys` string

The name of the coordinate system.

#### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel" data-throw-if-not-resolved="false"></xref> representing the created axis information for the data series.

#### Examples

For an example that includes this property, see the [Interface IOperationsLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md).

#### Remarks

This method creates axis information for a data series, allowing for the modification of axis information for the data series.

