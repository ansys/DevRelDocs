# <a id="VM_Models_Post_ChartMathLib_DataPeakToPeak"></a> Class DataPeakToPeak

Namespace: [VM.Models.Post.ChartMathLib](VM.Models.Post.ChartMathLib.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class DataPeakToPeak
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataPeakToPeak](VM.Models.Post.ChartMathLib.DataPeakToPeak.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_ChartMathLib_DataPeakToPeak_Data_PeakToPeck_Curve_System_Double____System_Double____System_Int32_System_Double____System_Double____"></a> Data\_PeakToPeck\_Curve\(ref double\[\], ref double\[\], int, ref double\[\], ref double\[\]\)

```csharp
public static void Data_PeakToPeck_Curve(ref double[] oriXVal, ref double[] oriYVal, int slice, ref double[] newXVal, ref double[] newYVal)
```

#### Parameters

`oriXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`oriYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`slice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`newXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`newYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ChartMathLib_DataPeakToPeak_GetRangeSeries_System_Double___System_Double___System_Double_System_Double_System_Double____System_Double____"></a> GetRangeSeries\(double\[\], double\[\], double, double, ref double\[\], ref double\[\]\)

```csharp
public static void GetRangeSeries(double[] x, double[] y, double dStart, double dEnd, ref double[] newX, ref double[] newY)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStart` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dEnd` [double](https://learn.microsoft.com/dotnet/api/system.double)

`newX` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`newY` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ChartMathLib_DataPeakToPeak_SetFFTXML_System_Double____System_Double____VM_Models_Post_FFTType_System_Int32_VM_Models_Post_ScaleType_System_String_System_Double___System_Double___"></a> SetFFTXML\(ref double\[\], ref double\[\], FFTType, int, ScaleType, string, double\[\], double\[\]\)

```csharp
public static bool SetFFTXML(ref double[] newXList, ref double[] newYList, FFTType fftType, int userPointCount, ScaleType scaleType, string windowStr, double[] orgX, double[] orgY)
```

#### Parameters

`newXList` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`newYList` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`fftType` [FFTType](VM.Models.Post.FFTType.md)

`userPointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`scaleType` [ScaleType](VM.Models.Post.ScaleType.md)

`windowStr` [string](https://learn.microsoft.com/dotnet/api/system.string)

`orgX` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`orgY` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

