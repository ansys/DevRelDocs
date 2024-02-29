# <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase"></a> Interface IOperationsLine2DViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLine2DViewModelBase : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Background"></a> Background

Get or Set the background.

```csharp
Color Background { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_BorderColor"></a> BorderColor

Get or Set the border color​.

```csharp
Color BorderColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartAxisType"></a> ChartAxisType

Get or Set the type of Chart Axis. It has Single, Multiple.

```csharp
ChartAxisType ChartAxisType { get; set; }
```

#### Property Value

 ChartAxisType

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartTitle"></a> ChartTitle

Get or Set the title of the chart​.

```csharp
string ChartTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontColor"></a> FontColor

Get or Set the font color​.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontFace"></a> FontFace

Get or Set font face​.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontSize"></a> FontSize

Get or Set font size​.

```csharp
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontStyle"></a> FontStyle

Get or Set font style.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontWeight"></a> FontWeight

Get or Set font weight.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Export all curves on active view.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

the path of save

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurve_System_String_"></a> GetCurve\(string\)

Get the instance of the curve by the name of curve​.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve​.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve.​

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveNameList"></a> GetCurveNameList\(\)

Get name of the curves on active view.

```csharp
IEnumerable<string> GetCurveNameList()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The names of the curves on active view​.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a> GetCurves\(\)

Get the instances of the curves on active view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instances of the curves.​

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetLastCurve"></a> GetLastCurve\(\)

Get end of the curve on active view.

```csharp
IOperationsLineDataSeriesViewModelBase GetLastCurve()
```

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The last instance of curves.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_System_String_"></a> Remove\(string\)

Remove curve by the name of the curve​.

```csharp
void Remove(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve to remove​.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_"></a> Remove\(IOperationsLineDataSeriesViewModelBase\)

Remove curve by the instance of the curve.

```csharp
void Remove(IOperationsLineDataSeriesViewModelBase curve)
```

#### Parameters

`curve` [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve​.

