# <a id="VM_Models_Post_ContourDataBaseService"></a> Class ContourDataBaseService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class ContourDataBaseService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ContourDataBaseService](VM.Models.Post.ContourDataBaseService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ContourDataBaseService__ctor"></a> ContourDataBaseService\(\)

```csharp
public ContourDataBaseService()
```

## Methods

### <a id="VM_Models_Post_ContourDataBaseService_CharacteristicQuery_System_String_"></a> CharacteristicQuery\(string\)

```csharp
public List<Characteristics> CharacteristicQuery(string command)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Characteristics](VM.Models.Post.Characteristics.md)\>

### <a id="VM_Models_Post_ContourDataBaseService_Close"></a> Close\(\)

```csharp
public void Close()
```

### <a id="VM_Models_Post_ContourDataBaseService_ComponentQuery_System_String_"></a> ComponentQuery\(string\)

```csharp
public List<Component> ComponentQuery(string command)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Component](VM.Models.Post.Component.md)\>

### <a id="VM_Models_Post_ContourDataBaseService_GetComponentIndex_System_String_System_String_System_String_System_String_"></a> GetComponentIndex\(string, string, string, string\)

```csharp
public int GetComponentIndex(string mappingtype, string type, string characteristic, string componentName)
```

#### Parameters

`mappingtype` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ContourDataBaseService_GetComponentUnitType_System_String_System_String_System_String_System_String_"></a> GetComponentUnitType\(string, string, string, string\)

```csharp
public string GetComponentUnitType(string mappingtype, string type, string characteristic, string componentName)
```

#### Parameters

`mappingtype` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ContourDataBaseService_GetMappingType_System_String_"></a> GetMappingType\(string\)

```csharp
public string GetMappingType(string command)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ContourDataBaseService_GetSelectedCharacteristic_System_String_System_String_System_String_"></a> GetSelectedCharacteristic\(string, string, string\)

```csharp
public Characteristics GetSelectedCharacteristic(string mappingType, string type, string characteristic)
```

#### Parameters

`mappingType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Characteristics](VM.Models.Post.Characteristics.md)

### <a id="VM_Models_Post_ContourDataBaseService_Open_VM_Models_AnalysisResultType_"></a> Open\(AnalysisResultType\)

```csharp
public void Open(AnalysisResultType analysisResultType)
```

#### Parameters

`analysisResultType` AnalysisResultType

