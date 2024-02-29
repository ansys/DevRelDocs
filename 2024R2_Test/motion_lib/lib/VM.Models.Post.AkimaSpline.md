# <a id="VM_Models_Post_AkimaSpline"></a> Class AkimaSpline

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class AkimaSpline
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AkimaSpline](VM.Models.Post.AkimaSpline.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_AkimaSpline__ctor"></a> AkimaSpline\(\)

```csharp
public AkimaSpline()
```

## Methods

### <a id="VM_Models_Post_AkimaSpline_Interpolate_Curve_Using_AKIMA_Method_System_Double____System_Double____System_Int32_System_Int32_System_Double_System_Double_System_Double____System_Double____"></a> Interpolate\_Curve\_Using\_AKIMA\_Method\(ref double\[\], ref double\[\], int, int, double, double, ref double\[\], ref double\[\]\)

```csharp
public InterpolationErrorType Interpolate_Curve_Using_AKIMA_Method(ref double[] xValues, ref double[] yValues, int pointCount, int desiredPointCount, double startPoint, double endPoint, ref double[] xOutput, ref double[] yOutput)
```

#### Parameters

`xValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`desiredPointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)

`endPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)

`xOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`yOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [InterpolationErrorType](VM.Models.Post.InterpolationErrorType.md)

