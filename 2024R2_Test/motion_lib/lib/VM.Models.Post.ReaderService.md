# <a id="VM_Models_Post_ReaderService"></a> Class ReaderService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class ReaderService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReaderService](VM.Models.Post.ReaderService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ReaderService__ctor"></a> ReaderService\(\)

```csharp
public ReaderService()
```

## Methods

### <a id="VM_Models_Post_ReaderService_CreateDFEIGReader_System_Int32_"></a> CreateDFEIGReader\(int\)

```csharp
public static IDFEIGReader CreateDFEIGReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDFEIGReader](VM.Models.Post.IDFEIGReader.md)

### <a id="VM_Models_Post_ReaderService_CreateDFGReader_System_Int32_"></a> CreateDFGReader\(int\)

```csharp
public static IDFGReader CreateDFGReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDFGReader](VM.Models.Post.IDFGReader.md)

### <a id="VM_Models_Post_ReaderService_CreateDFMFReader_System_Int32_"></a> CreateDFMFReader\(int\)

```csharp
public static IDFMFReader CreateDFMFReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDFMFReader](VM.Models.Post.IDFMFReader.md)

### <a id="VM_Models_Post_ReaderService_CreateDFMReader_System_Int32_"></a> CreateDFMReader\(int\)

```csharp
public static IDFMReader CreateDFMReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDFMReader](VM.Models.Post.IDFMReader.md)

### <a id="VM_Models_Post_ReaderService_CreateDFRReader_System_String_"></a> CreateDFRReader\(string\)

```csharp
public static IDFRReader CreateDFRReader(string fileName)
```

#### Parameters

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IDFRReader](VM.Models.Post.IDFRReader.md)

### <a id="VM_Models_Post_ReaderService_CreateDriveTrainReader_System_Int32_"></a> CreateDriveTrainReader\(int\)

```csharp
public static IDriveTrainReader CreateDriveTrainReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDriveTrainReader](VM.Models.Post.IDriveTrainReader.md)

### <a id="VM_Models_Post_ReaderService_CreateFilterReader_System_Int32_"></a> CreateFilterReader\(int\)

```csharp
public static ICategoryFilter CreateFilterReader(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [ICategoryFilter](VM.Models.Post.ICategoryFilter.md)

### <a id="VM_Models_Post_ReaderService_CreatePLTReader_System_String_System_Int32_"></a> CreatePLTReader\(string, int\)

```csharp
public static IPLTReader CreatePLTReader(string path, int majorVersion)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IPLTReader](VM.Models.Post.IPLTReader.md)

### <a id="VM_Models_Post_ReaderService_CreateRESReader_System_String_System_Int32_"></a> CreateRESReader\(string, int\)

```csharp
public static IRESReader CreateRESReader(string path, int majorVersion)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IRESReader](VM.Models.Post.IRESReader.md)

### <a id="VM_Models_Post_ReaderService_CreateUVECReader_System_String_System_Int32_"></a> CreateUVECReader\(string, int\)

```csharp
public static IUVECReader CreateUVECReader(string path, int majorVersion)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IUVECReader](VM.Models.Post.IUVECReader.md)

