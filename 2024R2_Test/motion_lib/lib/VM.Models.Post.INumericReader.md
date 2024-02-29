# <a id="VM_Models_Post_INumericReader"></a> Interface INumericReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface INumericReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_INumericReader_FilePath"></a> FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_INumericReader_FindColunmIndex_System_String_"></a> FindColunmIndex\(string\)

```csharp
int FindColunmIndex(string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_INumericReader_GetColumnData_System_String_"></a> GetColumnData\(string\)

```csharp
IEnumerable<double> GetColumnData(string columnName)
```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_INumericReader_Initialize_System_String_"></a> Initialize\(string\)

```csharp
bool Initialize(string filename)
```

#### Parameters

`filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_INumericReader_LoadColumnData"></a> LoadColumnData\(\)

```csharp
bool LoadColumnData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

