# <a id="VM_Models_Post_NumericReader"></a> Class NumericReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class NumericReader : INumericReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NumericReader](VM.Models.Post.NumericReader.md)

#### Implements

[INumericReader](VM.Models.Post.INumericReader.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_NumericReader__ctor"></a> NumericReader\(\)

```csharp
public NumericReader()
```

## Properties

### <a id="VM_Models_Post_NumericReader_ColumnNames"></a> ColumnNames

```csharp
public IList<string> ColumnNames { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_NumericReader_ColumnSize"></a> ColumnSize

```csharp
public int ColumnSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_NumericReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_NumericReader_NumericType"></a> NumericType

```csharp
public NumericType NumericType { get; set; }
```

#### Property Value

 [NumericType](VM.Models.Post.NumericType.md)

### <a id="VM_Models_Post_NumericReader_RowSize"></a> RowSize

```csharp
public int RowSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_NumericReader_CloseReader"></a> CloseReader\(\)

```csharp
public void CloseReader()
```

### <a id="VM_Models_Post_NumericReader_FindColunmIndex_System_String_"></a> FindColunmIndex\(string\)

```csharp
public int FindColunmIndex(string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_NumericReader_GetColumnData_System_String_"></a> GetColumnData\(string\)

```csharp
public IEnumerable<double> GetColumnData(string columnName)
```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_NumericReader_InitVariable"></a> InitVariable\(\)

```csharp
public void InitVariable()
```

### <a id="VM_Models_Post_NumericReader_Initialize_System_String_"></a> Initialize\(string\)

```csharp
public bool Initialize(string filename)
```

#### Parameters

`filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_NumericReader_LoadColumnData"></a> LoadColumnData\(\)

```csharp
public bool LoadColumnData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_NumericReader_LoadData"></a> LoadData\(\)

```csharp
public bool LoadData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

