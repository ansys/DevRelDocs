# Enum SeriesType
<div align="right"><a href="/lib/VM.Models.Post.SeriesType.md" download="VM.Models.Post.SeriesType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_SeriesType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects how a curve is drawn on a 2D chart through [`SeriesType`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md).

Each value changes the shape used to show the data points, such as a connected line, bars, single points, or stacked columns. When `Point` is selected, the connecting line is hidden so only the point markers appear.

```csharp
public enum SeriesType
```

## Fields

`Bar = 1` 

Draws each data point as a vertical bar.



`Line = 0` 

Draws the curve as a line that connects the data points.



`Point = 2` 

Draws only the point markers and hides the connecting line.



`StackedColumn = 3` 

Draws the curves as bars stacked on top of each other at each X value.



`StackedColumn100 = 4` 

Draws the curves as stacked bars scaled so the stack at each X value fills the full height as a percentage.
