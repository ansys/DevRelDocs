# <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel"></a> Interface IOperationsHeatMapSTFTDataViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapSTFTDataViewModel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_End"></a> End

Get or Set the end time for using FFT on target data series.

```csharp
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_LegendColorType"></a> LegendColorType

Get or Set the type of legend color.
It has NORMAL, NORMAL_INVERTED, BLACK_TO_WHITE
WHITE_TO_BLACK, GREEN_TO_BROWN, WHITE_TO_BROWN, METAL_CASTING
THERMAL_1, THERMAL_2, THERMAL_3

```csharp
ColorSchemeType LegendColorType { get; set; }
```

#### Property Value

 ColorSchemeType

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Overlap"></a> Overlap

Get or Set the value of the percentage for setting overlapped intervals.

```csharp
double Overlap { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ReferenceValue"></a> ReferenceValue

Get or Set the reference value on decibel as the type of the scale.

```csharp
double ReferenceValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SamplingFrequency"></a> SamplingFrequency

Get or Set the value about setting the number of the interval for dividing Y direction grids on color map.

```csharp
int SamplingFrequency { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ScaleFactor"></a> ScaleFactor

Get or Set the scale factor to change from time domain to another domain.

```csharp
double ScaleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedPoints"></a> SelectedPoints

Get or Set the number of data point for FFT.

```csharp
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedScaleType"></a> SelectedScaleType

Get or Set the scale type of STFT. STFT Scale Type has Original, Decibel.

```csharp
STFTScaleType SelectedScaleType { get; set; }
```

#### Property Value

 STFTScaleType

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Start"></a> Start

Get or Set the start time for using FFT on target data series.

```csharp
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_TimeSlice"></a> TimeSlice

Get or Set the value about setting the number of the interval for dividing  X direction grids on color map.

```csharp
double TimeSlice { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ExportOrderTrackingCurve_System_String_"></a> ExportOrderTrackingCurve\(string\)

Export a curve to order tracking.

```csharp
void ExportOrderTrackingCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of curve.

