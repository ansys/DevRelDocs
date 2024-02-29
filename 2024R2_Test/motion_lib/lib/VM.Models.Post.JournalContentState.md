# <a id="VM_Models_Post_JournalContentState"></a> Class JournalContentState

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class JournalContentState : IJournalContentState
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JournalContentState](VM.Models.Post.JournalContentState.md)

#### Implements

[IJournalContentState](VM.Models.Post.IJournalContentState.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_JournalContentState__ctor"></a> JournalContentState\(\)

```csharp
public JournalContentState()
```

### <a id="VM_Models_Post_JournalContentState__ctor_System_String_"></a> JournalContentState\(string\)

```csharp
public JournalContentState(string content)
```

#### Parameters

`content` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_JournalContentState__ctor_System_String_System_Object_"></a> JournalContentState\(string, object\)

```csharp
public JournalContentState(string content, object value)
```

#### Parameters

`content` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_Models_Post_JournalContentState_Content"></a> Content

```csharp
public string Content { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_JournalContentState_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_JournalContentState_JournalEntryId"></a> JournalEntryId

```csharp
public int JournalEntryId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_JournalContentState_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_JournalContentState_AddContent_System_String_"></a> AddContent\(string\)

```csharp
public void AddContent(string scripts)
```

#### Parameters

`scripts` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_JournalContentState_CreateContent_System_String_System_Collections_Generic_IList_System_String__"></a> CreateContent\(string, IList<string\>\)

```csharp
public void CreateContent(string scripts, IList<string> paths)
```

#### Parameters

`scripts` [string](https://learn.microsoft.com/dotnet/api/system.string)

`paths` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_JournalContentState_GetContents"></a> GetContents\(\)

```csharp
public IList<string> GetContents()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

