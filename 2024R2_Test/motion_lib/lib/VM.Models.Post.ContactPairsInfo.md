# <a id="VM_Models_Post_ContactPairsInfo"></a> Class ContactPairsInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.PostSlv.dll  

```csharp
public class ContactPairsInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ContactPairsInfo](VM.Models.Post.ContactPairsInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ContactPairsInfo__ctor"></a> ContactPairsInfo\(\)

```csharp
public ContactPairsInfo()
```

## Properties

### <a id="VM_Models_Post_ContactPairsInfo_ContactInfos"></a> ContactInfos

```csharp
public List<ContactInfo> ContactInfos { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ContactInfo](VM.Models.Post.ContactInfo.md)\>

### <a id="VM_Models_Post_ContactPairsInfo_NodePositions"></a> NodePositions

```csharp
public List<double[]> NodePositions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_ContactPairsInfo_SecondConnectedNodeIndice"></a> SecondConnectedNodeIndice

```csharp
public List<uint> SecondConnectedNodeIndice { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Models_Post_ContactPairsInfo_UsedBodyIndices"></a> UsedBodyIndices

```csharp
public Dictionary<int, int> UsedBodyIndices { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

