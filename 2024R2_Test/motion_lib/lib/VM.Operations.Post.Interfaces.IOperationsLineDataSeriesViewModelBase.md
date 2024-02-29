# <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase"></a> Interface IOperationsLineDataSeriesViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
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

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Color"></a> Color

Get or Set the color of line.

```csharp
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_IsRefresh"></a> IsRefresh

Get or Set the flag for refreshing data.

```csharp
bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_LineStyle"></a> LineStyle

Get or Get the style of line. It has Solid, Dot, Dash, DashDot, DashDotDot.

```csharp
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointSize"></a> PointSize

Get or Set the value of point size.

```csharp
double PointSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointType"></a> PointType

Get or Set the type of point.

```csharp
PointType PointType { get; set; }
```

#### Property Value

 PointType

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesName"></a> SeriesName

Get or Set the name of series.

```csharp
string SeriesName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesType"></a> SeriesType

Get or Set the type of line.

```csharp
SeriesType SeriesType { get; set; }
```

#### Property Value

 SeriesType

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_TargetName"></a> TargetName

Get or Set the name of the target.

```csharp
string TargetName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Thickness"></a> Thickness

Get or Set the thickness of series.

```csharp
int Thickness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

