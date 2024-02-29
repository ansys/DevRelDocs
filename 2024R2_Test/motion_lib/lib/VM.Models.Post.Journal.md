# <a id="VM_Models_Post_Journal"></a> Class Journal

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class Journal : IJournal
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Journal](VM.Models.Post.Journal.md)

#### Implements

[IJournal](VM.Models.Post.IJournal.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Journal__ctor"></a> Journal\(\)

```csharp
public Journal()
```

## Properties

### <a id="VM_Models_Post_Journal_CurrentEntry"></a> CurrentEntry

```csharp
public IJournalContentState CurrentEntry { get; }
```

#### Property Value

 [IJournalContentState](VM.Models.Post.IJournalContentState.md)

### <a id="VM_Models_Post_Journal_CurrentIndex"></a> CurrentIndex

```csharp
public int CurrentIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Journal_IsJournalRecording"></a> IsJournalRecording

```csharp
public bool IsJournalRecording { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Journal_JournalId"></a> JournalId

```csharp
public int JournalId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Journal_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Journal_TotalCount"></a> TotalCount

```csharp
public int TotalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Journal_Item_System_Int32_"></a> this\[int\]

```csharp
public IJournalContentState this[int index] { get; }
```

#### Property Value

 [IJournalContentState](VM.Models.Post.IJournalContentState.md)

## Methods

### <a id="VM_Models_Post_Journal_AddEntry_VM_Models_Post_IJournalContentState_"></a> AddEntry\(IJournalContentState\)

```csharp
public void AddEntry(IJournalContentState entry)
```

#### Parameters

`entry` [IJournalContentState](VM.Models.Post.IJournalContentState.md)

### <a id="VM_Models_Post_Journal_WriteScripts"></a> WriteScripts\(\)

```csharp
public string WriteScripts()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

