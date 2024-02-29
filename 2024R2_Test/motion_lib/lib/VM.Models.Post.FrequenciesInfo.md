# <a id="VM_Models_Post_FrequenciesInfo"></a> Class FrequenciesInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class FrequenciesInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_FrequenciesInfo__ctor_System_String_"></a> FrequenciesInfo\(string\)

```csharp
public FrequenciesInfo(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_FrequenciesInfo_ContentsBlockLines"></a> ContentsBlockLines

```csharp
public Dictionary<DFEIGBlock, long> ContentsBlockLines { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[DFEIGBlock](VM.Models.Post.DFEIGBlock.md), [long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_FrequenciesInfo_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_FrequenciesInfo_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_FrequenciesInfo_Indexes"></a> Indexes

```csharp
public IEnumerable<int> Indexes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_FrequenciesInfo_Scale"></a> Scale

```csharp
public double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_FrequenciesInfo_StateId"></a> StateId

```csharp
public uint? StateId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)?

## Methods

### <a id="VM_Models_Post_FrequenciesInfo_AddFilePointer_System_Int32_System_Int64_"></a> AddFilePointer\(int, long\)

```csharp
public void AddFilePointer(int index, long position)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`position` [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FrequenciesInfo_AddFrequency_System_Int32_System_String_System_Double_"></a> AddFrequency\(int, string, double\)

```csharp
public void AddFrequency(int index, string name, double frequency)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`frequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_FrequenciesInfo_ContainsFrequency_System_Int32_"></a> ContainsFrequency\(int\)

```csharp
public bool ContainsFrequency(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_FrequenciesInfo_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<(string Name, double Frequency)> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [Name](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.name), [double](https://learn.microsoft.com/dotnet/api/system.double) [Frequency](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.frequency)\)\>

### <a id="VM_Models_Post_FrequenciesInfo_GetFilePointer_System_Int32_"></a> GetFilePointer\(int\)

```csharp
public long GetFilePointer(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FrequenciesInfo_GetFrequency_System_Int32_"></a> GetFrequency\(int\)

```csharp
public (string Name, double Frequency) GetFrequency(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 \([string](https://learn.microsoft.com/dotnet/api/system.string) [Name](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.name), [double](https://learn.microsoft.com/dotnet/api/system.double) [Frequency](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.frequency)\)

