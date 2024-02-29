# <a id="VM_Models_Post_IDataGeometry"></a> Interface IDataGeometry

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDataGeometry
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDataGeometry_DataPartCount"></a> DataPartCount

```csharp
uint DataPartCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="VM_Models_Post_IDataGeometry_AddDataPart_VM_Models_Post_IDataPart_"></a> AddDataPart\(IDataPart\)

```csharp
void AddDataPart(IDataPart datapart)
```

#### Parameters

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

### <a id="VM_Models_Post_IDataGeometry_GetDataPart_System_UInt32_"></a> GetDataPart\(uint\)

```csharp
IDataPart GetDataPart(uint iPart)
```

#### Parameters

`iPart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IDataPart](VM.Models.Post.IDataPart.md)

