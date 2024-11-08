#  Interface IOperationsLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the line data series.

```csharp
public interface IOperationsLineDataSeriesViewModel : IOperationsLineDataSeriesViewModelBase, ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty, IOperationsBase
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
IThicknessProperty, 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceX"></a> SourceX

Gets or sets the source X instance of the series.

```csharp
ILineDataSeriesAxisViewModel SourceX { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

#### Examples

The following example demonstrates how to use the <code>SourceX</code> property:
<pre><code class="lang-csharp">filepath = "result file path";
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
curves.SourceX = curve.CreateLineDataSeries(filepath,r'GContact_01',r'GContact_01',r'None', r'Force on Action Marker',r'Y',r'Inertia');</code></pre>

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

The following example demonstrates how to use the <code>SourceY</code> property:
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
curves[0].SourceY = curve[0].CreateLineDataSeries(filepath,r'GContact_01',r'GContact_01',r'None', r'Force on Action Marker',r'Y',r'Inertia');</code></pre>

#### Remarks

Use this property to specify or retrieve the source Y instance of the series.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string, string, string\)

Creates information of Axis for data series. It is used for modifying information of axis for data series.

```csharp
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string parent, string fullTarget, string subTarget, string characteristic, string component, string csys)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to access.

`parent` [string](https://learn.microsoft.com/dotnet/api/system.string)

The parent entity. If the entity does not have a parent, it should be <xref href="System.String.Empty" data-throw-if-not-resolved="false"></xref>.

`fullTarget` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the target entity.

`subTarget` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the child item such as node, element, or marker. If there is no child item, it should be <xref href="System.String.Empty" data-throw-if-not-resolved="false"></xref>.

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the characteristic.

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component.

`csys` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the coordinate system.

#### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel" data-throw-if-not-resolved="false"></xref> representing the created axis information for the data series.

#### Examples

The following example demonstrates how to use the <code>CreateLineDataSeries</code> method:
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
curves.SourceY = curve.CreateLineDataSeries(filepath,r'GContact_01',r'GContact_01',r'None', r'Force on Action Marker',r'Y',r'Inertia');</code></pre>

#### Remarks

This method creates axis information for a data series, allowing for the modification of axis information for the data series.

