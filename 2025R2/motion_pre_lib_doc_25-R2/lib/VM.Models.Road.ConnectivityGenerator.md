#  Class ConnectivityGenerator

Namespace: [VM.Models.Road](VM.Models.Road.md)  
Assembly: VM.Models.Road.dll  

```csharp
public static class ConnectivityGenerator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ConnectivityGenerator](VM.Models.Road.ConnectivityGenerator.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Road_ConnectivityGenerator_GenerateQuadConnectivity_System_UInt64_System_UInt64_System_Boolean_"></a> GenerateQuadConnectivity\(ulong, ulong, bool\)

```csharp
public static int[] GenerateQuadConnectivity(ulong nU, ulong nV, bool includeConnectivityCount = false)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`includeConnectivityCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Road_ConnectivityGenerator_GenerateTriangleConnectivity_System_UInt64_System_UInt64_System_Boolean_"></a> GenerateTriangleConnectivity\(ulong, ulong, bool\)

```csharp
public static int[] GenerateTriangleConnectivity(ulong nU, ulong nV, bool includeConnectivityCount = false)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`includeConnectivityCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Road_ConnectivityGenerator_GetQuadConnectivityCountForGivenTargetRoadLength_System_UInt64_System_UInt64_System_Double_System_Double_System_Boolean_"></a> GetQuadConnectivityCountForGivenTargetRoadLength\(ulong, ulong, double, double, bool\)

```csharp
public static ulong GetQuadConnectivityCountForGivenTargetRoadLength(ulong nU, ulong nV, double dRoadLength, double dTargetLength, bool bIncludeConnectivityCount = false)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`dRoadLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dTargetLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bIncludeConnectivityCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="VM_Models_Road_ConnectivityGenerator_GetTriangleConnectivityCountForGivenTargetRoadLength_System_UInt64_System_UInt64_System_Double_System_Double_System_Boolean_"></a> GetTriangleConnectivityCountForGivenTargetRoadLength\(ulong, ulong, double, double, bool\)

```csharp
public static ulong GetTriangleConnectivityCountForGivenTargetRoadLength(ulong nU, ulong nV, double dRoadLength, double dTargetLength, bool bIncludeConnectivityCount = false)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`dRoadLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dTargetLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bIncludeConnectivityCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

