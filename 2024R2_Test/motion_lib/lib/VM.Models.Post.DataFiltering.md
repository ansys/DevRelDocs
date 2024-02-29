# <a id="VM_Models_Post_DataFiltering"></a> Class DataFiltering

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class DataFiltering
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataFiltering](VM.Models.Post.DataFiltering.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_DataFiltering_Data_Filtering_Curve_System_Double____System_Double____VM_Models_Post_FilteringType_System_Double_System_Double_System_Int32_System_Double____System_Double____"></a> Data\_Filtering\_Curve\(ref double\[\], ref double\[\], FilteringType, double, double, int, ref double\[\], ref double\[\]\)

```csharp
public static void Data_Filtering_Curve(ref double[] oriXVal, ref double[] oriYVal, FilteringType filterType, double frequency1, double frequency2, int nOrder, ref double[] filteredXVal, ref double[] filteredYVal)
```

#### Parameters

`oriXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`oriYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`filterType` [FilteringType](VM.Models.Post.FilteringType.md)

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

`nOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`filteredXVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`filteredYVal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

