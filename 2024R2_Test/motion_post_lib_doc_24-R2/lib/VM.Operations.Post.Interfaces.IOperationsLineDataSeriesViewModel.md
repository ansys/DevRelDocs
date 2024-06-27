# Interface IOperationsLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

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

### PlotDataType

Get or Set the data type of plot. It has DEFAULT, PlotResult.

```csharp
PlotDataType PlotDataType { get; set; }
```

#### Property Value

 PlotDataType

### SourceX

Get or Set the instance of series.

```csharp
ILineDataSeriesAxisViewModel SourceX { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

### SourceY

Get or Set the instance of series.

```csharp
ILineDataSeriesAxisViewModel SourceY { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

## Methods

### CreateLineDataSeries\(string, string, string, string, string, string, string\)

Create information of Axis for data series. It is used for modifying information of axis for data series.

```csharp
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string parent, string fullTarget, string subTarget, string characteristic, string component, string csys)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of result to access.

`parent` [string](https://learn.microsoft.com/dotnet/api/system.string)

If entity does not have parent, It should be string.Empty.

`fullTarget` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the target entity

`subTarget` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of child item such as node, element, marker or not It should be string.Empty.

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the characteristic.

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component.

`csys` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the coordinatesystem.

#### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

The instance of the curve


