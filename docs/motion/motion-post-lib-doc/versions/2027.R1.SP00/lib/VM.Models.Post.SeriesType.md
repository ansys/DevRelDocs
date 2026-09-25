# Enum SeriesType
<a id="VM_Models_Post_SeriesType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects how a curve is drawn on a 2D chart through [`SeriesType`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md).

Each value changes the shape used to show the data points, such as a connected line, bars, single points, or stacked columns. When `Point` is selected, the connecting line is hidden so only the point markers appear.

```csharp
public enum SeriesType
```

## Fields

`Bar` 

Draws each data point as a vertical bar.



`Line` 

Draws the curve as a line that connects the data points.



`Point` 

Draws only the point markers and hides the connecting line.



`StackedColumn` 

Draws the curves as bars stacked on top of each other at each X value.



`StackedColumn100` 

Draws the curves as stacked bars scaled so the stack at each X value fills the full height as a percentage.


