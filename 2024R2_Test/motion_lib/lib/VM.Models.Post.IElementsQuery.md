# <a id="VM_Models_Post_IElementsQuery"></a> Interface IElementsQuery

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IElementsQuery
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IElementsQuery_GetAllElementCentroids"></a> GetAllElementCentroids\(\)

```csharp
double[] GetAllElementCentroids()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IElementsQuery_GetElementCentroid_System_UInt32_System_Double___"></a> GetElementCentroid\(uint, double\[\]\)

```csharp
void GetElementCentroid(uint ielement, double[] point)
```

#### Parameters

`ielement` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

