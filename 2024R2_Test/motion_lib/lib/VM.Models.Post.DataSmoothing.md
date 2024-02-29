# <a id="VM_Models_Post_DataSmoothing"></a> Class DataSmoothing

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class DataSmoothing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataSmoothing](VM.Models.Post.DataSmoothing.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_DataSmoothing_Data_Smoothing_Curve_System_Double____System_Double____VM_Models_Post_SmoothingType_System_Int32_System_Double_System_Int32_System_Double____System_Double____"></a> Data\_Smoothing\_Curve\(ref double\[\], ref double\[\], SmoothingType, int, double, int, ref double\[\], ref double\[\]\)

```csharp
public static void Data_Smoothing_Curve(ref double[] oriXVal, ref double[] oriYVal, SmoothingType smoothType, int nWPoint, double weight, int nPolyOrder, ref double[] newXVal, ref double[] newYVal)
```

#### Parameters

`oriXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`oriYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`smoothType` [SmoothingType](VM.Models.Post.SmoothingType.md)

`nWPoint` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`weight` [double](https://learn.microsoft.com/dotnet/api/system.double)

`nPolyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`newXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`newYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

