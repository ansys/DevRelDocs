# <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel"></a> Interface IOperationsHeatMapBaseViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapBaseViewModel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsAutoRange"></a> IsAutoRange

Get or Set the flag for auto range.

```csharp
bool IsAutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsRefresh"></a> IsRefresh

Get or Set the flag for refreshing data.

```csharp
bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_LegendFontColor"></a> LegendFontColor

Get or set legend font color.

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_LegendFontSize"></a> LegendFontSize

Get or Set legend font size.

```csharp
double LegendFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Max"></a> Max

Get or Set the value of the maximum.

```csharp
double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Min"></a> Min

Get or Set the value of the minimum.

```csharp
double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Export all curves on active view.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```

