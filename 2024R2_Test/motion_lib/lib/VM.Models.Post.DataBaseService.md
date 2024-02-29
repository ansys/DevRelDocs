# <a id="VM_Models_Post_DataBaseService"></a> Class DataBaseService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class DataBaseService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataBaseService](VM.Models.Post.DataBaseService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_DataBaseService_CharacteristicQuery_System_String_"></a> CharacteristicQuery\(string\)

```csharp
public static List<Characteristics> CharacteristicQuery(string command)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Characteristics](VM.Models.Post.Characteristics.md)\>

### <a id="VM_Models_Post_DataBaseService_Close"></a> Close\(\)

```csharp
public static void Close()
```

### <a id="VM_Models_Post_DataBaseService_ComponentQuery_System_String_"></a> ComponentQuery\(string\)

```csharp
public static List<Component> ComponentQuery(string command)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Component](VM.Models.Post.Component.md)\>

### <a id="VM_Models_Post_DataBaseService_GetComponentFunction_System_String_System_String_System_String_"></a> GetComponentFunction\(string, string, string\)

```csharp
public static string GetComponentFunction(string type, string characteristic, string componentName)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataBaseService_GetComponentIndex_System_String_System_String_System_String_"></a> GetComponentIndex\(string, string, string\)

```csharp
public static int GetComponentIndex(string type, string characteristic, string componentName)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataBaseService_GetComponentUnitType_System_String_System_String_System_String_"></a> GetComponentUnitType\(string, string, string\)

```csharp
public static string GetComponentUnitType(string type, string characteristic, string componentName)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataBaseService_GetSelectedCharacteristic_System_String_System_String_"></a> GetSelectedCharacteristic\(string, string\)

```csharp
public static Characteristics GetSelectedCharacteristic(string type, string characteristic)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Characteristics](VM.Models.Post.Characteristics.md)

### <a id="VM_Models_Post_DataBaseService_Open"></a> Open\(\)

```csharp
public static void Open()
```

