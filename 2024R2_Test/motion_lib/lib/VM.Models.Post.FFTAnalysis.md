# <a id="VM_Models_Post_FFTAnalysis"></a> Class FFTAnalysis

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class FFTAnalysis
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FFTAnalysis](VM.Models.Post.FFTAnalysis.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_FFTAnalysis__ctor"></a> FFTAnalysis\(\)

```csharp
public FFTAnalysis()
```

## Methods

### <a id="VM_Models_Post_FFTAnalysis_FFT_Analyze_Curve_System_Double____System_Double____System_Double____System_Double____System_Double____VM_Models_Post_IFFTParameters_"></a> FFT\_Analyze\_Curve\(ref double\[\], ref double\[\], ref double\[\], ref double\[\], ref double\[\], IFFTParameters\)

```csharp
public void FFT_Analyze_Curve(ref double[] xValues, ref double[] yValues, ref double[] xOutput, ref double[] real, ref double[] image, IFFTParameters parameters)
```

#### Parameters

`xValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`xOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`real` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`image` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`parameters` [IFFTParameters](VM.Models.Post.IFFTParameters.md)

### <a id="VM_Models_Post_FFTAnalysis_FFT_Analyze_Curve_System_Double____System_Double____System_Int32_System_Double____System_Double____System_Double____System_Int32_VM_Models_Post_FFTWindowType_"></a> FFT\_Analyze\_Curve\(ref double\[\], ref double\[\], int, ref double\[\], ref double\[\], ref double\[\], int, FFTWindowType\)

```csharp
public void FFT_Analyze_Curve(ref double[] xValues, ref double[] yValues, int pointCount, ref double[] xOutput, ref double[] real, ref double[] imag, int desiredPointCount, FFTWindowType wintype)
```

#### Parameters

`xValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`real` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`imag` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`desiredPointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`wintype` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

### <a id="VM_Models_Post_FFTAnalysis_FFT_Analyze_Curve_System_Double____System_Double____System_Int32_System_Double____System_Double____System_Int32_VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_"></a> FFT\_Analyze\_Curve\(ref double\[\], ref double\[\], int, ref double\[\], ref double\[\], int, FFTType, FFTWindowType, ScaleType\)

```csharp
public void FFT_Analyze_Curve(ref double[] xValues, ref double[] yValues, int pointCount, ref double[] xOutput, ref double[] yOutput, int desiredPointCount, FFTType ffttype, FFTWindowType wintype, ScaleType scaletype)
```

#### Parameters

`xValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`desiredPointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`ffttype` [FFTType](VM.Models.Post.FFTType.md)

`wintype` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

`scaletype` [ScaleType](VM.Models.Post.ScaleType.md)

