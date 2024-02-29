# <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel"></a> Interface IOperationsLineDataSeriesViewModel

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

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_PlotDataType"></a> PlotDataType

Get or Set the data type of plot. It has DEFAULT, PlotResult.

```csharp
PlotDataType PlotDataType { get; set; }
```

#### Property Value

 PlotDataType

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceX"></a> SourceX

Get or Set the instance of series.

```csharp
ILineDataSeriesAxisViewModel SourceX { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceY"></a> SourceY

Get or Set the instance of series.

```csharp
ILineDataSeriesAxisViewModel SourceY { get; set; }
```

#### Property Value

 ILineDataSeriesAxisViewModel

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string, string, string\)

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

